import React, { useEffect, useRef } from 'react';
import './PageTransition.css';

function PageTransition({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('page-glitch-in');
    const t = setTimeout(() => {
      if (el) el.classList.remove('page-glitch-in');
    }, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative', zIndex: 1 }}>
      {children}
    </div>
  );
}

export default PageTransition;
