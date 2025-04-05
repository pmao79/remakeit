
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
import SeoHead from '@/components/SeoHead';

import { 
  LayoutDashboard, 
  FileText, 
  Image, 
  MessageSquare, 
  Search, 
  Settings, 
  LogOut
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
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

  // Determine current admin section for the title
  const getCurrentSection = () => {
    const path = location.pathname;
    if (path.includes('/admin/dashboard')) return 'Dashboard';
    if (path.includes('/admin/blog')) return 'Blog Management';
    if (path.includes('/admin/portfolio')) return 'Portfolio Management';
    if (path.includes('/admin/leads')) return 'Lead Management';
    if (path.includes('/admin/seo')) return 'SEO Tools';
    if (path.includes('/admin/users')) return 'User Management';
    if (path.includes('/admin/settings')) return 'Settings';
    return 'Admin Panel';
  };

  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const menuItems = [
    { title: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { title: 'Blog Posts', path: '/admin/blog', icon: FileText },
    { title: 'Portfolio', path: '/admin/portfolio', icon: Image },
    { title: 'Leads', path: '/admin/leads', icon: MessageSquare },
    { title: 'SEO Tools', path: '/admin/seo', icon: Search },
    { title: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <>
      <SeoHead 
        title={`${getCurrentSection()} | Admin | RemakeiT`}
        description="Admin area for RemakeiT website management"
        noIndex={true}
      />
      <SidebarProvider>
        <div className="min-h-screen w-full flex bg-background">
          <Sidebar className="border-r border-border">
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

              {children}
            </div>
          </div>
        </div>
      </SidebarProvider>
    </>
  );
}
