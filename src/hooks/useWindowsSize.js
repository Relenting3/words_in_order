import { useState, useEffect, useRef } from 'react';

export const useWindowSize = () => {
  const lastWidth = useRef();
  const [windowSize, setWindowSize] = useState(getSize())

  function getSize() {
    return {
      width: window.innerWidth
    }
  }

  useEffect(() => {
    function onResize() {
      if (window.innerWidth !== lastWidth.current) {
        const width = getSize();
        lastWidth.current = width;
        setWindowSize(prev => prev = width)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, []) 

  return windowSize
}