import { createFileRoute } from '@tanstack/react-router';
import { WebinarAdminView } from '../components/WebinarAdminView';

export const Route = createFileRoute('/admin/webinar-registrations')({
  head: () => ({
    meta: [
      { title: 'Webinar Registrations — Admin' },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
  }),
  component: AdminWebinarRegistrationsRoute,
});

function AdminWebinarRegistrationsRoute() {
  return <WebinarAdminView />;
}
