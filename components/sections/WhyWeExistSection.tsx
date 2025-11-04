'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WhyWeExistSection() {
  return (
    <>
      {/* Why We Exist - Compact & Impactful */}
      <section className="bg-white py-32 relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 pointer-events-none" />

        <div className="container-apple relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.28, 0.11, 0.32, 1] }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[21px] leading-[1.381] font-semibold tracking-[0.011em] text-[#86868b] mb-4"
            >
              Why We Exist
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.28, 0.11, 0.32, 1] }}
              className="text-[64px] leading-[1.0625] font-bold tracking-[-0.009em] text-gradient-blue mb-6"
            >
              교육의 불평등
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[28px] leading-[1.14286] font-semibold tracking-[-0.003em] text-[#86868b] mb-12"
            >
              모든 아이는 최고의 교육을 받을 권리가 있습니다
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.28, 0.11, 0.32, 1] }}
              >
                <div className="info-card-fancy">
                  <div className="text-[32px] font-bold text-[#1d1d1f] mb-2">
                    26조 원
                  </div>
                  <p className="text-[17px] leading-[1.47059] text-[#86868b]">
                    한국의 연간 사교육비
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6, ease: [0.28, 0.11, 0.32, 1] }}
              >
                <div className="info-card-fancy">
                  <div className="text-[32px] font-bold text-[#1d1d1f] mb-2">
                    AI 시대
                  </div>
                  <p className="text-[17px] leading-[1.47059] text-[#86868b]">
                    기술로 교육의 격차를 줄일 수 있는 기회
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6, ease: [0.28, 0.11, 0.32, 1] }}
              >
                <div className="info-card-fancy">
                  <div className="text-[32px] font-bold text-[#1d1d1f] mb-2">
                    모든 학생
                  </div>
                  <p className="text-[17px] leading-[1.47059] text-[#86868b]">
                    자신만의 속도로 배우고 성장할 권리
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.28, 0.11, 0.32, 1] }}
              className="space-y-6 mb-12"
            >
              <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b]">
                새벽별 파운데이션은 이 질문에서 시작했습니다. 부모의 소득이나 거주 지역에 관계없이, 모든 학생이 최고의 교육을 받을 수 있는 세상을 만들기 위해.
              </p>
              <p className="text-[28px] leading-[1.14286] font-semibold tracking-[-0.003em] text-[#1d1d1f]">
                기술로 교육의 본질을 되찾고, 모든 아이의 잠재력이 빛나는 세상을 만듭니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6, ease: [0.28, 0.11, 0.32, 1] }}
              className="flex justify-center"
            >
              <Link href="/about/story">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 bg-[#1d1d1f] text-white px-6 py-3 rounded-full text-[17px] font-semibold hover:bg-[#424245] transition-colors glow-on-hover"
                >
                  우리의 이야기 더 보기
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
