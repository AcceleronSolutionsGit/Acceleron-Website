import { createFileRoute, redirect } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { getCVSubmissionsFn } from '../actions/hr';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { format } from 'date-fns';
import { FileSignature } from 'lucide-react';

export const Route = createFileRoute('/admin/cv-submissions')({
  beforeLoad: ({ context }) => {
    // @ts-ignore
    const role = context.session?.user?.role;
    if (role !== 'SUPER_ADMIN' && role !== 'HR') {
      throw redirect({ to: '/admin' });
    }
  },
  component: AdminCVSubmissions,
});

function AdminCVSubmissions() {
  const { data, isLoading } = useQuery({
    queryKey: ['admin-cv-submissions'],
    queryFn: () => getCVSubmissionsFn(),
  });

  if (isLoading) return <div>Loading...</div>;

  const submissions = data?.submissions || [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">CV Submissions</h2>
          <p className="text-muted-foreground">
            View general CV submissions for future reference across various domains and roles.
          </p>
        </div>
      </div>

      <div className="rounded-md border bg-white dark:bg-gray-800">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Domain</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Resume</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No CV submissions found.
                </TableCell>
              </TableRow>
            ) : (
              submissions.map((sub: any) => (
                <TableRow key={sub.id}>
                  <TableCell>{format(new Date(sub.created_at), 'MMM d, yyyy')}</TableCell>
                  <TableCell className="font-medium">{sub.first_name} {sub.last_name}</TableCell>
                  <TableCell>
                    <div className="text-sm">{sub.email}</div>
                    <div className="text-xs text-muted-foreground">{sub.phone}</div>
                  </TableCell>
                  <TableCell>{sub.domain_name}</TableCell>
                  <TableCell>{sub.role_name}</TableCell>
                  <TableCell>
                    <a href={sub.resume_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:underline">
                      <FileSignature size={16} />
                      View CV
                    </a>
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
