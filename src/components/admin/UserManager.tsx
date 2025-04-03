
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
import { Plus, UserPlus, Pencil, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

// Initial admin users based on requirements
const initialUsers = [
  { id: 1, name: 'RemakeIT Info', email: 'info@remakeit.se', role: 'Admin' },
  { id: 2, name: 'Marcus Odéus', email: 'marcus@remakeit.se', role: 'Admin' }
];

export function UserManager() {
  const [users, setUsers] = useState(initialUsers);
  const [showAddUser, setShowAddUser] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '', role: 'Editor' });
  
  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.password) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // Check for duplicate email
    if (users.some(user => user.email === newUser.email)) {
      toast.error('A user with this email already exists');
      return;
    }
    
    setUsers([
      ...users,
      {
        id: users.length + 1,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      }
    ]);
    
    toast.success('User added successfully');
    setNewUser({ name: '', email: '', password: '', role: 'Editor' });
    setShowAddUser(false);
  };
  
  const handleDeleteUser = (id: number) => {
    // Prevent deletion of main admin accounts
    if (id === 1 || id === 2) {
      toast.error('Cannot delete main admin accounts');
      return;
    }
    
    if (confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
      toast.success('User deleted successfully');
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
        <Button onClick={() => setShowAddUser(!showAddUser)}>
          <UserPlus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>
      
      {showAddUser && (
        <Card>
          <CardHeader>
            <CardTitle>Add New User</CardTitle>
            <CardDescription>
              Create a new user account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium">Full Name</label>
              <Input 
                id="name" 
                placeholder="Enter full name" 
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter email address" 
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter password" 
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="role" className="text-sm font-medium">Role</label>
              <select 
                id="role"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              >
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
              </select>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setShowAddUser(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddUser}>
              <Plus className="h-4 w-4 mr-2" />
              Add User
            </Button>
          </CardFooter>
        </Card>
      )}
      
      <div className="grid gap-4">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{user.name}</CardTitle>
                  <CardDescription className="mt-1">{user.email}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary">
                    {user.role}
                  </span>
                  <div className="flex gap-1">
                    <Button 
                      size="sm" 
                      variant="outline"
                      disabled={user.id === 1 || user.id === 2}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => handleDeleteUser(user.id)}
                      disabled={user.id === 1 || user.id === 2}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
