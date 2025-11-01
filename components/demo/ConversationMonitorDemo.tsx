'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Eye, MessageCircle, CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Message {
  role: 'student' | 'ai';
  content: string;
  time: string;
}

const conversation: Message[] = [
  {
    role: 'student',
    content: '삼각형의 내각의 합이 왜 180도인가요?',
    time: '오후 3:24',
  },
  {
    role: 'ai',
    content:
      '좋은 질문이에요! 먼저 삼각형을 그려볼까요? 삼각형의 각 꼭짓점에서 평행선을 그으면 어떤 일이 일어날까요?',
    time: '오후 3:24',
  },
  {
    role: 'student',
    content: '아! 평행선의 엇각이 같으니까 180도가 되는 거네요!',
    time: '오후 3:25',
  },
];

export default function ConversationMonitorDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);

  useEffect(() => {
    const sequence = async () => {
      setVisibleMessages([]);
      setCurrentIndex(0);

      for (let i = 0; i < conversation.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setVisibleMessages((prev) => [...prev, conversation[i]]);
        setCurrentIndex(i + 1);
      }

      await new Promise((resolve) => setTimeout(resolve, 3000));
    };

    sequence();
    const interval = setInterval(sequence, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 rounded-3xl p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">학습 과정 투명하게 확인</h3>
              <p className="text-sm text-slate-600">최근 대화 내역</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-900">
              안전 확인됨
            </span>
          </div>
        </div>

        {/* Session Info */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-slate-600" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">
                  수학 - 기하학
                </p>
                <p className="text-xs text-slate-600">2025년 1월 15일</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-600">대화 시간</p>
              <p className="font-semibold text-slate-900 text-sm">15분</p>
            </div>
          </div>
        </div>

        {/* Conversation */}
        <div className="min-h-[300px] mb-6">
          <div className="bg-white rounded-2xl p-5 shadow-sm space-y-4">
            <AnimatePresence>
              {visibleMessages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`flex ${
                    message.role === 'student' ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`max-w-[80%] ${
                      message.role === 'student'
                        ? 'bg-white border border-slate-200'
                        : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                    } rounded-2xl p-4`}
                  >
                    <p
                      className={`text-sm mb-2 ${
                        message.role === 'student'
                          ? 'text-slate-900'
                          : 'text-white'
                      }`}
                    >
                      {message.content}
                    </p>
                    <p
                      className={`text-xs ${
                        message.role === 'student'
                          ? 'text-slate-500'
                          : 'text-white/70'
                      }`}
                    >
                      {message.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {visibleMessages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-sm text-slate-500">
                  대화 내역을 불러오는 중...
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Analysis */}
        {currentIndex === conversation.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 mb-6"
          >
            <div className="bg-green-50 border border-green-100 rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-900 text-sm mb-1">
                    학습 내용 확인됨
                  </p>
                  <p className="text-xs text-green-700">
                    수학 기하학 개념을 스스로 이해했습니다. 소크라테스식 질문을
                    통해 자기주도 학습이 잘 이루어지고 있습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-3 shadow-sm text-center">
                <p className="text-xl font-bold text-blue-900">85%</p>
                <p className="text-xs text-blue-700 mt-1">이해도</p>
              </div>
              <div className="bg-white rounded-xl p-3 shadow-sm text-center">
                <p className="text-xl font-bold text-purple-900">8번</p>
                <p className="text-xs text-purple-700 mt-1">질문 횟수</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Action Button */}
        {currentIndex === conversation.length && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:from-blue-700 hover:to-indigo-700 transition-colors">
              전체 대화 기록 보기
            </button>
          </motion.div>
        )}

        {/* Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 bg-white rounded-xl p-4 shadow-sm"
        >
          <p className="text-xs text-blue-900 text-center">
            자녀가 샛별과 나눈 모든 대화를 확인하실 수 있습니다. 어떤 주제를
            공부했는지, 어떤 질문을 했는지 투명하게 공유됩니다.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
