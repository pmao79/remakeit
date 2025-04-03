
import { useState } from 'react';
import { toast } from 'sonner';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
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
    } catch (error) {
      console.error('Error storing lead in local storage:', error);
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
    
    // This is a mock implementation - in a real application, you would:
    // 1. Call a backend API endpoint that sends emails
    // 2. Store the lead in a database
    
    // For now, we'll simulate success after a delay
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('Email notification sent successfully');
        resolve();
      }, 1000);
    });
  };

  const handleSubmit = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Store lead in local storage for admin panel
      storeLeadInLocalStorage(formData);
      
      // Send notification email to admin
      await sendNotificationEmail(formData);
      
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
