
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/admin/Layout';
import { Dashboard } from '@/components/admin/Dashboard';
import { BlogManager } from '@/components/admin/BlogManager';
import { PortfolioManager } from '@/components/admin/PortfolioManager';
import { LeadManager } from '@/components/admin/LeadManager';
import { SeoTools } from '@/components/admin/SeoTools';
import { UserManager } from '@/components/admin/UserManager';
import { AdminSettings } from '@/components/admin/Settings';
import SeoHead from '@/components/SeoHead';

// Admin users with access
const ADMIN_USERS = [
  { email: 'info@remakeit.se', password: 'admin123' },
  { email: 'marcus@remakeit.se', password: 'admin123' }
];

const Admin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  console.log('Current location:', location.pathname);

  // Check if user is already authenticated
  useEffect(() => {
    const adminAuth = localStorage.getItem('admin-auth');
    if (adminAuth) {
      try {
        const authData = JSON.parse(adminAuth);
        const now = new Date();
        if (authData.expiry && new Date(authData.expiry) > now) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('admin-auth');
        }
      } catch (e) {
        localStorage.removeItem('admin-auth');
      }
    }
  }, []);

  // Login handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Authenticate user
    setTimeout(() => {
      const user = ADMIN_USERS.find(user => user.email === email && user.password === password);
      
      if (user) {
        // Set authentication in localStorage with 24 hour expiry
        const expiry = new Date();
        expiry.setHours(expiry.getHours() + 24);
        
        localStorage.setItem('admin-auth', JSON.stringify({
          email: user.email,
          expiry: expiry.toISOString()
        }));
        
        toast.success('Login successful!');
        setIsAuthenticated(true);
        navigate('/admin/dashboard');
      } else {
        toast.error('Invalid email or password');
      }
      setIsLoading(false);
    }, 1000);
  };

  // Login page
  if (!isAuthenticated) {
    return (
      <>
        <SeoHead 
          title="Admin Login | RemakeiT"
          description="Admin area for RemakeiT website management"
          noIndex={true}
        />
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="max-w-md w-full glass-panel p-8 rounded-lg">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold font-display mb-2">
                Remake<span className="text-brand-teal">iT</span> Admin
              </h1>
              <p className="text-gray-400">Sign in to access the admin dashboard</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
                    placeholder="admin@remakeit.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-brand-teal text-black hover:bg-brand-teal/90"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  Admin access only
                </p>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }

  // Create routing content to pass to the Layout component
  const adminRoutes = (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="blog" element={<BlogManager />} />
      <Route path="portfolio" element={<PortfolioManager />} />
      <Route path="leads" element={<LeadManager />} />
      <Route path="seo" element={<SeoTools />} />
      <Route path="users" element={<UserManager />} />
      <Route path="settings" element={<AdminSettings />} />
      <Route path="" element={<Dashboard />} />
    </Routes>
  );

  // Render dashboard layout with nested routes for authenticated users
  return (
    <>
      <SeoHead 
        title="Admin Dashboard | RemakeiT"
        description="Admin dashboard for RemakeiT website management"
        noIndex={true}
      />
      <Layout>{adminRoutes}</Layout>
    </>
  );
};

export default Admin;
