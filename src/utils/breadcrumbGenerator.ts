
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface BreadcrumbItem {
  name: string;
  url: string;
}

export const useBreadcrumbs = (): BreadcrumbItem[] => {
  const location = useLocation();
  const { language } = useLanguage();
  
  // Get current path and remove trailing slash if exists
  let currentPath = location.pathname;
  if (currentPath.endsWith('/') && currentPath !== '/') {
    currentPath = currentPath.slice(0, -1);
  }

  // Determine if we're on an English or Swedish path
  const isEnglishPath = currentPath.startsWith('/en');
  
  // Initialize breadcrumbs with home
  const breadcrumbs: BreadcrumbItem[] = [
    {
      name: language === 'sv' ? 'Hem' : 'Home',
      url: isEnglishPath ? 'https://www.remakeit.se/en' : 'https://www.remakeit.se/'
    }
  ];

  // For English paths, adjust currentPath to remove /en prefix for processing
  let pathToProcess = currentPath;
  if (isEnglishPath) {
    pathToProcess = currentPath.replace(/^\/en/, '');
  }
  
  // Skip if we're on the homepage
  if (pathToProcess === '' || pathToProcess === '/') {
    return breadcrumbs;
  }

  // Split the path into segments
  const segments = pathToProcess.split('/').filter(segment => segment);

  // Build up the breadcrumb trail
  let cumulativePath = isEnglishPath ? '/en' : '';
  
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    cumulativePath += `/${segment}`;
    
    // Handle specific routes with language-specific names
    let breadcrumbName = '';
    
    switch(segment) {
      case 'om':
        breadcrumbName = 'Om oss';
        break;
      case 'about':
        breadcrumbName = 'About Us';
        break;
      case 'kontakt':
        breadcrumbName = 'Kontakt';
        break;
      case 'contact': 
        breadcrumbName = 'Contact';
        break;
      case 'portfolio':
        breadcrumbName = 'Portfolio';
        break;
      case 'blogg':
        breadcrumbName = 'Blogg';
        break;
      case 'blog':
        breadcrumbName = 'Blog';
        break;
      case 'tjanster':
        breadcrumbName = 'Tjänster';
        break;
      case 'services':
        breadcrumbName = 'Services';
        break;
      case 'webbdesign':
        breadcrumbName = 'Webbdesign';
        break;
      case 'web-design':
        breadcrumbName = 'Web Design';
        break;
      case 'webbplats-remake':
        breadcrumbName = 'Webbplats Remake';
        break;
      case 'web-redesign':
        breadcrumbName = 'Web Redesign';
        break;
      case 'seo-optimering':
        breadcrumbName = 'SEO-optimering';
        break;
      case 'seo-optimization':
        breadcrumbName = 'SEO Optimization';
        break;
      case 'konverteringsoptimering':
        breadcrumbName = 'Konverteringsoptimering';
        break;
      case 'conversion-optimization':
        breadcrumbName = 'Conversion Optimization';
        break;
      default:
        // For blog posts or other dynamic segments
        breadcrumbName = segment.replace(/-/g, ' ');
        // Capitalize
        breadcrumbName = breadcrumbName.charAt(0).toUpperCase() + breadcrumbName.slice(1);
    }
    
    breadcrumbs.push({
      name: breadcrumbName,
      url: `https://www.remakeit.se${cumulativePath}`
    });
  }
  
  return breadcrumbs;
};
