
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from "./contexts/LanguageContext";
import { routeMap } from "./utils/routeTranslations";
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
              <Route path={routeMap.home.sv} element={<Index />} />
              <Route path={routeMap.about.sv} element={<About />} />
              <Route path={routeMap.portfolio.sv} element={<Portfolio />} />
              <Route path={routeMap.contact.sv} element={<ContactPage />} />
              <Route path={routeMap.webDesign.sv} element={<WebDesign />} />
              <Route path={routeMap.webRedesign.sv} element={<WebRedesign />} />
              <Route path={routeMap.seoOptimization.sv} element={<SeoOptimization />} />
              <Route path={routeMap.conversionOptimization.sv} element={<ConversionOptimization />} />
              <Route path={routeMap.blog.sv} element={<Blog />} />
              <Route path={routeMap.blogPost.sv} element={<BlogPost />} />
              
              {/* English routes (secondary language - with /en prefix) */}
              <Route path={routeMap.home.en} element={<Index />} />
              <Route path={routeMap.about.en} element={<About />} />
              <Route path={routeMap.portfolio.en} element={<Portfolio />} />
              <Route path={routeMap.contact.en} element={<ContactPage />} />
              <Route path={routeMap.webDesign.en} element={<WebDesign />} />
              <Route path={routeMap.webRedesign.en} element={<WebRedesign />} />
              <Route path={routeMap.seoOptimization.en} element={<SeoOptimization />} />
              <Route path={routeMap.conversionOptimization.en} element={<ConversionOptimization />} />
              <Route path={routeMap.blog.en} element={<Blog />} />
              <Route path={routeMap.blogPost.en} element={<BlogPost />} />
              
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
              <Route path={routeMap.admin.sv} element={<Admin />} />
              <Route path={routeMap.sitemap.sv} element={<SitemapXML />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </HelmetProvider>
      </LanguageProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
