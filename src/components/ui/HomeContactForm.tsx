import { useState, useRef } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { SearchableSelect } from "./SearchableSelect";

const INTEREST_OPTIONS = [
  { value: "-None-", label: "-None-" },
  { value: "SAP AMS", label: "SAP AMS" },
  { value: "SAP S/4HANA implementation", label: "SAP S/4HANA implementation" },
  { value: "SAP integration", label: "SAP integration" },
  { value: "RISE with S/4HANA implementation", label: "RISE with S/4HANA implementation" },
  { value: "SAP Migration to Cloud", label: "SAP Migration to Cloud" },
  { value: "SAP Custom Development", label: "SAP Custom Development" },
  { value: "SAP Technical Upgrade", label: "SAP Technical Upgrade" },
  { value: "SAP Resource Augmentation", label: "SAP Resource Augmentation" },
  { value: "SAP - Others", label: "SAP - Others" },
  { value: "Zoho CRM", label: "Zoho CRM" },
  { value: "Zoho Books", label: "Zoho Books" },
  { value: "Zoho HRMS (People and Payroll)", label: "Zoho HRMS (People and Payroll)" },
  { value: "Zoho ERP", label: "Zoho ERP" },
  { value: "Zoho Mail", label: "Zoho Mail" },
  { value: "ManageEngine-ITSM", label: "ManageEngine-ITSM" },
  { value: "ManageEngine-Op Manager", label: "ManageEngine-Op Manager" },
  { value: "ManageEngine-Endpoint Control", label: "ManageEngine-Endpoint Control" },
  { value: "ManageEngine-MDM Plus", label: "ManageEngine-MDM Plus" },
  { value: "IT Infrastructure Services", label: "IT Infrastructure Services" },
  { value: "Custom Software Application Development", label: "Custom Software Application Development" },
  { value: "Custom AI Application Development", label: "Custom AI Application Development" },
  { value: "Network Security Implementation", label: "Network Security Implementation" },
  { value: "Security Audits", label: "Security Audits" },
  { value: "IT System Audits", label: "IT System Audits" },
  { value: "mjPRO", label: "mjPRO" },
  { value: "Others", label: "Others" },
];

interface HomeContactFormProps {
  defaultInterest?: string;
}

const INPUT_BASE =
  "w-full rounded-lg border bg-slate-50/60 dark:bg-slate-950/60 px-3 text-[13px] text-foreground placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors focus:bg-white dark:focus:bg-slate-950 focus:outline-none";
const INPUT_NORMAL =
  "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 focus:border-brand focus:ring-2 focus:ring-brand/15";
const INPUT_ERROR = "border-brand-red focus:border-brand-red focus:ring-2 focus:ring-brand-red/20";
const LABEL_CLASS = "block text-[11px] font-semibold text-slate-600 dark:text-slate-300 mb-1";

export function HomeContactForm({ defaultInterest }: HomeContactFormProps = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const formRef = useRef<HTMLFormElement>(null);

  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateForm = (formData: FormData) => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.get("First Name")) newErrors.firstName = "First Name is required";
    if (!formData.get("Last Name")) newErrors.lastName = "Last Name is required";

    const email = formData.get("Email") as string;
    if (!email) {
      newErrors.email = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.get("Mobile")) newErrors.mobile = "Mobile number is required";
    if (!formData.get("Description")) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (isSubmitting) {
      e.preventDefault();
      return;
    }

    const formData = new FormData(e.currentTarget);
    if (!validateForm(formData)) {
      e.preventDefault();
      toast.error("Please fix the errors in the form before submitting.");
      return;
    }

    // Do NOT prevent default here, let the browser submit the form natively to the hidden iframe
    setIsSubmitting(true);
  };

  const handleIframeLoad = () => {
    if (isSubmitting) {
      toast.success("Thank you! Your message has been sent successfully. Our team will reach out to you shortly.");
      setIsSubmitting(false);
      setErrors({});
      formRef.current?.reset();
    }
  };

  return (
    <>
      {/* Hidden iframe to receive the form submission response and redirect, bypassing CORS entirely */}
      <iframe name="zoho_hidden_iframe" id="zoho_hidden_iframe" style={{ display: "none" }} onLoad={handleIframeLoad}></iframe>

      <form
        ref={formRef}
        action="https://crm.zoho.in/crm/WebToLeadForm"
        method="POST"
        target="zoho_hidden_iframe"
        className="space-y-3"
        onSubmit={handleSubmit}
        acceptCharset="UTF-8"
      >
        {/* Zoho Hidden Fields - Do not remove this code */}
        <input type="text" style={{ display: "none" }} name="xnQsjsdp" value="b362cc0ce650eb05df7d10c103416122c617a9324da256c366ed331db852f82e" readOnly />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input type="text" style={{ display: "none" }} name="xmIwtLD" value="2c8ffd65ddb0d96a6fc11ceedcce413e48715de4f32fff9d71e7381281e821ad8baedfcd7a51775a23ea2d4121233d59" readOnly />
        <input type="text" style={{ display: "none" }} name="actionType" value="TGVhZHM=" readOnly />
        <input type="text" style={{ display: "none" }} name="returnURL" value="https://acceleronsolutions.com/" readOnly />
        <input type="hidden" name="Lead Source" value="Website" />
        <input type="hidden" name="Lead Status" value="Not Contacted" />

        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className={LABEL_CLASS}>
              First Name <span className="text-brand-red">*</span>
            </label>
            <input
              type="text"
              name="First Name"
              placeholder="First Name"
              onChange={() => clearError("firstName")}
              className={`h-9 ${INPUT_BASE} ${errors.firstName ? INPUT_ERROR : INPUT_NORMAL}`}
            />
            {errors.firstName && <p className="text-[11px] text-brand-red mt-0.5 font-medium">{errors.firstName}</p>}
          </div>
          <div>
            <label className={LABEL_CLASS}>
              Last Name <span className="text-brand-red">*</span>
            </label>
            <input
              type="text"
              name="Last Name"
              placeholder="Last Name"
              onChange={() => clearError("lastName")}
              className={`h-9 ${INPUT_BASE} ${errors.lastName ? INPUT_ERROR : INPUT_NORMAL}`}
            />
            {errors.lastName && <p className="text-[11px] text-brand-red mt-0.5 font-medium">{errors.lastName}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className={LABEL_CLASS}>
              Work Email <span className="text-brand-red">*</span>
            </label>
            <input
              type="email"
              name="Email"
              placeholder="name@company.com"
              onChange={() => clearError("email")}
              className={`h-9 ${INPUT_BASE} ${errors.email ? INPUT_ERROR : INPUT_NORMAL}`}
            />
            {errors.email && <p className="text-[11px] text-brand-red mt-0.5 font-medium">{errors.email}</p>}
          </div>
          <div>
            <label className={LABEL_CLASS}>
              Mobile Number <span className="text-brand-red">*</span>
            </label>
            <input
              type="tel"
              name="Mobile"
              placeholder="Phone Number"
              onChange={() => clearError("mobile")}
              className={`h-9 ${INPUT_BASE} ${errors.mobile ? INPUT_ERROR : INPUT_NORMAL}`}
            />
            {errors.mobile && <p className="text-[11px] text-brand-red mt-0.5 font-medium">{errors.mobile}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className={LABEL_CLASS}>Company</label>
            <input
              type="text"
              name="Company"
              placeholder="Company Name"
              className={`h-9 ${INPUT_BASE} ${INPUT_NORMAL}`}
            />
          </div>
          <div>
            <label className={LABEL_CLASS}>Area of Interest</label>
            <SearchableSelect
              name="LEADCF1"
              placeholder="Select interest..."
              defaultValue={defaultInterest}
              options={INTEREST_OPTIONS}
            />
          </div>
        </div>

        <div>
          <label className={LABEL_CLASS}>
            Project Details / Message <span className="text-brand-red">*</span>
          </label>
          <textarea
            name="Description"
            rows={3}
            placeholder="Tell us about your objectives and timeline..."
            onChange={() => clearError("message")}
            className={`min-h-[68px] py-1.5 resize-y ${INPUT_BASE} ${errors.message ? INPUT_ERROR : INPUT_NORMAL}`}
          />
          {errors.message && <p className="text-[11px] text-brand-red mt-0.5 font-medium">{errors.message}</p>}
        </div>

        <div className="pt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
          <span className="text-[11px] text-muted-foreground">Response within 24 business hours.</span>
          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex h-9 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 px-5 text-[13px] font-semibold text-white shadow-sm hover:shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer shrink-0"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </div>
      </form>
    </>
  );
}
