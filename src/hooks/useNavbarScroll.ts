// ============================================================
// ScaleIQ — useNavbarScroll Hook
// Tracks scroll position and returns whether user has scrolled
// ============================================================

import { useState, useEffect } from 'react';

export function useNavbarScroll(threshold = 40): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return scrolled;
}
