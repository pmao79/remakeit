
import React from 'react';
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
import { Search, RefreshCw } from 'lucide-react';

export function SeoTools() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">SEO Tools</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Meta Tag Generator</CardTitle>
            <CardDescription>
              Generate meta tags for your pages
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label htmlFor="page-title" className="text-sm font-medium">Page Title</label>
              <Input id="page-title" placeholder="Enter page title" />
            </div>
            <div>
              <label htmlFor="description" className="text-sm font-medium">Meta Description</label>
              <Textarea id="description" placeholder="Enter meta description (150-160 characters)" />
            </div>
            <div>
              <label htmlFor="keywords" className="text-sm font-medium">Keywords</label>
              <Input id="keywords" placeholder="keyword1, keyword2, keyword3" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              Generate Meta Tags
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Sitemap Management</CardTitle>
            <CardDescription>
              Update and validate your sitemap.xml
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-md p-4 bg-muted/50">
              <p className="text-sm">
                Current sitemap.xml includes <strong>10</strong> URLs
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Last updated: April 3, 2025
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button variant="outline" className="flex-1">
              <RefreshCw className="h-4 w-4 mr-2" />
              Regenerate Sitemap
            </Button>
            <Button className="flex-1">
              View Sitemap
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Keyword Analysis</CardTitle>
            <CardDescription>
              Analyze SEO keywords for your website
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input placeholder="Enter keywords or URL to analyze" className="flex-1" />
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Analyze
              </Button>
            </div>
            
            <div className="border rounded-md p-4 text-center py-12">
              <p className="text-muted-foreground">
                Enter keywords or a URL above to analyze
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
