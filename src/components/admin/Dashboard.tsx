
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface Lead {
  id: number;
  name: string;
  email: string;
  phone?: string;
  message: string;
  date: string;
  status: 'New' | 'Contacted' | 'In Progress' | 'Completed';
}

export function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalLeads: 0,
    newLeads: 0,
    inProgress: 0,
    completed: 0
  });

  // Load leads from localStorage and calculate stats
  useEffect(() => {
    try {
      const storedLeads = localStorage.getItem('admin-leads');
      console.log('Stored leads from localStorage:', storedLeads);
      
      if (storedLeads) {
        const leads: Lead[] = JSON.parse(storedLeads);
        console.log('Parsed leads:', leads);
        
        // Calculate stats
        setStats({
          totalLeads: leads.length,
          newLeads: leads.filter(lead => lead.status === 'New').length,
          inProgress: leads.filter(lead => lead.status === 'In Progress' || lead.status === 'Contacted').length,
          completed: leads.filter(lead => lead.status === 'Completed').length
        });
      } else {
        console.log('No leads found in localStorage');
      }
    } catch (error) {
      console.error('Error loading leads from localStorage:', error);
    }
  }, []);

  // Simplified dashboard that focuses on leads
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalLeads}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Leads from all sources
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Leads</CardTitle>
            <div className="h-4 w-4 rounded-full bg-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.newLeads}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Awaiting first contact
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <div className="h-4 w-4 rounded-full bg-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.inProgress}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Actively working with client
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <div className="h-4 w-4 rounded-full bg-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completed}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Successfully closed leads
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Lead Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>
              Welcome to your admin dashboard. Here you can manage leads from contact form submissions.
            </p>
            <p>
              New leads from the contact form will automatically appear in the Leads section and notifications will be sent to your email addresses: info@remakeit.se and marcus@remakeit.se.
            </p>
            <div className="mt-6">
              <Button onClick={() => navigate('/admin/leads')} className="gap-2">
                Manage Leads
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
