import { useState, useRef } from "react";
import { Loader2 } from "lucide-react";
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

export function HomeContactForm({ defaultInterest }: HomeContactFormProps = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = (formData: FormData) => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.get("First Name")) newErrors.firstName = "First Name is required";
    if (!formData.get("Last Name")) newErrors.lastName = "Last Name is required";
    
    const email = formData.get("Email") as string;
    if (!email) {
      newErrors.email = "Email is required";
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
      console.log("Form successfully submitted to Zoho");
      console.log("Zoho Response: Opaque (CORS protected, handled via iframe)");
      toast.success("Thank you! Your message has been sent successfully. Our team will reach out to you shortly.");
      setIsSubmitting(false);
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
        className="space-y-6" 
        onSubmit={handleSubmit} 
        acceptCharset="UTF-8"
      >
      {/* Zoho Hidden Fields - Do not remove this code */}
      <input type='text' style={{display: 'none'}} name='xnQsjsdp' value='b362cc0ce650eb05df7d10c103416122c617a9324da256c366ed331db852f82e' readOnly />
      <input type='hidden' name='zc_gad' id='zc_gad' value='' />
      <input type='text' style={{display: 'none'}} name='xmIwtLD' value='2c8ffd65ddb0d96a6fc11ceedcce413e48715de4f32fff9d71e7381281e821ad8baedfcd7a51775a23ea2d4121233d59' readOnly />
      <input type='text' style={{display: 'none'}} name='actionType' value='TGVhZHM=' readOnly />
      <input type='text' style={{display: 'none'}} name='returnURL' value='https://acceleronsolutions.com/' readOnly />
      <input type='hidden' name='Lead Source' value='Website' />
      <input type='hidden' name='Lead Status' value='Not Contacted' />
      
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">First Name <span className="text-brand-red">*</span></label>
          <input type="text" name="First Name" placeholder="First Name" className={`w-full rounded-xl border ${errors.firstName ? 'border-brand-red focus:ring-brand-red' : 'border-border focus:ring-ring'} bg-background p-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2`} />
          {errors.firstName && <p className="text-xs text-brand-red mt-1 font-medium">{errors.firstName}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Last Name <span className="text-brand-red">*</span></label>
          <input type="text" name="Last Name" placeholder="Last Name" className={`w-full rounded-xl border ${errors.lastName ? 'border-brand-red focus:ring-brand-red' : 'border-border focus:ring-ring'} bg-background p-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2`} />
          {errors.lastName && <p className="text-xs text-brand-red mt-1 font-medium">{errors.lastName}</p>}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Work Email <span className="text-brand-red">*</span></label>
          <input type="email" name="Email" placeholder="name@company.com" className={`w-full rounded-xl border ${errors.email ? 'border-brand-red focus:ring-brand-red' : 'border-border focus:ring-ring'} bg-background p-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2`} />
          {errors.email && <p className="text-xs text-brand-red mt-1 font-medium">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Mobile Number <span className="text-brand-red">*</span></label>
          <input type="tel" name="Mobile" placeholder="Phone Number" className={`w-full rounded-xl border ${errors.mobile ? 'border-brand-red focus:ring-brand-red' : 'border-border focus:ring-ring'} bg-background p-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2`} />
          {errors.mobile && <p className="text-xs text-brand-red mt-1 font-medium">{errors.mobile}</p>}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Company</label>
          <input type="text" name="Company" placeholder="Company Name" className={`w-full rounded-xl border border-border focus:ring-ring bg-background p-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2`} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Area of Interest</label>
          <SearchableSelect
            name="LEADCF1"
            placeholder="Search interests..."
            defaultValue={defaultInterest}
            options={INTEREST_OPTIONS}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Project Details / Message</label>
        <textarea name="Description" rows={4} placeholder="Tell us about your objectives and timeline..." className={`w-full rounded-xl border ${errors.message ? 'border-brand-red focus:ring-brand-red' : 'border-border focus:ring-ring'} bg-background p-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2`} />
        {errors.message && <p className="text-xs text-brand-red mt-1 font-medium">{errors.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-lg w-full mt-4">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
    </>
  );
}
