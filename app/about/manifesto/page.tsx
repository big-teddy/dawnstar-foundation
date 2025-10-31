'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Metadata } from 'next';
import { useRef } from 'react';
import {
  Heart,
  Users,
  Zap,
  Target,
  Shield,
  TrendingUp,
  Globe,
  BookOpen,
  Eye,
  Handshake,
} from 'lucide-react';

const principles = [
  {
    icon: Heart,
    title: '교육은 모든 사람의 권리입니다',
    description:
      '태어난 곳, 부모의 소득, 학교의 위치에 관계없이 모든 아이는 양질의 교육을 받을 권리가 있습니다. 우리는 경제적, 지리적, 사회적 장벽을 허물고 모든 학생에게 동등한 기회를 제공하기 위해 존재합니다.',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Users,
    title: '교육은 개인의 속도를 존중해야 합니다',
    description:
      '모든 학생은 고유한 학습 방식과 속도를 가지고 있습니다. 우리는 모든 학생을 같은 틀에 맞추는 대신, 기술을 활용해 각자에게 맞는 학습 경험을 제공합니다.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Target,
    title: '교육은 잠재력을 발견하는 여정입니다',
    description:
      '교육의 목적은 시험 점수가 아니라 한 사람의 가능성을 발견하고 키우는 것입니다. 우리는 학생들이 자신의 강점을 발견하고, 약점을 극복하며, 평생 학습자로 성장할 수 있도록 돕습니다.',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Zap,
    title: '기술은 교사를 돕는 도구입니다',
    description:
      'AI는 교사를 대체하는 것이 아니라, 교사가 더 나은 교육을 제공할 수 있도록 돕는 동반자입니다. 우리는 교사의 부담을 줄이고, 학생과의 의미 있는 상호작용에 집중할 수 있게 합니다.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: TrendingUp,
    title: '교육 환경의 변화가 필요합니다',
    description:
      '개인의 노력만으로는 구조적 불평등을 해결할 수 없습니다. 우리는 시스템 차원의 변화를 만들고, 모든 학생이 성장할 수 있는 환경을 조성하기 위해 노력합니다.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Shield,
    title: '데이터는 학생을 이해하는 도구입니다',
    description:
      '우리는 데이터를 활용해 학생을 더 깊이 이해하고 지원합니다. 하지만 데이터는 절대 학생을 선별하거나 차별하는 도구로 사용되어서는 안 됩니다.',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Handshake,
    title: '학습은 경쟁이 아닌 협력입니다',
    description:
      '학생들은 서로 경쟁 상대가 아닌 함께 성장하는 동료입니다. 우리는 협력적 학습 문화를 만들고, 학생들이 서로를 돕고 배우는 커뮤니티를 지원합니다.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: BookOpen,
    title: '교육은 평생 지속됩니다',
    description:
      '학습은 졸업과 함께 끝나지 않습니다. 우리는 모든 연령대의 학습자를 지원하고, 평생 학습의 기쁨과 가치를 전파합니다.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Eye,
    title: '투명성과 책임이 신뢰를 만듭니다',
    description:
      '우리는 재단의 운영, 재정, 연구를 투명하게 공개하고, 커뮤니티에 대한 책임을 다합니다. 신뢰는 우리 활동의 기반입니다.',
    color: 'from-sky-500 to-blue-500',
  },
  {
    icon: Globe,
    title: '함께할 때 더 강합니다',
    description:
      '교육의 변화는 혼자 만들 수 없습니다. 우리는 교사, 학생, 학부모, 연구자, 정책 입안자, 그리고 뜻을 같이하는 모든 이들과 협력합니다.',
    color: 'from-pink-500 to-rose-500',
  },
];

export default function ManifestoPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white pt-24 relative overflow-hidden"
    >
      {/* Floating Background Shapes */}
      <motion.div
        style={{ y: y1 }}
        className="shape-decoration w-96 h-96 bg-purple-300 absolute top-40 -left-48 opacity-20"
      />
      <motion.div
        style={{ y: y2 }}
        className="shape-decoration w-80 h-80 bg-blue-300 absolute top-96 -right-40 opacity-20"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Hero Section */}
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
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-8"
          >
            <span className="text-white font-bold text-sm tracking-wide">
              OUR MANIFESTO
            </span>
          </motion.div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-zinc-900 mb-6 tracking-tight">
            The <span className="gradient-shimmer">DawnStar</span>
            <br />
            Manifesto
          </h1>
          <p className="text-3xl sm:text-4xl text-zinc-600 font-medium mb-12">
            우리가 믿는 것
          </p>

          {/* Opening Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <div className="card-depth bg-white p-10 space-y-6 text-left">
              <p className="text-xl text-zinc-700 leading-relaxed">
                교육은 세상을 바꿀 수 있는{' '}
                <span className="font-bold text-purple-600">
                  가장 강력한 도구
                </span>
                입니다. 하지만 지금 우리 교육은 너무 많은 아이들을 놓치고
                있습니다.
              </p>
              <p className="text-xl font-semibold text-zinc-900">
                우리는 이것을 바꿀 수 있다고 믿습니다.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                기술이 아니라, <span className="font-semibold">사람</span>을
                중심에 두고. 경쟁이 아니라,{' '}
                <span className="font-semibold">성장</span>을 목표로 하며.
                선별이 아니라, <span className="font-semibold">포용</span>을
                실천하는 교육을 만들 수 있다고 믿습니다.
              </p>
              <div className="pt-6 border-t-2 border-purple-200">
                <p className="text-xl font-bold text-zinc-900">
                  이것이 새벽별 파운데이션이 세상에 선언하는 우리의 신념입니다.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 10 Principles with Timeline */}
        <div className="relative mb-24">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-blue-600 to-purple-600 hidden lg:block"></div>

          <div className="space-y-16">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 top-8 -translate-x-1/2 z-20 hidden lg:block">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="timeline-dot w-6 h-6"
                    ></motion.div>
                  </div>

                  {/* Content Card */}
                  <div className="lg:ml-24">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="card-depth hover-lift bg-white overflow-hidden"
                    >
                      <div className="grid lg:grid-cols-12 gap-6">
                        {/* Icon & Number Section */}
                        <div className="lg:col-span-3 flex flex-col items-center justify-center p-6 bg-gradient-to-br bg-white">
                          <div
                            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${principle.color} flex items-center justify-center mb-4 shadow-lg`}
                          >
                            <Icon className="w-10 h-10 text-white" />
                          </div>
                          <div className="text-6xl font-black text-zinc-200">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>

                        {/* Text Content */}
                        <div className="lg:col-span-9 p-8 lg:pl-0">
                          <h2 className="text-3xl font-bold text-zinc-900 mb-4 leading-tight">
                            {principle.title}
                          </h2>
                          <div className="accent-line pl-6">
                            <p className="text-lg text-zinc-600 leading-relaxed">
                              {principle.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
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
              className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 rounded-full filter blur-3xl"
            />
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-6">
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <Globe className="w-12 h-12 text-white" />
                </div>
              </div>

              <p className="text-2xl leading-relaxed text-white/95">
                이 열 가지 원칙은 새벽별 파운데이션의{' '}
                <span className="font-bold">나침반</span>입니다. 우리는 이
                신념을 바탕으로 모든 결정을 내리고, 모든 프로젝트를 시작하며,
                모든 파트너십을 맺습니다.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-8">
                <p className="text-2xl font-bold text-white mb-3">
                  교육의 미래는 우리 모두의 손에 달려 있습니다.
                </p>
                <p className="text-xl text-white/90">
                  새벽별 파운데이션과 함께 그 미래를 만들어가실 수 있기를
                  바랍니다.
                </p>
              </div>

              <div className="flex justify-center pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  함께하기
                </motion.button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
