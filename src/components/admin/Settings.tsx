
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { RefreshCw, Save } from 'lucide-react';

export function AdminSettings() {
  const [settings, setSettings] = useState({
    siteName: 'RemakeIT',
    siteDescription: 'Digital agency specializing in web design, SEO, and conversion optimization',
    contactEmail: 'info@remakeit.se',
    phoneNumber: '+46 123 456 789',
    address: 'Stockholm, Sweden',
    facebookUrl: 'https://www.facebook.com/remakeit',
    instagramUrl: 'https://www.instagram.com/remakeit',
    linkedinUrl: 'https://www.linkedin.com/company/remakeit'
  });
  
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSave = () => {
    setIsLoading(true);
    
    // Simulate saving settings
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Settings saved successfully');
    }, 1000);
  };
  
  const handleClearCache = () => {
    toast.success('Cache cleared successfully');
  };
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
            <CardDescription>
              Manage basic site information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="siteName" className="text-sm font-medium">Site Name</label>
                <Input
                  id="siteName"
                  name="siteName"
                  value={settings.siteName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="contactEmail" className="text-sm font-medium">Contact Email</label>
                <Input
                  id="contactEmail"
                  name="contactEmail"
                  value={settings.contactEmail}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="siteDescription" className="text-sm font-medium">Site Description</label>
              <Textarea
                id="siteDescription"
                name="siteDescription"
                value={settings.siteDescription}
                onChange={handleChange}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSave} disabled={isLoading}>
              {isLoading ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" /> Save Settings
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Manage contact details shown on your website
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phoneNumber" className="text-sm font-medium">Phone Number</label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={settings.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="address" className="text-sm font-medium">Address</label>
                <Input
                  id="address"
                  name="address"
                  value={settings.address}
                  onChange={handleChange}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSave} disabled={isLoading}>Save Changes</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Social Media</CardTitle>
            <CardDescription>
              Manage your social media links
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="facebookUrl" className="text-sm font-medium">Facebook URL</label>
                <Input
                  id="facebookUrl"
                  name="facebookUrl"
                  value={settings.facebookUrl}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="instagramUrl" className="text-sm font-medium">Instagram URL</label>
                <Input
                  id="instagramUrl"
                  name="instagramUrl"
                  value={settings.instagramUrl}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="linkedinUrl" className="text-sm font-medium">LinkedIn URL</label>
                <Input
                  id="linkedinUrl"
                  name="linkedinUrl"
                  value={settings.linkedinUrl}
                  onChange={handleChange}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSave} disabled={isLoading}>Save Links</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Maintenance</CardTitle>
            <CardDescription>
              System maintenance options
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" onClick={handleClearCache}>
                <RefreshCw className="h-4 w-4 mr-2" />
                Clear Cache
              </Button>
              <Button variant="outline">
                Export Data
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
