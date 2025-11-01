'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface LearningPath {
  topic: string;
  progress: number;
  status: 'completed' | 'current' | 'upcoming';
}

const learningPaths: LearningPath[] = [
  { topic: '기본 개념 이해', progress: 100, status: 'completed' },
  { topic: '응용 문제 풀이', progress: 65, status: 'current' },
  { topic: '심화 문제 도전', progress: 0, status: 'upcoming' },
];

export default function PersonalizedLearningDemo() {
  const [animatedProgress, setAnimatedProgress] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(learningPaths.map((path) => path.progress));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 rounded-3xl p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">나의 학습 경로</h3>
              <p className="text-sm text-slate-600">수학 - 2차 방정식</p>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-slate-900">AI 추천</span>
          </div>
        </div>

        {/* Learning Progress */}
        <div className="space-y-4">
          {learningPaths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white rounded-2xl p-5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  {path.status === 'completed' ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ) : path.status === 'current' ? (
                    <div className="w-5 h-5 rounded-full border-2 border-blue-600 border-t-transparent animate-spin" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-slate-300" />
                  )}
                  <span
                    className={`font-semibold ${
                      path.status === 'completed'
                        ? 'text-slate-500'
                        : path.status === 'current'
                        ? 'text-slate-900'
                        : 'text-slate-400'
                    }`}
                  >
                    {path.topic}
                  </span>
                </div>
                <span
                  className={`text-sm font-semibold ${
                    path.status === 'completed'
                      ? 'text-green-600'
                      : path.status === 'current'
                      ? 'text-blue-600'
                      : 'text-slate-400'
                  }`}
                >
                  {path.progress}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${animatedProgress[index]}%` }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 1, ease: 'easeOut' }}
                  className={`absolute top-0 left-0 h-full rounded-full ${
                    path.status === 'completed'
                      ? 'bg-gradient-to-r from-green-500 to-green-600'
                      : path.status === 'current'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                      : 'bg-slate-200'
                  }`}
                />
              </div>

              {/* Current Topic Detail */}
              {path.status === 'current' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="mt-4 pt-4 border-t border-slate-100"
                >
                  <p className="text-sm text-slate-600 mb-2">
                    다음 추천 학습
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-3">
                    <p className="text-sm font-medium text-slate-900">
                      실생활 응용 문제 5개 풀어보기
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      예상 소요 시간: 15분
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Recommendation Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-6 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-4 text-white"
        >
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1">맞춤 학습 팁</p>
              <p className="text-sm text-white/90">
                각 학생의 이해도와 속도에 맞춰 최적의 학습 경로를 제시합니다
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
