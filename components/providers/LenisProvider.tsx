"use client";

import { ReactNode, useEffect, useState, useMemo, createContext, useContext } from "react";
import Lenis from "lenis";

interface LenisContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | HTMLElement | number, options?: ScrollToOptions) => void;
}

interface ScrollToOptions {
  offset?: number;
  duration?: number;
  immediate?: boolean;
  lock?: boolean;
  force?: boolean;
  easing?: (t: number) => number;
  onComplete?: () => void;
}

// Create context with default values
const LenisContext = createContext<LenisContextType>({
  lenis: null,
  scrollTo: () => {},
});

// Hook to use the Lenis context
export const useLenis = () => useContext(LenisContext);

interface LenisProviderProps {
  children: ReactNode;
  options?: {
    duration?: number;
    easing?: (t: number) => number;
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    touchMultiplier?: number;
    wheelMultiplier?: number;
  };
}

export default function LenisProvider({
  children,
  options: userOptions,
}: LenisProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  
  // Memoize the options to prevent recreation on each render
  const options = useMemo(() => {
    return {
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      ...userOptions,
    };
  }, [userOptions]);

  useEffect(() => {
    const lenisInstance = new Lenis(options);

    let rafId: number;
    function raf(time: number) {
      lenisInstance.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);
    setLenis(lenisInstance);

    return () => {
      cancelAnimationFrame(rafId);
      lenisInstance.destroy();
    };
  }, [options]);

  // Create a scrollTo function that wraps the lenis scrollTo method
  const scrollTo = useMemo(() => {
    return (target: string | HTMLElement | number, options?: ScrollToOptions) => {
      if (lenis) {
        lenis.scrollTo(target, options);
      }
    };
  }, [lenis]);

  // Context value
  const contextValue = useMemo(() => ({
    lenis,
    scrollTo,
  }), [lenis, scrollTo]);

  return (
    <LenisContext.Provider value={contextValue}>
      {children}
    </LenisContext.Provider>
  );
} 