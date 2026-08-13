import { createFileRoute, redirect } from '@tanstack/react-router';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { getJobsFn, createJobFn, updateJobFn, deleteJobFn, toggleJobStatusFn } from '../actions/hr';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { Plus, MoreHorizontal, Edit, Trash, EyeOff, Eye } from 'lucide-react';

export const Route = createFileRoute('/admin/jobs')({
  beforeLoad: ({ context }) => {
    // @ts-ignore
    const role = context.session?.user?.role;
    if (role !== 'SUPER_ADMIN' && role !== 'HR') {
      throw redirect({ to: '/admin' });
    }
  },
  component: AdminJobs,
});

function AdminJobs() {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingJob, setEditingJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    sub_department: '',
    location: '',
    years_of_experience: '',
    description: '',
    apply_url: '',
  });

  const handleEditClick = (job: any) => {
    setFormData({
      title: job.title,
      department: job.department,
      sub_department: job.sub_department || '',
      location: job.location,
      years_of_experience: job.years_of_experience || '',
      description: job.description,
      apply_url: job.apply_url,
    });
    setEditingJob(job.id);
    setIsOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this job posting?')) return;
    try {
      const res = await deleteJobFn({ data: { id } });
      if (res.error) toast.error(res.error);
      else {
        toast.success('Job deleted successfully');
        queryClient.invalidateQueries({ queryKey: ['admin-jobs'] });
      }
    } catch (err) {
      toast.error('An unexpected error occurred');
    }
  };

  const handleToggleStatus = async (id: string, isActive: boolean) => {
    try {
      const res = await toggleJobStatusFn({ data: { id, isActive } });
      if (res.error) toast.error(res.error);
      else {
        toast.success(isActive ? 'Job opened' : 'Job closed');
        queryClient.invalidateQueries({ queryKey: ['admin-jobs'] });
      }
    } catch (err) {
      toast.error('An unexpected error occurred');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (editingJob) {
        const res = await updateJobFn({ data: { id: editingJob, ...formData } });
        if (res.error) toast.error(res.error);
        else toast.success('Job updated successfully');
      } else {
        const res = await createJobFn({ data: formData });
        if (res.error) toast.error(res.error);
        else toast.success('Job posted successfully');
      }
      setIsOpen(false);
      setEditingJob(null);
      setFormData({ title: '', department: '', sub_department: '', location: '', years_of_experience: '', description: '', apply_url: '' });
      queryClient.invalidateQueries({ queryKey: ['admin-jobs'] });
    } catch (err) {
      toast.error('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ title: '', department: '', sub_department: '', location: '', years_of_experience: '', description: '', apply_url: '' });
    setEditingJob(null);
  };

  const { data, isLoading } = useQuery({
    queryKey: ['admin-jobs'],
    queryFn: () => getJobsFn(),
  });

  if (isLoading) return <div>Loading...</div>;

  const jobs = data?.jobs || [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Job Postings</h2>
          <p className="text-muted-foreground">
            Manage jobs and Darwinbox application links.
          </p>
        </div>
        <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (!open) resetForm(); }}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="mr-2 h-4 w-4" />
              Post Job
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px]">
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle>{editingJob ? 'Edit Job' : 'Post a New Job'}</DialogTitle>
                <DialogDescription>
                  {editingJob ? 'Update the details below for this job posting.' : 'Fill in the details below to post a new job opening to the careers page.'}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">Title</Label>
                  <Input id="title" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="col-span-3" placeholder="e.g. Senior Frontend Engineer" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="department" className="text-right">Department</Label>
                  <Input id="department" required value={formData.department} onChange={(e) => setFormData({ ...formData, department: e.target.value })} className="col-span-3" placeholder="e.g. Engineering" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="sub_department" className="text-right">Sub Dept (Optional)</Label>
                  <Input id="sub_department" value={formData.sub_department} onChange={(e) => setFormData({ ...formData, sub_department: e.target.value })} className="col-span-3" placeholder="e.g. Frontend" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="location" className="text-right">Location</Label>
                  <Input id="location" required value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="col-span-3" placeholder="e.g. Remote / New York" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="years_of_experience" className="text-right">Experience</Label>
                  <Input id="years_of_experience" value={formData.years_of_experience} onChange={(e) => setFormData({ ...formData, years_of_experience: e.target.value })} className="col-span-3" placeholder="e.g. 3-5 Years" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="apply_url" className="text-right">Darwinbox URL</Label>
                  <Input id="apply_url" type="url" required value={formData.apply_url} onChange={(e) => setFormData({ ...formData, apply_url: e.target.value })} className="col-span-3" placeholder="https://acceleron.darwinbox.in/..." />
                </div>
                <div className="grid grid-cols-4 items-start gap-4">
                  <Label htmlFor="description" className="text-right mt-2">Description</Label>
                  <Textarea id="description" required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="col-span-3 min-h-[100px]" placeholder="Brief description of the role..." />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => { setIsOpen(false); resetForm(); }}>Cancel</Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (editingJob ? 'Saving...' : 'Posting...') : (editingJob ? 'Save Changes' : 'Post Job')}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border bg-white dark:bg-gray-800">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date Created</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Sub Dept</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Darwinbox Link</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                  No job postings found.
                </TableCell>
              </TableRow>
            ) : (
              jobs.map((job: any) => (
                <TableRow key={job.id}>
                  <TableCell>{format(new Date(job.created_at), 'MMM d, yyyy')}</TableCell>
                  <TableCell className="font-medium">{job.title}</TableCell>
                  <TableCell>{job.department}</TableCell>
                  <TableCell className="text-muted-foreground">{job.sub_department || '-'}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>
                    {job.years_of_experience ? (
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800">
                        {job.years_of_experience}
                      </Badge>
                    ) : (
                      '-'
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant={job.is_active ? 'default' : 'secondary'}>
                      {job.is_active ? 'Active' : 'Closed'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <a href={job.apply_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      View Link
                    </a>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEditClick(job)}>
                          <Edit className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleToggleStatus(job.id, !job.is_active)}>
                          {job.is_active ? <EyeOff className="mr-2 h-4 w-4" /> : <Eye className="mr-2 h-4 w-4" />}
                          {job.is_active ? 'Close Job' : 'Open Job'}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(job.id)} className="text-red-600 focus:text-red-600">
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
    </div>
  );
}
