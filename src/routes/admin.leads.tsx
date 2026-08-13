import { createFileRoute, redirect } from '@tanstack/react-router';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getLeadsFn, deleteLeadFn, updateLeadStatusFn } from '../actions/leads';
import { getBrochureDownloadsFn } from '../actions/brochures';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { format } from 'date-fns';
import { Button } from '../components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu';
import { MoreHorizontal, Trash, CheckCircle, Download } from 'lucide-react';

export const Route = createFileRoute('/admin/leads')({
  beforeLoad: ({ context }) => {
    // @ts-ignore
    const role = context.session?.user?.role;
    if (role !== 'SUPER_ADMIN') {
      throw redirect({ to: '/admin' });
    }
  },
  component: AdminLeads,
});

function AdminLeads() {
  const queryClient = useQueryClient();
  const { data: leadsData, isLoading: isLoadingLeads } = useQuery({
    queryKey: ['admin-leads'],
    queryFn: () => getLeadsFn(),
  });

  const { data: downloadsData, isLoading: isLoadingDownloads } = useQuery({
    queryKey: ['admin-brochure-downloads'],
    queryFn: () => getBrochureDownloadsFn(),
  });

  const deleteLeadMutation = useMutation({
    mutationFn: deleteLeadFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-leads'] });
      queryClient.invalidateQueries({ queryKey: ['admin-brochure-downloads'] });
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: updateLeadStatusFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-leads'] });
    },
  });

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this lead?")) {
      deleteLeadMutation.mutate({ data: { id } });
    }
  };

  const handleUpdateStatus = (id: string, status: string) => {
    updateStatusMutation.mutate({ data: { id, status } });
  };

  const leads = leadsData?.leads || [];
  const downloads = downloadsData?.downloads || [];

  const exportToCsv = (data: any[], filename: string) => {
    if (!data || !data.length) return;
    const keys = Object.keys(data[0]);
    const csvContent = [
      keys.join(','),
      ...data.map(row => keys.map(k => `"${(row[k] || '').toString().replace(/"/g, '""')}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `${filename}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Leads & Downloads</h2>
        <p className="text-muted-foreground">
          Manage your leads and view brochure download metrics.
        </p>
      </div>

      <Tabs defaultValue="leads" className="space-y-4">
        <TabsList>
          <TabsTrigger value="leads">All Leads</TabsTrigger>
          <TabsTrigger value="downloads">Brochure Downloads</TabsTrigger>
        </TabsList>

        <TabsContent value="leads" className="space-y-4">
          <div className="flex justify-end mb-4">
            <Button onClick={() => exportToCsv(leads, 'leads_export')} variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" /> Export CSV
            </Button>
          </div>
          <div className="rounded-md border bg-white dark:bg-gray-800">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoadingLeads ? (
                  <TableRow><TableCell colSpan={7} className="text-center py-8">Loading...</TableCell></TableRow>
                ) : leads.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      No leads found.
                    </TableCell>
                  </TableRow>
                ) : (
                  leads.map((lead: any) => (
                    <TableRow key={lead.id}>
                      <TableCell>{format(new Date(lead.created_at), 'MMM d, yyyy')}</TableCell>
                      <TableCell className="font-medium">{lead.name}</TableCell>
                      <TableCell>{lead.email}</TableCell>
                      <TableCell>{lead.company || '-'}</TableCell>
                      <TableCell>{lead.source || '-'}</TableCell>
                      <TableCell>
                        <Badge variant={lead.status === 'NEW' ? 'default' : lead.status === 'CONTACTED' ? 'secondary' : 'outline'}>
                          {lead.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {lead.status === 'NEW' && (
                              <DropdownMenuItem onClick={() => handleUpdateStatus(lead.id, 'CONTACTED')}>
                                <CheckCircle className="mr-2 h-4 w-4" /> Mark Contacted
                              </DropdownMenuItem>
                            )}
                            {lead.status !== 'CLOSED' && (
                              <DropdownMenuItem onClick={() => handleUpdateStatus(lead.id, 'CLOSED')}>
                                <CheckCircle className="mr-2 h-4 w-4" /> Mark Closed
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem onClick={() => handleDelete(lead.id)} className="text-red-600">
                              <Trash className="mr-2 h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="downloads" className="space-y-4">
          <div className="flex justify-end mb-4">
            <Button onClick={() => exportToCsv(downloads, 'brochure_downloads_export')} variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" /> Export CSV
            </Button>
          </div>
          <div className="rounded-md border bg-white dark:bg-gray-800">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Lead Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Brochure Title</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoadingDownloads ? (
                  <TableRow><TableCell colSpan={4} className="text-center py-8">Loading...</TableCell></TableRow>
                ) : downloads.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                      No downloads yet.
                    </TableCell>
                  </TableRow>
                ) : (
                  downloads.map((download: any) => (
                    <TableRow key={download.id}>
                      <TableCell>{format(new Date(download.downloaded_at), 'MMM d, yyyy HH:mm')}</TableCell>
                      <TableCell className="font-medium">{download.lead_name}</TableCell>
                      <TableCell>{download.lead_email}</TableCell>
                      <TableCell>{download.brochure_title}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

      </Tabs>
    </div>
  );
}
