'use client'
import { useState, useEffect } from "react";

export function MeteorDemo() {
  const names = ["JV", "maddog", "Jatin", "Mushashi"];
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      // After the fade-out animation completes, change the name
      setTimeout(() => {
        setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
        setIsAnimating(false);
      }, 500); 
      
    }, 3000); 
    
    return () => clearInterval(interval);
  }, [names.length]);

  return (
    <div className="relative flex h-[100px] w-full flex-col items-center justify-center overflow-hidden">
      <span className="pointer-events-none whitespace-pre-wrap text-center text-5xl md:text-8xl font-bold leading-none">
        <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-gray-100">Hi I&apos;m </span>
        <span 
          className={`text-blue-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-opacity duration-1000 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          {names[currentNameIndex]}.
        </span>
      </span>
    </div>
  );
}