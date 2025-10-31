'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Handshake, Heart, Users } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import Button from '../ui/Button';

export default function HowYouCanHelpSection() {
  const ways = [
    {
      icon: Heart,
      title: '후원하기',
      description:
        '경제적 어려움이 있는 학생들에게 무료 학습 도구를 제공하고, AI 교육 기술 연구를 지원합니다',
      cta: '후원 방법 알아보기',
      badge: '준비 중',
    },
    {
      icon: Handshake,
      title: '파트너십',
      description:
        '교육청, 학교, 기업과 함께 실질적인 교육 혁신을 만들어갑니다. 함께 변화를 만들어가실 수 있습니다',
      cta: '파트너 되기',
      badge: '준비 중',
    },
    {
      icon: Users,
      title: '커뮤니티 참여',
      description:
        '교사, 연구자, 개발자 등 다양한 분야의 전문가들과 함께 교육의 미래를 만들어갑니다',
      cta: '커뮤니티 참여하기',
      badge: '곧 출시',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight"
            >
              How You Can Help
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              새벽별과 함께 교육의 미래를 만들어가세요
            </motion.p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ways.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-slate-300"
              >
                {/* Badge */}
                {way.badge && (
                  <div className="absolute top-6 right-6 bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {way.badge}
                  </div>
                )}

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <way.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {way.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {way.description}
                </p>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full border-2 border-slate-200 text-slate-700 hover:border-slate-900 hover:text-slate-900 hover:bg-slate-50 transition-all group-hover:translate-x-1"
                >
                  {way.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-600">
              모든 후원금 사용 내역은 투명하게 공개됩니다
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
