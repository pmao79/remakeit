
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent,
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { MessageSquare, ArrowRight, Trash2 } from 'lucide-react';

// Example leads for demonstration
const leads = [
  { 
    id: 1, 
    name: 'Anna Johansson', 
    email: 'anna.johansson@example.com', 
    message: 'I need a new website for my small business', 
    date: '2025-03-15',
    status: 'New'
  },
  { 
    id: 2, 
    name: 'Erik Larsson', 
    email: 'erik.larsson@example.com', 
    message: 'Interested in SEO services for my e-commerce store', 
    date: '2025-03-14',
    status: 'Contacted'
  },
  { 
    id: 3, 
    name: 'Maria Karlsson', 
    email: 'maria.karlsson@example.com', 
    message: 'Need help with website redesign and optimization', 
    date: '2025-03-10',
    status: 'In Progress'
  },
  { 
    id: 4, 
    name: 'Johan Nilsson', 
    email: 'johan.nilsson@example.com', 
    message: 'Looking for a quote on building a mobile app', 
    date: '2025-03-08',
    status: 'Completed'
  }
];

// Status colors
const statusColors = {
  'New': 'bg-blue-500',
  'Contacted': 'bg-amber-500',
  'In Progress': 'bg-purple-500',
  'Completed': 'bg-green-500'
};

export function LeadManager() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Lead Management</h1>
        <Button>
          <MessageSquare className="h-4 w-4 mr-2" />
          Export Leads
        </Button>
      </div>
      
      <div className="space-y-4">
        {leads.map((lead) => (
          <Card key={lead.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-lg">{lead.name}</CardTitle>
                  <span 
                    className={`text-xs font-medium text-white px-2 py-1 rounded ${statusColors[lead.status as keyof typeof statusColors] || 'bg-gray-500'}`}
                  >
                    {lead.status}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {new Date(lead.date).toLocaleDateString()}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm font-medium">Email:</div>
                <div className="text-sm">{lead.email}</div>
              </div>
              
              <div>
                <div className="text-sm font-medium">Message:</div>
                <div className="text-sm">{lead.message}</div>
              </div>
              
              <div className="flex justify-between pt-2">
                <Button size="sm" variant="outline" className="gap-1">
                  <span>Reply</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Update Status
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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
