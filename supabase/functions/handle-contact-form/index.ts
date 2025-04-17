
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  website?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Received contact form submission");
    const formData: ContactFormData = await req.json();
    const { name, email, phone, message, website } = formData;

    console.log("Form data:", { name, email, phone, website });

    // Send confirmation email to the customer
    const customerEmailResult = await resend.emails.send({
      from: "RemakeiT <info@remakeit.se>",
      to: email,
      subject: "Thank you for contacting RemakeiT!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2b3452;">Thank you for contacting RemakeiT!</h1>
          <p>Hello ${name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Here's a summary of your message:</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <p><strong>Message:</strong> ${message}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${website ? `<p><strong>Website:</strong> ${website}</p>` : ''}
          </div>
          <p>If you have any other questions, feel free to reply to this email.</p>
          <p>Best regards,<br/>The RemakeiT Team</p>
        </div>
      `,
    });

    console.log("Customer email result:", customerEmailResult);

    // Send notification email to admin
    const adminMessageContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2b3452;">New Contact Form Submission</h2>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : '<p><strong>Phone:</strong> Not provided</p>'}
          ${website ? `<p><strong>Website:</strong> ${website}</p>` : '<p><strong>Website:</strong> Not provided</p>'}
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    const adminEmailResult = await resend.emails.send({
      from: "RemakeiT Website <info@remakeit.se>",
      to: "info@remakeit.se",
      cc: "marcus@remakeit.se",
      subject: `New Contact Form: ${name}`,
      html: adminMessageContent,
    });

    console.log("Admin email result:", adminEmailResult);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Emails sent successfully",
        customerEmail: customerEmailResult,
        adminEmail: adminEmailResult,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error) {
    console.error("Error in handle-contact-form function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
