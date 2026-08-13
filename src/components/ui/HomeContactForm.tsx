import { useState, useRef } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export function HomeContactForm() {
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
          <select name="LEADCF1" className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
          <option value="-None-">-None-</option>
          <option value="SAP AMS">SAP AMS</option>
          <option value="SAP S/4HANA implementation">SAP S/4HANA implementation</option>
          <option value="SAP integration">SAP integration</option>
          <option value="RISE with S/4HANA implementation">RISE with S/4HANA implementation</option>
          <option value="SAP Migration to Cloud">SAP Migration to Cloud</option>
          <option value="SAP Custom Development">SAP Custom Development</option>
          <option value="SAP Technical Upgrade">SAP Technical Upgrade</option>
          <option value="SAP Resource Augmentation">SAP Resource Augmentation</option>
          <option value="SAP - Others">SAP - Others</option>
          <option value="Zoho CRM">Zoho CRM</option>
          <option value="Zoho Books">Zoho Books</option>
          <option value="Zoho HRMS (People and Payroll)">Zoho HRMS (People and Payroll)</option>
          <option value="Zoho ERP">Zoho ERP</option>
          <option value="Zoho Mail">Zoho Mail</option>
          <option value="ManageEngine-ITSM">ManageEngine-ITSM</option>
          <option value="ManageEngine-Op Manager">ManageEngine-Op Manager</option>
          <option value="ManageEngine-Endpoint Control">ManageEngine-Endpoint Control</option>
          <option value="ManageEngine-MDM Plus">ManageEngine-MDM Plus</option>
          <option value="IT Infrastructure Services">IT Infrastructure Services</option>
          <option value="Custom Software Application Development">Custom Software Application Development</option>
          <option value="Custom AI Application Development">Custom AI Application Development</option>
          <option value="Network Security Implementation">Network Security Implementation</option>
          <option value="Security Audits">Security Audits</option>
          <option value="IT System Audits">IT System Audits</option>
          <option value="mjPRO">mjPRO</option>
          <option value="Others">Others</option>
        </select>
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
