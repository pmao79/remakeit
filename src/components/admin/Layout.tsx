
import React, { useState } from 'react';
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import { toast } from 'sonner';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarHeader, 
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger
} from '@/components/ui/sidebar';

import { 
  LayoutDashboard, 
  FileText, 
  Image, 
  Users, 
  MessageSquare, 
  Search, 
  Settings, 
  LogOut
} from 'lucide-react';

import { Dashboard } from './Dashboard';
import { BlogManager } from './BlogManager';
import { PortfolioManager } from './PortfolioManager';
import { ServiceManager } from './ServiceManager';
import { LeadManager } from './LeadManager';
import { SeoTools } from './SeoTools';
import { UserManager } from './UserManager';
import { MediaLibrary } from './MediaLibrary';
import { AdminSettings } from './Settings';

export function Layout() {
  const navigate = useNavigate();
  const [currentAdmin, setCurrentAdmin] = useState<string>(() => {
    try {
      const adminAuth = localStorage.getItem('admin-auth');
      if (adminAuth) {
        const { email } = JSON.parse(adminAuth);
        return email;
      }
    } catch (e) {
      // Handle error silently
    }
    return '';
  });

  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const menuItems = [
    { title: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { title: 'Blog Posts', path: '/admin/blog', icon: FileText },
    { title: 'Portfolio', path: '/admin/portfolio', icon: Image },
    { title: 'Services', path: '/admin/services', icon: FileText },
    { title: 'Leads', path: '/admin/leads', icon: MessageSquare },
    { title: 'SEO Tools', path: '/admin/seo', icon: Search },
    { title: 'User Management', path: '/admin/users', icon: Users },
    { title: 'Media Library', path: '/admin/media', icon: Image },
    { title: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-gray-50 dark:bg-gray-900">
        <Sidebar>
          <SidebarHeader>
            <div className="p-2 flex items-center justify-center">
              <h2 className="text-xl font-bold text-center">
                Remake<span className="text-brand-teal">iT</span>
              </h2>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Admin Panel</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild
                        tooltip={item.title}
                      >
                        <a href={item.path} onClick={(e) => {
                          e.preventDefault();
                          navigate(item.path);
                        }}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="p-4">
              <div className="text-sm mb-2 text-muted-foreground">
                Signed in as: <span className="font-medium">{currentAdmin}</span>
              </div>
              <button 
                onClick={handleLogout}
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <LogOut className="h-4 w-4" />
                <span>Log out</span>
              </button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 overflow-auto">
          <div className="container px-4 py-6">
            <div className="mb-4 flex items-center justify-between">
              <SidebarTrigger />
            </div>

            <Routes>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/blog" element={<BlogManager />} />
              <Route path="/admin/portfolio" element={<PortfolioManager />} />
              <Route path="/admin/services" element={<ServiceManager />} />
              <Route path="/admin/leads" element={<LeadManager />} />
              <Route path="/admin/seo" element={<SeoTools />} />
              <Route path="/admin/users" element={<UserManager />} />
              <Route path="/admin/media" element={<MediaLibrary />} />
              <Route path="/admin/settings" element={<AdminSettings />} />
              <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
