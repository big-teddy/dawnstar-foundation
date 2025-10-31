'use client';

import { motion } from 'framer-motion';
import { BookOpen, Globe, Lightbulb } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

export default function MissionSection() {
  const missions = [
    {
      icon: BookOpen,
      title: '평등한 교육 기회',
      description:
        '경제적 배경이나 지역에 관계없이 모든 학생이 최고 수준의 교육을 받을 수 있도록 합니다.',
    },
    {
      icon: Lightbulb,
      title: 'AI 기반 맞춤 학습',
      description:
        '각 학생의 학습 수준과 속도에 맞춘 개인화된 AI 튜터가 24시간 학습을 지원합니다.',
    },
    {
      icon: Globe,
      title: '지속 가능한 임팩트',
      description:
        '수익의 100%를 교육 기회 확대에 재투자하여 지속 가능한 교육 생태계를 만듭니다.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="mission" className="relative py-24 lg:py-32 bg-neutral-50/50 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="text-xs font-semibold text-neutral-500 tracking-[0.2em] uppercase">
                Our Mission
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 mb-6 tracking-tight leading-tight">
              우리의 미션
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
              교육 불평등을 해소하고, 모든 학생에게 세계 최고 수준의
              <br className="hidden sm:block" />
              개인 맞춤형 학습 경험을 제공합니다
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 lg:p-10 border border-neutral-200 hover:border-neutral-300 transition-all duration-300 h-full">
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-900 group-hover:scale-105 transition-transform duration-300">
                    <mission.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-4 tracking-tight">
                  {mission.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-base">
                  {mission.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
