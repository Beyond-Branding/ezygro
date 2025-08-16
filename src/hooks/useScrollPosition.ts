// Custom hook for scroll position tracking
import { useState, useEffect } from 'react';
import { throttle } from '@/utils';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollPosition = throttle(() => {
      const currentScrollY = window.pageYOffset;
      setScrollPosition(currentScrollY);
      setIsScrollingDown(currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;
    }, 100);

    window.addEventListener('scroll', updateScrollPosition);
    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);

  return { scrollPosition, isScrollingDown };
}

export function useScrollToTop() {
  const scrollToTop = (smooth: boolean = true) => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: smooth ? 'smooth' : 'auto'
      });
    }
  };

  return scrollToTop;
}

export function useScrollVisibility(threshold: number = 300) {
  const { scrollPosition } = useScrollPosition();
  return scrollPosition > threshold;
}
