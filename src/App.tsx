
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from "./contexts/LanguageContext";
import { lazy, Suspense } from 'react';

// Lazy load components for better code splitting
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Admin = lazy(() => import("./pages/Admin"));
const NotFound = lazy(() => import("./pages/NotFound"));
const WebDesign = lazy(() => import("./pages/services/WebDesign"));
const WebRedesign = lazy(() => import("./pages/services/WebRedesign"));
const SeoOptimization = lazy(() => import("./pages/services/SeoOptimization"));
const ConversionOptimization = lazy(() => import("./pages/services/ConversionOptimization"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const SitemapXML = lazy(() => import("./pages/SitemapXML"));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-t-brand-teal border-opacity-50 rounded-full animate-spin mx-auto"></div>
      <p className="mt-4 text-lg">Loading...</p>
    </div>
  </div>
);

// Create query client with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (previously cacheTime)
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services/web-design" element={<WebDesign />} />
                <Route path="/services/web-redesign" element={<WebRedesign />} />
                <Route path="/services/seo-optimization" element={<SeoOptimization />} />
                <Route path="/services/conversion-optimization" element={<ConversionOptimization />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/admin/*" element={<Admin />} />
                <Route path="/sitemap.xml" element={<SitemapXML />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
