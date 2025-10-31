'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  CheckCircle2,
  FileText,
  Lightbulb,
  MessageSquare,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import Button from '../ui/Button';

export default function WhatWeDoSection() {
  const studentFeatures = [
    {
      icon: MessageSquare,
      title: '소크라테스식 대화',
      description:
        '답을 직접 주는 대신 질문을 통해 학생 스스로 생각하고 답을 찾을 수 있도록 유도합니다',
    },
    {
      icon: TrendingUp,
      title: '개인화된 학습 경로',
      description:
        '각 학생의 이해도, 학습 속도, 흥미를 분석하여 최적의 학습 경로를 제시합니다',
    },
    {
      icon: Zap,
      title: '즉시 피드백',
      description:
        '문제를 풀 때마다 즉각적인 피드백을 제공하여, 오개념이 고착되기 전에 바로잡습니다',
    },
    {
      icon: Lightbulb,
      title: '24/7 학습 지원',
      description: '언제 어디서나 질문하고 배울 수 있는 환경을 제공합니다',
    },
  ];

  const teacherFeatures = [
    {
      icon: FileText,
      title: '생활기록부 작성 지원',
      description:
        '세부능력특기사항(세특) 초안을 생성하고, 선생님이 검토하고 다듬을 수 있게 합니다',
    },
    {
      icon: CheckCircle2,
      title: '평가 및 피드백',
      description:
        '서술형 평가 채점, 학생별 맞춤 피드백 작성을 도와 시간을 절약합니다',
    },
    {
      icon: BookOpen,
      title: '수업 설계',
      description:
        '교육과정에 맞춘 수업 계획과 학습지를 빠르게 제작할 수 있습니다',
    },
    {
      icon: Users,
      title: '학생 진단',
      description:
        '학급 전체 학생의 이해도를 한눈에 파악하고, 도움이 필요한 학생을 빠르게 찾습니다',
    },
  ];

  const koreanOptimized = [
    '한국 교육과정 완벽 반영',
    '생활기록부 작성 가이드라인 준수',
    '수능과 내신 대비 학습 지원',
    '한국어 자연어 처리 최적화',
    '학생 데이터 보호 최우선',
  ];

  const futurePlans = [
    {
      title: 'Research & Development',
      items: [
        'AI 교육 효과성 연구',
        '학습 데이터 분석 방법론 개발',
        '교육 격차 해소 전략 수립',
      ],
    },
    {
      title: 'Community Building',
      items: [
        '교사 커뮤니티 네트워크',
        '학생 학습 공동체',
        '학부모 교육 지원',
      ],
    },
    {
      title: 'Policy Advocacy',
      items: [
        '교육 기술 정책 제안',
        '공교육과 에듀테크 협력 모델',
        '데이터 프라이버시 가이드라인',
      ],
    },
  ];

  return (
    <section id="what-we-do" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-wider text-purple-600 uppercase mb-4">
                What We Do
              </h2>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
                우리가 만들고 있는 것
              </h3>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                새벽별 파운데이션은 기술을 통해 교육 평등을 실현합니다.
                <br />
                우리의 첫 번째 프로젝트는 <strong>'샛별(Saetbyeol)'</strong>
                입니다.
              </p>
            </motion.div>
          </div>

          {/* Project: Saetbyeol */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 lg:p-12 mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-slate-900">샛별</h4>
                  <p className="text-sm text-slate-600 font-medium">
                    Saetbyeol
                  </p>
                </div>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                한국 교육 환경에 최적화된 AI 기반 맞춤형 학습 플랫폼
              </p>
              <p className="text-slate-600 mt-4 leading-relaxed">
                샛별은 한국 교육 현장의 실제 니즈를 반영하여 처음부터 설계된
                AI 학습 도구입니다. 단순히 답을 알려주는 것이 아니라,
                학생이 스스로 생각하고 문제를 해결할 수 있도록 돕습니다.
              </p>
            </motion.div>

            {/* For Students */}
            <div className="mb-16">
              <motion.h5
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8"
              >
                학생에게는 개인 맞춤형 튜터입니다
              </motion.h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {studentFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h6 className="font-bold text-slate-900 mb-2">
                          {feature.title}
                        </h6>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* For Teachers */}
            <div className="mb-16">
              <motion.h5
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8"
              >
                선생님에게는 더 나은 수업을 만드는 조력자입니다
              </motion.h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teacherFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h6 className="font-bold text-slate-900 mb-2">
                          {feature.title}
                        </h6>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Korean Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900 rounded-3xl p-10 lg:p-12 mb-12"
            >
              <h5 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                한국 교육 환경에 맞춘 설계
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {koreanOptimized.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Development Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 rounded-2xl p-8 text-center"
            >
              <h5 className="text-xl font-bold text-slate-900 mb-3">
                현재 개발 상태
              </h5>
              <p className="text-slate-700">
                샛별은 현재 개발 중이며,{' '}
                <strong className="text-blue-600">
                  2025년 중 첫 베타 버전
                </strong>
                을 선보일 예정입니다.
              </p>
            </motion.div>
          </div>

          {/* Future Plans */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center"
            >
              향후 계획
            </motion.h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {futurePlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
                >
                  <h5 className="text-xl font-bold text-slate-900 mb-6">
                    {plan.title}
                  </h5>
                  <ul className="space-y-3">
                    {plan.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-slate-600"
                      >
                        <span className="text-purple-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
