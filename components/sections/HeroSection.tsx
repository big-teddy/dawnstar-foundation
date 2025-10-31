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

  // Scroll parallax - extended for longer experience
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Star layers parallax
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const midgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const foregroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  // Hero content fades out earlier
  const heroContentY = useTransform(scrollYProgress, [0, 0.3], ['0%', '10%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.5, 0]);

  // Background transitions from night to dawn
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.85],
    [
      'rgb(15, 23, 42)',  // slate-900 (deep night)
      'rgb(30, 41, 59)',  // slate-800
      'rgb(71, 85, 105)', // slate-600 (early dawn)
      'rgb(148, 163, 184)', // slate-400 (dawn)
    ]
  );

  // Stars fade out as dawn breaks
  const starsOpacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 0.6, 0]);

  // Sun rises
  const sunOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 0.9], [0, 0, 0.4, 0.7]);
  const sunY = useTransform(scrollYProgress, [0, 0.4, 1], ['120%', '120%', '30%']);
  const sunScale = useTransform(scrollYProgress, [0.4, 0.7, 1], [0.8, 1, 1.2]);

  // Why We Exist content fades in
  const whyWeExistY = useTransform(scrollYProgress, [0.5, 0.8], ['30%', '0%']);
  const whyWeExistOpacity = useTransform(scrollYProgress, [0.5, 0.7, 0.9], [0, 0.5, 1]);

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
    <motion.section
      ref={ref}
      style={{ backgroundColor }}
      className="relative min-h-[250vh] overflow-hidden"
    >
      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient" />
      </div>

      {/* Dawn gradient overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(251, 146, 60, 0.1) 50%, rgba(252, 211, 77, 0.2) 100%)',
          opacity: sunOpacity,
        }}
      />

      {/* Rising sun */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          y: sunY,
          opacity: sunOpacity,
          scale: sunScale,
        }}
      >
        {/* Outer glow */}
        <div className="absolute inset-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-amber-400/60 via-orange-400/40 to-transparent blur-3xl" />
        {/* Middle glow */}
        <div className="absolute inset-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-yellow-300/70 via-amber-300/50 to-transparent blur-2xl" />
        {/* Core */}
        <div className="absolute inset-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-yellow-200 via-amber-300 to-orange-400 blur-xl" />
      </motion.div>

      {/* Multi-layer star system */}
      {/* Background stars - smallest and slowest */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY, opacity: starsOpacity }}
      >
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
      <motion.div
        className="absolute inset-0"
        style={{ y: midgroundY, opacity: starsOpacity }}
      >
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
      <motion.div
        className="absolute inset-0"
        style={{ y: foregroundY, opacity: starsOpacity }}
      >
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

      {/* Why We Exist Content - fades in as dawn breaks */}
      <motion.div
        style={{ y: whyWeExistY, opacity: whyWeExistOpacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
          <div className="space-y-16">
            {/* Header */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                Why We Exist
              </h2>
              <p className="text-xl text-slate-700">우리는 왜 시작했나요</p>
            </div>

            {/* Content Cards */}
            <div className="space-y-8">
              {/* Opening */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-slate-200/50 shadow-xl">
                <div className="space-y-4">
                  <p className="text-xl text-slate-700 leading-relaxed italic">
                    모든 위대한 여정은 작은 질문에서 시작됩니다.
                  </p>
                  <p className="text-xl text-slate-900 font-medium leading-relaxed">
                    "왜 어떤 아이들은 최고의 교육을 받고,
                    <br />
                    어떤 아이들은 그 기회조차 갖지 못할까?"
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    이 질문은 단순한 호기심이 아니었습니다. 이것은 우리 사회의
                    가장 근본적인 불평등 중 하나이며, 수많은 아이들의 미래가 걸린
                    문제였습니다.
                  </p>
                </div>
              </div>

              {/* Problem */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-slate-200/50 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  문제를 마주하다
                </h3>
                <div className="space-y-3 text-slate-700">
                  <p>
                    한국의 사교육비는 연간 26조 원을 넘어섭니다. 어떤 가정은 자녀
                    한 명당 월 수백만 원을 사교육에 쓰고, 어떤 가정은 교과서 한 권
                    사기도 버겁습니다.
                  </p>
                  <p>
                    코로나19는 이 격차를 더욱 벌려놓았습니다. 디지털 기기가 있는
                    학생과 없는 학생, 안정적인 인터넷이 있는 가정과 없는 가정
                    사이의 학습 격차는 회복하기 어려운 수준으로 커졌습니다.
                  </p>
                </div>
              </div>

              {/* Solution */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-slate-200/50 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  가능성을 발견하다
                </h3>
                <div className="space-y-3 text-slate-700">
                  <p>
                    하지만 우리는 문제만 본 것이 아니라 가능성도 보았습니다. 기술은
                    교육의 격차를 줄일 수 있는 강력한 도구입니다.
                  </p>
                  <p>
                    적절히 설계되고 공정하게 배분된다면, AI는 모든 학생에게 맞춤형
                    학습 기회를 제공할 수 있습니다.
                  </p>
                </div>
              </div>

              {/* DawnStar */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 border border-slate-700 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">새벽별이 탄생하다</h3>
                <p className="text-white/90 leading-relaxed">
                  2025년, 우리는 새벽별 파운데이션을 설립했습니다. 새벽별은 가장
                  어두운 밤에도 길을 밝히는 별입니다. 우리는 교육의 어둠 속에서
                  희망의 빛이 되고자 합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
