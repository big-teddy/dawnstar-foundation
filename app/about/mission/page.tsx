'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Metadata } from 'next';
import { useRef } from 'react';
import {
  Compass,
  Eye,
  Heart,
  Users,
  Lightbulb,
  Zap,
  TrendingUp,
  Target,
  Rocket,
} from 'lucide-react';

const coreBeliefs = [
  {
    icon: Heart,
    title: '교육은 모든 사람의 권리',
    description:
      '태어난 환경에 관계없이 평등하게 접근할 수 있어야 합니다',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Users,
    title: '학생 개개인의 속도와 방식 존중',
    description: '교육은 학생 개개인의 속도와 방식을 존중해야 합니다',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Lightbulb,
    title: '잠재력을 발견하는 여정',
    description:
      '교육은 단순한 지식 전달을 넘어, 한 사람의 잠재력을 발견하고 실현할 수 있도록 돕는 여정입니다',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Zap,
    title: '기술은 교사의 동반자',
    description:
      '기술은 교사를 대체하는 것이 아니라, 더 나은 교육을 가능하게 하는 동반자입니다',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingUp,
    title: '환경의 변화가 필요',
    description:
      '진정한 교육 혁신은 시스템의 변화에서 시작되며, 우리는 모든 학생이 성장할 수 있는 환경을 만들어야 합니다',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function MissionPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-white via-indigo-50/20 to-white pt-24 relative overflow-hidden"
    >
      {/* Floating Background Shapes */}
      <motion.div
        style={{ y: y1 }}
        className="shape-decoration w-96 h-96 bg-indigo-300 absolute top-40 -left-48 opacity-20"
      />
      <motion.div
        style={{ y: y2 }}
        className="shape-decoration w-80 h-80 bg-purple-300 absolute top-[600px] -right-40 opacity-20"
      />
      <motion.div
        style={{ y: y3 }}
        className="shape-decoration w-64 h-64 bg-blue-300 absolute top-[1200px] left-1/2 opacity-15"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-8"
          >
            <span className="text-white font-bold text-sm tracking-wide flex items-center gap-2">
              <Compass className="w-4 h-4" />
              MISSION & VISION
            </span>
          </motion.div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-zinc-900 mb-8 tracking-tight">
            Our <span className="gradient-shimmer">Mission</span>
            <br />& Vision
          </h1>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Icon Side */}
            <div className="lg:col-span-4">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-30"></div>
                <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl">
                  <Target className="w-32 h-32 text-white mx-auto mb-6" />
                  <h2 className="text-4xl font-black text-white">MISSION</h2>
                </div>
              </motion.div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-8">
              <div className="card-depth bg-white p-10 space-y-6">
                <p className="text-3xl sm:text-4xl text-zinc-900 font-bold leading-tight">
                  AI 기술로 모든 학생에게{' '}
                  <span className="text-indigo-600">맞춤형 교육 기회</span>를
                  제공합니다
                </p>
                <div className="space-y-4 text-xl text-zinc-600 leading-relaxed">
                  <p>
                    새벽별 파운데이션은{' '}
                    <span className="font-semibold text-zinc-900">
                      경제적 배경이나 환경에 관계없이
                    </span>{' '}
                    모든 학생이 자신만의 속도로 배우고 성장할 수 있는 교육
                    환경을 만들어갑니다.
                  </p>
                  <p>
                    우리는 AI 기술을 통해{' '}
                    <span className="font-semibold text-zinc-900">
                      교육의 격차를 줄이고
                    </span>
                    , 각 학생의 잠재력을 발견하고 키울 수 있도록 지원합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Vision Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Content Side */}
            <div className="lg:col-span-8 lg:order-1">
              <div className="card-depth bg-gradient-to-br from-white to-purple-50/30 p-10 space-y-6">
                <p className="text-3xl sm:text-4xl text-zinc-900 font-bold leading-tight">
                  기술로{' '}
                  <span className="text-purple-600">교육의 본질</span>을
                  되찾는다
                </p>
                <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                  <p className="text-xl font-semibold text-zinc-900">
                    우리는 교육이 본래의 목적을 잃어버렸다고 믿습니다.
                  </p>
                  <p>
                    시험 점수와 성적표가 교육의 전부가 되어버린 세상에서,
                    아이들은 배움의 기쁨 대신 경쟁의 무게를 짊어지고 있습니다.
                  </p>
                  <div className="py-6 my-6 border-y-2 border-purple-200">
                    <p className="text-xl font-bold text-zinc-900">
                      하지만 기술은 다릅니다.
                      <br />
                      기술은 우리가 교육의 본질로 돌아갈 수 있게 합니다.
                    </p>
                  </div>
                  <p>
                    모든 학생이 자신의 속도로 배우고, 자신의 방식으로 이해하며,
                    자신의 잠재력을 발견할 수 있는 교육.
                  </p>
                  <p className="text-2xl font-bold text-purple-600 pt-4">
                    그것이 우리가 추구하는 미래입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Icon Side */}
            <div className="lg:col-span-4 lg:order-2">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -5 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30"></div>
                <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 text-center shadow-2xl">
                  <Eye className="w-32 h-32 text-white mx-auto mb-6" />
                  <h2 className="text-4xl font-black text-white">VISION</h2>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Core Beliefs Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black text-zinc-900 mb-6">
              핵심 <span className="gradient-shimmer">신념</span>
            </h2>
            <p className="text-2xl text-zinc-600">
              우리가 추구하는 다섯 가지 가치
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreBeliefs.map((belief, index) => {
              const Icon = belief.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="card-depth hover-lift bg-white h-full"
                  >
                    <div className="p-8">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`inline-block w-16 h-16 rounded-2xl bg-gradient-to-br ${belief.color} flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Number Badge */}
                      <div className="inline-block px-4 py-1 bg-zinc-100 rounded-full mb-4">
                        <span className="text-sm font-bold text-zinc-600">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-zinc-900 mb-4 leading-tight">
                        {belief.title}
                      </h3>
                      <p className="text-lg text-zinc-600 leading-relaxed">
                        {belief.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 relative"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
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
              className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full filter blur-3xl"
            />
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 text-center space-y-8">
              <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                <Rocket className="w-16 h-16 text-white" />
              </div>

              <h3 className="text-4xl sm:text-5xl font-black text-white">
                함께 만들어가는 미래
              </h3>

              <p className="text-xl sm:text-2xl leading-relaxed text-white/95 max-w-3xl mx-auto">
                우리의 미션과 비전은{' '}
                <span className="font-bold">혼자서는 이룰 수 없습니다</span>.
                <br />
                교사, 학생, 학부모, 그리고 뜻을 함께하는 모든 분들과 함께
                만들어갑니다.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-indigo-600 px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  우리와 함께하기
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                >
                  우리의 이야기 보기
                </motion.button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
