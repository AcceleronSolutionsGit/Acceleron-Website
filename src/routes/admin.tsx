import { createFileRoute, Outlet, Link, redirect, useRouter } from '@tanstack/react-router';
import { getAdminSessionFn, logoutFn } from '../actions/auth';
import { LayoutDashboard, Users, FileText, Briefcase, FileSignature, Settings, LogOut } from 'lucide-react';

export const Route = createFileRoute('/admin')({
  beforeLoad: async ({ location }) => {
    const session = await getAdminSessionFn();
    if (!session.user) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      });
    }
    return { session };
  },
  component: AdminLayout,
});

function AdminLayout() {
  const router = useRouter();
  const { session } = Route.useRouteContext();

  const handleLogout = async () => {
    await logoutFn();
    router.navigate({ to: '/login' });
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
            Acceleron Admin
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-4 px-2">Overview</div>
          <Link to="/admin" className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 [&.active]:bg-blue-50 [&.active]:text-blue-700 dark:[&.active]:bg-blue-900/50 dark:[&.active]:text-blue-400">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>

          {session.user.role === 'SUPER_ADMIN' && (
            <>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-6 px-2">Leads & Marketing</div>
              <Link to="/admin/leads" className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 [&.active]:bg-blue-50 [&.active]:text-blue-700 dark:[&.active]:bg-blue-900/50 dark:[&.active]:text-blue-400">
                <Users size={20} />
                <span>Leads & Downloads</span>
              </Link>
            </>
          )}

          {(session.user.role === 'SUPER_ADMIN' || session.user.role === 'HR') && (
            <>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-6 px-2">HR Recruitment</div>
              <Link to="/admin/jobs" className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 [&.active]:bg-blue-50 [&.active]:text-blue-700 dark:[&.active]:bg-blue-900/50 dark:[&.active]:text-blue-400">
                <Briefcase size={20} />
                <span>Jobs</span>
              </Link>
              <Link to="/admin/cv-submissions" className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 [&.active]:bg-blue-50 [&.active]:text-blue-700 dark:[&.active]:bg-blue-900/50 dark:[&.active]:text-blue-400">
                <FileSignature size={20} />
                <span>CV Submissions</span>
              </Link>
            </>
          )}

          {(session.user.role === 'SUPER_ADMIN' || session.user.role === 'EDITOR') && (
            <>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-6 px-2">Content (CMS)</div>
              <Link to="/admin/content" className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 [&.active]:bg-blue-50 [&.active]:text-blue-700 dark:[&.active]:bg-blue-900/50 dark:[&.active]:text-blue-400">
                <FileText size={20} />
                <span>Articles</span>
              </Link>
            </>
          )}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 w-full text-left text-red-600 dark:text-red-400 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16 flex items-center px-6 shadow-sm">
          <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Dashboard
          </h1>
        </header>
        <div className="flex-1 overflow-auto p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
