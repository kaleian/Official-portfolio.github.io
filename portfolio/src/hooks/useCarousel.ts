import { useState, useEffect, useRef, useCallback } from 'react';

export const useCarousel = (itemsCount: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ✅ useCallback to avoid stale closures
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % itemsCount);
  }, [itemsCount]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + itemsCount) % itemsCount);
  }, [itemsCount]);

  // ✅ Update track position smoothly
  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      const cardWidth = 350 + 32; // width + gap
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  }, [currentIndex, itemsCount]);

  // ✅ Auto-play interval with proper cleanup
  useEffect(() => {
    // Start auto-play
    intervalRef.current = setInterval(nextSlide, 5000);

    // Cleanup function
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide]); // depends on nextSlide to avoid stale closure

  // ✅ Pause and resume helpers
  const pauseCarousel = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const resumeCarousel = useCallback(() => {
    pauseCarousel(); // ensure no duplicate intervals
    intervalRef.current = setInterval(nextSlide, 5000);
  }, [pauseCarousel, nextSlide]);

  return {
    currentIndex,
    trackRef,
    nextSlide,
    prevSlide,
    pauseCarousel,
    resumeCarousel,
  };
};
