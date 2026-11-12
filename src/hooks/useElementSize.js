import { useEffect, useRef, useState } from "react";

/**
 * Tracks an element's rendered width and height.
 * Attach the returned `elementRef` to the element you want to measure.
 */
export function useElementSize(fallbackSize) {
  const elementRef = useRef(null);
  const [size, setSize] = useState(fallbackSize);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });

    resizeObserver.observe(element);
    return () => resizeObserver.disconnect();
  }, []);

  return { elementRef, size };
}
