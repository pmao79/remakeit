
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Plus, Image } from 'lucide-react';

// Example portfolio items
const portfolioItems = [
  { id: 1, name: 'Berghs School of Communication', category: 'Web Design' },
  { id: 2, name: 'Stockholm Pride', category: 'Web Design' },
  { id: 3, name: 'Yoga Studio Website', category: 'Web Design' },
  { id: 4, name: 'Local Restaurant', category: 'Web Design & SEO' },
  { id: 5, name: 'Tech Startup Landing Page', category: 'Web Design' },
  { id: 6, name: 'E-commerce Fashion Store', category: 'Web Design & Optimization' },
];

export function PortfolioManager() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Project
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <Image className="h-10 w-10 text-muted-foreground" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{item.name}</CardTitle>
              <CardDescription>{item.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">Edit</Button>
                <Button size="sm" variant="outline" className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
