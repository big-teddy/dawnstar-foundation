'use client';

import { Metadata } from 'next';
import FadeInSection from '@/components/animations/FadeInSection';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function StoryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <main ref={containerRef} className="min-h-screen bg-elegant-gradient pt-24 relative overflow-hidden">
      {/* Floating Decorative Shapes */}
      <motion.div
        style={{ y: y1 }}
        className="shape-decoration shape-purple w-64 h-64 absolute top-20 -right-32"
      />
      <motion.div
        style={{ y: y2 }}
        className="shape-decoration shape-blue w-80 h-80 absolute top-1/3 -left-40"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Header */}
        <FadeInSection>
          <div className="text-center mb-24">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-bold tracking-widest text-purple-600 uppercase mb-6"
            >
              Our Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-zinc-900 mb-8 leading-tight"
            >
              우리는 왜{' '}
              <span className="gradient-shimmer">시작했나요</span>
            </motion.h1>
            <div className="section-divider"></div>
          </div>
        </FadeInSection>

        {/* Opening - Asymmetric Layout */}
        <div className="mb-32">
          <FadeInSection>
            <div className="grid-asymmetric items-start">
              <div className="space-y-6">
                <p className="text-2xl sm:text-3xl text-zinc-700 leading-relaxed italic font-light">
                  모든 위대한 여정은 작은 질문에서 시작됩니다.
                </p>
                <p className="text-2xl sm:text-3xl text-zinc-700 leading-relaxed italic font-light">
                  새벽별 파운데이션의 시작도 그랬습니다.
                </p>
              </div>
              <div className="card-depth hover-lift">
                <div className="timeline-dot mb-4"></div>
                <p className="text-xl font-semibold text-zinc-900 leading-relaxed">
                  "왜 어떤 아이들은 최고의 교육을 받고, 어떤 아이들은 그 기회조차 갖지 못할까?"
                </p>
                <p className="text-zinc-600 mt-4">
                  이 질문은 단순한 호기심이 아니었습니다. 이것은 우리 사회의 가장 근본적인 불평등 중 하나이며, 수많은 아이들의 미래가 걸린 문제였습니다.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* The Problem - Bold Stat Hero */}
        <FadeInSection>
          <div className="mb-32">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-16 text-center">
              문제를 마주하다
            </h2>

            {/* Dramatic Stat Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="stat-hero mb-16 relative z-10"
            >
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-7xl sm:text-8xl lg:text-9xl font-black text-white mb-4 animate-count-up"
                >
                  26조 원
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-2xl sm:text-3xl text-white/90 font-medium"
                >
                  한국의 연간 사교육비 (2024년)
                </motion.p>
              </div>
            </motion.div>

            {/* Grid of Problems - Asymmetric Reverse */}
            <div className="grid-asymmetric-reverse gap-8">
              <div className="space-y-6">
                <div className="card-depth accent-line hover-lift">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">극심한 격차</h3>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                    어떤 가정은 자녀 한 명당 월 수백만 원을 사교육에 쓰고, 어떤 가정은 교과서 한 권 사기도 버겁습니다.
                  </p>
                </div>

                <div className="card-depth accent-line hover-lift">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">코로나의 충격</h3>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                    디지털 기기가 있는 학생과 없는 학생, 안정적인 인터넷이 있는 가정과 없는 가정 사이의 학습 격차는 회복하기 어려운 수준으로 커졌습니다.
                  </p>
                </div>
              </div>

              <div className="card-depth bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200 hover-lift">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">AI 시대의 도래</h3>
                <p className="text-lg text-zinc-700 leading-relaxed">
                  AI 기술이 교육의 패러다임을 바꾸고 있지만, 한국의 학생들은 언어와 교육과정의 차이로 인해 이러한 혁신적 기술의 혜택을 온전히 누리지 못하고 있습니다.
                </p>
                <div className="mt-6 inline-block bg-purple-600 text-white px-6 py-2 rounded-full font-semibold">
                  한국 교육 현장에 최적화된 AI 솔루션이 절실
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* The Possibility - Interactive Cards */}
        <FadeInSection>
          <div className="mb-32 relative">
            <motion.div
              style={{ y: y1 }}
              className="shape-decoration shape-purple w-48 h-48 absolute -top-24 -right-24"
            />

            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-16 text-center">
              가능성을 발견하다
            </h2>

            <div className="grid-asymmetric gap-12">
              <div className="card-depth bg-white hover-lift">
                <p className="text-xl text-zinc-700 leading-relaxed mb-6">
                  하지만 우리는 문제만 본 것이 아니라 <strong className="text-purple-600">가능성</strong>도 보았습니다.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  기술은 교육의 격차를 줄일 수 있는 강력한 도구입니다. 적절히 설계되고 공정하게 배분된다면, AI는 모든 학생에게 맞춤형 학습 기회를 제공할 수 있습니다.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl"
                >
                  <div className="text-5xl font-black mb-3">1,000</div>
                  <p className="text-xl font-semibold mb-2">학생 천 명</p>
                  <p className="text-white/90">천 가지의 학습 방식</p>
                </motion.div>

                <div className="card-depth hover-lift bg-gradient-to-br from-purple-50 to-blue-50">
                  <p className="text-lg text-zinc-700 leading-relaxed">
                    한 교실에 30명의 학생이 있을 때, 한 명의 교사가 모든 학생을 완벽하게 이해하고 지원하기는 불가능합니다. <strong className="text-purple-600">하지만 기술은 가능합니다.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* The Birth - Timeline Style */}
        <FadeInSection>
          <div className="mb-32">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-16 text-center">
              새벽별이 탄생하다
            </h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600 hidden md:block"></div>

              <div className="space-y-12">
                {/* 2025 */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid-asymmetric items-center"
                >
                  <div className="flex items-center gap-6">
                    <div className="timeline-dot flex-shrink-0"></div>
                    <div className="inline-block bg-accent-gold-light px-8 py-3 rounded-full">
                      <span className="text-accent-gold font-black text-3xl">2025년</span>
                    </div>
                  </div>
                  <div className="card-depth hover-lift">
                    <p className="text-2xl font-bold text-zinc-900 mb-3">
                      새벽별 파운데이션 설립
                    </p>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                      새벽별은 가장 어두운 밤에도 길을 밝히는 별입니다. 우리는 교육의 어둠 속에서 희망의 빛이 되고자 합니다.
                    </p>
                  </div>
                </motion.div>

                {/* Saetbyeol Launch */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="grid-asymmetric items-center"
                >
                  <div className="flex items-center gap-6">
                    <div className="timeline-dot flex-shrink-0"></div>
                    <div className="text-2xl font-bold text-purple-600">첫 프로젝트</div>
                  </div>
                  <div className="card-depth bg-gradient-to-br from-blue-50 to-purple-50 hover-lift">
                    <h3 className="text-3xl font-black text-zinc-900 mb-3">샛별 (Saetbyeol)</h3>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                      한국 학생과 교사를 위해 특별히 설계된 AI 학습 플랫폼
                    </p>
                  </div>
                </motion.div>

                {/* Vision */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid-asymmetric items-center"
                >
                  <div className="flex items-center gap-6">
                    <div className="timeline-dot flex-shrink-0"></div>
                    <div className="text-2xl font-bold text-blue-600">진짜 목표</div>
                  </div>
                  <div className="card-depth hover-lift">
                    <p className="text-xl text-zinc-700 leading-relaxed">
                      단순히 제품을 만드는 것이 아니라, <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">교육 생태계 전체를 바꾸는 것</strong>입니다.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* The Future Together - Dramatic CTA */}
        <FadeInSection>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-sophisticated rounded-3xl p-12 sm:p-16 my-20 relative overflow-hidden"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 rounded-full filter blur-3xl"
            />

            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-8 text-center">
                함께 만들어가는 미래
              </h2>

              <div className="max-w-3xl mx-auto space-y-6 text-lg">
                <p className="text-zinc-800 leading-relaxed text-center">
                  새벽별 파운데이션은 혼자 가는 길이 아닙니다.
                </p>
                <p className="text-zinc-800 leading-relaxed text-center">
                  우리는 현장의 교사들과 함께, 배움에 목마른 학생들과 함께, 교육의 가치를 믿는 모든 이들과 함께 이 여정을 만들어가고 있습니다.
                </p>
                <p className="text-zinc-800 leading-relaxed text-center font-semibold">
                  아직 가야 할 길이 멉니다. 하지만 우리는 확신합니다.
                </p>

                <div className="mt-12 pt-12 border-t-2 border-purple-200">
                  <p className="text-2xl sm:text-3xl font-black text-center leading-relaxed">
                    <span className="gradient-shimmer">
                      기술로 교육의 본질을 되찾을 수 있다는 것.
                      <br />
                      모든 아이의 잠재력이 빛나는 세상을 만들 수 있다는 것.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </FadeInSection>

        {/* Closing Statement */}
        <FadeInSection>
          <div className="text-center py-20 max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl text-zinc-700 italic leading-relaxed font-light"
            >
              이것이 우리의 이야기이고,
              <br />
              우리가 여러분을 초대하는 이유입니다.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl text-zinc-900 font-semibold leading-relaxed mt-6"
            >
              함께 만들어갈 내일은 오늘보다 밝을 것입니다.
            </motion.p>
            <div className="section-divider mt-16"></div>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
}
