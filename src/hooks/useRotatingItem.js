import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Cycles through a list, returning the current item.
 * Holds on the first item when the visitor prefers reduced motion.
 */
export function useRotatingItem(items, intervalInMilliseconds) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setCurrentIndex(0);
      return undefined;
    }

    const timerId = setInterval(() => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % items.length);
    }, intervalInMilliseconds);

    return () => clearInterval(timerId);
  }, [items.length, intervalInMilliseconds, prefersReducedMotion]);

  return items[currentIndex];
}
