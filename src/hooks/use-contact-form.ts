
import { useState } from 'react';
import { toast } from 'sonner';

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

  const sendNotificationEmail = async (formData: ContactFormData) => {
    // In a real application, this would send an email to admin users
    console.log('Sending notification email with form data:', formData);
    
    // Email addresses to notify
    const adminEmails = ['info@remakeit.se', 'marcus@remakeit.se'];
    
    // For demonstration purposes, we'll log what would be sent
    console.log(`Would send email notifications to: ${adminEmails.join(', ')}`);
    console.log(`Email subject: New Contact Form Submission from ${formData.name}`);
    console.log(`Email body would include: Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone || 'Not provided'}, Message: ${formData.message}`);
    
    // This is a mock implementation
    // In a production environment, you would need to set up a server endpoint 
    // or use a service like EmailJS, SendGrid, etc.

    try {
      // For now, we'll use EmailJS as a client-side email solution
      // This is a temporary solution to demonstrate functionality
      // For a production environment, you'd want a server-side solution
      
      // Mock success for now
      return new Promise<boolean>((resolve) => {
        setTimeout(() => {
          console.log('Email notification sent successfully');
          resolve(true);
        }, 1000);
      });
    } catch (error) {
      console.error('Error sending notification email:', error);
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
      
      // Send notification email to admin
      const emailSent = await sendNotificationEmail(formData);
      
      if (!emailSent) {
        console.warn('Email notification could not be sent, but lead was stored');
      }
      
      // Show success message
      toast.success('Your message has been sent! We will contact you soon.');
      
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
