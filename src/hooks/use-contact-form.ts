
import { useState } from 'react';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';
import { supabase } from "@/integrations/supabase/client";

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

  // Submit with Supabase Edge Function
  const submitWithSupabase = async (formData: ContactFormData) => {
    try {
      console.log('Attempting to submit with Supabase Edge Function');
      
      const { data, error } = await supabase.functions.invoke('handle-contact-form', {
        body: formData
      });
      
      if (error) {
        console.error('Supabase submission failed:', error);
        throw new Error(error.message || 'Failed to send with Supabase');
      }
      
      console.log('Supabase submission successful:', data);
      
      return { success: true, message: 'Form submitted successfully via Supabase' };
    } catch (error) {
      console.error('Error submitting with Supabase:', error);
      // Don't throw here - we'll fall back to EmailJS
      return { success: false, error };
    }
  };

  // Fallback to EmailJS if Supabase fails
  const fallbackToEmailJS = async (formData: ContactFormData) => {
    console.log('Falling back to EmailJS');
    
    try {
      // Initialize EmailJS with public key
      emailjs.init("kMds9Y1Lf0Eln0I8J");
      
      // Send auto-response email to customer
      const customerEmailSent = await sendAutoResponseEmail(formData);
      
      // Send admin notification email
      const adminEmailSent = await sendAdminNotificationEmail(formData);
      
      if (!customerEmailSent && !adminEmailSent) {
        throw new Error('Both customer and admin emails failed to send');
      }
      
      return { 
        success: true, 
        message: 'Form submitted successfully via EmailJS fallback',
        customerEmailSent,
        adminEmailSent
      };
    } catch (error) {
      console.error('EmailJS fallback also failed:', error);
      return { success: false, error };
    }
  };

  // Original EmailJS functions kept as fallback
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
        to_email: formData.email,
        email: formData.email,
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
        to_email: "info@remakeit.se",
        cc_email: "marcus@remakeit.se",
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
        "template_x5kxu6e",
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
      
      // First attempt with Supabase Edge Function
      const supabaseResult = await submitWithSupabase(formData);
      
      // If Supabase was successful, we're done
      if (supabaseResult.success) {
        toast.success('Your message has been sent! We will contact you soon.');
        return supabaseResult;
      }
      
      // If Supabase failed, fall back to EmailJS
      console.log('Supabase failed, falling back to EmailJS');
      const emailJsResult = await fallbackToEmailJS(formData);
      
      // Handle the EmailJS result
      if (emailJsResult.success) {
        if (!emailJsResult.customerEmailSent) {
          console.warn('Customer auto-response email could not be sent, but lead was stored');
          toast.warning('Your message was received but we had trouble sending a confirmation email. We will still contact you soon.');
        } else {
          toast.success('Your message has been sent! We will contact you soon.');
        }
        return emailJsResult;
      }
      
      // Both methods failed
      throw new Error('All submission methods failed');
      
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
