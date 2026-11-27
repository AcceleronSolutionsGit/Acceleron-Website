import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getWebinarRegistrationsFn, deleteWebinarRegistrationFn } from '../actions/webinar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { format } from 'date-fns';
import {
  Download,
  FileSpreadsheet,
  Trash,
  Video,
  Search,
  RefreshCw,
  Lock,
  Unlock,
  Users,
  CheckCircle2,
  Calendar,
  Building,
  Mail,
  Phone,
  Filter
} from 'lucide-react';
import { toast } from 'sonner';
import * as XLSX from 'xlsx';

const PASSCODE_STORAGE_KEY = 'acceleron_webinar_admin_unlocked_v1';
const DEFAULT_PASSCODE = 'acceleron2026';

export function WebinarAdminView() {
  const queryClient = useQueryClient();
  const [unlocked, setUnlocked] = useState(false);
  const [passcodeInput, setPasscodeInput] = useState('');
  const [passcodeError, setPasscodeError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGoal, setSelectedGoal] = useState<string>('ALL');

  // Check URL param or sessionStorage for unlock
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const keyFromUrl = urlParams.get('key');
      const isStoredUnlocked = sessionStorage.getItem(PASSCODE_STORAGE_KEY) === 'true';

      if (keyFromUrl === DEFAULT_PASSCODE || isStoredUnlocked) {
        setUnlocked(true);
      }
    } catch {
      // ignore
    }
  }, []);

  function handleUnlock(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (passcodeInput.trim() === DEFAULT_PASSCODE || passcodeInput.trim().toLowerCase() === 'acceleron') {
      setUnlocked(true);
      setPasscodeError('');
      sessionStorage.setItem(PASSCODE_STORAGE_KEY, 'true');
      toast.success('Admin unlocked successfully');
    } else {
      setPasscodeError('Invalid passcode. Use the default passcode below.');
    }
  }

  function handleLock() {
    setUnlocked(false);
    sessionStorage.removeItem(PASSCODE_STORAGE_KEY);
    toast.info('Admin locked');
  }

  // Fetch registrations from TanStack ServerFn with /api/webinar fallback
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['webinar-registrations-sqlite'],
    queryFn: async () => {
      try {
        const res = await getWebinarRegistrationsFn();
        if (res && Array.isArray(res.registrations)) {
          return res;
        }
      } catch (fnErr) {
        console.warn('TanStack serverFn error, fetching /api/webinar:', fnErr);
      }

      // Fallback directly to REST endpoint
      const apiRes = await fetch('/api/webinar');
      if (apiRes.ok) {
        return await apiRes.json();
      }
      return { registrations: [], dbInfo: null };
    },
    enabled: unlocked,
    refetchInterval: unlocked ? 15000 : false, // auto refresh every 15s when open
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      try {
        const res = await deleteWebinarRegistrationFn({ data: { id } });
        if (res && res.success) return res;
      } catch {
        // fallback to /api/webinar
      }
      const apiRes = await fetch(`/api/webinar?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
      return await apiRes.json();
    },
    onSuccess: () => {
      toast.success('Registration deleted');
      queryClient.invalidateQueries({ queryKey: ['webinar-registrations-sqlite'] });
    },
    onError: () => {
      toast.error('Failed to delete registration');
    },
  });

  const registrations = data?.registrations || [];

  // Filter registrations by search and goal
  const filteredRegistrations = registrations.filter((r: any) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      r.name?.toLowerCase().includes(q) ||
      r.company?.toLowerCase().includes(q) ||
      r.email?.toLowerCase().includes(q) ||
      r.contact?.includes(q) ||
      r.designation?.toLowerCase().includes(q) ||
      r.goal?.toLowerCase().includes(q);

    const matchesGoal = selectedGoal === 'ALL' || r.goal === selectedGoal;

    return matchesSearch && matchesGoal;
  });

  // Export to native Excel (.xlsx) using SheetJS
  function exportToExcel() {
    if (!filteredRegistrations.length) {
      toast.error('No registrations to export');
      return;
    }

    const rows = filteredRegistrations.map((r: any, idx: number) => ({
      'Sl No': idx + 1,
      'Attendee Name': r.name || '',
      'Mobile Number': r.contact || '',
      'Email Address': r.email || '',
      'Company / Organization': r.company || '',
      'Designation': r.designation || '—',
      'Primary Goal': r.goal || '',
      'Registration Time (IST)': r.created_at
        ? new Date(r.created_at).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' })
        : '—',
      'IP Address': r.ip || '—',
      'System ID': r.id || '',
    }));

    const worksheet = XLSX.utils.json_to_sheet(rows);

    // Auto-fit column widths
    worksheet['!cols'] = [
      { wch: 8 },  // Sl No
      { wch: 25 }, // Name
      { wch: 16 }, // Contact
      { wch: 30 }, // Email
      { wch: 28 }, // Company
      { wch: 22 }, // Designation
      { wch: 32 }, // Goal
      { wch: 24 }, // Registration Time
      { wch: 16 }, // IP
      { wch: 38 }, // ID
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Registrations');

    const dateTag = new Date().toISOString().slice(0, 10);
    XLSX.writeFile(workbook, `Acceleron_Webinar_Registrations_${dateTag}.xlsx`);
    toast.success(`Exported ${filteredRegistrations.length} registrations to Excel (.xlsx)`);
  }

  // Export to CSV
  function exportToCsv() {
    if (!filteredRegistrations.length) {
      toast.error('No registrations to export');
      return;
    }
    const headers = ['Sl No', 'Name', 'Contact', 'Email', 'Company', 'Designation', 'Goal', 'Registered At', 'IP', 'ID'];
    const csvRows = filteredRegistrations.map((r: any, idx: number) => [
      idx + 1,
      r.name || '',
      r.contact || '',
      r.email || '',
      r.company || '',
      r.designation || '',
      r.goal || '',
      r.created_at ? new Date(r.created_at).toISOString() : '',
      r.ip || '',
      r.id || '',
    ]);

    const csvContent = [
      headers.join(','),
      ...csvRows.map(row => row.map((v: any) => `"${(v || '').toString().replace(/"/g, '""')}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `webinar_registrations_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success(`Exported ${filteredRegistrations.length} registrations to CSV`);
  }

  function handleDelete(id: string, name: string) {
    if (confirm(`Are you sure you want to delete the registration for "${name}"?`)) {
      deleteMutation.mutate(id);
    }
  }

  // If locked, show clean passcode gate
  if (!unlocked) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 max-w-md w-full text-center space-y-6">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red">
            <Lock className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Webinar Admin Access</h2>
            <p className="text-sm text-gray-500 mt-1">
              Manage &amp; Export Zoho Ecosystem Webinar Registrations
            </p>
          </div>

          <form onSubmit={handleUnlock} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Admin Passcode
              </label>
              <Input
                type="password"
                placeholder="Enter passcode"
                value={passcodeInput}
                onChange={(e) => {
                  setPasscodeInput(e.target.value);
                  setPasscodeError('');
                }}
                className="w-full text-base"
                autoFocus
              />
              {passcodeError && (
                <p className="text-xs text-red-600 mt-1.5">{passcodeError}</p>
              )}
            </div>

            <Button type="submit" className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-medium">
              <Unlock className="w-4 h-4 mr-2" />
              Unlock Admin
            </Button>
          </form>

          <div className="pt-4 border-t border-gray-100 text-xs text-gray-400 flex flex-col gap-2">
            <span>Passcode: <code className="bg-gray-100 px-2 py-0.5 rounded font-mono text-gray-700">acceleron2026</code></span>
            <button
              onClick={() => {
                setPasscodeInput(DEFAULT_PASSCODE);
                setUnlocked(true);
                sessionStorage.setItem(PASSCODE_STORAGE_KEY, 'true');
              }}
              className="text-brand-red hover:underline font-medium cursor-pointer"
            >
              Click here to Quick Unlock
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Goals list for stats
  const ALL_GOALS = [
    'Evaluate Zoho for My Business',
    'Automate Business Processes',
    'Improve Business Efficiency',
    'Explore Zoho Solutions',
    'Other'
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Top Header */}
      <div className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand-red/10 rounded-xl text-brand-red">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                Webinar Registrations
              </h1>
              <p className="text-sm text-gray-500 mt-0.5">
                One Connected Business: The Zoho Ecosystem Webinar — 10 December 2026
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <Button
            onClick={() => refetch()}
            variant="outline"
            size="sm"
            disabled={isFetching}
            className="flex items-center gap-1.5"
            title="Refresh registrations"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isFetching ? 'animate-spin' : ''}`} />
            Refresh
          </Button>

          <Button
            onClick={exportToCsv}
            variant="outline"
            size="sm"
            disabled={!filteredRegistrations.length}
            className="flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            CSV
          </Button>

          <Button
            onClick={exportToExcel}
            size="sm"
            disabled={!filteredRegistrations.length}
            className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 font-medium shadow-sm"
          >
            <FileSpreadsheet className="w-4 h-4" />
            Export Excel (.xlsx)
          </Button>

          <Button
            onClick={handleLock}
            variant="ghost"
            size="sm"
            className="text-gray-500 hover:text-gray-700"
            title="Lock session"
          >
            <Lock className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-xs">
          <div className="flex items-center justify-between text-gray-500 text-xs font-medium">
            <span>Total Registered</span>
            <Users className="w-4 h-4 text-brand-red" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mt-1">
            {registrations.length}
          </div>
          <div className="text-[11px] text-gray-400 mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
            Confirmed attendees
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-xs">
          <div className="flex items-center justify-between text-gray-500 text-xs font-medium">
            <span>Evaluate Zoho</span>
            <Building className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mt-1">
            {registrations.filter((r: any) => r.goal === 'Evaluate Zoho for My Business').length}
          </div>
          <div className="text-[11px] text-gray-400 mt-1">
            Primary interest
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-xs">
          <div className="flex items-center justify-between text-gray-500 text-xs font-medium">
            <span>Automate Processes</span>
            <CheckCircle2 className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mt-1">
            {registrations.filter((r: any) => r.goal === 'Automate Business Processes').length}
          </div>
          <div className="text-[11px] text-gray-400 mt-1">
            Process transformation
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-xs">
          <div className="flex items-center justify-between text-gray-500 text-xs font-medium">
            <span>Improve Efficiency</span>
            <Calendar className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mt-1">
            {registrations.filter((r: any) => r.goal === 'Improve Business Efficiency').length}
          </div>
          <div className="text-[11px] text-gray-400 mt-1">
            Operations & Scale
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <Input
            placeholder="Search by name, company, email, or contact..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-gray-50/50"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
          <span className="text-xs text-gray-500 flex items-center gap-1 font-medium whitespace-nowrap">
            <Filter className="w-3.5 h-3.5" />
            Filter Goal:
          </span>
          <select
            value={selectedGoal}
            onChange={(e) => setSelectedGoal(e.target.value)}
            className="text-xs border border-gray-300 rounded-lg px-2.5 py-1.5 bg-white text-gray-700 font-medium focus:outline-none focus:ring-1 focus:ring-brand-red"
          >
            <option value="ALL">All Objectives ({registrations.length})</option>
            {ALL_GOALS.map((g) => (
              <option key={g} value={g}>
                {g} ({registrations.filter((r: any) => r.goal === g).length})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Registrations Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-gray-50/75">
              <TableRow>
                <TableHead className="w-[50px] text-center font-bold">#</TableHead>
                <TableHead className="w-[140px] font-bold">Registered</TableHead>
                <TableHead className="font-bold">Attendee Details</TableHead>
                <TableHead className="font-bold">Company & Role</TableHead>
                <TableHead className="font-bold">Primary Objective</TableHead>
                <TableHead className="w-[70px] text-center font-bold">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-12 text-gray-500">
                    <RefreshCw className="w-6 h-6 animate-spin mx-auto text-brand-red mb-2" />
                    Loading registrations...
                  </TableCell>
                </TableRow>
              ) : filteredRegistrations.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-14 text-gray-400">
                    <Users className="w-10 h-10 mx-auto text-gray-300 mb-2" />
                    <p className="text-base font-semibold text-gray-700">No webinar registrations found</p>
                    <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
                      {searchQuery || selectedGoal !== 'ALL'
                        ? 'No records match your search criteria. Clear filters to see all.'
                        : 'Submissions from the registration form will automatically appear here.'}
                    </p>
                  </TableCell>
                </TableRow>
              ) : (
                filteredRegistrations.map((reg: any, idx: number) => {
                  const regDate = reg.created_at ? new Date(reg.created_at) : null;
                  return (
                    <TableRow key={reg.id} className="hover:bg-gray-50/60 transition-colors">
                      <TableCell className="text-center font-mono text-xs text-gray-400">
                        {idx + 1}
                      </TableCell>

                      <TableCell className="whitespace-nowrap">
                        <div className="text-xs font-semibold text-gray-900">
                          {regDate && !isNaN(regDate.getTime()) ? format(regDate, 'MMM d, yyyy') : '—'}
                        </div>
                        <div className="text-[11px] text-gray-500">
                          {regDate && !isNaN(regDate.getTime()) ? format(regDate, 'hh:mm a') : ''}
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="font-semibold text-gray-900 text-sm">{reg.name}</div>
                        <div className="flex flex-col gap-0.5 mt-0.5">
                          <a
                            href={`mailto:${reg.email}`}
                            className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Mail className="w-3 h-3 text-gray-400" />
                            {reg.email}
                          </a>
                          <a
                            href={`tel:${reg.contact}`}
                            className="text-xs text-gray-600 hover:text-gray-900 flex items-center gap-1"
                          >
                            <Phone className="w-3 h-3 text-gray-400" />
                            +91 {reg.contact}
                          </a>
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="font-medium text-gray-900 text-sm">{reg.company}</div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          {reg.designation ? (
                            <span className="inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-[11px] font-medium">
                              {reg.designation}
                            </span>
                          ) : (
                            <span className="text-gray-400 italic">No designation specified</span>
                          )}
                        </div>
                      </TableCell>

                      <TableCell>
                        <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                          {reg.goal}
                        </span>
                      </TableCell>

                      <TableCell className="text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                          title="Delete registration"
                          disabled={deleteMutation.isPending}
                          onClick={() => handleDelete(reg.id, reg.name)}
                        >
                          <Trash className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>

        {/* Footer count summary */}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span>Live registrations</span>
          </div>
          <div>
            Showing <strong>{filteredRegistrations.length}</strong> of <strong>{registrations.length}</strong> total registrations
          </div>
        </div>
      </div>
    </div>
  );
}
