'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Sparkles, Check } from 'lucide-react';
import { useEffect, useState } from 'react';

type GenerationState = 'idle' | 'generating' | 'complete';

export default function RecordGeneratorDemo() {
  const [state, setState] = useState<GenerationState>('idle');
  const [text, setText] = useState('');

  const fullText = `[국어]
문학 작품 분석 활동에서 작품의 주제를 파악하고 등장인물의 심리를 깊이 있게 해석하는 능력이 뛰어남. 특히 시의 비유적 표현을 자신의 경험과 연결하여 독창적으로 해석하고 발표함. 토론 활동에서는 다양한 관점을 존중하며 논리적으로 자신의 의견을 제시하는 모습을 보임.`;

  useEffect(() => {
    const sequence = async () => {
      // Reset
      setText('');
      setState('idle');
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Start generating
      setState('generating');
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Type out text
      for (let i = 0; i <= fullText.length; i++) {
        setText(fullText.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 30));
      }

      // Complete
      setState('complete');
      await new Promise((resolve) => setTimeout(resolve, 2500));
    };

    sequence();
    const interval = setInterval(sequence, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-3xl p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">
                생활기록부 작성 지원
              </h3>
              <p className="text-sm text-slate-600">
                세부능력특기사항 초안 생성
              </p>
            </div>
          </div>
          <AnimatePresence mode="wait">
            {state === 'generating' && (
              <motion.div
                key="generating"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="w-4 h-4 text-purple-600" />
                </motion.div>
                <span className="text-sm font-semibold text-purple-900">
                  생성 중...
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
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-900">
                  완료
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input Section */}
        <div className="mb-6">
          <p className="text-sm text-slate-600 mb-3 font-semibold">입력 정보</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
              <span className="text-slate-600 text-sm">학생:</span>
              <span className="font-semibold text-slate-900 text-sm">
                김○○ (3학년 2반)
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
              <span className="text-slate-600 text-sm">과목:</span>
              <span className="font-semibold text-slate-900 text-sm">
                국어
              </span>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-sm">
              <span className="text-slate-600 text-sm block mb-1">
                관찰 내용:
              </span>
              <p className="text-slate-900 text-sm">
                문학 작품 분석, 비유적 표현 해석, 토론 활동 참여
              </p>
            </div>
          </div>
        </div>

        {/* Generated Output */}
        <div className="mb-6">
          <p className="text-sm text-slate-600 mb-3 font-semibold">
            생성된 초안 (검토 후 수정 가능)
          </p>
          <div className="bg-white rounded-2xl p-5 shadow-sm min-h-[180px]">
            <p className="text-slate-900 leading-relaxed whitespace-pre-wrap text-sm">
              {text}
              {state === 'generating' && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-0.5 h-4 bg-purple-600 ml-0.5"
                />
              )}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        {state === 'complete' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3"
          >
            <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:bg-purple-700 transition-colors">
              초안 저장
            </button>
            <button className="flex-1 border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-xl font-semibold text-sm hover:bg-purple-50 transition-colors">
              다시 생성
            </button>
          </motion.div>
        )}

        {/* Info Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 bg-white rounded-xl p-4 shadow-sm flex items-start gap-3"
        >
          <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-slate-900 font-semibold mb-1">
              작성 시간 70% 단축
            </p>
            <p className="text-xs text-slate-600">
              교육부 가이드라인을 완벽하게 준수하며, 선생님이 최종 검토하고
              다듬을 수 있도록 초안을 제공합니다
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
