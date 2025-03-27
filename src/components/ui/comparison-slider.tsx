
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

  const handleMouseDown = () => {
    isDragging.current = true;
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
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const position = ((touch.clientX - containerRect.left) / containerRect.width) * 100;
    
    const limitedPosition = Math.min(Math.max(position, 5), 95);
    setSliderPosition(limitedPosition);
    
    e.preventDefault(); // Prevent page scrolling while dragging
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove as any, { passive: false });
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove as any);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="before-after-container aspect-video"
      aria-label={alt}
    >
      <div className="after-container relative w-full h-full">
        <img 
          src={afterImage} 
          alt="After" 
          className="after-image" 
        />
      </div>
      
      <div 
        className="before-container" 
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="before-image" 
        />
      </div>
      
      <div 
        className="comparison-slider"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        role="slider"
        aria-valuenow={sliderPosition}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
      />
    </div>
  );
};

export default ComparisonSlider;
