
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
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
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Plus, Image, Pencil, Trash2 } from 'lucide-react';

interface PortfolioItem {
  id: number;
  name: string;
  category: string;
  description?: string;
  image?: string;
}

// Example portfolio items
const initialPortfolioItems: PortfolioItem[] = [
  { id: 1, name: 'Berghs School of Communication', category: 'Web Design' },
  { id: 2, name: 'Stockholm Pride', category: 'Web Design' },
  { id: 3, name: 'Yoga Studio Website', category: 'Web Design' },
  { id: 4, name: 'Local Restaurant', category: 'Web Design & SEO' },
  { id: 5, name: 'Tech Startup Landing Page', category: 'Web Design' },
  { id: 6, name: 'E-commerce Fashion Store', category: 'Web Design & Optimization' },
];

export function PortfolioManager() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(initialPortfolioItems);
  const [newItem, setNewItem] = useState<Partial<PortfolioItem>>({ name: '', category: '' });
  const [editItem, setEditItem] = useState<PortfolioItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleAddProject = () => {
    if (newItem.name && newItem.category) {
      const newId = portfolioItems.length > 0 ? Math.max(...portfolioItems.map(item => item.id)) + 1 : 1;
      const projectToAdd = {
        id: newId,
        name: newItem.name,
        category: newItem.category,
        description: newItem.description || '',
        image: newItem.image || ''
      };
      
      setPortfolioItems([...portfolioItems, projectToAdd]);
      setNewItem({ name: '', category: '' });
      setIsDialogOpen(false);
      toast.success('Project added successfully');
    } else {
      toast.error('Please fill in all required fields');
    }
  };

  const handleEditProject = () => {
    if (editItem && editItem.name && editItem.category) {
      setPortfolioItems(portfolioItems.map(item => 
        item.id === editItem.id ? editItem : item
      ));
      setIsEditDialogOpen(false);
      toast.success('Project updated successfully');
    } else {
      toast.error('Please fill in all required fields');
    }
  };

  const handleDeleteProject = (id: number) => {
    setPortfolioItems(portfolioItems.filter(item => item.id !== id));
    toast.success('Project deleted successfully');
  };

  const openEditDialog = (item: PortfolioItem) => {
    setEditItem({...item});
    setIsEditDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-brand-teal text-black hover:bg-brand-teal/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Project</DialogTitle>
              <DialogDescription>
                Enter details for the new portfolio project.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name*
                </Label>
                <Input
                  id="name"
                  value={newItem.name}
                  onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category*
                </Label>
                <Input
                  id="category"
                  value={newItem.category}
                  onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  value={newItem.description || ''}
                  onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">
                  Image URL
                </Label>
                <Input
                  id="image"
                  value={newItem.image || ''}
                  onChange={(e) => setNewItem({...newItem, image: e.target.value})}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAddProject}>Add Project</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <Card key={item.id} className="overflow-hidden border border-border bg-card">
            <div className="aspect-video bg-muted flex items-center justify-center">
              {item.image ? (
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              ) : (
                <Image className="h-10 w-10 text-muted-foreground" />
              )}
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-card-foreground">{item.name}</CardTitle>
              <CardDescription>{item.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => openEditDialog(item)}
                >
                  <Pencil className="h-4 w-4 mr-1" /> Edit
                </Button>
                
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <Trash2 className="h-4 w-4 mr-1" /> Delete
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the project
                        "{item.name}" from your portfolio.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleDeleteProject(item.id)}>
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
            <DialogDescription>
              Update the details of your portfolio project.
            </DialogDescription>
          </DialogHeader>
          {editItem && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">
                  Name
                </Label>
                <Input
                  id="edit-name"
                  value={editItem.name}
                  onChange={(e) => setEditItem({...editItem, name: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-category" className="text-right">
                  Category
                </Label>
                <Input
                  id="edit-category"
                  value={editItem.category}
                  onChange={(e) => setEditItem({...editItem, category: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-description" className="text-right">
                  Description
                </Label>
                <Input
                  id="edit-description"
                  value={editItem.description || ''}
                  onChange={(e) => setEditItem({...editItem, description: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-image" className="text-right">
                  Image URL
                </Label>
                <Input
                  id="edit-image"
                  value={editItem.image || ''}
                  onChange={(e) => setEditItem({...editItem, image: e.target.value})}
                  className="col-span-3"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button type="submit" onClick={handleEditProject}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
