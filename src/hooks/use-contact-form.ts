
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

  const sendAutoResponseEmail = async (formData: ContactFormData) => {
    console.log('Attempting to send auto-response email to:', formData.email);
    
    try {
      // Initialize EmailJS with public key
      emailjs.init("kMds9Y1Lf0Eln0I8J");
      
      // EmailJS requires these parameters to be in this exact format for template_gdz9quv
      const templateParams = {
        from_name: "RemakeiT",
        to_name: formData.name,
        message: "Thank you for contacting RemakeiT! We've received your message and will get back to you as soon as possible.",
        reply_to: "info@remakeit.se",
        to_email: formData.email, // This is what was missing - EmailJS needs to_email
        email: formData.email, // Adding this as a backup in case the template expects 'email' instead
        subject: "Thank you for contacting RemakeiT"
      };
      
      console.log('Sending email with template parameters:', templateParams);
      
      // Send the email
      const response = await emailjs.send(
        "service_5zvrov8", 
        "template_gdz9quv", 
        templateParams
      );
      
      console.log('Auto-response email sent successfully:', response);
      return true;
    } catch (error) {
      console.error('Failed to send auto-response email:', error);
      return false;
    }
  };
  
  const sendAdminNotificationEmail = async (formData: ContactFormData) => {
    console.log('Attempting to send admin notification email about new lead');
    
    try {
      // Initialize EmailJS with public key
      emailjs.init("kMds9Y1Lf0Eln0I8J");
      
      // Format message content for admin notification
      const messageForAdmin = `
        New contact form submission:
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || 'Not provided'}
        Website: ${formData.website || 'Not provided'}
        
        Message:
        ${formData.message}
        
        Submitted: ${new Date().toLocaleString()}
      `;
      
      // EmailJS parameters for admin notification
      const adminTemplateParams = {
        to_email: "info@remakeit.se", // Primary admin email
        cc_email: "marcus@remakeit.se", // CC to Marcus
        from_name: "RemakeiT Website",
        subject: `New Contact Form: ${formData.name}`,
        message: messageForAdmin,
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone || 'Not provided',
        customer_website: formData.website || 'Not provided',
        customer_message: formData.message
      };
      
      console.log('Sending admin notification with parameters:', adminTemplateParams);
      
      // Send admin notification email
      const response = await emailjs.send(
        "service_5zvrov8", 
        "template_x5kxu6e", // Admin notification template
        adminTemplateParams
      );
      
      console.log('Admin notification email sent successfully:', response);
      return true;
    } catch (error) {
      console.error('Failed to send admin notification email:', error);
      return false;
    }
  };

  const handleSubmit = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    console.log("Form submission started with data:", formData);
    
    try {
      // First, store lead in local storage
      const storedSuccessfully = storeLeadInLocalStorage(formData);
      
      if (!storedSuccessfully) {
        throw new Error('Failed to store lead data');
      }
      
      // Send auto-response email to customer and admin notification
      const customerEmailSent = await sendAutoResponseEmail(formData);
      const adminEmailSent = await sendAdminNotificationEmail(formData);
      
      // Handle different scenarios based on email sending results
      if (!customerEmailSent && !adminEmailSent) {
        console.warn('Both customer and admin emails failed to send, but lead was stored');
        toast.warning('Your message was received but we had trouble sending confirmation emails. We will still contact you soon.');
      } else if (!customerEmailSent) {
        console.warn('Customer auto-response email could not be sent, but lead was stored and admin was notified');
        toast.warning('Your message was received but we had trouble sending a confirmation email. We will still contact you soon.');
      } else if (!adminEmailSent) {
        console.warn('Admin notification email could not be sent, but lead was stored and customer was notified');
        // Don't show this warning to customer, just log it for debugging
        toast.success('Your message has been sent! We will contact you soon.');
      } else {
        // Both emails sent successfully
        toast.success('Your message has been sent! We will contact you soon.');
      }
      
      // Return success regardless of email status, since the lead was stored
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
