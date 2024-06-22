import React, { useEffect, useRef } from 'react';

export default function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
      const now = Date.now();
      localStorage.setItem('lastExecution', now.toString());
    }

    if (delay !== null) {
      const lastExecution = localStorage.getItem('lastExecution');
      const now = Date.now();
      const elapsed = lastExecution ? now - parseInt(lastExecution, 10) : delay;

      const initialDelay = delay - (elapsed % delay);

      const initialTimeout = setTimeout(() => {
        tick();
        const id = setInterval(tick, delay);
        localStorage.setItem('intervalId', id.toString());
      }, initialDelay);

      return () => {
        clearTimeout(initialTimeout);
        const intervalId = localStorage.getItem('intervalId');
        if (intervalId) {
          clearInterval(parseInt(intervalId, 10));
          localStorage.removeItem('intervalId');
        }
      };
    }
  }, [delay]);
}