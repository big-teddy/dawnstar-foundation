'use client';

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useMemo, useRef } from 'react';
import Button from '../ui/Button';
import CursorGlow from '../effects/CursorGlow';
import ShootingStarsCanvas from '../effects/ShootingStarsCanvas';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Scroll parallax - extended for longer experience
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Star layers parallax
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const midgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const foregroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  // Hero content fades out as user scrolls
  const heroContentY = useTransform(scrollYProgress, [0, 0.3], ['0%', '10%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.5, 0]);

  // Stars fade out slightly as user scrolls to next section
  const starsOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.8, 0.3]);

  // Removed Why We Exist from hero - it's now a separate section

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 20;
        const y = (e.clientY - rect.top - rect.height / 2) / 20;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  // Optimized Starlight system - useMemo to prevent hydration mismatch
  const backgroundStars = useMemo(() => Array.from({ length: 100 }, (_, i) => ({
    id: `bg-${i}`,
    size: 1 + Math.random() * 1.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 8,
    opacity: 0.2 + Math.random() * 0.3,
    hasCross: false,
  })), []);

  const midgroundStars = useMemo(() => Array.from({ length: 50 }, (_, i) => ({
    id: `mid-${i}`,
    size: 1.5 + Math.random() * 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 2 + Math.random() * 3,
    delay: Math.random() * 6,
    opacity: 0.4 + Math.random() * 0.4,
    hasCross: Math.random() > 0.85,
  })), []);

  const foregroundStars = useMemo(() => Array.from({ length: 30 }, (_, i) => ({
    id: `fg-${i}`,
    size: 2 + Math.random() * 2.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 1.5 + Math.random() * 2.5,
    delay: Math.random() * 4,
    opacity: 0.6 + Math.random() * 0.4,
    hasCross: Math.random() > 0.5,
  })), []);


  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-transparent"
    >
      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Shooting Stars - rare and elegant */}
      <motion.div style={{ opacity: starsOpacity }}>
        <ShootingStarsCanvas />
      </motion.div>

      {/* Subtle animated gradient overlay - staying dark */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 animate-gradient" />
      </div>

      {/* Optimized star system - Rolls-Royce Starlight inspired */}
      {/* Background stars - simple and performant */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY, opacity: starsOpacity }}
      >
        {backgroundStars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.6)`,
            }}
            animate={{
              opacity: [star.opacity * 0.5, star.opacity, star.opacity * 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Midground stars - enhanced glow */}
      <motion.div
        className="absolute inset-0"
        style={{ y: midgroundY, opacity: starsOpacity }}
      >
        {midgroundStars.map((star) => (
          <div
            key={star.id}
            className="absolute"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
          >
            <motion.div
              className="relative"
              animate={{
                opacity: [star.opacity * 0.6, star.opacity, star.opacity * 0.6],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: star.duration,
                delay: star.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Core with glow */}
              <div
                className="rounded-full bg-white"
                style={{
                  width: star.size,
                  height: star.size,
                  boxShadow: `0 0 ${star.size * 3}px rgba(255, 255, 255, 0.8)`,
                }}
              />
              {/* Simple cross for select stars */}
              {star.hasCross && (
                <>
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                    style={{
                      width: star.size * 8,
                      height: 0.5,
                    }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/60 to-transparent"
                    style={{
                      width: 0.5,
                      height: star.size * 8,
                    }}
                  />
                </>
              )}
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* Foreground stars - premium Starlight effect */}
      <motion.div
        className="absolute inset-0"
        style={{ y: foregroundY, opacity: starsOpacity }}
      >
        {foregroundStars.map((star) => (
          <div
            key={star.id}
            className="absolute"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
          >
            <motion.div
              className="relative"
              animate={{
                opacity: [star.opacity * 0.7, star.opacity, star.opacity * 0.7],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: star.duration,
                delay: star.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Bright core with multi-layer glow */}
              <div
                className="rounded-full bg-white"
                style={{
                  width: star.size,
                  height: star.size,
                  boxShadow: `0 0 ${star.size * 4}px rgba(255, 255, 255, 1), 0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
                }}
              />
              {/* Premium cross/lens flare */}
              {star.hasCross && (
                <>
                  {/* Horizontal ray */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent"
                    style={{
                      width: star.size * 12,
                      height: 0.8,
                    }}
                  />
                  {/* Vertical ray */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/70 to-transparent"
                    style={{
                      width: 0.8,
                      height: star.size * 12,
                    }}
                  />
                  {/* Diagonal rays */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-45"
                    style={{
                      width: star.size * 8,
                      height: 0.5,
                    }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent -rotate-45"
                    style={{
                      width: star.size * 8,
                      height: 0.5,
                    }}
                  />
                </>
              )}
            </motion.div>
          </div>
        ))}
      </motion.div>


      {/* Hero Content - fades out as user scrolls */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: heroContentY, opacity: heroOpacity }}
        className="sticky top-0 flex items-center justify-center min-h-screen"
      >
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter">
              모든 아이의 잠재력이
              <br />
              빛나는 세상을 만듭니다
            </h1>
          </motion.div>

          {/* Sub Heading */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light"
          >
            새벽별 파운데이션은 AI 기술을 통해
            <br className="hidden sm:block" />
            경제적 배경이나 환경에 관계없이
            <br className="hidden sm:block" />
            모든 학생이 자신만의 속도로 배우고 성장할 수 있는
            <br className="hidden sm:block" />
            교육 환경을 만들어갑니다
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center pt-4"
          >
            <Button
              size="lg"
              className="group bg-white text-slate-900 hover:bg-slate-50 px-8 py-4 text-base font-semibold transition-all duration-300 shadow-lg"
            >
              우리의 미션 알아보기
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - fades out as user scrolls */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity: heroOpacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <div className="text-xs tracking-wider uppercase font-medium">
            Scroll
          </div>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </motion.div>

    </section>
  );
}
