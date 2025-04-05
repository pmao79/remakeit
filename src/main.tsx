
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add performance measurement
if (process.env.NODE_ENV === 'production') {
  // Report Web Vitals
  const reportWebVitals = () => {
    // Only report in production and don't block the main thread
    setTimeout(() => {
      if ('performance' in window) {
        const metrics = performance.getEntriesByType('navigation');
        if (metrics.length > 0) {
          const navigationEntry = metrics[0] as PerformanceNavigationTiming;
          
          // Log critical metrics
          console.log('Time to First Byte (TTFB):', navigationEntry.responseStart);
          console.log('DOM Content Loaded:', navigationEntry.domContentLoadedEventEnd);
          console.log('Window Load:', navigationEntry.loadEventEnd);
          
          // Largest Contentful Paint (if available)
          new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('Largest Contentful Paint:', lastEntry.startTime);
          }).observe({type: 'largest-contentful-paint', buffered: true});
          
          // First Input Delay (if available)
          new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach(entry => {
              const delay = entry.processingStart - entry.startTime;
              console.log('First Input Delay:', delay);
            });
          }).observe({type: 'first-input', buffered: true});
        }
      }
    }, 0);
  };
  
  window.addEventListener('load', reportWebVitals);
}

createRoot(document.getElementById("root")!).render(<App />);
