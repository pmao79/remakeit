
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
    <LanguageProvider>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Swedish Routes (Default) */}
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
              
              {/* English Routes */}
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
              
              {/* Admin and utility routes */}
              <Route path="/admin/*" element={<Admin />} />
              
              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
