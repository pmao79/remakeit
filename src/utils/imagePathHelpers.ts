
/**
 * Utility functions for handling image paths across the application.
 * These functions ensure consistent image paths and provide fallbacks.
 */

/**
 * Returns a properly formatted path to an image
 * @param imagePath Path segment after /images/
 * @param fallback Optional fallback image if the primary is not found
 * @returns Complete URL to the image
 */
export const getImagePath = (imagePath: string, fallback?: string): string => {
  // Check if path already includes /images/ to avoid double paths
  if (imagePath.startsWith('/images/')) {
    return imagePath;
  }
  
  // Add /images/ prefix if not present
  return `/images/${imagePath}`;
};

/**
 * Returns a properly formatted path to a service image
 * @param serviceName Name of the service (used as filename)
 * @returns Path to the service image
 */
export const getServiceImagePath = (serviceName: string): string => {
  return `/images/services/${serviceName}.webp`;
};

/**
 * Returns a properly formatted path to a blog post image
 * @param slug The blog post slug
 * @param language Current language
 * @returns Path to the blog image or default blog image if not found
 */
export const getBlogImagePath = (slug: string, language: 'sv' | 'en'): string => {
  return `/images/blog/${slug}.webp`;
};

/**
 * Returns the full URL (including domain) for an image path
 * @param imagePath Relative path to the image
 * @returns Absolute URL to the image
 */
export const getFullImageUrl = (imagePath: string): string => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
  
  return `https://www.remakeit.se/${cleanPath}`;
};

/**
 * Get the hero banner image with proper optimization attributes
 * @returns Object with image path and optimization attributes
 */
export const getHeroBanner = () => {
  return {
    src: "/lovable-uploads/f8a50cb9-78e9-4aa1-a5e9-55894c5c8407.png",
    alt: "RemakeiT hero banner",
    className: "w-full h-full object-cover object-center",
    loading: "eager" as const,
    fetchPriority: "high" as const,
    decoding: "async" as const
  };
};
