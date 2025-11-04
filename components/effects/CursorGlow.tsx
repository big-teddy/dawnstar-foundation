'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [isMobile, setIsMobile] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect if device is mobile/tablet (no mouse)
    const checkMobile = () => {
      const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024;
      setIsMobile(hasTouchScreen || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Don't add mousemove listener on mobile devices
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY, isMobile]);

  // Don't render on mobile devices
  if (isMobile) return null;

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
