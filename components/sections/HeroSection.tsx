'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import Button from '../ui/Button';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"
    >
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_50%)]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/3 -right-48 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40"
      >
        <div className="text-center">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium">AI 기반 교육 혁신</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight"
          >
            모든 학생이
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              최고의 교육을
            </span>
            <br />
            받을 수 있는 세상
          </motion.h1>

          {/* Sub Heading */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl text-blue-200/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            AI 기술로 개인 맞춤형 학습을 제공하는
            <br className="hidden sm:block" />
            한국형 교육 플랫폼을 만듭니다
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Button
              size="lg"
              className="group bg-white text-slate-900 hover:bg-blue-50 shadow-2xl shadow-blue-500/50 px-8 py-4 text-lg font-bold"
            >
              제품 알아보기
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-bold"
            >
              우리의 미션
            </Button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              { value: '10,000+', label: '베타 사용자', icon: '👥' },
              { value: '24/7', label: 'AI 튜터 학습 지원', icon: '🤖' },
              { value: '100%', label: '무료 기본 플랜', icon: '✨' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <p className="text-4xl lg:text-5xl font-black text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-blue-200/70 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
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
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-2 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
