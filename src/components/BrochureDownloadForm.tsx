import { useState } from 'react';
import { createLeadFn } from '../actions/leads';
import { logBrochureDownloadFn } from '../actions/brochures';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner';

interface BrochureDownloadFormProps {
  brochureId: string;
  fileUrl: string;
  brochureTitle: string;
}

export function BrochureDownloadForm({ brochureId, fileUrl, brochureTitle }: BrochureDownloadFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 1. Create Lead
      const leadResult = await createLeadFn({
        data: {
          ...formData,
          source: `Brochure Download: ${brochureTitle}`
        }
      });

      if (leadResult.error || !leadResult.leadId) {
        throw new Error(leadResult.error || "Failed to create lead");
      }

      // 2. Log Download
      await logBrochureDownloadFn({
        data: {
          leadId: leadResult.leadId,
          brochureId: brochureId
        }
      });

      // 3. Initiate Download
      window.open(fileUrl, '_blank');
      
      toast.success("Download started!");
      setIsOpen(false);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <Button onClick={() => setIsOpen(true)} className="w-full sm:w-auto">
        Download Brochure
      </Button>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-2">Download {brochureTitle}</h3>
      <p className="text-sm text-gray-500 mb-4">Please fill in your details to get the brochure.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input 
            id="name" 
            required 
            value={formData.name} 
            onChange={e => setFormData({...formData, name: e.target.value})} 
          />
        </div>
        
        <div>
          <Label htmlFor="email">Work Email *</Label>
          <Input 
            id="email" 
            type="email" 
            required 
            value={formData.email} 
            onChange={e => setFormData({...formData, email: e.target.value})} 
          />
        </div>
        
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            id="phone" 
            type="tel" 
            value={formData.phone} 
            onChange={e => setFormData({...formData, phone: e.target.value})} 
          />
        </div>
        
        <div>
          <Label htmlFor="company">Company</Label>
          <Input 
            id="company" 
            value={formData.company} 
            onChange={e => setFormData({...formData, company: e.target.value})} 
          />
        </div>

        <div className="flex justify-end space-x-3 pt-2">
          <Button type="button" variant="outline" onClick={() => setIsOpen(false)} disabled={isLoading}>
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Processing...' : 'Get Brochure'}
          </Button>
        </div>
      </form>
    </div>
  );
}
