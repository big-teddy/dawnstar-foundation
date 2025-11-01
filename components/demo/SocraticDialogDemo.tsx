'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Message {
  role: 'student' | 'ai';
  content: string;
  delay: number;
}

const conversation: Message[] = [
  {
    role: 'student',
    content: '2x + 5 = 15일 때, x는 어떻게 구하나요?',
    delay: 500,
  },
  {
    role: 'ai',
    content: '좋은 질문이에요! 먼저 양변에서 5를 빼면 어떻게 될까요?',
    delay: 2000,
  },
  {
    role: 'student',
    content: '음... 2x = 10이 되겠네요!',
    delay: 3500,
  },
  {
    role: 'ai',
    content: '정확해요! 그럼 이제 양변을 2로 나누면 x를 구할 수 있겠죠?',
    delay: 5000,
  },
  {
    role: 'student',
    content: 'x = 5네요! 이해했어요!',
    delay: 6500,
  },
];

export default function SocraticDialogDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < conversation.length) {
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, conversation[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, conversation[currentIndex].delay);

      return () => clearTimeout(timer);
    } else {
      // Reset after showing all messages
      const resetTimer = setTimeout(() => {
        setMessages([]);
        setCurrentIndex(0);
      }, 2500);
      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-3xl p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">소크라테스식 대화</h3>
              <p className="text-sm text-slate-600">수학 - 일차방정식</p>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-slate-900">AI 튜터</span>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-2xl p-5 shadow-sm min-h-[320px] flex flex-col justify-end space-y-3">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`flex ${
                  message.role === 'student' ? 'justify-start' : 'justify-end'
                }`}
              >
                {message.role === 'student' ? (
                  <div className="flex items-start gap-2 max-w-[85%]">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-semibold text-slate-600">학</span>
                    </div>
                    <div className="bg-slate-100 rounded-2xl rounded-tl-md px-4 py-2.5">
                      <p className="text-slate-800 text-sm leading-relaxed">
                        {message.content}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-2 max-w-[85%] flex-row-reverse">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl rounded-tr-md px-4 py-2.5 shadow-sm">
                      <p className="text-white text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing indicator when waiting for next message */}
          {messages.length > 0 &&
            messages.length < conversation.length &&
            messages[messages.length - 1].role === 'student' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-end"
              >
                <div className="flex items-start gap-2 max-w-[85%] flex-row-reverse">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl rounded-tr-md px-4 py-2.5 shadow-sm">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-white/80 rounded-full"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: 0,
                        }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-white/80 rounded-full"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: 0.2,
                        }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-white/80 rounded-full"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: 0.4,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
        </div>

        {/* Info Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 text-white"
        >
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1">맞춤 학습 가이드</p>
              <p className="text-sm text-white/90">
                답을 알려주지 않고 질문을 통해 스스로 깨닫도록 돕습니다
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
