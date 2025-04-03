
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Plus, Pencil, Trash2 } from 'lucide-react';

// Example services
const services = [
  { 
    id: 1, 
    name: 'Web Design',
    description: 'Professional website design services for businesses',
    path: '/services/web-design'
  },
  { 
    id: 2, 
    name: 'Web Redesign',
    description: 'Refresh and modernize your existing website',
    path: '/services/web-redesign'
  },
  { 
    id: 3, 
    name: 'SEO Optimization',
    description: 'Improve your search engine rankings',
    path: '/services/seo-optimization'
  },
  { 
    id: 4, 
    name: 'Conversion Optimization',
    description: 'Convert more visitors into customers',
    path: '/services/conversion-optimization'
  }
];

export function ServiceManager() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Services</h1>
        <Button className="bg-brand-teal text-black hover:bg-brand-teal/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Service
        </Button>
      </div>
      
      <div className="grid gap-4">
        {services.map((service) => (
          <Card key={service.id} className="border border-border bg-card">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-card-foreground">{service.name}</CardTitle>
                  <CardDescription className="mt-1">{service.path}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
