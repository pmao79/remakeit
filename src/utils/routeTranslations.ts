
// Define route translations between Swedish and English paths
type RouteTranslations = {
  sv: string;
  en: string;
};

export const routeMap: Record<string, RouteTranslations> = {
  // Main pages
  home: { sv: '/', en: '/en' },
  about: { sv: '/om', en: '/en/about' },
  portfolio: { sv: '/portfolio', en: '/en/portfolio' },
  contact: { sv: '/kontakt', en: '/en/contact' },
  blog: { sv: '/blogg', en: '/en/blog' },
  blogPost: { sv: '/blogg/:slug', en: '/en/blog/:slug' },
  
  // Services
  webDesign: { sv: '/tjanster/webbdesign', en: '/en/services/web-design' },
  webRedesign: { sv: '/tjanster/webbplats-remake', en: '/en/services/web-redesign' },
  seoOptimization: { sv: '/tjanster/seo-optimering', en: '/en/services/seo-optimization' },
  conversionOptimization: { sv: '/tjanster/konverteringsoptimering', en: '/en/services/conversion-optimization' },
  
  // Special pages
  admin: { sv: '/admin/*', en: '/admin/*' }, // Admin is language-agnostic
  sitemap: { sv: '/sitemap.xml', en: '/sitemap.xml' }, // Sitemap is language-agnostic
};

/**
 * Translate a path from one language to another
 * @param path Current path
 * @param targetLang Target language
 * @returns Translated path
 */
export const translatePath = (path: string, currentLang: 'sv' | 'en', targetLang: 'sv' | 'en'): string => {
  // If languages are the same, return the original path
  if (currentLang === targetLang) {
    return path;
  }
  
  // Handle special case for root
  if (path === '/') {
    return targetLang === 'en' ? '/en' : '/';
  }

  // Check if path starts with /en/ prefix (English path)
  if (path.startsWith('/en/') && targetLang === 'sv') {
    const pathWithoutPrefix = path.replace(/^\/en\//, '/');
    
    // Try to find the corresponding Swedish path
    for (const key in routeMap) {
      const enPath = routeMap[key].en;
      // Use regex to handle route params like :slug
      const regexPattern = enPath.replace(/:[^/]+/g, '[^/]+');
      const regex = new RegExp(`^${regexPattern}$`);
      
      if (regex.test(path)) {
        let svPath = routeMap[key].sv;
        
        // Handle params like :slug
        if (enPath.includes(':') && svPath.includes(':')) {
          const enParts = enPath.split('/');
          const pathParts = path.split('/');
          
          for (let i = 0; i < enParts.length; i++) {
            if (enParts[i].startsWith(':')) {
              const paramName = enParts[i].substring(1);
              const paramValue = pathParts[i];
              svPath = svPath.replace(`:${paramName}`, paramValue);
            }
          }
        }
        
        return svPath;
      }
    }
    
    // Fallback: just remove the /en prefix
    return pathWithoutPrefix;
  }
  
  // Handle Swedish to English path
  if (!path.startsWith('/en/') && targetLang === 'en') {
    // Try to find the corresponding English path
    for (const key in routeMap) {
      const svPath = routeMap[key].sv;
      // Use regex to handle route params like :slug
      const regexPattern = svPath.replace(/:[^/]+/g, '[^/]+');
      const regex = new RegExp(`^${regexPattern}$`);
      
      if (regex.test(path)) {
        let enPath = routeMap[key].en;
        
        // Handle params like :slug
        if (svPath.includes(':') && enPath.includes(':')) {
          const svParts = svPath.split('/');
          const pathParts = path.split('/');
          
          for (let i = 0; i < svParts.length; i++) {
            if (svParts[i].startsWith(':')) {
              const paramName = svParts[i].substring(1);
              const paramValue = pathParts[i];
              enPath = enPath.replace(`:${paramName}`, paramValue);
            }
          }
        }
        
        return enPath;
      }
    }
    
    // Fallback: just add the /en prefix
    return `/en${path}`;
  }
  
  // If we couldn't translate, return the original path
  return path;
};

/**
 * Generate the appropriate URL based on language and route key
 * @param key Route key from routeMap
 * @param language Current language
 * @param params Optional route parameters
 * @returns Full URL
 */
export const getRouteByKey = (key: keyof typeof routeMap, language: 'sv' | 'en', params?: Record<string, string>): string => {
  let route = routeMap[key][language];
  
  // Replace any params in the route
  if (params) {
    Object.entries(params).forEach(([paramName, paramValue]) => {
      route = route.replace(`:${paramName}`, paramValue);
    });
  }
  
  return route;
};
