'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
        setMousePosition({ x: e.clientX, y: e.clientY });
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

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 20,
    delay: Math.random() * 5,
  }));

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-cyan-50/30" />

        {/* Animated grid with parallax */}
        <motion.div
          style={{
            x: useTransform(smoothMouseX, [-100, 100], [-10, 10]),
            y: useTransform(smoothMouseY, [-100, 100], [-10, 10]),
          }}
          className="absolute inset-0 opacity-[0.03]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1.5px,transparent_1.5px),linear-gradient(to_right,rgba(0,0,0,0.05)_1.5px,transparent_1.5px)] bg-[size:80px_80px]" />
        </motion.div>

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-cyan-600/20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Interactive glow effect */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(8, 145, 178, 0.08) 0%, transparent 70%)',
            x: useTransform(smoothMouseX, [-100, 100], [-50, 50]),
            y: useTransform(smoothMouseY, [-100, 100], [-50, 50]),
            left: '50%',
            top: '50%',
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40"
      >
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-neutral-900 leading-[0.95] tracking-tighter">
              모든 학생에게
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">평등한 교육을</span>
                <motion.span
                  className="absolute bottom-2 left-0 w-full h-4 bg-cyan-600/20 -z-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Sub Heading */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light"
          >
            새벽별 파운데이션은 AI 기술로 교육 불평등을 해소하고,
            <br className="hidden sm:block" />
            모든 학생이 최고의 학습 경험을 누릴 수 있도록 합니다
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button
              size="lg"
              className="group bg-neutral-900 text-white hover:bg-neutral-800 px-8 py-4 text-base font-medium transition-all duration-300"
            >
              우리의 미션
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 px-8 py-4 text-base font-medium transition-all duration-300"
            >
              제품 알아보기
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Minimalist Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-neutral-400"
        >
          <div className="text-xs tracking-wider uppercase">Scroll</div>
          <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-400 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
