import { createFileRoute } from '@tanstack/react-router';
import { WebinarAdminView } from '../components/WebinarAdminView';

export const Route = createFileRoute('/webinar-admin')({
  head: () => ({
    meta: [
      { title: 'Webinar Registrations — Acceleron Solutions' },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
  }),
  component: WebinarAdminPage,
});

function WebinarAdminPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 py-8">
      <WebinarAdminView />
    </div>
  );
}
