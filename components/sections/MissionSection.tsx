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
      gradient: 'from-blue-500 via-blue-600 to-indigo-600',
      iconColor: 'text-blue-500',
      glowColor: 'shadow-blue-500/50',
    },
    {
      icon: Lightbulb,
      title: 'AI 기반 맞춤 학습',
      description:
        '각 학생의 학습 수준과 속도에 맞춘 개인화된 AI 튜터가 24시간 학습을 지원합니다.',
      gradient: 'from-purple-500 via-purple-600 to-pink-600',
      iconColor: 'text-purple-500',
      glowColor: 'shadow-purple-500/50',
    },
    {
      icon: Globe,
      title: '지속 가능한 임팩트',
      description:
        '수익의 100%를 교육 기회 확대에 재투자하여 지속 가능한 교육 생태계를 만듭니다.',
      gradient: 'from-emerald-500 via-green-600 to-teal-600',
      iconColor: 'text-emerald-500',
      glowColor: 'shadow-emerald-500/50',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section id="mission" className="relative py-32 lg:py-40 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="text-sm font-bold text-indigo-600 tracking-wider uppercase">
                Our Mission
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              우리의 미션
            </h2>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${mission.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500`}
              />

              {/* Card */}
              <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 h-full">
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${mission.gradient} shadow-xl ${mission.glowColor} group-hover:scale-110 transition-transform duration-500`}
                  >
                    <mission.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>

                  {/* Animated Ring */}
                  <motion.div
                    className={`absolute inset-0 w-16 h-16 rounded-2xl border-2 border-${mission.iconColor}/30`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-900 group-hover:to-slate-600 transition-all duration-500">
                  {mission.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {mission.description}
                </p>

                {/* Animated Border */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
