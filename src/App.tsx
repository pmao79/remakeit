
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import ContactPage from "./pages/ContactPage";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import WebDesign from "./pages/services/WebDesign";
import WebRedesign from "./pages/services/WebRedesign";
import SeoOptimization from "./pages/services/SeoOptimization";
import ConversionOptimization from "./pages/services/ConversionOptimization";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import SitemapXML from "./pages/SitemapXML";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 5, // 5 minutes
      staleTime: 1000 * 60 * 2, // 2 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <LanguageProvider>
        <HelmetProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              {/* Swedish routes (primary language - at root) */}
              <Route path="/" element={<Index />} />
              <Route path="/om" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="/tjanster/webbdesign" element={<WebDesign />} />
              <Route path="/tjanster/webbplats-remake" element={<WebRedesign />} />
              <Route path="/tjanster/seo-optimering" element={<SeoOptimization />} />
              <Route path="/tjanster/konverteringsoptimering" element={<ConversionOptimization />} />
              <Route path="/blogg" element={<Blog />} />
              <Route path="/blogg/:slug" element={<BlogPost />} />
              
              {/* English routes (secondary language - with /en prefix) */}
              <Route path="/en" element={<Index />} />
              <Route path="/en/about" element={<About />} />
              <Route path="/en/portfolio" element={<Portfolio />} />
              <Route path="/en/contact" element={<ContactPage />} />
              <Route path="/en/services/web-design" element={<WebDesign />} />
              <Route path="/en/services/web-redesign" element={<WebRedesign />} />
              <Route path="/en/services/seo-optimization" element={<SeoOptimization />} />
              <Route path="/en/services/conversion-optimization" element={<ConversionOptimization />} />
              <Route path="/en/blog" element={<Blog />} />
              <Route path="/en/blog/:slug" element={<BlogPost />} />
              
              {/* Legacy routes - redirect to Swedish equivalents */}
              <Route path="/about" element={<Navigate to="/om" replace />} />
              <Route path="/contact" element={<Navigate to="/kontakt" replace />} />
              <Route path="/services/web-design" element={<Navigate to="/tjanster/webbdesign" replace />} />
              <Route path="/services/web-redesign" element={<Navigate to="/tjanster/webbplats-remake" replace />} />
              <Route path="/services/seo-optimization" element={<Navigate to="/tjanster/seo-optimering" replace />} />
              <Route path="/services/conversion-optimization" element={<Navigate to="/tjanster/konverteringsoptimering" replace />} />
              <Route path="/blog" element={<Navigate to="/blogg" replace />} />
              <Route path="/blog/:slug" element={<Navigate to="/blogg/:slug" replace />} />

              {/* Admin and other routes */}
              <Route path="/admin/*" element={<Admin />} />
              <Route path="/sitemap.xml" element={<SitemapXML />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </HelmetProvider>
      </LanguageProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
