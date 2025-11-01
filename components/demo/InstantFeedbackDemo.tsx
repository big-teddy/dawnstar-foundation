'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Zap, CheckCircle2, XCircle, Lightbulb } from 'lucide-react';
import { useEffect, useState } from 'react';

type FeedbackState = 'idle' | 'checking' | 'correct' | 'incorrect' | 'hint';

export default function InstantFeedbackDemo() {
  const [state, setState] = useState<FeedbackState>('idle');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    const sequence = async () => {
      // Initial state
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // User types answer
      setState('idle');
      await new Promise((resolve) => setTimeout(resolve, 500));
      setAnswer('x = 5');

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Checking
      setState('checking');
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show incorrect
      setState('incorrect');
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Show hint
      setState('hint');
      await new Promise((resolve) => setTimeout(resolve, 2500));

      // Reset
      setAnswer('');
      setState('idle');
    };

    sequence();
    const interval = setInterval(sequence, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-3xl p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">즉시 피드백</h3>
              <p className="text-sm text-slate-600">수학 - 일차방정식</p>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full">
            <Zap className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-slate-900">AI 첨삭</span>
          </div>
        </div>

        {/* Problem & Answer Card */}
        <div className="space-y-4">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
            className="bg-white rounded-2xl p-5 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-white">Q</span>
              </div>
              <p className="text-sm font-medium text-slate-600">문제</p>
            </div>
            <p className="text-base font-semibold text-slate-900 leading-relaxed">
              2x + 3 = 13일 때, x의 값은?
            </p>
          </motion.div>

          {/* Answer Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-2xl p-5 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-white">A</span>
              </div>
              <p className="text-sm font-medium text-slate-600">내 답</p>
            </div>
            <div className="relative">
              <input
                type="text"
                value={answer}
                readOnly
                placeholder="답을 입력하세요..."
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 font-medium ${
                  state === 'correct'
                    ? 'border-green-500 bg-green-50 text-green-900'
                    : state === 'incorrect'
                    ? 'border-red-500 bg-red-50 text-red-900'
                    : state === 'checking'
                    ? 'border-orange-500 bg-orange-50 text-slate-900'
                    : 'border-slate-200 bg-white text-slate-900'
                }`}
              />
              {state === 'checking' && (
                <motion.div
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full" />
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Feedback Messages */}
        <div className="mt-4">
          <AnimatePresence mode="wait">
            {state === 'checking' && (
              <motion.div
                key="checking"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-white rounded-2xl p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-orange-900">AI가 검사 중이에요</p>
                    <p className="text-sm text-orange-700 mt-1">
                      답을 확인하고 피드백을 준비하고 있어요
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {state === 'incorrect' && (
              <motion.div
                key="incorrect"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-white rounded-2xl p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-900">다시 한번 생각해볼까요?</p>
                    <p className="text-sm text-red-700 mt-1">
                      계산 과정을 차근차근 확인해보세요
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {state === 'hint' && (
              <motion.div
                key="hint"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-white rounded-2xl p-5 shadow-sm"
              >
                <div className="flex items-start gap-3 mb-4">
                  <Lightbulb className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-purple-900">💡 힌트를 드릴게요</p>
                    <p className="text-sm text-purple-700 mt-1">
                      양변에서 3을 빼면 어떻게 될까요?
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-100">
                  <p className="text-xs font-semibold text-slate-600 mb-2">풀이 과정</p>
                  <div className="space-y-1.5">
                    <p className="font-mono text-sm text-slate-900">
                      2x + 3 - 3 = 13 - 3
                    </p>
                    <p className="font-mono text-sm text-slate-900 font-semibold">
                      2x = 10
                    </p>
                    <p className="text-xs text-slate-600 mt-2">
                      이제 양변을 2로 나눠보세요!
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {state === 'correct' && (
              <motion.div
                key="correct"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-white rounded-2xl p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-900">정답이에요! 🎉</p>
                    <p className="text-sm text-green-700 mt-1">
                      완벽하게 이해하셨네요. 다음 문제로 넘어갈까요?
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Info Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-6 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl p-4 text-white"
        >
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1">실시간 학습 지원</p>
              <p className="text-sm text-white/90">
                즉각적인 피드백으로 오개념을 바로잡고 올바른 학습 습관을 만듭니다
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
