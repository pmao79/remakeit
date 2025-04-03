
import { useState } from 'react';
import { toast } from 'sonner';
import { Resend } from 'resend';

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
      // Initialize Resend with your API key
      // Note: In a production environment, this API key should be stored securely
      const resend = new Resend('re_your_resend_api_key'); // Replace with your Resend API key
      
      // Prepare email content
      const emailContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Website:</strong> ${formData.website || 'Not provided'}</p>
        <h3>Message:</h3>
        <p>${formData.message}</p>
      `;
      
      // Send email using Resend
      const { data, error } = await resend.emails.send({
        from: 'noreply@remakeit.se', // Replace with your verified Resend domain
        to: adminEmails,
        subject: `New Contact Form Submission from ${formData.name}`,
        html: emailContent,
        reply_to: formData.email
      });
      
      if (error) {
        console.error('Error from Resend:', error);
        return false;
      }
      
      console.log('Email sent successfully with Resend:', data);
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
