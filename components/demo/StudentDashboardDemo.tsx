'use client';

import { motion } from 'framer-motion';
import { Users, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Student {
  name: string;
  understanding: number;
  status: 'excellent' | 'good' | 'needsHelp';
  trend: 'up' | 'down' | 'stable';
}

const students: Student[] = [
  { name: '김○○', understanding: 92, status: 'excellent', trend: 'up' },
  { name: '이○○', understanding: 85, status: 'good', trend: 'stable' },
  { name: '박○○', understanding: 65, status: 'needsHelp', trend: 'down' },
  { name: '최○○', understanding: 88, status: 'good', trend: 'up' },
];

export default function StudentDashboardDemo() {
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues(students.map((s) => s.understanding));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getStatusColor = (status: Student['status']) => {
    switch (status) {
      case 'excellent':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'good':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'needsHelp':
        return 'bg-red-50 border-red-200 text-red-800';
    }
  };

  const getStatusLabel = (status: Student['status']) => {
    switch (status) {
      case 'excellent':
        return '우수';
      case 'good':
        return '양호';
      case 'needsHelp':
        return '주의 필요';
    }
  };

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-3xl p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">학생 진단 및 분석</h3>
              <p className="text-sm text-slate-600">
                수학 - 이차방정식 단원
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1 rounded-full">
            <span className="text-sm font-semibold text-slate-900">
              실시간 업데이트
            </span>
          </div>
        </div>

        {/* Class Summary */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-5 shadow-sm text-center"
          >
            <p className="text-2xl font-bold text-green-900">78%</p>
            <p className="text-xs text-green-700 mt-1">학급 평균 이해도</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-5 shadow-sm text-center"
          >
            <p className="text-2xl font-bold text-blue-900">12명</p>
            <p className="text-xs text-blue-700 mt-1">오늘 학습 참여</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-5 shadow-sm text-center"
          >
            <p className="text-2xl font-bold text-red-900">3명</p>
            <p className="text-xs text-red-700 mt-1">추가 지원 필요</p>
          </motion.div>
        </div>

        {/* Student List */}
        <div className="space-y-4">
          <p className="text-sm font-semibold text-slate-600 mb-3">
            학생별 이해도 분석
          </p>
          {students.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white rounded-2xl p-5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-200 rounded-full" />
                  <div>
                    <p className="font-semibold text-slate-900">{student.name}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border ${getStatusColor(
                          student.status
                        )}`}
                      >
                        {getStatusLabel(student.status)}
                      </span>
                      {student.trend === 'up' && (
                        <TrendingUp className="w-3 h-3 text-green-600" />
                      )}
                      {student.trend === 'down' && (
                        <TrendingDown className="w-3 h-3 text-red-600" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-slate-900">
                    {animatedValues[index]}%
                  </p>
                  <p className="text-xs text-slate-600">이해도</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${animatedValues[index]}%` }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 1 }}
                  className={`absolute top-0 left-0 h-full rounded-full ${
                    student.status === 'excellent'
                      ? 'bg-gradient-to-r from-green-500 to-green-600'
                      : student.status === 'good'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                      : 'bg-gradient-to-r from-red-500 to-red-600'
                  }`}
                />
              </div>

              {/* Alert for students needing help */}
              {student.status === 'needsHelp' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ delay: 1.5 }}
                  className="mt-3 bg-red-50 border border-red-100 rounded-xl p-3 flex items-start gap-2"
                >
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-red-900 mb-1">
                      추가 지원 권장
                    </p>
                    <p className="text-xs text-red-700">
                      최근 3개 문제 오답률 높음 - 개념 재학습 필요
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="mt-6"
        >
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:from-blue-700 hover:to-purple-700 transition-colors">
            상세 분석 리포트 보기
          </button>
        </motion.div>
      </div>
    </div>
  );
}
