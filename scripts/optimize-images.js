
/**
 * Image Optimization Script
 * 
 * This script converts all JPG and PNG images to WebP format
 * and optimizes them for web use.
 * 
 * Usage: 
 * 1. Install dependencies: npm install sharp glob
 * 2. Run: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

// Configuration
const inputGlobs = [
  'public/**/*.{jpg,jpeg,png}',
  'src/assets/**/*.{jpg,jpeg,png}'
];
const webpQuality = 80; // 0-100, higher is better quality but larger file size
const maxWidth = 1600; // Limit maximum width of images

async function optimizeImage(filePath) {
  try {
    console.log(`Processing: ${filePath}`);
    
    // Get output path with .webp extension
    const outputPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    // Skip if webp already exists and is newer than original
    if (fs.existsSync(outputPath)) {
      const originalStat = fs.statSync(filePath);
      const webpStat = fs.statSync(outputPath);
      
      if (webpStat.mtimeMs > originalStat.mtimeMs) {
        console.log(`Skipping: ${filePath} (WebP is newer)`);
        return;
      }
    }
    
    // Get image metadata
    const metadata = await sharp(filePath).metadata();
    
    // Determine if we need to resize
    const needsResize = metadata.width > maxWidth;
    
    // Process image
    let pipeline = sharp(filePath);
    
    if (needsResize) {
      pipeline = pipeline.resize({
        width: maxWidth,
        withoutEnlargement: true
      });
    }
    
    // Convert to WebP
    await pipeline
      .webp({
        quality: webpQuality,
        effort: 6, // 0-6, higher means slower but better compression
        lossless: false
      })
      .toFile(outputPath);
    
    // Log original size vs new size
    const originalSize = fs.statSync(filePath).size;
    const webpSize = fs.statSync(outputPath).size;
    const savings = (1 - (webpSize / originalSize)) * 100;
    
    console.log(`Optimized: ${filePath}`);
    console.log(`Original: ${(originalSize / 1024).toFixed(2)} KB, WebP: ${(webpSize / 1024).toFixed(2)} KB, Saved: ${savings.toFixed(2)}%`);
    
    if (needsResize) {
      console.log(`Resized from ${metadata.width}x${metadata.height} to fit within ${maxWidth}px width`);
    }
    
    console.log('---');
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

async function run() {
  // Find all images
  let allFiles = [];
  
  for (const pattern of inputGlobs) {
    const files = glob.sync(pattern);
    allFiles = [...allFiles, ...files];
  }
  
  console.log(`Found ${allFiles.length} images to process`);
  
  // Process each image
  for (const file of allFiles) {
    await optimizeImage(file);
  }
  
  console.log('Image optimization complete!');
}

run().catch(console.error);
