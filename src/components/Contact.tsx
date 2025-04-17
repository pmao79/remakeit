
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContactForm } from '@/hooks/use-contact-form';

const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });
  
  // Use our custom hook for form handling
  const { handleSubmit: submitForm, isSubmitting } = useContactForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted with data:", formData);
    
    // Submit the form using our custom hook
    const result = await submitForm(formData);
    
    // If submission was successful, reset the form
    if (result.success) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: ''
      });
    }
  };

  // Kontaktinformation baserat på språk
  const contactInfo = {
    sv: {
      phoneNumber: '0708-62 52 53',
      email: 'info@remakeit.se',
      title: 'Uppgradera din webbplats – Få en gratis mockup!',
      subtitle: 'Redo att förbättra din online-närvaro? Fyll i formuläret så skapar vi en gratis mockup av hur din nya webbplats kan se ut – utan förpliktelser.',
      callUs: 'Ring oss',
      emailUs: 'Maila oss',
      formTitle: 'Få min gratis webbplats-mockup',
      noObligation: 'Ingen förpliktelse. Vi kontaktar dig inom 1 arbetsdag.'
    },
    en: {
      phoneNumber: '(+46) 708-62 52 53',
      email: 'hello@remakeit.com',
      title: 'Let\'s Upgrade Your Website – Get a Free Mockup!',
      subtitle: 'Ready to transform your online presence? Fill out the form and we\'ll create a free mockup of what your new website could look like – no obligation.',
      callUs: 'Call Us',
      emailUs: 'Email Us',
      formTitle: 'Get My Free Website Mockup',
      noObligation: 'No obligation. We\'ll contact you within 1 business day.'
    }
  };

  const current = contactInfo[language];

  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-teal/20 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              {current.title} <span className="text-brand-teal">{language === 'sv' ? 'Få en gratis mockup!' : 'Get a Free Mockup!'}</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {current.subtitle}
            </p>
            
            <div className="glass-panel p-6 rounded-lg mb-8">
              <div className="flex items-start mb-4">
                <Phone className="w-6 h-6 text-brand-teal mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{current.callUs}</h3>
                  <p className="text-gray-300">{current.phoneNumber}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-brand-teal mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{current.emailUs}</h3>
                  <p className="text-gray-300">{current.email}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-8 rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">{language === 'sv' ? 'Namn *' : 'Name *'}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
                    placeholder={language === 'sv' ? 'Ditt namn' : 'Your name'}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">{language === 'sv' ? 'E-post *' : 'Email *'}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
                    placeholder={language === 'sv' ? 'Din e-post' : 'Your email'}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">{language === 'sv' ? 'Telefon' : 'Phone'}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
                    placeholder={language === 'sv' ? 'Ditt telefonnummer' : 'Your phone number'}
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                    {language === 'sv' ? 'Nuvarande webbplats (om du har)' : 'Current Website (if any)'}
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
                    placeholder="https://dinwebbplats.se"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {language === 'sv' ? 'Berätta om ditt företag *' : 'Tell us about your business *'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
                  placeholder={language === 'sv' ? 'Vad gör ditt företag? Vad är dina mål med den nya webbplatsen?' : 'What does your business do? What are your goals for the new website?'}
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-brand-teal text-black hover:bg-brand-teal/90 py-3 text-lg font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting 
                  ? (language === 'sv' ? 'Skickar...' : 'Submitting...') 
                  : current.formTitle}
              </Button>
              <p className="mt-4 text-sm text-gray-400 text-center">
                {current.noObligation}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
