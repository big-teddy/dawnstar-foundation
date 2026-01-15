'use client';

import { motion } from 'framer-motion';
import { Handshake, Lightbulb, Megaphone, Wrench } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

export default function MissionInActionSection() {
  const actions = [
    {
      icon: Megaphone,
      title: 'Advocate',
      subtitle: '교육 평등 옹호',
      description:
        '모든 학생이 경제적 배경에 관계없이 양질의 교육을 받을 권리를 옹호합니다',
    },
    {
      icon: Lightbulb,
      title: 'Research',
      subtitle: 'AI 교육 연구',
      description:
        'AI 기술이 교육 격차를 줄이고 학습 효과를 높이는 방법을 연구합니다',
    },
    {
      icon: Wrench,
      title: 'Build',
      subtitle: '샛별 개발',
      description:
        '한국 교육 환경에 최적화된 AI 학습 플랫폼 샛별을 개발하고 있습니다',
    },
    {
      icon: Handshake,
      title: 'Partner',
      subtitle: '학교·교사 협력',
      description:
        '현장의 목소리를 듣고 함께 실질적인 교육 혁신을 만들어갑니다',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle decorative gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Mission in Action
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                우리는 네 가지 방법으로 교육 평등을 실현합니다
              </p>
            </motion.div>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {actions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative liquid-glass-card rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="liquid-glass-icon w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <action.icon className="w-8 h-8 text-indigo-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {action.title}
                    </h3>
                    <p className="text-sm font-medium text-indigo-600 mb-3">
                      {action.subtitle}
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      {action.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
