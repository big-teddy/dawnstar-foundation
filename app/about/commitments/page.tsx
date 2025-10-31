'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Metadata } from 'next';
import { useRef } from 'react';
import {
  Target,
  Users,
  Shield,
  DollarSign,
  FileText,
  Globe,
  Sprout,
  Check,
  Sparkles,
} from 'lucide-react';

const commitments = [
  {
    icon: Target,
    emoji: '🎯',
    title: '접근성 우선 설계',
    items: [
      '경제적 어려움이 있는 학생들을 위한 무료 또는 저가 요금제',
      '다양한 디바이스와 인터넷 환경에서 작동하는 경량화 설계',
      '장애 학생을 위한 접근성 기능 포함',
      '소외 지역 학교와의 우선 파트너십',
    ],
    closing:
      '우리는 기술이 새로운 불평등을 만들지 않도록 끊임없이 노력합니다.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    emoji: '🤝',
    title: '교사와의 진정한 협력',
    items: [
      '교사 커뮤니티의 피드백을 제품 개발에 직접 반영',
      '교사 연수 프로그램 무상 제공',
      '교사의 행정 부담을 줄이는 도구 개발',
      '교사의 전문성과 판단을 존중하는 AI 설계',
    ],
    closing:
      '우리는 교사가 진정으로 필요한 것이 무엇인지 듣고, 함께 만들어갑니다.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Shield,
    emoji: '🔒',
    title: '데이터 프라이버시 보호',
    items: [
      '학생 데이터를 절대 제3자에게 판매하지 않습니다',
      '필요한 최소한의 데이터만 수집합니다',
      '투명한 데이터 사용 정책을 공개합니다',
      '학생과 학부모에게 데이터 통제권을 부여합니다',
      'GDPR 및 한국 개인정보보호법 완벽 준수',
    ],
    closing:
      '우리에게 학생의 개인정보는 수익의 수단이 아닌, 보호해야 할 신뢰입니다.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: DollarSign,
    emoji: '💰',
    title: '경제적 접근성 보장',
    items: [
      'Freemium 모델: 핵심 기능은 영구 무료 제공',
      '소득 기반 차등 요금제',
      '저개발국가 및 취약계층 학생을 위한 장학 프로그램',
      '교육청 및 학교와의 대량 라이선스 협력',
      '수익의 일정 비율을 무상 지원에 재투자',
    ],
    closing:
      '우리는 지속 가능한 비영리 모델을 통해, 누구도 비용 때문에 배움을 포기하지 않도록 합니다.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: FileText,
    emoji: '📊',
    title: '투명한 단체 운영',
    items: [
      '연간 재정 보고서 공개',
      '기부금 사용 내역 투명 공개',
      '프로젝트 진행 상황 정기 업데이트',
      '연구 결과 및 데이터 오픈소스 공개',
      '이사회 구성 및 의사결정 과정 공유',
    ],
    closing:
      '신뢰는 투명성에서 나옵니다. 우리는 커뮤니티에 대한 책임을 다합니다.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Globe,
    emoji: '🌏',
    title: '글로벌 연결',
    items: [
      '다국어 지원을 통한 글로벌 학생 연결',
      '국제 교육 기관과의 협력 네트워크',
      '문화적 맥락을 존중하는 현지화 전략',
      '전 세계 학생들이 함께 배우고 성장하는 플랫폼',
    ],
    closing:
      '한국에서 시작하지만, 우리의 비전은 전 세계 학생들을 위한 것입니다.',
    color: 'from-sky-500 to-blue-500',
  },
  {
    icon: Sprout,
    emoji: '🌱',
    title: '지속 가능한 모델',
    items: [
      '기부에만 의존하지 않는 자립 가능한 수익 모델',
      '수익성과 사회적 가치의 균형',
      'Mozilla, Ghost Foundation 같은 revenue-generating nonprofit 구조',
      '장기적 임팩트를 위한 전략적 투자',
      '환경적으로도 지속 가능한 기술 인프라',
    ],
    closing:
      '우리는 단기 프로젝트가 아닌, 다음 세대를 위한 플랫폼을 만듭니다.',
    color: 'from-teal-500 to-green-500',
  },
];

export default function CommitmentsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white pt-24 relative overflow-hidden"
    >
      {/* Floating Background Shapes */}
      <motion.div
        style={{ y: y1 }}
        className="shape-decoration w-96 h-96 bg-blue-300 absolute top-20 -right-48 opacity-15"
      />
      <motion.div
        style={{ y: y2 }}
        className="shape-decoration w-80 h-80 bg-purple-300 absolute top-[800px] -left-40 opacity-15"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8"
          >
            <span className="text-white font-bold text-sm tracking-wide flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              OUR COMMITMENTS
            </span>
          </motion.div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-zinc-900 mb-6 tracking-tight">
            Our <span className="gradient-shimmer">Commitments</span>
          </h1>
          <p className="text-3xl sm:text-4xl text-zinc-600 font-medium mb-12">
            우리가 약속하는 것
          </p>

          {/* Opening Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <div className="card-depth bg-gradient-to-br from-white to-blue-50/30 p-10">
              <p className="text-xl text-zinc-700 leading-relaxed">
                새벽별 파운데이션은{' '}
                <span className="font-bold text-blue-600">
                  말뿐인 비전이 아닌
                </span>
                , 실질적인 행동으로 교육 평등을 실현합니다.
              </p>
              <p className="text-xl font-semibold text-zinc-900 mt-4">
                우리가 여러분께 약속하는 일곱 가지입니다.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Commitments Grid */}
        <div className="space-y-12 mb-20">
          {commitments.map((commitment, index) => {
            const Icon = commitment.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card-depth hover-lift bg-white overflow-hidden"
                >
                  <div
                    className={`grid lg:grid-cols-12 gap-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Icon Section */}
                    <div
                      className={`lg:col-span-4 p-8 flex flex-col items-center justify-center bg-gradient-to-br ${commitment.color} text-white relative overflow-hidden ${isEven ? '' : 'lg:order-2'}`}
                    >
                      {/* Background Decoration */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
                      </div>

                      <div className="relative z-10 text-center">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="inline-block mb-4"
                        >
                          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-lg">
                            <Icon className="w-12 h-12 text-white" />
                          </div>
                        </motion.div>
                        <div className="text-7xl font-black text-white/30 mb-2">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <h2 className="text-2xl font-bold text-white">
                          {commitment.title}
                        </h2>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div
                      className={`lg:col-span-8 p-8 lg:p-10 ${isEven ? '' : 'lg:order-1'}`}
                    >
                      <ul className="space-y-4 mb-6">
                        {commitment.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: itemIndex * 0.1 }}
                            className="flex items-start gap-3 text-lg text-zinc-700"
                          >
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mt-0.5">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                            <span className="leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="pt-6 border-t-2 border-zinc-100">
                        <p className="text-lg text-zinc-600 italic leading-relaxed pl-6 accent-line">
                          {commitment.closing}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-full filter blur-3xl"
            />
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 text-center space-y-6">
              <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-4">
                <Sparkles className="w-12 h-12 text-white" />
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                약속을 지키는 파운데이션
              </h3>

              <p className="text-xl leading-relaxed text-white/95 max-w-3xl mx-auto mb-6">
                이 일곱 가지 약속은 새벽별 파운데이션의{' '}
                <span className="font-bold">운영 원칙</span>입니다. 우리는 이
                약속을 지키기 위해 매일 노력하며, 커뮤니티의 감시와 피드백을
                환영합니다.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
                <p className="text-2xl font-bold text-white">
                  우리가 약속을 지키고 있는지,
                  <br />
                  함께 지켜봐주세요.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  투명성 보고서 보기
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                >
                  함께하기
                </motion.button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 translate-x-1/2"></div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
