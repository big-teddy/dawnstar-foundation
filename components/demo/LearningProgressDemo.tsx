'use client';

import { motion } from 'framer-motion';
import { TrendingUp, BookOpen, Clock, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SubjectProgress {
  name: string;
  progress: number;
  color: string;
}

const subjects: SubjectProgress[] = [
  { name: '수학', progress: 85, color: 'blue' },
  { name: '영어', progress: 92, color: 'green' },
  { name: '과학', progress: 78, color: 'purple' },
];

export default function LearningProgressDemo() {
  const [animatedProgress, setAnimatedProgress] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(subjects.map((s) => s.progress));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getColorClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'from-blue-500 to-blue-600';
      case 'green':
        return 'from-green-500 to-green-600';
      case 'purple':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-slate-500 to-slate-600';
    }
  };

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 rounded-3xl p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">학습 진도와 성장 추적</h3>
              <p className="text-sm text-slate-600">이번 주 학습 현황</p>
            </div>
          </div>
          <div className="bg-green-50 px-3 py-1 rounded-full">
            <span className="text-sm font-semibold text-green-900">김○○</span>
          </div>
        </div>

        {/* Weekly Summary */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-5 shadow-sm text-center"
          >
            <BookOpen className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-900">18개</p>
            <p className="text-xs text-blue-700 mt-1">학습한 주제</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-5 shadow-sm text-center"
          >
            <Clock className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-900">5.2시간</p>
            <p className="text-xs text-green-700 mt-1">총 학습 시간</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-5 shadow-sm text-center"
          >
            <Award className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-900">12개</p>
            <p className="text-xs text-purple-700 mt-1">달성한 목표</p>
          </motion.div>
        </div>

        {/* Subject Progress */}
        <div className="space-y-4 mb-6">
          <p className="text-sm font-semibold text-slate-600">과목별 진도</p>
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white rounded-2xl p-5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-slate-900">
                  {subject.name}
                </span>
                <span className="text-2xl font-bold text-slate-900">
                  {animatedProgress[index]}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${animatedProgress[index]}%` }}
                  transition={{
                    delay: 0.7 + index * 0.1,
                    duration: 1,
                    ease: 'easeOut',
                  }}
                  className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${getColorClass(
                    subject.color
                  )}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-100 rounded-2xl p-5"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-slate-900 mb-1">
                최근 성취
              </p>
              <p className="text-sm text-slate-700 mb-2">
                이차방정식 단원 완료 - 평균 90점 달성!
              </p>
              <p className="text-xs text-slate-600">
                꾸준히 학습한 결과입니다. 격려의 한 마디를 전해주세요 😊
              </p>
            </div>
          </div>
        </motion.div>

        {/* View Details Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-6"
        >
          <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:from-green-700 hover:to-teal-700 transition-colors">
            상세 리포트 보기
          </button>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-6 bg-white rounded-xl p-4 shadow-sm"
        >
          <p className="text-xs text-slate-600 text-center">
            자녀의 학습 진도와 이해도를 실시간으로 확인하고, 강점과 보완이
            필요한 부분을 파악하세요
          </p>
        </motion.div>
      </div>
    </div>
  );
}
