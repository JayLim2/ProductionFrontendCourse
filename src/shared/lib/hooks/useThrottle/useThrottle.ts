import { useCallback, useRef } from 'react';
import { type Callback } from 'shared/lib/hooks/types/VoidCallback';

export function useThrottle(callback: Callback<void>, delay: number): Callback<void> {
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
