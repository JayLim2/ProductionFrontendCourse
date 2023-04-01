import { useCallback, useRef } from 'react';

type Callback = (...args: any[]) => void;

export function useThrottle(callback: Callback, delay: number): Callback {
  const throttleRef = useRef(false);

  return useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      callback(...args);
      throttleRef.current = true;

      setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }
  }, [callback, delay]);
}
