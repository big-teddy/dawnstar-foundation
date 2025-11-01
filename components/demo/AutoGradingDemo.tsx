'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

type GradingState = 'idle' | 'grading' | 'complete';

interface GradingResult {
  student: string;
  score: number;
  feedback: string;
}

const results: GradingResult[] = [
  {
    student: '김○○',
    score: 9,
    feedback: '핵심 개념을 정확히 이해하고 있습니다',
  },
  {
    student: '이○○',
    score: 7,
    feedback: '풀이 과정은 좋으나 계산 실수가 있습니다',
  },
  {
    student: '박○○',
    score: 5,
    feedback: '개념 재학습이 필요합니다',
  },
];

export default function AutoGradingDemo() {
  const [state, setState] = useState<GradingState>('idle');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleResults, setVisibleResults] = useState<GradingResult[]>([]);

  useEffect(() => {
    const sequence = async () => {
      // Reset
      setState('idle');
      setVisibleResults([]);
      setCurrentIndex(0);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Start grading
      setState('grading');
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show results one by one
      for (let i = 0; i < results.length; i++) {
        setCurrentIndex(i);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setVisibleResults((prev) => [...prev, results[i]]);
      }

      // Complete
      setState('complete');
      await new Promise((resolve) => setTimeout(resolve, 3000));
    };

    sequence();
    const interval = setInterval(sequence, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 rounded-3xl p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">평가 및 피드백</h3>
              <p className="text-sm text-slate-600">
                서술형 평가 자동 채점
              </p>
            </div>
          </div>
          <AnimatePresence mode="wait">
            {state === 'grading' && (
              <motion.div
                key="grading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <Clock className="w-4 h-4 text-blue-600" />
                </motion.div>
                <span className="text-sm font-semibold text-blue-900">
                  채점 중... {currentIndex + 1}/30
                </span>
              </motion.div>
            )}
            {state === 'complete' && (
              <motion.div
                key="complete"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full"
              >
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-900">
                  채점 완료
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Assignment Info */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">평가 항목</p>
              <p className="font-semibold text-slate-900">
                이차방정식 풀이 과정 서술
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-600">제출</p>
              <p className="font-semibold text-slate-900">30명</p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4 mb-6 min-h-[240px]">
          {visibleResults.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white rounded-2xl p-5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-slate-900">{result.student}</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-slate-900">
                    {result.score}
                  </span>
                  <span className="text-sm text-slate-600">/10점</span>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-white rounded-xl p-3">
                <Sparkles className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-slate-900 mb-1">
                    AI 피드백
                  </p>
                  <p className="text-xs text-slate-600">{result.feedback}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Loading placeholder */}
          {state === 'grading' && visibleResults.length < results.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-slate-50 rounded-2xl p-4 border border-slate-200 border-dashed"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-slate-600">다음 학생 채점 중...</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Stats */}
        {state === 'complete' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 gap-4 mb-6"
          >
            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <p className="text-2xl font-bold text-green-900">50%</p>
              <p className="text-xs text-green-700 mt-1">시간 절약</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <p className="text-2xl font-bold text-blue-900">7.3점</p>
              <p className="text-xs text-blue-700 mt-1">학급 평균</p>
            </div>
          </motion.div>
        )}

        {/* Action Button */}
        {state === 'complete' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:from-green-700 hover:to-teal-700 transition-colors">
              전체 채점 결과 다운로드
            </button>
          </motion.div>
        )}

        {/* Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 bg-white rounded-xl p-4 shadow-sm flex items-start gap-3"
        >
          <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-purple-900 font-semibold mb-1">
              일관성 있는 평가 기준
            </p>
            <p className="text-xs text-purple-700">
              모든 학생에게 동일한 기준으로 평가하고 개별 맞춤 피드백을
              제공합니다
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
