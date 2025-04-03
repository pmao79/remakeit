
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent,
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { MessageSquare, ArrowRight, Trash2, Phone, Mail, FileDown } from 'lucide-react';

interface Lead {
  id: number;
  name: string;
  email: string;
  phone?: string;
  message: string;
  date: string;
  status: 'New' | 'Contacted' | 'In Progress' | 'Completed';
}

// Example leads for demonstration
const initialLeads: Lead[] = [
  { 
    id: 1, 
    name: 'Anna Johansson', 
    email: 'anna.johansson@example.com',
    phone: '+46 70 123 4567', 
    message: 'I need a new website for my small business', 
    date: '2025-03-15',
    status: 'New'
  },
  { 
    id: 2, 
    name: 'Erik Larsson', 
    email: 'erik.larsson@example.com', 
    phone: '+46 73 987 6543',
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
    phone: '+46 76 555 4321',
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
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [replyMessage, setReplyMessage] = useState('');
  const [isReplyDialogOpen, setIsReplyDialogOpen] = useState(false);
  const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false);

  const handleReply = () => {
    // In a real application, this would send an email
    if (replyMessage.trim() === '') {
      toast.error('Please enter a message');
      return;
    }
    
    toast.success(`Reply sent to ${selectedLead?.name}`);
    setReplyMessage('');
    setIsReplyDialogOpen(false);
  };

  const handleUpdateStatus = (id: number, newStatus: 'New' | 'Contacted' | 'In Progress' | 'Completed') => {
    setLeads(leads.map(lead => lead.id === id ? { ...lead, status: newStatus } : lead));
    toast.success('Lead status updated');
    setIsStatusDialogOpen(false);
  };

  const handleDeleteLead = (id: number) => {
    setLeads(leads.filter(lead => lead.id !== id));
    toast.success('Lead deleted');
  };

  const openReplyDialog = (lead: Lead) => {
    setSelectedLead(lead);
    setReplyMessage('');
    setIsReplyDialogOpen(true);
  };

  const openStatusDialog = (lead: Lead) => {
    setSelectedLead(lead);
    setIsStatusDialogOpen(true);
  };

  const handleCall = (phone?: string) => {
    if (phone) {
      window.location.href = `tel:${phone}`;
    } else {
      toast.error('No phone number provided');
    }
  };

  const handleEmail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const exportLeads = () => {
    // Create CSV content
    const headers = ["Name", "Email", "Phone", "Message", "Date", "Status"];
    const csvContent = [
      headers.join(","),
      ...leads.map(lead => [
        `"${lead.name}"`,
        `"${lead.email}"`,
        `"${lead.phone || ''}"`,
        `"${lead.message.replace(/"/g, '""')}"`,
        `"${lead.date}"`,
        `"${lead.status}"`
      ].join(","))
    ].join("\n");
    
    // Create blob and download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `leads-export-${new Date().toISOString().slice(0,10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('Leads exported successfully');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Lead Management</h1>
        <Button onClick={exportLeads}>
          <FileDown className="h-4 w-4 mr-2" />
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
                    className={`text-xs font-medium text-white px-2 py-1 rounded ${statusColors[lead.status] || 'bg-gray-500'}`}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium">Email:</div>
                  <div className="text-sm flex items-center gap-2">
                    {lead.email}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-6 w-6 p-0"
                      onClick={() => handleEmail(lead.email)}
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-medium">Phone:</div>
                  <div className="text-sm flex items-center gap-2">
                    {lead.phone || 'Not provided'}
                    {lead.phone && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-6 w-6 p-0"
                        onClick={() => handleCall(lead.phone)}
                      >
                        <Phone className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text-sm font-medium">Message:</div>
                <div className="text-sm">{lead.message}</div>
              </div>
              
              <div className="flex justify-between pt-2">
                <Button size="sm" variant="outline" className="gap-1" onClick={() => openReplyDialog(lead)}>
                  <span>Reply</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => openStatusDialog(lead)}>
                    Update Status
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete the lead
                          from {lead.name} from your database.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDeleteLead(lead.id)}>
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {leads.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
            <h3 className="mt-4 text-lg font-medium">No leads yet</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              When visitors submit the contact form, their inquiries will appear here.
            </p>
          </div>
        )}
      </div>

      {/* Reply Dialog */}
      <Dialog open={isReplyDialogOpen} onOpenChange={setIsReplyDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Reply to {selectedLead?.name}</DialogTitle>
            <DialogDescription>
              This will send an email to {selectedLead?.email}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Textarea
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              placeholder="Type your message here..."
              className="min-h-[150px]"
            />
          </div>
          <DialogFooter>
            <Button onClick={handleReply}>Send Reply</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Status Update Dialog */}
      <Dialog open={isStatusDialogOpen} onOpenChange={setIsStatusDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update Status</DialogTitle>
            <DialogDescription>
              Change the status for {selectedLead?.name}'s inquiry
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Select 
              defaultValue={selectedLead?.status}
              onValueChange={(value) => selectedLead && handleUpdateStatus(selectedLead.id, value as any)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="New">New</SelectItem>
                <SelectItem value="Contacted">Contacted</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
