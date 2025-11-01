'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Sparkles, Zap, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SocraticDialogDemo from '../demo/SocraticDialogDemo';
import PersonalizedLearningDemo from '../demo/PersonalizedLearningDemo';
import InstantFeedbackDemo from '../demo/InstantFeedbackDemo';

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
    id: 'socratic',
    icon: MessageSquare,
    title: '소크라테스식 대화',
    description: '답을 직접 주는 대신 질문을 통해 학생 스스로 생각하고 답을 찾을 수 있도록 유도합니다',
    component: <SocraticDialogDemo />,
    benefits: [
      '스스로 생각하는 힘을 길러줍니다',
      '깊이 있는 이해를 돕습니다',
      '문제 해결 능력을 향상시킵니다',
    ],
  },
  {
    id: 'personalized',
    icon: Sparkles,
    title: '개인화된 학습 경로',
    description: '각 학생의 이해도, 학습 속도, 흥미를 분석하여 최적의 학습 경로를 제시합니다',
    component: <PersonalizedLearningDemo />,
    benefits: [
      '자신의 속도에 맞춰 학습합니다',
      '약점을 집중적으로 보완합니다',
      '학습 효율을 극대화합니다',
    ],
  },
  {
    id: 'feedback',
    icon: Zap,
    title: '즉시 피드백',
    description: '문제를 풀 때마다 즉각적인 피드백을 제공하여, 오개념이 고착되기 전에 바로잡습니다',
    component: <InstantFeedbackDemo />,
    benefits: [
      '실시간으로 학습 상태를 파악합니다',
      '오답을 즉시 교정합니다',
      '학습 동기를 유지합니다',
    ],
  },
];

export default function StudentFeatureShowcase() {
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
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-300 shadow-lg'
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
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600'
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
                      className={`text-lg font-bold mb-1 ${isActive ? 'text-blue-900' : 'text-slate-900'}`}
                      style={{
                        transition: 'color 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${isActive ? 'text-blue-700' : 'text-slate-600'}`}
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
                      <div className="pt-4 border-t border-blue-200 space-y-2">
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
                            <p className="text-sm text-blue-800">{benefit}</p>
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
