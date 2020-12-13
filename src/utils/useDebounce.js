import { useEffect, useRef } from 'react';

function useDebounce(callback, timeout, deps) {
  const timeoutId = useRef();

  useEffect(() => {
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(callback, timeout);
    return () => clearTimeout(timeoutId.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useDebounce;
