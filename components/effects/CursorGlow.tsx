'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function CursorGlow() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Large outer glow */}
      <motion.div
        className="pointer-events-none fixed z-50 mix-blend-screen"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="w-96 h-96 rounded-full bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Medium middle glow */}
      <motion.div
        className="pointer-events-none fixed z-50 mix-blend-screen"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="w-48 h-48 rounded-full bg-gradient-radial from-white/30 via-blue-300/20 to-transparent blur-2xl" />
      </motion.div>

      {/* Small inner glow */}
      <motion.div
        className="pointer-events-none fixed z-50 mix-blend-screen"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="w-24 h-24 rounded-full bg-gradient-radial from-white/40 to-transparent blur-xl" />
      </motion.div>
    </>
  );
}
