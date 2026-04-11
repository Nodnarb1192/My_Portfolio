import React, { useEffect, useRef } from 'react';

const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨ0123456789ABCDEF></?!@#%&01';

function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animFrame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const fontSize = 13;
    let drops = [];

    const initDrops = () => {
      const columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -80);
    };
    initDrops();

    const COLORS = ['#005f6b', '#006b5f', '#8b6b00', '#006070', '#006070', '#005060'];

    const draw = () => {
      ctx.fillStyle = 'rgba(255, 247, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const columns = Math.floor(canvas.width / fontSize);
      if (drops.length !== columns) initDrops();

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillStyle = COLORS[Math.floor(Math.random() * COLORS.length)];
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }

      animFrame = requestAnimationFrame(draw);
    };

    animFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        opacity: 0.14,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

export default MatrixRain;
