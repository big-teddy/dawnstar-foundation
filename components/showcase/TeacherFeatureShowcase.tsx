'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FileText, CheckCircle2, Users } from 'lucide-react';
import { useState } from 'react';
import RecordGeneratorDemo from '../demo/RecordGeneratorDemo';
import StudentDashboardDemo from '../demo/StudentDashboardDemo';
import AutoGradingDemo from '../demo/AutoGradingDemo';

interface Feature {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  component: React.ReactNode;
  benefits: string[];
  timeSaved: string;
}

const features: Feature[] = [
  {
    id: 'record',
    icon: FileText,
    title: '생활기록부 작성 지원',
    description: '세부능력특기사항(세특) 초안을 생성하고, 선생님이 검토하고 다듬을 수 있게 합니다.',
    component: <RecordGeneratorDemo />,
    benefits: [
      '작성 시간 70% 단축',
      '일관된 품질 유지',
      '교육부 가이드라인 준수',
    ],
    timeSaved: '70% 단축',
  },
  {
    id: 'dashboard',
    icon: Users,
    title: '학생 진단 및 분석',
    description: '학급 전체 학생의 이해도를 한눈에 파악하고, 도움이 필요한 학생을 빠르게 찾습니다.',
    component: <StudentDashboardDemo />,
    benefits: [
      '실시간 학습 현황 파악',
      '맞춤형 지도 가능',
      '데이터 기반 의사결정',
    ],
    timeSaved: '실시간',
  },
  {
    id: 'grading',
    icon: CheckCircle2,
    title: '평가 및 피드백',
    description: '서술형 평가 채점과 학생별 맞춤 피드백 작성을 도와 시간을 절약합니다.',
    component: <AutoGradingDemo />,
    benefits: [
      '채점 시간 50% 단축',
      '일관된 평가 기준',
      '개별 맞춤 피드백 제공',
    ],
    timeSaved: '50% 단축',
  },
];

export default function TeacherFeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFeature = features[activeIndex];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Left: Demo Display */}
        <div className="order-2 lg:order-1 lg:sticky lg:top-32">
          <div className="relative h-[550px] overflow-hidden scrollbar-hide">
            <div className="h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.5 }
                }}
              >
                {activeFeature.component}
              </motion.div>
            </AnimatePresence>
            </div>
            {/* Bottom fade gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right: Feature Cards */}
        <div className="order-1 lg:order-2 space-y-4">
          {features.map((feature, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={feature.id}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`w-full text-left rounded-2xl p-6 transition-all duration-500 ease-out ${
                  isActive
                    ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 shadow-lg'
                    : 'bg-white border-2 border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
                style={{
                  transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isActive
                        ? 'bg-gradient-to-br from-purple-500 to-pink-600'
                        : 'bg-slate-100'
                    }`}
                    animate={{
                      scale: isActive ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      transition: 'background 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  >
                    <feature.icon
                      className={`w-6 h-6 ${isActive ? 'text-white' : 'text-slate-600'}`}
                      style={{
                        transition: 'color 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                      }}
                    />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3
                        className={`text-lg font-bold ${isActive ? 'text-purple-900' : 'text-slate-900'}`}
                        style={{
                          transition: 'color 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                        }}
                      >
                        {feature.title}
                      </h3>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                          isActive ? 'bg-purple-200 text-purple-900' : 'bg-green-100 text-green-800'
                        }`}
                        style={{
                          transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                        }}
                      >
                        {feature.timeSaved}
                      </span>
                    </div>
                    <p
                      className={`text-sm leading-relaxed ${isActive ? 'text-purple-700' : 'text-slate-600'}`}
                      style={{
                        transition: 'color 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Benefits - Show only when active */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        marginTop: 16,
                        transition: {
                          height: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.4, delay: 0.15 },
                          marginTop: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                        }
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        marginTop: 0,
                        transition: {
                          height: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
                          opacity: { duration: 0.2 },
                          marginTop: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-purple-200 space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{
                              opacity: 1,
                              x: 0,
                              transition: {
                                delay: 0.2 + idx * 0.08,
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1]
                              }
                            }}
                            exit={{
                              opacity: 0,
                              x: -10,
                              transition: {
                                duration: 0.2,
                                ease: [0.22, 1, 0.36, 1]
                              }
                            }}
                            className="flex items-start gap-2"
                          >
                            <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg
                                className="w-2.5 h-2.5 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p className="text-sm text-purple-800">{benefit}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
