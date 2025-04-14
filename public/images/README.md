
# Images Directory

This directory contains optimized images for the RemakeiT website. All images should be optimized for web before being added here.

## Directory Structure

- `/services/` - Images for service pages
- `/blog/` - Images for blog content
- `/portfolio/` - Portfolio project images
- `/team/` - Team member images
- `/icons/` - Icons and smaller UI elements

## Image Formats

For optimal performance, use:
- `.webp` for photos and complex images (with fallback .jpg)
- `.svg` for logos and simple graphics
- `.png` for images requiring transparency

## Image Optimization

All images should be:
- Properly sized for their intended use
- Compressed without significant quality loss
- Named descriptively with kebab-case

## Guidelines for Adding Images

1. Optimize images before adding them to the repository
2. Use descriptive file names (e.g., `web-design-process.webp`)
3. Never use spaces in file names
4. Include proper alt text when adding to the website
5. For LCP (Largest Contentful Paint) images, mark with fetchPriority="high"

The `hero-banner.webp` image is used as LCP image and should be preloaded for optimal performance.
