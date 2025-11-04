'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, MessageSquare, Sparkles, Zap } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import Button from '../ui/Button';

export default function FeaturedProjectSection() {
  const features = [
    {
      icon: MessageSquare,
      title: '소크라테스식 대화',
      description: '답을 직접 주는 대신 질문을 통해 학생 스스로 답을 찾도록 유도',
    },
    {
      icon: Sparkles,
      title: '개인화된 학습',
      description: '각 학생의 이해도와 속도에 맞춘 최적의 학습 경로 제시',
    },
    {
      icon: Zap,
      title: '즉시 피드백',
      description: '실시간 피드백으로 오개념이 고착되기 전에 바로잡기',
    },
    {
      icon: BookOpen,
      title: '한국 교육과정 최적화',
      description: '수능, 내신, 생활기록부까지 한국 교육 환경에 완벽 반영',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Featured Project
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
            >
              샛별 (Saetbyeol)
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            >
              한국 학생과 교사를 위해 특별히 설계된
              <br />
              AI 기반 맞춤형 학습 플랫폼
            </motion.p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual/Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 lg:p-12 shadow-2xl">
                {/* Chat Interface Mockup */}
                <div className="bg-white rounded-2xl p-6 space-y-4 shadow-xl">
                  {/* Chat messages */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-slate-300 rounded-full flex-shrink-0" />
                    <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                      <p className="text-sm text-slate-700">
                        이 문제를 어떻게 풀어야 할까요?
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                      <p className="text-sm text-white">
                        먼저 문제에서 어떤 정보가 주어졌는지 찾아볼까요?
                      </p>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex-shrink-0 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-slate-300 rounded-full flex-shrink-0" />
                    <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                      <p className="text-sm text-slate-700">
                        아, x=3이 주어졌네요!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg">
                  <p className="text-sm font-semibold text-slate-900">
                    24/7 학습 지원
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}

              <div className="pt-4">
                <Button
                  size="lg"
                  className="group button-gradient text-white px-8 py-4 shadow-lg hover:shadow-xl transition-all"
                >
                  샛별 자세히 보기
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center bg-blue-50 rounded-2xl p-6"
          >
            <p className="text-slate-700">
              <strong className="text-blue-600">현재 개발 중</strong>이며,{' '}
              <strong>2025년 중 첫 베타 버전</strong>을 선보일 예정입니다
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
