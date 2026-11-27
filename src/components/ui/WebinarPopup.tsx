import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const POPUP_KEY = 'acceleron_zoho_webinar_popup_seen_v1';

export function WebinarPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const seen = localStorage.getItem(POPUP_KEY);
        if (!seen) setVisible(true);
      } catch {
        setVisible(true);
      }
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        dismiss();
      }
    }
    if (visible) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [visible]);

  function dismiss() {
    setVisible(false);
    try {
      localStorage.setItem(POPUP_KEY, '1');
    } catch { /* ignore */ }
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[9998] bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Zoho Webinar Registration"
        className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 pointer-events-none"
      >
        <div className="pointer-events-auto flex flex-col items-center justify-center my-auto">
          {/* Card container with strict viewport-proportional sizing */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#0f1422] border border-white/10 group max-w-[min(90vw,78vh,78dvh,480px)] max-h-[min(90vw,78vh,78dvh,480px)] aspect-square flex items-center justify-center">
            {/* Close button inside top right */}
            <button
              onClick={dismiss}
              className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-30 bg-black/70 hover:bg-black/90 text-white rounded-full p-1.5 sm:p-2 backdrop-blur-md shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
              aria-label="Close popup"
              title="Close"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Clickable Image */}
            <Link
              to="/webinar-registration"
              onClick={dismiss}
              className="block w-full h-full cursor-pointer focus:outline-none"
            >
              <img
                src="/popup/Zoho Webinar creatives Acceleron solutions.png"
                alt="One Connected Business: The Zoho Ecosystem Webinar — Register Now"
                className="w-full h-full object-contain block transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </Link>
          </div>

          {/* Dismiss button below */}
          <button
            onClick={dismiss}
            className="mt-2.5 px-3 py-1 rounded-full text-xs font-medium text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
