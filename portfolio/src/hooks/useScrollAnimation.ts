import { useEffect, useRef } from 'react';

export function useScrollAnimation<T extends HTMLElement>() {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const rootElement = elementRef.current;
    if (!rootElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // If the root element itself has animate-on-scroll, observe it
    if (rootElement.classList.contains('animate-on-scroll')) {
      observer.observe(rootElement);
    }

    // Also find any children with .animate-on-scroll
    const animatables = rootElement.querySelectorAll('.animate-on-scroll');
    animatables.forEach((el) => observer.observe(el));

    // Fallback: If elements are already in viewport on load, animate them
    const rect = rootElement.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      rootElement.classList.add('animated');
      animatables.forEach((el) => {
        const childRect = el.getBoundingClientRect();
        if (childRect.top < window.innerHeight) {
          el.classList.add('animated');
        }
      });
    }

    return () => observer.disconnect();
  }, []);

  return elementRef;
}
