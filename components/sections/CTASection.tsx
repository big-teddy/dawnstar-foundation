'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Heart } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import Button from '../ui/Button';

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-12 lg:p-16">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            {/* Animated glow */}
            <motion.div
              className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <div className="relative text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <Heart className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-white">
                  교육 평등을 위한 여정
                </span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                함께 만드는
                <br />
                더 나은 교육의 미래
              </h2>
              <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                새벽별 파운데이션과 함께 모든 학생에게
                <br className="hidden sm:block" />
                평등한 교육 기회를 제공하는 데 동참해주세요
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-involved">
                  <Button
                    size="lg"
                    className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4"
                    aria-label="새벽별 파운데이션 후원하기"
                  >
                    후원하기
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/get-involved">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4"
                    aria-label="새벽별 파운데이션에 문의하기"
                  >
                    문의하기
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
