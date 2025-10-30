'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Brain, DollarSign } from 'lucide-react';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-purple-600">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-10 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            모든 학생이
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              최고의 교육을 받을 수 있는 세상
            </span>
          </motion.h1>

          {/* Sub Heading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto"
          >
            AI 기술로 개인 맞춤형 학습을 제공하는
            <br className="hidden sm:block" />
            한국형 교육 플랫폼을 만듭니다
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button size="lg" variant="secondary">
              제품 알아보기
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline">
              우리의 미션
            </Button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-bold text-white mb-1">10,000+</p>
              <p className="text-blue-200">베타 사용자</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-bold text-white mb-1">24/7</p>
              <p className="text-blue-200">AI 튜터 학습 지원</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-bold text-white mb-1">100%</p>
              <p className="text-blue-200">무료 기본 플랜</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
