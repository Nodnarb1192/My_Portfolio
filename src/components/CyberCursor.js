import React, { useEffect, useRef } from 'react';
import './CyberCursor.css';

function CyberCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const trail = useRef({ x: -200, y: -200 });
  const animRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', move);

    const lerp = (a, b, t) => a + (b - a) * t;
    const update = () => {
      trail.current.x = lerp(trail.current.x, pos.current.x, 0.12);
      trail.current.y = lerp(trail.current.y, pos.current.y, 0.12);

      if (dotRef.current) {
        dotRef.current.style.left = `${pos.current.x}px`;
        dotRef.current.style.top = `${pos.current.y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${trail.current.x}px`;
        ringRef.current.style.top = `${trail.current.y}px`;
      }
      animRef.current = requestAnimationFrame(update);
    };
    animRef.current = requestAnimationFrame(update);

    const handleHover = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea')) {
        dotRef.current?.classList.add('cyber-cursor--hover');
        ringRef.current?.classList.add('cyber-cursor-ring--hover');
      }
    };
    const handleLeave = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea')) {
        dotRef.current?.classList.remove('cyber-cursor--hover');
        ringRef.current?.classList.remove('cyber-cursor-ring--hover');
      }
    };

    document.addEventListener('mouseover', handleHover);
    document.addEventListener('mouseout', handleLeave);

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(animRef.current);
      document.removeEventListener('mouseover', handleHover);
      document.removeEventListener('mouseout', handleLeave);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cyber-cursor" />
      <div ref={ringRef} className="cyber-cursor-ring" />
    </>
  );
}

export default CyberCursor;
