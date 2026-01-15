'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

export default function SimpleCTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl liquid-glass p-12 lg:p-16 text-center">
            {/* Background gradient decorations */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl" />

            {/* Liquid glass inner border effect */}
            <div className="absolute inset-0 rounded-3xl border border-white/10" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                함께 만드는
                <br />
                더 나은 교육의 미래
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                새벽별 파운데이션과 함께 모든 학생에게 평등한 교육 기회를
                제공하는 데 동참해주세요
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="inline-flex items-center justify-center liquid-glass-light text-slate-900 hover:bg-white/95 px-8 py-4 font-semibold shadow-lg cursor-not-allowed opacity-75 rounded-xl transition-all"
                  aria-label="새벽별 파운데이션 후원하기 (준비 중)"
                  disabled
                >
                  <Heart className="mr-2 w-5 h-5" />
                  후원하기 (준비 중)
                </button>
                <button
                  className="inline-flex items-center justify-center border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/40 px-8 py-4 font-semibold cursor-not-allowed opacity-75 rounded-xl transition-all"
                  aria-label="새벽별 파운데이션에 문의하기 (준비 중)"
                  disabled
                >
                  문의하기 (준비 중)
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
