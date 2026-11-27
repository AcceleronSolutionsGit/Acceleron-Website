import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { toast } from 'sonner';
import { createWebinarRegistrationFn } from '../../actions/webinar';
import { Calendar, Clock, Video, CheckCircle2 } from 'lucide-react';

export const Route = createFileRoute('/webinar-registration/')({
  component: WebinarRegistrationPage,
  head: () => ({
    meta: [
      { title: 'Webinar Registration — Acceleron Solutions' },
      { name: 'description', content: 'Register for the One Connected Business: The Zoho Ecosystem Webinar on 10 December 2026.' },
    ],
  }),
});

const GOAL_OPTIONS = [
  { value: 'Evaluate Zoho for My Business', label: 'Evaluate Zoho for My Business' },
  { value: 'Automate Business Processes', label: 'Automate Business Processes' },
  { value: 'Improve Business Efficiency', label: 'Improve Business Efficiency' },
  { value: 'Explore Zoho Solutions', label: 'Explore Zoho Solutions' },
  { value: 'Other', label: 'Other' },
];

function WebinarRegistrationPage() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    contact: '',
    email: '',
    company: '',
    designation: '',
    goal: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.contact.trim()) {
      e.contact = 'Mobile number is required.';
    } else if (form.contact.length !== 10) {
      e.contact = 'Mobile number must be exactly 10 digits.';
    }
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.company.trim()) e.company = 'Company name is required.';
    if (!form.goal) e.goal = 'Please select an option.';
    return e;
  }

  const handleChange = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setForm(prev => ({ ...prev, contact: val }));
    if (errors.contact) setErrors(prev => ({ ...prev, contact: '' }));
  };

  const handleContactKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter', 'Home', 'End'].includes(e.key) ||
      e.ctrlKey || e.metaKey
    ) {
      return;
    }
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
      return;
    }
    const target = e.currentTarget;
    const hasSelection = (target.selectionEnd ?? 0) - (target.selectionStart ?? 0) > 0;
    if (target.value.length >= 10 && !hasSelection) {
      e.preventDefault();
    }
  };

  const handleContactPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '');
    const current = form.contact;
    const input = e.currentTarget;
    const start = input.selectionStart ?? current.length;
    const end = input.selectionEnd ?? current.length;
    const combined = (current.slice(0, start) + pasted + current.slice(end)).replace(/\D/g, '').slice(0, 10);
    setForm(prev => ({ ...prev, contact: combined }));
    if (errors.contact) setErrors(prev => ({ ...prev, contact: '' }));
  };

  const handleGoalChange = (value: string) => {
    setForm(prev => ({ ...prev, goal: value }));
    if (errors.goal) setErrors(prev => ({ ...prev, goal: '' }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    try {
      let isSuccess = false;
      try {
        const result = await createWebinarRegistrationFn({ data: form });
        if (result && !('error' in result) && result.success) {
          isSuccess = true;
        } else if ('error' in result && result.error) {
          console.warn('TanStack serverFn error, trying fallback endpoint:', result.error);
        }
      } catch (fnErr) {
        console.warn('TanStack serverFn exception, falling back to /api/webinar:', fnErr);
      }

      // Fallback to /api/webinar REST endpoint if createServerFn was unavailable
      if (!isSuccess) {
        const res = await fetch('/api/webinar', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (res.ok) {
          const json = await res.json();
          if (json.success) isSuccess = true;
        }
      }

      if (isSuccess) {
        setSubmitted(true);
      } else {
        toast.error('Could not submit registration. Please try again.');
      }
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
              <CheckCircle2 className="w-9 h-9 text-green-600" />
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">You're Registered!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for registering for the <strong>One Connected Business: The Zoho Ecosystem Webinar</strong>.<br />
            We'll send the join link to <strong>{form.email}</strong> before the event.
          </p>
          <div className="bg-brand-red/10 rounded-xl p-4 text-left space-y-2 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Calendar className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span>10 December 2026</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Clock className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span>5:00 PM – 6:00 PM IST</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Video className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span>Live Online Webinar</span>
            </div>
          </div>
          <button
            onClick={() => navigate({ to: '/' })}
            className="btn btn-primary btn-md w-full"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-stretch">
      {/* Left Panel — Event Info */}
      <div className="hidden lg:flex lg:w-5/12 bg-[#1a1a2e] text-white flex-col justify-between pt-28 lg:pt-32 pb-12 px-10 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-brand-red/10 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-brand-red/5 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative z-10">
          <div className="mb-8">
            <img src="/Acceleron_Logo_White.png" alt="Acceleron Solutions" className="h-9 w-auto" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          </div>

          <div className="inline-block bg-brand-red text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Webinar Info
          </div>

          <h1 className="text-3xl font-bold leading-tight mb-4 !text-white">
            One Connected Business: The Zoho Ecosystem Webinar
          </h1>
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            Bringing Your Business Processes Together Through Smarter Automation.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-red/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-0.5">Date</p>
                <p className="font-semibold text-white">10 December 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-red/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-0.5">Time</p>
                <p className="font-semibold text-white">5:00 PM – 6:00 PM IST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-red/20 flex items-center justify-center">
                <Video className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-0.5">Format</p>
                <p className="font-semibold text-white">Live Online Webinar</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-8">
          <p className="text-gray-400 text-sm">
            Hosted by <span className="text-white font-semibold">Acceleron Solutions</span>
          </p>
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="flex-1 flex flex-col justify-center px-6 pt-24 sm:pt-28 lg:pt-32 pb-12 lg:px-16">
        {/* Mobile event info strip */}
        <div className="lg:hidden mb-8 p-5 bg-[#1a1a2e] rounded-xl text-white space-y-2 shadow-lg">
          <div className="inline-block bg-brand-red text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
            Webinar
          </div>
          <h1 className="text-lg font-bold !text-white">One Connected Business: The Zoho Ecosystem Webinar</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 10 Dec 2026</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5:00–6:00 PM IST</span>
            <span className="flex items-center gap-1"><Video className="w-4 h-4" /> Live Online</span>
          </div>
        </div>

        <div className="max-w-lg w-full mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Webinar Registration Form</h2>
          <p className="text-gray-500 text-sm mb-7">
            Please complete the form below to register. Required fields are marked with *.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-brand-red">*</span>
              </label>
              <input
                type="text"
                value={form.name}
                onChange={handleChange('name')}
                placeholder="Enter your full name"
                className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40 transition ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            {/* Contact + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile Number <span className="text-brand-red">*</span>
                  </label>
                  <span className="text-[11px] text-gray-400">
                    {form.contact.length}/10 digits
                  </span>
                </div>
                <input
                  type="tel"
                  value={form.contact}
                  onChange={handleContactChange}
                  onKeyDown={handleContactKeyDown}
                  onPaste={handleContactPaste}
                  placeholder="Enter 10-digit number"
                  maxLength={10}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40 transition ${errors.contact ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.contact && <p className="mt-1 text-xs text-red-500">{errors.contact}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Official Email ID <span className="text-brand-red">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  placeholder="you@company.com"
                  className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40 transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
            </div>

            {/* Company + Designation row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={handleChange('company')}
                  placeholder="Your company"
                  className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40 transition ${errors.company ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Designation
                </label>
                <input
                  type="text"
                  value={form.designation}
                  onChange={handleChange('designation')}
                  placeholder="e.g. Managing Director"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40 transition"
                />
              </div>
            </div>

            {/* Goal */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What are you looking to achieve? <span className="text-brand-red">*</span>
              </label>
              <div className="space-y-2">
                {GOAL_OPTIONS.map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-3 px-4 py-3 border rounded-lg cursor-pointer transition text-sm ${
                      form.goal === opt.value
                        ? 'border-brand-red bg-brand-red/5 text-brand-red font-medium'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="goal"
                      value={opt.value}
                      checked={form.goal === opt.value}
                      onChange={() => handleGoalChange(opt.value)}
                      className="sr-only"
                    />
                    <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                      form.goal === opt.value ? 'border-brand-red' : 'border-gray-300'
                    }`}>
                      {form.goal === opt.value && (
                        <span className="w-2 h-2 rounded-full bg-brand-red inline-block" />
                      )}
                    </span>
                    {opt.label}
                  </label>
                ))}
              </div>
              {errors.goal && <p className="mt-1 text-xs text-red-500">{errors.goal}</p>}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn btn-primary btn-md w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting…' : 'Register Now'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
