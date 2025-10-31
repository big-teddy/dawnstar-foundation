'use client';

import { motion } from 'framer-motion';
import { Metadata } from 'next';

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="container-apple py-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.28, 0.11, 0.32, 1] }}
          className="text-center mb-24"
        >
          <h1 className="text-headline text-[#1d1d1f] mb-6">
            우리는 왜 시작했나요
          </h1>
        </motion.div>

        {/* Opening */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.28, 0.11, 0.32, 1] }}
          className="max-w-3xl mx-auto mb-24"
        >
          <p className="text-[28px] leading-[1.14286] font-semibold tracking-[-0.003em] text-[#1d1d1f] mb-8">
            모든 위대한 여정은 작은 질문에서 시작됩니다.
          </p>
          <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b] mb-12">
            새벽별 파운데이션의 시작도 그랬습니다.
          </p>
          <p className="text-[40px] leading-[1.1] font-semibold tracking-[0em] text-[#1d1d1f] mb-8">
            "왜 어떤 아이들은 최고의 교육을 받고, 어떤 아이들은 그 기회조차 갖지 못할까?"
          </p>
          <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b]">
            이 질문은 단순한 호기심이 아니었습니다. 이것은 우리 사회의 가장 근본적인 불평등 중 하나이며, 수많은 아이들의 미래가 걸린 문제였습니다.
          </p>
        </motion.section>

        <div className="divider-apple"></div>

        {/* The Problem */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.28, 0.11, 0.32, 1] }}
          className="max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-[48px] leading-[1.08349] font-semibold tracking-[-0.003em] text-[#1d1d1f] mb-8">
            문제는 명확했습니다
          </h2>
          <div className="space-y-6">
            <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b]">
              한국은 2024년 한 해에만 사교육비로 26조 원을 지출했습니다. 가구당 평균 월 43만 원. 부모의 소득에 따라 아이의 기회가 결정되는 현실입니다.
            </p>
            <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b]">
              강남의 한 학생은 수학 개인 과외를 매일 받는 동안, 지방 소도시의 한 학생은 혼자 인터넷 강의를 보며 이해하지 못한 부분을 고민합니다.
            </p>
            <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b]">
              좋은 선생님을 만나는 것은 운입니다. 좋은 학교에 배정되는 것도 운입니다. 교육받을 권리가 이렇게 불평등해도 되는 걸까요?
            </p>
          </div>
        </motion.section>

        {/* Stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.28, 0.11, 0.32, 1] }}
          className="text-center my-32"
        >
          <div className="stat-number mb-4">26조 원</div>
          <p className="text-subtitle">한국의 연간 사교육비 (2024년)</p>
        </motion.div>

        <div className="divider-apple"></div>

        {/* The Answer */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.28, 0.11, 0.32, 1] }}
          className="max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-[48px] leading-[1.08349] font-semibold tracking-[-0.003em] text-[#1d1d1f] mb-8">
            그래서 우리는 생각했습니다
          </h2>
          <p className="text-[28px] leading-[1.14286] font-semibold tracking-[-0.003em] text-[#1d1d1f] mb-8">
            "기술이 답이 될 수 있지 않을까?"
          </p>
          <div className="space-y-6">
            <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b]">
              강남의 최고 과외 선생님처럼, 각 학생의 수준을 정확히 파악하고, 이해할 때까지 끈기있게 가르치고, 학생이 막힐 때 즉시 도와줄 수 있는 AI 튜터.
            </p>
            <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b]">
              24시간 언제든 질문할 수 있고, 소득이나 지역에 관계없이 누구나 접근할 수 있는 교육.
            </p>
            <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b]">
              이것이 2025년, 새벽별 파운데이션이 탄생한 이유입니다.
            </p>
          </div>
        </motion.section>

        <div className="divider-apple"></div>

        {/* Mission */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.28, 0.11, 0.32, 1] }}
          className="max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-[48px] leading-[1.08349] font-semibold tracking-[-0.003em] text-[#1d1d1f] mb-8">
            우리의 미션
          </h2>
          <p className="text-[28px] leading-[1.14286] font-semibold tracking-[-0.003em] text-[#1d1d1f] mb-8">
            세상 모든 학생이 최고의 교육을 받을 수 있도록
          </p>
          <div className="space-y-6">
            <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b]">
              우리는 AI 기술로 교육의 민주화를 실현합니다. 부모의 소득이나 거주 지역, 학교의 수준에 관계없이 모든 학생이 자신만의 속도로 배우고 성장할 수 있는 세상을 만듭니다.
            </p>
            <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b]">
              새벽별은 단순한 교육 도구가 아닙니다. 우리는 교육 불평등을 해소하고, 모든 아이가 꿈을 이룰 수 있는 미래를 만드는 운동입니다.
            </p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.28, 0.11, 0.32, 1] }}
          className="text-center mt-32"
        >
          <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b] mb-8">
            이 여정에 함께하시겠습니까?
          </p>
          <button className="btn-apple">
            함께하기
          </button>
        </motion.div>
      </div>
    </main>
  );
}
