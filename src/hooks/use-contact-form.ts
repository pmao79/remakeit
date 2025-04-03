
import { useState } from 'react';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  website?: string;
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Store the lead in local storage to be accessed by admin panel
  const storeLeadInLocalStorage = (formData: ContactFormData) => {
    try {
      // Get existing leads from local storage or initialize empty array
      const existingLeadsString = localStorage.getItem('admin-leads');
      const existingLeads = existingLeadsString ? JSON.parse(existingLeadsString) : [];
      
      // Create new lead with additional data
      const newLead = {
        id: Date.now(), // Use timestamp as unique ID
        ...formData,
        date: new Date().toISOString().slice(0, 10), // Format: YYYY-MM-DD
        status: 'New'
      };
      
      // Add new lead to array
      const updatedLeads = [...existingLeads, newLead];
      
      // Store updated leads array back in local storage
      localStorage.setItem('admin-leads', JSON.stringify(updatedLeads));
      
      console.log('Lead stored in local storage:', newLead);
      return true;
    } catch (error) {
      console.error('Error storing lead in local storage:', error);
      return false;
    }
  };

  const sendNotificationEmails = async (formData: ContactFormData) => {
    console.log('Sending notification emails with form data:', formData);
    
    try {
      // EmailJS configuration
      emailjs.init("kMds9Y1Lf0Eln0I8J"); // Public key
      
      // 1. Send auto-response to customer (using the template you provided)
      const customerEmailParams = {
        to_name: formData.name,
        to_email: formData.email,
        from_name: "RemakeiT",
        message: "Thank you for contacting RemakeiT! We've received your message and will get back to you as soon as possible."
      };
      
      const customerResponse = await emailjs.send(
        "service_5zvrov8", // Service ID
        "template_gdz9quv", // Template ID for customer auto-responses
        customerEmailParams
      );
      
      console.log('Customer auto-response email sent successfully:', customerResponse);
      
      // 2. Send notification to admin - store form data in localStorage instead
      // Since we don't have a specific template for admin notifications,
      // we'll rely on the leads being stored in localStorage for admin access
      
      return true;
    } catch (error) {
      console.error('Error sending notification emails:', error);
      return false;
    }
  };

  const handleSubmit = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    console.log("Form submission started with data:", formData);
    
    try {
      // Store lead in local storage for admin panel
      const storedSuccessfully = storeLeadInLocalStorage(formData);
      
      if (!storedSuccessfully) {
        throw new Error('Failed to store lead data');
      }
      
      // Send auto-response email to customer
      const emailsSent = await sendNotificationEmails(formData);
      
      if (!emailsSent) {
        console.warn('Email notifications could not be sent, but lead was stored');
        toast.warning('Your message was received but we had trouble sending notifications. We will still contact you soon.');
      } else {
        // Show success message
        toast.success('Your message has been sent! We will contact you soon.');
      }
      
      // Return success
      return { success: true, message: 'Form submitted successfully' };
    } catch (error) {
      console.error('Error submitting contact form:', error);
      
      // Show error message
      toast.error('There was an error sending your message. Please try again.');
      
      // Return error
      return { 
        success: false, 
        message: 'There was an error submitting the form' 
      };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleSubmit, isSubmitting };
};
