'use client';

import { motion } from 'framer-motion';
import { Shield, CheckCircle2, AlertTriangle, Lock } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SafetyCheck {
  category: string;
  status: 'safe' | 'warning';
  description: string;
}

const safetyChecks: SafetyCheck[] = [
  {
    category: '학습 집중도',
    status: 'safe',
    description: '학습 관련 주제만 대화했습니다',
  },
  {
    category: '콘텐츠 안전성',
    status: 'safe',
    description: '부적절한 내용이 감지되지 않았습니다',
  },
  {
    category: '개인정보 보호',
    status: 'safe',
    description: '민감한 정보가 공유되지 않았습니다',
  },
];

export default function SafetyMonitorDemo() {
  const [visibleChecks, setVisibleChecks] = useState<SafetyCheck[]>([]);

  useEffect(() => {
    const sequence = async () => {
      setVisibleChecks([]);

      for (let i = 0; i < safetyChecks.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setVisibleChecks((prev) => [...prev, safetyChecks[i]]);
      }

      await new Promise((resolve) => setTimeout(resolve, 4000));
    };

    sequence();
    const interval = setInterval(sequence, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">
                안전하고 건전한 학습 환경
              </h3>
              <p className="text-sm text-slate-600">실시간 안전 모니터링</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-900">
              모두 안전
            </span>
          </div>
        </div>

        {/* Overall Status */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-green-900 mb-1">안전함</p>
                <p className="text-sm text-green-700">
                  모든 안전 기준을 충족하고 있습니다
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Checks */}
        <div className="space-y-4 mb-6">
          <p className="text-sm font-semibold text-slate-600 mb-3">
            안전 점검 항목
          </p>
          {visibleChecks.map((check, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className={`rounded-2xl p-5 shadow-sm ${
                check.status === 'safe'
                  ? 'bg-white'
                  : 'bg-white'
              }`}
            >
              <div className="flex items-start gap-3">
                {check.status === 'safe' ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <p
                    className={`font-semibold text-sm mb-1 ${
                      check.status === 'safe'
                        ? 'text-green-900'
                        : 'text-yellow-900'
                    }`}
                  >
                    {check.category}
                  </p>
                  <p
                    className={`text-xs ${
                      check.status === 'safe'
                        ? 'text-green-700'
                        : 'text-yellow-700'
                    }`}
                  >
                    {check.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Loading indicator */}
          {visibleChecks.length < safetyChecks.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl p-4 border border-slate-200 bg-slate-50"
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-slate-600">점검 중...</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Security Features */}
        {visibleChecks.length === safetyChecks.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-3 mb-6"
          >
            <p className="text-sm font-semibold text-slate-600 mb-3">
              보안 기능
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                <Lock className="w-6 h-6 text-slate-700 mx-auto mb-2" />
                <p className="text-xs font-semibold text-slate-900 mb-1">
                  암호화 저장
                </p>
                <p className="text-xs text-slate-600">
                  모든 데이터 암호화 보호
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                <Shield className="w-6 h-6 text-slate-700 mx-auto mb-2" />
                <p className="text-xs font-semibold text-slate-900 mb-1">
                  실시간 필터링
                </p>
                <p className="text-xs text-slate-600">
                  부적절 콘텐츠 즉시 차단
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Action Button */}
        {visibleChecks.length === safetyChecks.length && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:from-green-700 hover:to-emerald-700 transition-colors">
              상세 안전 리포트 보기
            </button>
          </motion.div>
        )}

        {/* Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 bg-white rounded-xl p-4 shadow-sm"
        >
          <p className="text-xs text-green-900 text-center">
            학습과 관련 없는 주제는 자동으로 차단되며, 부적절한 내용이 감지되면
            즉시 알림을 보내드립니다
          </p>
        </motion.div>
      </div>
    </div>
  );
}
