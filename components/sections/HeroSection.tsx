'use client';

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import CursorGlow from '../effects/CursorGlow';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const midgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const foregroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

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
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Enhanced star system with multiple layers
  const backgroundStars = Array.from({ length: 150 }, (_, i) => ({
    id: `bg-${i}`,
    size: 1 + Math.random() * 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 20 + Math.random() * 15,
    delay: Math.random() * 10,
    opacity: 0.2 + Math.random() * 0.3,
  }));

  const midgroundStars = Array.from({ length: 80 }, (_, i) => ({
    id: `mid-${i}`,
    size: 2 + Math.random() * 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 10 + Math.random() * 8,
    delay: Math.random() * 5,
    opacity: 0.4 + Math.random() * 0.4,
  }));

  const foregroundStars = Array.from({ length: 40 }, (_, i) => ({
    id: `fg-${i}`,
    size: 3 + Math.random() * 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 5 + Math.random() * 5,
    delay: Math.random() * 3,
    opacity: 0.6 + Math.random() * 0.4,
  }));

  // Shooting stars
  const shootingStars = Array.from({ length: 3 }, (_, i) => ({
    id: `shooting-${i}`,
    startX: Math.random() * 100,
    startY: Math.random() * 30,
    delay: i * 8 + Math.random() * 5,
  }));

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient" />
      </div>

      {/* Multi-layer star system */}
      {/* Background stars - smallest and slowest */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        {backgroundStars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [star.opacity * 0.5, star.opacity, star.opacity * 0.5],
              scale: [1, 1.1, 1],
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

      {/* Midground stars - medium size and speed */}
      <motion.div className="absolute inset-0" style={{ y: midgroundY }}>
        {midgroundStars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full shadow-lg shadow-white/50"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
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
          />
        ))}
      </motion.div>

      {/* Foreground stars - largest and brightest */}
      <motion.div className="absolute inset-0" style={{ y: foregroundY }}>
        {foregroundStars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full shadow-xl shadow-white/70"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [star.opacity * 0.7, star.opacity, star.opacity * 0.7],
              scale: [1, 1.5, 1],
              boxShadow: [
                '0 0 10px rgba(255,255,255,0.5)',
                '0 0 20px rgba(255,255,255,0.8)',
                '0 0 10px rgba(255,255,255,0.5)',
              ],
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

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [0, 300],
            y: [0, 150],
            scaleX: [1, 50, 50, 1],
          }}
          transition={{
            duration: 2,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 15,
            ease: 'easeOut',
          }}
        />
      ))}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: contentY, opacity }}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40"
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
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
