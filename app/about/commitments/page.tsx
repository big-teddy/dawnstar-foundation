'use client';

import { motion } from 'framer-motion';

const commitments = [
  {
    title: '접근성 우선 설계',
    items: [
      '경제적 어려움이 있는 학생들을 위한 무료 또는 저가 요금제',
      '다양한 디바이스와 인터넷 환경에서 작동하는 경량화 설계',
      '장애 학생을 위한 접근성 기능 포함',
      '소외 지역 학교와의 우선 파트너십',
    ],
  },
  {
    title: '교사와의 진정한 협력',
    items: [
      '교사 커뮤니티의 피드백을 제품 개발에 직접 반영',
      '교사 연수 프로그램 무상 제공',
      '교사의 행정 부담을 줄이는 도구 개발',
      '교사의 전문성과 판단을 존중하는 AI 설계',
    ],
  },
  {
    title: '데이터 프라이버시 보호',
    items: [
      '학생 데이터를 절대 제3자에게 판매하지 않습니다',
      '필요한 최소한의 데이터만 수집합니다',
      '투명한 데이터 사용 정책을 공개합니다',
      '학생과 학부모에게 데이터 통제권을 부여합니다',
      'GDPR 및 한국 개인정보보호법 완벽 준수',
    ],
  },
  {
    title: '경제적 접근성 보장',
    items: [
      'Freemium 모델: 핵심 기능은 영구 무료 제공',
      '소득 기반 차등 요금제',
      '저개발국가 및 취약계층 학생을 위한 장학 프로그램',
      '교육청 및 학교와의 대량 라이선스 협력',
      '수익의 일정 비율을 무상 지원에 재투자',
    ],
  },
  {
    title: '투명한 단체 운영',
    items: [
      '연간 재정 보고서 공개',
      '기부금 사용 내역 투명 공개',
      '프로젝트 진행 상황 정기 업데이트',
      '연구 결과 및 데이터 오픈소스 공개',
      '이사회 구성 및 의사결정 과정 공유',
    ],
  },
  {
    title: '글로벌 연결',
    items: [
      '다국어 지원을 통한 글로벌 학생 연결',
      '국제 교육 기관과의 협력 네트워크',
      '문화적 맥락을 존중하는 현지화 전략',
      '전 세계 학생들이 함께 배우고 성장하는 플랫폼',
    ],
  },
  {
    title: '지속 가능한 모델',
    items: [
      '기부에만 의존하지 않는 자립 가능한 수익 모델',
      '수익성과 사회적 가치의 균형',
      'Mozilla, Ghost Foundation 같은 revenue-generating nonprofit 구조',
      '장기적 임팩트를 위한 전략적 투자',
      '환경적으로도 지속 가능한 기술 인프라',
    ],
  },
];

export default function CommitmentsPage() {
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
            우리의 약속
          </h1>
          <p className="text-subtitle max-w-2xl mx-auto">
            새벽별 파운데이션은 말뿐인 비전이 아닌, 실질적인 행동으로 교육 평등을 실현합니다.
          </p>
        </motion.div>

        {/* Commitments */}
        <div className="max-w-3xl mx-auto space-y-16">
          {commitments.map((commitment, index) => (
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
                <div className="flex-1">
                  <h3 className="text-[28px] leading-[1.14286] font-semibold tracking-[-0.003em] text-[#1d1d1f] mb-6">
                    {commitment.title}
                  </h3>
                  <ul className="space-y-3">
                    {commitment.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-[17px] leading-[1.47059] font-normal tracking-[-0.022em] text-[#86868b] pl-6 relative before:content-['·'] before:absolute before:left-0 before:text-[#d2d2d7]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
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
            이 일곱 가지 약속은 새벽별 파운데이션의 운영 원칙입니다. 우리는 이 약속을 지키기 위해 매일 노력하며, 커뮤니티의 감시와 피드백을 환영합니다.
          </p>
          <p className="text-[28px] leading-[1.14286] font-semibold tracking-[-0.003em] text-[#1d1d1f] mb-8">
            우리가 약속을 지키고 있는지, 함께 지켜봐주세요.
          </p>
          <button className="btn-apple">
            함께하기
          </button>
        </motion.section>
      </div>
    </main>
  );
}
