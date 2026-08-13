import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Users, FileText, Briefcase, FileSignature } from 'lucide-react';
import { getLeadsFn } from '../actions/leads';
import { getBrochureDownloadsFn } from '../actions/brochures';
import { getJobsFn, getCVSubmissionsFn } from '../actions/hr';
import { getArticlesFn, getServicesFn, getProductsFn } from '../actions/cms';

export const Route = createFileRoute('/admin/')({
  component: AdminDashboard,
});

function AdminDashboard() {
  const { session } = Route.useRouteContext() as any;
  const role = session?.user?.role;
  const isSuperAdmin = role === 'SUPER_ADMIN';
  const isHR = isSuperAdmin || role === 'HR';
  const isEditor = isSuperAdmin || role === 'EDITOR';

  const { data: leadsData } = useQuery({ queryKey: ['admin-leads'], queryFn: () => getLeadsFn(), enabled: isSuperAdmin });
  const { data: downloadsData } = useQuery({ queryKey: ['admin-brochure-downloads'], queryFn: () => getBrochureDownloadsFn(), enabled: isSuperAdmin });
  const { data: jobsData } = useQuery({ queryKey: ['admin-jobs'], queryFn: () => getJobsFn(), enabled: isHR });
  const { data: cvsData } = useQuery({ queryKey: ['admin-cvs'], queryFn: () => getCVSubmissionsFn(), enabled: isHR });
  
  const { data: articlesData } = useQuery({ queryKey: ['admin-articles'], queryFn: () => getArticlesFn({ data: 'BLOG' }), enabled: isEditor });
  const { data: servicesData } = useQuery({ queryKey: ['admin-services'], queryFn: () => getServicesFn(), enabled: isEditor });
  const { data: productsData } = useQuery({ queryKey: ['admin-products'], queryFn: () => getProductsFn(), enabled: isEditor });

  const totalLeads = leadsData?.leads?.length || 0;
  const totalDownloads = downloadsData?.downloads?.length || 0;
  const activeJobs = jobsData?.jobs?.filter((j: any) => j.is_active !== false)?.length || 0;
  const totalCvs = cvsData?.submissions?.length || 0;
  
  const totalArticles = articlesData?.articles?.length || 0;
  const totalServices = servicesData?.services?.length || 0;
  const totalProducts = productsData?.products?.length || 0;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
        <p className="text-muted-foreground">
          Welcome to the Acceleron Admin Dashboard. Here's what's happening today.
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {isSuperAdmin && (
          <>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalLeads}</div>
                <p className="text-xs text-muted-foreground">Across all sources</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Brochure Downloads</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalDownloads}</div>
                <p className="text-xs text-muted-foreground">Total downloads</p>
              </CardContent>
            </Card>
          </>
        )}
        
        {isHR && (
          <>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activeJobs}</div>
                <p className="text-xs text-muted-foreground">Open postings</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">CV Submissions</CardTitle>
                <FileSignature className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalCvs}</div>
                <p className="text-xs text-muted-foreground">General applications</p>
              </CardContent>
            </Card>
          </>
        )}

        {isEditor && (
          <>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalArticles}</div>
                <p className="text-xs text-muted-foreground">Published blogs</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Services</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalServices}</div>
                <p className="text-xs text-muted-foreground">Active services</p>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
