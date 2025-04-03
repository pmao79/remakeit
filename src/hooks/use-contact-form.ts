
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

  const sendNotificationEmail = async (formData: ContactFormData) => {
    // In a real application, this would send an email to admin users
    console.log('Sending notification email with form data:', formData);
    
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
