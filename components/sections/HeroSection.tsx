'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Button from '../ui/Button';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

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

  // Floating star particles
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: 2 + Math.random() * 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 15 + Math.random() * 10,
    delay: Math.random() * 5,
  }));

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient" />
      </div>

      {/* Floating stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
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
