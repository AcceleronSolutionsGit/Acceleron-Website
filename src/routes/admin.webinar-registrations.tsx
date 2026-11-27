import { createFileRoute, redirect } from '@tanstack/react-router';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getWebinarRegistrationsFn, deleteWebinarRegistrationFn } from '../actions/webinar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { format } from 'date-fns';
import { Button } from '../components/ui/button';
import { Download, Trash, Video } from 'lucide-react';

export const Route = createFileRoute('/admin/webinar-registrations')({
  beforeLoad: ({ context }) => {
    // @ts-ignore
    const role = context.session?.user?.role;
    if (role !== 'SUPER_ADMIN') {
      throw redirect({ to: '/admin' });
    }
  },
  component: AdminWebinarRegistrations,
});

function AdminWebinarRegistrations() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['admin-webinar-registrations'],
    queryFn: () => getWebinarRegistrationsFn(),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteWebinarRegistrationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-webinar-registrations'] });
    },
  });

  const registrations = data?.registrations || [];

  function handleDelete(id: string) {
    if (confirm('Are you sure you want to delete this registration?')) {
      deleteMutation.mutate({ data: { id } });
    }
  }

  function exportToCsv() {
    if (!registrations.length) return;
    const headers = ['ID', 'Name', 'Contact', 'Email', 'Company', 'Designation', 'Goal', 'Registered At', 'IP'];
    const rows = registrations.map((r: any) => [
      r.id,
      r.name,
      r.contact,
      r.email,
      r.company,
      r.designation || '',
      r.goal,
      r.created_at ? new Date(r.created_at).toISOString() : '',
      r.ip || '',
    ]);
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map((v: string) => `"${(v || '').toString().replace(/"/g, '""')}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.setAttribute('href', URL.createObjectURL(blob));
    link.setAttribute('download', `webinar_registrations_${new Date().toISOString().slice(0, 10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Video className="w-6 h-6 text-brand-red" />
            Webinar Registrations
          </h2>
          <p className="text-muted-foreground mt-1">
            One Connected Business: The Zoho Ecosystem Webinar — 10 December 2026
          </p>
        </div>
        <Button onClick={exportToCsv} variant="outline" size="sm" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-xl border bg-white p-4">
          <p className="text-sm text-muted-foreground">Total Registrations</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{registrations.length}</p>
        </div>
        {(['Evaluate Zoho for My Business', 'Automate Business Processes', 'Improve Business Efficiency'] as const).map((goal) => (
          <div key={goal} className="rounded-xl border bg-white p-4">
            <p className="text-xs text-muted-foreground leading-tight">{goal}</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">
              {registrations.filter((r: any) => r.goal === goal).length}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-md border bg-white dark:bg-gray-800">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Registered</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Designation</TableHead>
              <TableHead>Goal</TableHead>
              <TableHead className="w-[60px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8">Loading...</TableCell>
              </TableRow>
            ) : registrations.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  No registrations yet.
                </TableCell>
              </TableRow>
            ) : (
              registrations.map((reg: any) => (
                <TableRow key={reg.id}>
                  <TableCell className="text-sm whitespace-nowrap">
                    {reg.created_at ? format(new Date(reg.created_at), 'MMM d, yyyy') : '—'}
                  </TableCell>
                  <TableCell className="font-medium">{reg.name}</TableCell>
                  <TableCell>
                    <div className="text-sm">{reg.email}</div>
                    <div className="text-xs text-muted-foreground">{reg.contact}</div>
                  </TableCell>
                  <TableCell>{reg.company}</TableCell>
                  <TableCell>{reg.designation || '—'}</TableCell>
                  <TableCell className="text-sm max-w-[160px] truncate" title={reg.goal}>{reg.goal}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={() => handleDelete(reg.id)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
