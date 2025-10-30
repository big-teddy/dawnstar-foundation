'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '../animations/ScrollReveal';

export default function WhyWeExistSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
            >
              Why We Exist
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6"
          >
            <p className="text-xl text-slate-700 font-medium">
              한국의 사교육비는 연간 26조 원을 넘어섭니다. 어떤 가정은 자녀 한
              명당 월 수백만 원을 사교육에 쓰고, 어떤 가정은 교과서 한 권 사기도
              버겁습니다.
            </p>

            <p>
              미국에서는 Khanmigo 같은 AI 튜터가 학생들의 학습을 혁신하고
              있지만, 한국의 학생들은 언어와 교육과정의 차이로 인해 이러한
              혁신적 도구에 접근조차 할 수 없습니다.
            </p>

            <p className="text-lg text-slate-800 font-semibold">
              기술은 교육의 격차를 줄일 수 있는 강력한 도구입니다.
            </p>

            <p>
              적절히 설계되고 공정하게 배분된다면, AI는 모든 학생에게 맞춤형
              학습 기회를 제공할 수 있습니다. 학생 천 명이 있으면 천 가지의 학습
              방식이 있습니다. 각 학생의 이해도를 실시간으로 파악하고, 적절한
              수준의 문제와 설명을 제공하며, 교사가 더 의미 있는 상호작용에
              집중할 수 있도록 돕는 것—이것이 우리가 추구하는 교육입니다.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 my-8">
              <p className="text-xl text-slate-900 font-semibold mb-4">
                새벽별은 가장 어두운 밤에도 길을 밝히는 별입니다.
              </p>
              <p className="text-slate-700">
                우리는 교육의 어둠 속에서 희망의 빛이 되고자 합니다. 기술로
                교육의 본질을 되찾고, 모든 아이의 잠재력이 빛나는 세상을
                만들어가고 있습니다.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/about/story"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors group"
            >
              전체 스토리 읽기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
