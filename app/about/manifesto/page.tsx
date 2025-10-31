'use client';

import { motion } from 'framer-motion';

const principles = [
  {
    title: '교육은 모든 사람의 권리입니다',
    description:
      '태어난 곳, 부모의 소득, 학교의 위치에 관계없이 모든 아이는 양질의 교육을 받을 권리가 있습니다. 우리는 경제적, 지리적, 사회적 장벽을 허물고 모든 학생에게 동등한 기회를 제공하기 위해 존재합니다.',
  },
  {
    title: '교육은 개인의 속도를 존중해야 합니다',
    description:
      '모든 학생은 고유한 학습 방식과 속도를 가지고 있습니다. 우리는 모든 학생을 같은 틀에 맞추는 대신, 기술을 활용해 각자에게 맞는 학습 경험을 제공합니다.',
  },
  {
    title: '교육은 잠재력을 발견하는 여정입니다',
    description:
      '교육의 목적은 시험 점수가 아니라 한 사람의 가능성을 발견하고 키우는 것입니다. 우리는 학생들이 자신의 강점을 발견하고, 약점을 극복하며, 평생 학습자로 성장할 수 있도록 돕습니다.',
  },
  {
    title: '기술은 교사를 돕는 도구입니다',
    description:
      'AI는 교사를 대체하는 것이 아니라, 교사가 더 나은 교육을 제공할 수 있도록 돕는 동반자입니다. 우리는 교사의 부담을 줄이고, 학생과의 의미 있는 상호작용에 집중할 수 있게 합니다.',
  },
  {
    title: '교육 환경의 변화가 필요합니다',
    description:
      '개인의 노력만으로는 구조적 불평등을 해결할 수 없습니다. 우리는 시스템 차원의 변화를 만들고, 모든 학생이 성장할 수 있는 환경을 조성하기 위해 노력합니다.',
  },
  {
    title: '데이터는 학생을 이해하는 도구입니다',
    description:
      '우리는 데이터를 활용해 학생을 더 깊이 이해하고 지원합니다. 하지만 데이터는 절대 학생을 선별하거나 차별하는 도구로 사용되어서는 안 됩니다.',
  },
  {
    title: '학습은 경쟁이 아닌 협력입니다',
    description:
      '학생들은 서로 경쟁 상대가 아닌 함께 성장하는 동료입니다. 우리는 협력적 학습 문화를 만들고, 학생들이 서로를 돕고 배우는 커뮤니티를 지원합니다.',
  },
  {
    title: '교육은 평생 지속됩니다',
    description:
      '학습은 졸업과 함께 끝나지 않습니다. 우리는 모든 연령대의 학습자를 지원하고, 평생 학습의 기쁨과 가치를 전파합니다.',
  },
  {
    title: '투명성과 책임이 신뢰를 만듭니다',
    description:
      '우리는 재단의 운영, 재정, 연구를 투명하게 공개하고, 커뮤니티에 대한 책임을 다합니다. 신뢰는 우리 활동의 기반입니다.',
  },
  {
    title: '함께할 때 더 강합니다',
    description:
      '교육의 변화는 혼자 만들 수 없습니다. 우리는 교사, 학생, 학부모, 연구자, 정책 입안자, 그리고 뜻을 같이하는 모든 이들과 협력합니다.',
  },
];

export default function ManifestoPage() {
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
            새벽별 선언문
          </h1>
          <p className="text-subtitle max-w-2xl mx-auto">
            우리가 믿는 것
          </p>
        </motion.div>

        {/* Opening Statement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.28, 0.11, 0.32, 1] }}
          className="max-w-3xl mx-auto mb-24"
        >
          <div className="space-y-6">
            <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b]">
              교육은 세상을 바꿀 수 있는 가장 강력한 도구입니다. 하지만 지금 우리 교육은 너무 많은 아이들을 놓치고 있습니다.
            </p>
            <p className="text-[28px] leading-[1.14286] font-semibold tracking-[-0.003em] text-[#1d1d1f]">
              우리는 이것을 바꿀 수 있다고 믿습니다.
            </p>
            <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b]">
              기술이 아니라, 사람을 중심에 두고. 경쟁이 아니라, 성장을 목표로 하며. 선별이 아니라, 포용을 실천하는 교육을 만들 수 있다고 믿습니다.
            </p>
          </div>
        </motion.section>

        <div className="divider-apple"></div>

        {/* 10 Principles */}
        <div className="max-w-3xl mx-auto space-y-16">
          {principles.map((principle, index) => (
            <motion.section
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
                  <h3 className="text-[28px] leading-[1.14286] font-semibold tracking-[-0.003em] text-[#1d1d1f] mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b]">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        <div className="divider-apple my-24"></div>

        {/* Closing */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.28, 0.11, 0.32, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-[21px] leading-[1.381] font-normal tracking-[0.011em] text-[#86868b] mb-8">
            이 열 가지 원칙은 새벽별 파운데이션의 나침반입니다. 우리는 이 신념을 바탕으로 모든 결정을 내리고, 모든 프로젝트를 시작하며, 모든 파트너십을 맺습니다.
          </p>
          <p className="text-[28px] leading-[1.14286] font-semibold tracking-[-0.003em] text-[#1d1d1f] mb-8">
            교육의 미래는 우리 모두의 손에 달려 있습니다.
          </p>
          <button className="btn-apple">
            함께하기
          </button>
        </motion.section>
      </div>
    </main>
  );
}
