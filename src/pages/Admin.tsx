
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Admin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // This is just a placeholder for a real authentication system
    setTimeout(() => {
      // In a real app, you would authenticate with a backend service
      if (email === 'admin@remakeit.com' && password === 'admin123') {
        toast.success('Login successful!');
        navigate('/admin/dashboard');
      } else {
        toast.error('Invalid email or password');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
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
              For demo purposes: admin@remakeit.com / admin123
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
