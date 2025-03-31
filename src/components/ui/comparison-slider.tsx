
import React, { useState, useRef, useEffect } from 'react';

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  alt?: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
  beforeImage,
  afterImage,
  alt = "Before and after comparison"
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    // Don't prevent default here to allow scrolling when not directly on the slider
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const position = ((e.clientX - containerRect.left) / containerRect.width) * 100;
    
    // Limit position between 5% and 95%
    const limitedPosition = Math.min(Math.max(position, 5), 95);
    setSliderPosition(limitedPosition);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const position = ((touch.clientX - containerRect.left) / containerRect.width) * 100;
    
    const limitedPosition = Math.min(Math.max(position, 5), 95);
    setSliderPosition(limitedPosition);
    
    // Only prevent default when actually dragging the slider
    if (isDragging.current) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Use passive true for better scroll performance when not dragging
    const touchMoveHandler = (e: TouchEvent) => handleTouchMove(e);
    document.addEventListener('touchmove', touchMoveHandler, { passive: false });
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', touchMoveHandler);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="before-after-container aspect-video relative border border-white/10 rounded-lg overflow-hidden shadow-xl"
      aria-label={alt}
    >
      <div className="after-container relative w-full h-full">
        <img 
          src={afterImage} 
          alt="After" 
          className="after-image w-full h-full object-cover" 
        />
        <div className="absolute bottom-4 right-4 bg-brand-teal/90 text-black font-medium px-3 py-1 rounded text-sm">
          Efter
        </div>
      </div>
      
      <div 
        className="before-container absolute top-0 left-0 h-full overflow-hidden border-r-2 border-brand-teal" 
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="before-image w-full h-full object-cover" 
        />
        <div className="absolute bottom-4 left-4 bg-white/20 text-white font-medium px-3 py-1 rounded text-sm backdrop-blur-sm">
          Före
        </div>
      </div>
      
      <div 
        className="comparison-slider absolute top-0 bottom-0 w-8 cursor-ew-resize z-10 flex items-center justify-center transform -translate-x-1/2"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        role="slider"
        aria-valuenow={sliderPosition}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
      >
        <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center shadow-lg">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-black"
          >
            <path d="m9 18 6-6-6-6"></path>
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;
