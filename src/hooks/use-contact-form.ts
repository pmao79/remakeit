
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

  const sendNotificationEmail = async (formData: ContactFormData) => {
    console.log('Sending email notification with form data:', formData);
    
    // Email addresses to notify
    const adminEmails = ['info@remakeit.se', 'marcus@remakeit.se'];
    
    try {
      // Configure EmailJS with your service ID, template ID, and user ID
      // These should be obtained from the EmailJS dashboard
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        phone_number: formData.phone || 'Not provided',
        website: formData.website || 'Not provided',
        message: formData.message,
        to_email: adminEmails.join(', ')
      };
      
      // Replace these values with your own EmailJS credentials
      const serviceId = 'service_remakeit';  // Your EmailJS service ID
      const templateId = 'template_contact'; // Your EmailJS template ID
      const userId = 'user_yourUserId';      // Your EmailJS user ID
      
      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );
      
      console.log('Email sent successfully:', response);
      return true;
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
