'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, Target, Sparkles, GraduationCap, Heart, Lightbulb } from 'lucide-react';

const coreBeliefs = [
  {
    icon: GraduationCap,
    title: '교육은 권리입니다',
    description: '모든 아이는 태어난 환경에 관계없이 최고의 교육을 받을 권리가 있습니다.',
  },
  {
    icon: Heart,
    title: '개인의 속도를 존중합니다',
    description: '각자의 학습 방식과 속도는 다릅니다. 기술은 이를 가능하게 합니다.',
  },
  {
    icon: Lightbulb,
    title: '잠재력을 발견합니다',
    description: '시험 점수가 아닌, 한 사람의 가능성을 발견하고 키우는 것이 교육입니다.',
  },
];

export default function MissionPage() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  return (
    <main ref={containerRef} className="min-h-screen aurora-bg aurora-start-indigo">
      {/* Fixed Aurora Background */}
      <div className="aurora-container">
        <div className="aurora-gradient" />
      </div>
      <div className="aurora-overlay" />

      {/* Content Layer */}
      <div className="aurora-content">
        {/* Hero Section - Minimal & Impactful */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">

          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="relative z-10 container-apple text-center py-32"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Subtle label */}
              <p className="text-overline text-indigo-600 mb-6">
                Our Mission
              </p>

              {/* Main headline - Large & Bold */}
              <h1 className="text-display text-slate-900 mb-8">
                AI 기술로
                <br />
                <span className="gradient-text">모든 학생에게</span>
                <br />
                맞춤형 교육을
              </h1>

              {/* Subtitle - Light weight */}
              <p className="text-body-lg text-slate-500 max-w-2xl mx-auto mb-10">
                경제적 배경이나 환경에 관계없이
                <br className="hidden sm:block" />
                모든 학생이 자신만의 속도로 성장할 수 있도록
              </p>

              {/* CTA */}
              <Link
                href="/about/story"
                className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:gap-4 transition-all"
              >
                우리의 이야기 알아보기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-[1px] h-12 bg-gradient-to-b from-slate-300 to-transparent"
            />
          </motion.div>
        </section>

        {/* Vision Statement - Full-width Quote */}
        <section className="section-content">
          <div className="container-apple">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <blockquote className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                "기술로 <span className="gradient-text">교육의 본질</span>을 되찾는다"
              </blockquote>

              <div className="mt-12 space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                <p>
                  시험 점수와 성적표가 교육의 전부가 되어버린 세상에서,
                  <br />
                  아이들은 배움의 기쁨 대신 경쟁의 무게를 짊어지고 있습니다.
                </p>
                <p className="font-medium">
                  하지만 기술은 다릅니다.
                  <br />
                  우리는 모든 학생이 자신의 속도로 배우고,
                  <br />
                  자신의 잠재력을 발견할 수 있는 교육을 만듭니다.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Beliefs - Individual Cards (no full-width glass) */}
        <section className="py-20">
          <div className="container-apple">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-overline text-indigo-600 mb-4">
                  Core Beliefs
                </p>
                <h2 className="text-headline text-slate-900">
                  핵심 신념
                </h2>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {coreBeliefs.map((belief, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="text-center p-8 rounded-2xl subtle-glass-card"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 mb-6">
                    <belief.icon className="w-7 h-7 text-indigo-600" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {belief.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed">
                    {belief.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Dark Gradient */}
        <section className="relative section-cta overflow-hidden section-transition-mask">
          {/* Dark gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />

          {/* Subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px]" />

          <div className="relative container-apple text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Sparkles className="w-10 h-10 text-indigo-400 mx-auto mb-8" />

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                함께 만들어가는 미래
              </h2>

              <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                우리의 미션은 혼자서는 이룰 수 없습니다.
                <br />
                교사, 학생, 학부모, 그리고 뜻을 함께하는 모든 분들과 만들어갑니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/get-involved"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 liquid-glass-light text-slate-900 font-semibold rounded-full hover:bg-white/95 transition-all"
                >
                  함께하기
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about/story"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-medium btn-liquid-glass rounded-full"
                >
                  우리의 이야기 보기
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
