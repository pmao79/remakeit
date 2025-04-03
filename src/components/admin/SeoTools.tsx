
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
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Search, RefreshCw, FileText, Check, Copy } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function SeoTools() {
  const [pageTitle, setPageTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [generatedTags, setGeneratedTags] = useState<string | null>(null);
  const [keywordAnalysis, setKeywordAnalysis] = useState<null | {
    keyword: string;
    volume: string;
    difficulty: string;
    cpc: string;
  }[]>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisKeyword, setAnalysisKeyword] = useState('');

  const handleGenerateMetaTags = () => {
    if (!pageTitle) {
      toast.error('Please enter a page title');
      return;
    }

    const tags = `
<!-- Primary Meta Tags -->
<title>${pageTitle}</title>
<meta name="title" content="${pageTitle}">
<meta name="description" content="${metaDescription}">
${keywords ? `<meta name="keywords" content="${keywords}">` : ''}

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://remakeit.com/">
<meta property="og:title" content="${pageTitle}">
<meta property="og:description" content="${metaDescription}">
<meta property="og:image" content="https://remakeit.com/meta-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://remakeit.com/">
<meta property="twitter:title" content="${pageTitle}">
<meta property="twitter:description" content="${metaDescription}">
<meta property="twitter:image" content="https://remakeit.com/meta-image.jpg">
    `;
    
    setGeneratedTags(tags);
    toast.success('Meta tags generated successfully!');
  };

  const handleRegenerateSitemap = () => {
    // In a real application, this would trigger a backend process to regenerate the sitemap
    toast.success('Sitemap regenerated successfully!');
  };

  const handleViewSitemap = () => {
    window.open('/sitemap.xml', '_blank');
  };

  const copyToClipboard = () => {
    if (generatedTags) {
      navigator.clipboard.writeText(generatedTags);
      toast.success('Meta tags copied to clipboard!');
    }
  };

  const handleKeywordAnalysis = () => {
    if (!analysisKeyword) {
      toast.error('Please enter a keyword to analyze');
      return;
    }

    setIsAnalyzing(true);

    // Simulating API call for keyword analysis
    setTimeout(() => {
      // Mock data for demonstration
      const mockData = [
        {
          keyword: analysisKeyword,
          volume: '1,000-10,000',
          difficulty: 'Medium',
          cpc: '$2.50'
        },
        {
          keyword: `${analysisKeyword} service`,
          volume: '500-1,000',
          difficulty: 'Low',
          cpc: '$1.75'
        },
        {
          keyword: `best ${analysisKeyword}`,
          volume: '1,000-5,000',
          difficulty: 'High',
          cpc: '$3.25'
        },
        {
          keyword: `${analysisKeyword} company`,
          volume: '100-500',
          difficulty: 'Medium',
          cpc: '$2.10'
        },
        {
          keyword: `affordable ${analysisKeyword}`,
          volume: '100-500',
          difficulty: 'Low',
          cpc: '$1.50'
        }
      ];

      setKeywordAnalysis(mockData);
      setIsAnalyzing(false);
      toast.success('Keyword analysis completed!');
    }, 2000);
  };

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
              <Input 
                id="page-title" 
                placeholder="Enter page title" 
                value={pageTitle}
                onChange={(e) => setPageTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="description" className="text-sm font-medium">Meta Description</label>
              <Textarea 
                id="description" 
                placeholder="Enter meta description (150-160 characters)" 
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
              />
              {metaDescription && (
                <p className={`text-xs mt-1 ${metaDescription.length > 160 ? 'text-red-500' : metaDescription.length < 120 ? 'text-yellow-500' : 'text-green-500'}`}>
                  {metaDescription.length}/160 characters
                </p>
              )}
            </div>
            <div>
              <label htmlFor="keywords" className="text-sm font-medium">Keywords</label>
              <Input 
                id="keywords" 
                placeholder="keyword1, keyword2, keyword3" 
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleGenerateMetaTags}>
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
            <Button variant="outline" className="flex-1" onClick={handleRegenerateSitemap}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Regenerate Sitemap
            </Button>
            <Button className="flex-1" onClick={handleViewSitemap}>
              View Sitemap
            </Button>
          </CardFooter>
        </Card>
        
        {generatedTags && (
          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Generated Meta Tags</CardTitle>
                <CardDescription>
                  Copy and paste these tags into your HTML <code>&lt;head&gt;</code> section
                </CardDescription>
              </div>
              <Button variant="outline" size="icon" onClick={copyToClipboard}>
                <Copy className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-md bg-muted p-4 overflow-auto max-h-[200px]">
                <pre className="text-sm">{generatedTags}</pre>
              </div>
            </CardContent>
          </Card>
        )}
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Keyword Analysis</CardTitle>
            <CardDescription>
              Analyze SEO keywords for your website
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input 
                placeholder="Enter keyword to analyze" 
                className="flex-1"
                value={analysisKeyword}
                onChange={(e) => setAnalysisKeyword(e.target.value)} 
              />
              <Button onClick={handleKeywordAnalysis} disabled={isAnalyzing}>
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4 mr-2" /> Analyze
                  </>
                )}
              </Button>
            </div>
            
            {keywordAnalysis ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Keyword</TableHead>
                    <TableHead>Search Volume</TableHead>
                    <TableHead>Difficulty</TableHead>
                    <TableHead>CPC</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {keywordAnalysis.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.keyword}</TableCell>
                      <TableCell>{item.volume}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.difficulty === 'High' ? 'bg-red-100 text-red-800' : 
                          item.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-green-100 text-green-800'
                        }`}>
                          {item.difficulty}
                        </span>
                      </TableCell>
                      <TableCell>{item.cpc}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="border rounded-md p-4 text-center py-12">
                <p className="text-muted-foreground">
                  Enter a keyword above to analyze
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
