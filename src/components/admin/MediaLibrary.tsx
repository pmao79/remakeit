
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card,
  CardContent 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Upload, Image, FileText, X } from 'lucide-react';
import { toast } from 'sonner';

// Example media files for demonstration - optimized
const demoMedia = [
  { id: 1, name: 'hero-image-1.webp', type: 'image', size: '400 KB', url: '/placeholder.svg' },
  { id: 2, name: 'about-team.webp', type: 'image', size: '280 KB', url: '/placeholder.svg' },
  { id: 3, name: 'portfolio-1.webp', type: 'image', size: '520 KB', url: '/placeholder.svg' },
  { id: 4, name: 'brochure.pdf', type: 'document', size: '870 KB', url: '#' },
  { id: 5, name: 'logo.svg', type: 'image', size: '15 KB', url: '/placeholder.svg' },
  { id: 6, name: 'case-study.pdf', type: 'document', size: '650 KB', url: '#' },
];

export function MediaLibrary() {
  const [media, setMedia] = useState(demoMedia);
  const [filter, setFilter] = useState('');
  
  const filteredMedia = media.filter(item => 
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  const handleUpload = () => {
    toast.success('File upload feature will be implemented in a future update');
  };
  
  const handleDeleteMedia = (id: number) => {
    if (confirm('Are you sure you want to delete this media item?')) {
      setMedia(media.filter(item => item.id !== id));
      toast.success('Media deleted successfully');
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Media Library</h1>
        <Button onClick={handleUpload}>
          <Upload className="h-4 w-4 mr-2" />
          Upload File
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search media files..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto md:overflow-visible py-2 md:py-0">
          <Button variant="outline">All</Button>
          <Button variant="outline">Images</Button>
          <Button variant="outline">Documents</Button>
        </div>
      </div>
      
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMedia.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="aspect-square bg-muted flex items-center justify-center relative">
              {item.type === 'image' ? (
                <img 
                  src={item.url} 
                  alt={item.name} 
                  className="object-cover w-full h-full"
                  loading="lazy"
                  width="300"
                  height="300"
                />
              ) : (
                <FileText className="h-16 w-16 text-muted-foreground" />
              )}
              <Button 
                size="icon" 
                variant="outline" 
                className="absolute top-2 right-2 h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-destructive hover:text-destructive-foreground"
                onClick={() => handleDeleteMedia(item.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div className="truncate font-medium text-sm">
                  {item.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {item.size}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredMedia.length === 0 && (
        <div className="text-center py-12 border rounded-lg">
          <Image className="h-12 w-12 mx-auto text-muted-foreground" />
          <h3 className="text-lg font-medium mt-4">No media found</h3>
          <p className="text-muted-foreground mt-2">
            {filter ? `No results for "${filter}"` : 'Upload media to get started'}
          </p>
        </div>
      )}
    </div>
  );
}
