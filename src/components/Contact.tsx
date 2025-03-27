
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Form submitted successfully! We\'ll contact you soon.', {
        position: 'top-center',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-teal/20 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Let's Upgrade Your Website – <span className="text-brand-teal">Get a Free Mockup!</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your online presence? Fill out the form and we'll create a free mockup of what your new website could look like – no obligation.
            </p>
            
            <div className="glass-panel p-6 rounded-lg mb-8">
              <div className="flex items-start mb-4">
                <Phone className="w-6 h-6 text-brand-teal mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                  <p className="text-gray-300">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-brand-teal mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                  <p className="text-gray-300">hello@remakeit.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-8 rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">Current Website (if any)</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Tell us about your business *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
                  placeholder="What does your business do? What are your goals for the new website?"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-brand-teal text-black hover:bg-brand-teal/90 py-3 text-lg font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Get My Free Website Mockup'}
              </Button>
              <p className="mt-4 text-sm text-gray-400 text-center">
                No obligation. We'll contact you within 1 business day.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
