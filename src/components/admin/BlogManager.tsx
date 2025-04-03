
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { blogPosts, BlogPost } from '@/data/blogData';

type FormData = {
  title_en: string;
  title_sv: string;
  excerpt_en: string;
  excerpt_sv: string;
  category_en: string;
  category_sv: string;
  date: string;
  slug: string;
};

export function BlogManager() {
  const [posts, setPosts] = useState(blogPosts);
  const [editing, setEditing] = useState<number | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {
    if (editing !== null) {
      // Edit existing post
      const updatedPosts = posts.map(post => {
        if (post.id === editing) {
          return {
            ...post,
            title: {
              en: data.title_en,
              sv: data.title_sv,
            },
            excerpt: {
              en: data.excerpt_en,
              sv: data.excerpt_sv,
            },
            category: {
              en: data.category_en,
              sv: data.category_sv,
            },
            date: data.date,
            slug: data.slug,
          };
        }
        return post;
      });
      
      setPosts(updatedPosts);
      toast.success('Blog post updated successfully');
    } else {
      // Create new post
      const newPost: BlogPost = {
        id: posts.length + 1,
        title: {
          en: data.title_en,
          sv: data.title_sv,
        },
        excerpt: {
          en: data.excerpt_en,
          sv: data.excerpt_sv,
        },
        category: {
          en: data.category_en,
          sv: data.category_sv,
        },
        date: data.date,
        slug: data.slug,
      };
      
      setPosts([...posts, newPost]);
      toast.success('Blog post created successfully');
    }
    
    setEditing(null);
    setIsCreating(false);
    reset();
  };
  
  const handleEdit = (post: BlogPost) => {
    setEditing(post.id);
    setIsCreating(false);
    
    reset({
      title_en: post.title.en,
      title_sv: post.title.sv,
      excerpt_en: post.excerpt.en,
      excerpt_sv: post.excerpt.sv,
      category_en: post.category.en,
      category_sv: post.category.sv,
      date: post.date,
      slug: post.slug,
    });
  };
  
  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== id));
      toast.success('Blog post deleted successfully');
      
      if (editing === id) {
        setEditing(null);
        reset();
      }
    }
  };
  
  const handleCreate = () => {
    setIsCreating(true);
    setEditing(null);
    
    const today = new Date().toISOString().split('T')[0];
    
    reset({
      title_en: '',
      title_sv: '',
      excerpt_en: '',
      excerpt_sv: '',
      category_en: '',
      category_sv: '',
      date: today,
      slug: '',
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
        <Button onClick={handleCreate} disabled={isCreating}>
          <Plus className="h-4 w-4 mr-2" />
          Add New Post
        </Button>
      </div>
      
      {(editing !== null || isCreating) && (
        <Card>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle>{editing !== null ? 'Edit Blog Post' : 'Create New Blog Post'}</CardTitle>
              <CardDescription>
                Fill out the form below to {editing !== null ? 'update the' : 'create a new'} blog post.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">English Content</h3>
                
                <div>
                  <label htmlFor="title_en" className="text-sm font-medium">Title (English)</label>
                  <Input
                    id="title_en"
                    {...register('title_en', { required: true })}
                    className={errors.title_en ? 'border-destructive' : ''}
                  />
                  {errors.title_en && <p className="text-sm text-destructive mt-1">Title is required</p>}
                </div>
                
                <div>
                  <label htmlFor="excerpt_en" className="text-sm font-medium">Excerpt (English)</label>
                  <Textarea
                    id="excerpt_en"
                    {...register('excerpt_en', { required: true })}
                    className={errors.excerpt_en ? 'border-destructive' : ''}
                  />
                  {errors.excerpt_en && <p className="text-sm text-destructive mt-1">Excerpt is required</p>}
                </div>
                
                <div>
                  <label htmlFor="category_en" className="text-sm font-medium">Category (English)</label>
                  <Input
                    id="category_en"
                    {...register('category_en', { required: true })}
                    className={errors.category_en ? 'border-destructive' : ''}
                  />
                  {errors.category_en && <p className="text-sm text-destructive mt-1">Category is required</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Swedish Content</h3>
                
                <div>
                  <label htmlFor="title_sv" className="text-sm font-medium">Title (Swedish)</label>
                  <Input
                    id="title_sv"
                    {...register('title_sv', { required: true })}
                    className={errors.title_sv ? 'border-destructive' : ''}
                  />
                  {errors.title_sv && <p className="text-sm text-destructive mt-1">Title is required</p>}
                </div>
                
                <div>
                  <label htmlFor="excerpt_sv" className="text-sm font-medium">Excerpt (Swedish)</label>
                  <Textarea
                    id="excerpt_sv"
                    {...register('excerpt_sv', { required: true })}
                    className={errors.excerpt_sv ? 'border-destructive' : ''}
                  />
                  {errors.excerpt_sv && <p className="text-sm text-destructive mt-1">Excerpt is required</p>}
                </div>
                
                <div>
                  <label htmlFor="category_sv" className="text-sm font-medium">Category (Swedish)</label>
                  <Input
                    id="category_sv"
                    {...register('category_sv', { required: true })}
                    className={errors.category_sv ? 'border-destructive' : ''}
                  />
                  {errors.category_sv && <p className="text-sm text-destructive mt-1">Category is required</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="text-sm font-medium">Publication Date</label>
                  <Input
                    id="date"
                    type="date"
                    {...register('date', { required: true })}
                    className={errors.date ? 'border-destructive' : ''}
                  />
                  {errors.date && <p className="text-sm text-destructive mt-1">Date is required</p>}
                </div>
                
                <div>
                  <label htmlFor="slug" className="text-sm font-medium">URL Slug</label>
                  <Input
                    id="slug"
                    {...register('slug', { required: true })}
                    className={errors.slug ? 'border-destructive' : ''}
                  />
                  {errors.slug && <p className="text-sm text-destructive mt-1">Slug is required</p>}
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-between">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => {
                  setEditing(null);
                  setIsCreating(false);
                  reset();
                }}
              >
                Cancel
              </Button>
              <Button type="submit">
                {editing !== null ? 'Update Post' : 'Create Post'}
              </Button>
            </CardFooter>
          </form>
        </Card>
      )}
      
      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{post.title.en}</CardTitle>
                  <CardDescription className="mt-1">
                    Published: {new Date(post.date).toLocaleDateString()} | Category: {post.category.en}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(post)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(post.id)}
                    className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt.en}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
