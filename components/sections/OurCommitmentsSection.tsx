'use client';

import { motion } from 'framer-motion';
import {
  DollarSign,
  Globe,
  Lock,
  Leaf,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

export default function OurCommitmentsSection() {
  const commitments = [
    {
      icon: Target,
      emoji: '🎯',
      title: '접근성 우선 설계',
      description: '우리의 모든 제품과 서비스는 접근성을 최우선으로 설계됩니다.',
      points: [
        '경제적 어려움이 있는 학생들을 위한 무료 또는 저가 요금제',
        '다양한 디바이스와 인터넷 환경에서 작동하는 경량화 설계',
        '장애 학생을 위한 접근성 기능 포함',
        '소외 지역 학교와의 우선 파트너십',
      ],
      closing: '우리는 기술이 새로운 불평등을 만들지 않도록 끊임없이 노력합니다.',
    },
    {
      icon: Users,
      emoji: '🤝',
      title: '교사와의 진정한 협력',
      description: 'AI는 교사를 대체하지 않습니다. 우리는 교사를 지원합니다.',
      points: [
        '교사 커뮤니티의 피드백을 제품 개발에 직접 반영',
        '교사 연수 프로그램 무상 제공',
        '교사의 행정 부담을 줄이는 도구 개발',
        '교사의 전문성과 판단을 존중하는 AI 설계',
      ],
      closing:
        '우리는 교사가 진정으로 필요한 것이 무엇인지 듣고, 함께 만들어갑니다.',
    },
    {
      icon: Lock,
      emoji: '🔒',
      title: '데이터 프라이버시 보호',
      description: '학생들의 데이터는 신성합니다.',
      points: [
        '학생 데이터를 절대 제3자에게 판매하지 않습니다',
        '필요한 최소한의 데이터만 수집합니다',
        '투명한 데이터 사용 정책을 공개합니다',
        '학생과 학부모에게 데이터 통제권을 부여합니다',
        'GDPR 및 한국 개인정보보호법 완벽 준수',
      ],
      closing:
        '우리에게 학생의 개인정보는 수익의 수단이 아닌, 보호해야 할 신뢰입니다.',
    },
    {
      icon: DollarSign,
      emoji: '💰',
      title: '경제적 접근성 보장',
      description: '좋은 교육은 부의 특권이 아닙니다.',
      points: [
        'Freemium 모델: 핵심 기능은 영구 무료 제공',
        '소득 기반 차등 요금제',
        '저개발국가 및 취약계층 학생을 위한 장학 프로그램',
        '교육청 및 학교와의 대량 라이선스 협력',
        '수익의 일정 비율을 무상 지원에 재투자',
      ],
      closing:
        '우리는 지속 가능한 비영리 모델을 통해, 누구도 비용 때문에 배움을 포기하지 않도록 합니다.',
    },
    {
      icon: TrendingUp,
      emoji: '📊',
      title: '투명한 단체 운영',
      description: '우리는 숨길 것이 없습니다.',
      points: [
        '연간 재정 보고서 공개',
        '기부금 사용 내역 투명 공개',
        '프로젝트 진행 상황 정기 업데이트',
        '연구 결과 및 데이터 오픈소스 공개',
        '이사회 구성 및 의사결정 과정 공유',
      ],
      closing: '신뢰는 투명성에서 나옵니다. 우리는 커뮤니티에 대한 책임을 다합니다.',
    },
    {
      icon: Globe,
      emoji: '🌏',
      title: '글로벌 연결',
      description: '경계를 넘어 배움을 연결합니다.',
      points: [
        '다국어 지원을 통한 글로벌 학생 연결',
        '국제 교육 기관과의 협력 네트워크',
        '문화적 맥락을 존중하는 현지화 전략',
        '전 세계 학생들이 함께 배우고 성장하는 플랫폼',
      ],
      closing:
        '한국에서 시작하지만, 우리의 비전은 전 세계 학생들을 위한 것입니다.',
    },
    {
      icon: Leaf,
      emoji: '🌱',
      title: '지속 가능한 모델',
      description: '진정한 변화는 지속 가능할 때 가능합니다.',
      points: [
        '기부에만 의존하지 않는 자립 가능한 수익 모델',
        '수익성과 사회적 가치의 균형',
        'Mozilla, Ghost Foundation 같은 revenue-generating nonprofit 구조',
        '장기적 임팩트를 위한 전략적 투자',
        '환경적으로도 지속 가능한 기술 인프라',
      ],
      closing: '우리는 단기 프로젝트가 아닌, 다음 세대를 위한 플랫폼을 만듭니다.',
    },
  ];

  return (
    <section id="commitments" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-wider text-purple-600 uppercase mb-4">
                Our Commitments
              </h2>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
                우리가 약속하는 것
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            >
              새벽별 파운데이션은 말뿐인 비전이 아닌,
              <br />
              실질적인 행동으로 교육 평등을 실현합니다.
              <br />
              우리가 여러분께 약속하는 일곱 가지입니다.
            </motion.p>
          </div>

          {/* Commitments */}
          <div className="space-y-12">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <commitment.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                      {commitment.emoji} {commitment.title}
                    </h4>
                    <p className="text-lg text-slate-700 font-medium mb-6">
                      {commitment.description}
                    </p>
                  </div>
                </div>

                <div className="ml-0 lg:ml-22 space-y-6">
                  <ul className="space-y-3">
                    {commitment.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-start gap-3 text-slate-600"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-600 rounded-full mt-2" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-700 italic border-l-4 border-purple-600 pl-4 py-2">
                    {commitment.closing}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 lg:p-12"
          >
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
              이 일곱 가지 약속은 새벽별 파운데이션의 운영 원칙입니다.
              <br />
              우리는 이 약속을 지키기 위해 매일 노력하며,
              <br />
              커뮤니티의 감시와 피드백을 환영합니다.
            </p>
            <p className="text-xl font-semibold text-slate-900 mt-6">
              우리가 약속을 지키고 있는지, 함께 지켜봐주세요.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
