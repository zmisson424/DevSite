import { useEffect, useState } from "react";

/**
 * Seconds elapsed since the page loaded, updated at most `framesPerSecond` times a second.
 * Stays at 0 while `isPaused` is true, so the caller renders a still frame.
 */
export function useAnimationClock({ framesPerSecond = 30, isPaused = false } = {}) {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    if (isPaused) {
      setElapsedSeconds(0);
      return undefined;
    }

    const minimumFrameGap = 1000 / framesPerSecond;
    let lastFrameTime = 0;
    let animationFrameId;

    const onFrame = (now) => {
      if (now - lastFrameTime >= minimumFrameGap) {
        lastFrameTime = now;
        setElapsedSeconds(now / 1000);
      }
      animationFrameId = requestAnimationFrame(onFrame);
    };

    animationFrameId = requestAnimationFrame(onFrame);
    return () => cancelAnimationFrame(animationFrameId);
  }, [framesPerSecond, isPaused]);

  return elapsedSeconds;
}
