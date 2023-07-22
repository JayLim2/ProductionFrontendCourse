import { useCallback, useRef } from 'react';
import { type Callback } from 'shared/lib/hooks/types/VoidCallback';

// TODO 03.04.2023 / Read more about 'useRef'
export function useDebounce(callback: Callback<void>, delay: number): Callback<void> {
  const timer = useRef<any>();

  return useCallback((...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
}
