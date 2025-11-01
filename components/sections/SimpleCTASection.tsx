'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '../animations/ScrollReveal';
import Button from '../ui/Button';

export default function SimpleCTASection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 border-2 border-slate-800 p-12 lg:p-16 text-center">

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
              <p className="text-xl text-white mb-10 max-w-2xl mx-auto leading-relaxed">
                새벽별 파운데이션과 함께 모든 학생에게 평등한 교육 기회를
                제공하는 데 동참해주세요
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-involved">
                  <Button
                    size="lg"
                    className="bg-white text-slate-900 hover:bg-slate-50 px-8 py-4 font-semibold shadow-lg"
                    aria-label="새벽별 파운데이션 후원하기"
                  >
                    <Heart className="mr-2 w-5 h-5" />
                    후원하기
                  </Button>
                </Link>
                <Link href="/get-involved">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 font-semibold"
                    aria-label="새벽별 파운데이션에 문의하기"
                  >
                    문의하기
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
