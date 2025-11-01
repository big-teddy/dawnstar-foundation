'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, MessageSquareText, Shield } from 'lucide-react';
import { useState } from 'react';
import LearningProgressDemo from '../demo/LearningProgressDemo';
import ConversationMonitorDemo from '../demo/ConversationMonitorDemo';
import SafetyMonitorDemo from '../demo/SafetyMonitorDemo';

interface Feature {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  component: React.ReactNode;
  benefits: string[];
}

const features: Feature[] = [
  {
    id: 'progress',
    icon: BarChart3,
    title: '학습 진도 및 성취도 확인',
    description: '자녀의 학습 현황을 실시간으로 확인하고, 어떤 과목을 얼마나 공부했는지 한눈에 파악할 수 있습니다',
    component: <LearningProgressDemo />,
    benefits: [
      '주간/월간 학습 리포트 제공',
      '과목별 성취도 분석',
      '학습 시간 추적',
    ],
  },
  {
    id: 'conversation',
    icon: MessageSquareText,
    title: '대화 내용 모니터링',
    description: '자녀가 샛별과 나눈 대화를 확인하여 어떤 주제를 공부하고 어떤 질문을 했는지 알 수 있습니다',
    component: <ConversationMonitorDemo />,
    benefits: [
      '학습 주제 파악',
      '이해도 확인',
      '관심 분야 발견',
    ],
  },
  {
    id: 'safety',
    icon: Shield,
    title: '안전 및 건전성 관리',
    description: '학습과 관련 없는 주제는 자동으로 차단되며, 부적절한 내용이 감지되면 즉시 알림을 받습니다',
    component: <SafetyMonitorDemo />,
    benefits: [
      '실시간 안전 모니터링',
      '부적절 콘텐츠 자동 차단',
      '학습 집중도 보장',
    ],
  },
];

export default function ParentFeatureShowcase() {
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
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], opacity: { duration: 0.4 }, scale: { duration: 0.5 } }}
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
                    ? 'bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-300 shadow-lg'
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
                        ? 'bg-gradient-to-br from-green-500 to-teal-600'
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
                    <h3
                      className={`text-lg font-bold mb-1 ${isActive ? 'text-green-900' : 'text-slate-900'}`}
                      style={{
                        transition: 'color 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${isActive ? 'text-green-700' : 'text-slate-600'}`}
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
                      <div className="pt-4 border-t border-green-200 space-y-2">
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
                            <p className="text-sm text-green-800">{benefit}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            );
          })}

          {/* Trust Badge */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-4 text-center">
            <p className="text-sm font-bold text-blue-900">
              자녀의 안전한 학습을 최우선으로 합니다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
