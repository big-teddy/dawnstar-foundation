'use client';

import { motion } from 'framer-motion';

const coreBeliefs = [
  {
    title: '교육은 모든 사람의 권리',
    description:
      '태어난 환경에 관계없이 평등하게 접근할 수 있어야 합니다',
  },
  {
    title: '학생 개개인의 속도와 방식 존중',
    description: '교육은 학생 개개인의 속도와 방식을 존중해야 합니다',
  },
  {
    title: '잠재력을 발견하는 여정',
    description:
      '교육은 단순한 지식 전달을 넘어, 한 사람의 잠재력을 발견하고 실현할 수 있도록 돕는 여정입니다',
  },
  {
    title: '기술은 교사의 동반자',
    description:
      '기술은 교사를 대체하는 것이 아니라, 더 나은 교육을 가능하게 하는 동반자입니다',
  },
  {
    title: '환경의 변화가 필요',
    description:
      '진정한 교육 혁신은 시스템의 변화에서 시작되며, 우리는 모든 학생이 성장할 수 있는 환경을 만들어야 합니다',
  },
];

export default function MissionPage() {
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
            미션과 비전
          </h1>
        </motion.div>

        {/* Mission */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.28, 0.11, 0.32, 1] }}
          className="max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-[21px] leading-[1.381] font-semibold tracking-[0.011em] text-[#86868b] mb-4">
            Our Mission
          </h2>
          <p className="text-[48px] leading-[1.08349] font-semibold tracking-[-0.003em] text-[#1d1d1f] mb-8">
            AI 기술로 모든 학생에게 맞춤형 교육 기회를 제공합니다
          </p>
          <div className="space-y-6">
            <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b]">
              새벽별 파운데이션은 경제적 배경이나 환경에 관계없이 모든 학생이 자신만의 속도로 배우고 성장할 수 있는 교육 환경을 만들어갑니다.
            </p>
            <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b]">
              우리는 AI 기술을 통해 교육의 격차를 줄이고, 각 학생의 잠재력을 발견하고 키울 수 있도록 지원합니다.
            </p>
          </div>
        </motion.section>

        <div className="divider-apple"></div>

        {/* Vision */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.28, 0.11, 0.32, 1] }}
          className="max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-[21px] leading-[1.381] font-semibold tracking-[0.011em] text-[#86868b] mb-4">
            Our Vision
          </h2>
          <p className="text-[48px] leading-[1.08349] font-semibold tracking-[-0.003em] text-[#1d1d1f] mb-8">
            기술로 교육의 본질을 되찾는다
          </p>
          <div className="space-y-6">
            <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b]">
              우리는 교육이 본래의 목적을 잃어버렸다고 믿습니다.
            </p>
            <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b]">
              시험 점수와 성적표가 교육의 전부가 되어버린 세상에서, 아이들은 배움의 기쁨 대신 경쟁의 무게를 짊어지고 있습니다.
            </p>
            <p className="text-[28px] leading-[1.14286] font-semibold tracking-[-0.003em] text-[#1d1d1f]">
              하지만 기술은 다릅니다. 기술은 우리가 교육의 본질로 돌아갈 수 있게 합니다.
            </p>
            <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b]">
              모든 학생이 자신의 속도로 배우고, 자신의 방식으로 이해하며, 자신의 잠재력을 발견할 수 있는 교육.
            </p>
            <p className="text-[28px] leading-[1.14286] font-semibold tracking-[-0.003em] text-[#1d1d1f]">
              그것이 우리가 추구하는 미래입니다.
            </p>
          </div>
        </motion.section>

        <div className="divider-apple"></div>

        {/* Core Beliefs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.28, 0.11, 0.32, 1] }}
          className="max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-[48px] leading-[1.08349] font-semibold tracking-[-0.003em] text-[#1d1d1f] mb-12 text-center">
            핵심 신념
          </h2>

          <div className="space-y-12">
            {coreBeliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.28, 0.11, 0.32, 1] }}
              >
                <div className="flex gap-6">
                  <div className="text-[#d2d2d7] font-semibold text-[17px] flex-shrink-0 w-8">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-[21px] leading-[1.381] font-semibold tracking-[0.011em] text-[#1d1d1f] mb-2">
                      {belief.title}
                    </h3>
                    <p className="text-[17px] leading-[1.47059] font-normal tracking-[-0.022em] text-[#86868b]">
                      {belief.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
            우리의 미션과 비전은 혼자서는 이룰 수 없습니다.
            <br />
            교사, 학생, 학부모, 그리고 뜻을 함께하는 모든 분들과 함께 만들어갑니다.
          </p>
          <button className="btn-apple">
            함께하기
          </button>
        </motion.div>
      </div>
    </main>
  );
}
