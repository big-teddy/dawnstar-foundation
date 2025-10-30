'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';

export default function VisionSection() {
  return (
    <section id="vision" className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-wider text-purple-600 uppercase mb-4">
                Our Vision
              </h2>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                기술로 교육의 본질을
                <br />
                되찾는다
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-3xl mx-auto text-slate-600 leading-relaxed space-y-6"
            >
              <p className="text-xl">
                우리는 교육이 본래의 목적을 잃어버렸다고 믿습니다.
              </p>

              <p className="text-lg">
                시험 점수와 성적표가 교육의 전부가 되어버린 세상에서,
                <br />
                아이들은 배움의 기쁨 대신 경쟁의 무게를 짊어지고 있습니다.
              </p>

              <p className="text-lg font-medium text-slate-800">
                하지만 기술은 다릅니다.
                <br />
                기술은 우리가 교육의 본질로 돌아갈 수 있게 합니다.
              </p>

              <p className="text-lg">
                모든 학생이 자신의 속도로 배우고,
                <br />
                자신의 방식으로 이해하며,
                <br />
                자신의 잠재력을 발견할 수 있는 교육.
              </p>

              <p className="text-xl font-semibold text-slate-900">
                그것이 우리가 추구하는 미래입니다.
              </p>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
