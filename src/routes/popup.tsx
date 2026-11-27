import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/popup')({
  beforeLoad: () => {
    throw redirect({ to: '/webinar-registration' });
  },
});
