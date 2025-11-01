'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Code,
  GraduationCap,
  Heart,
  Mail,
} from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import Button from '../ui/Button';

export default function GetInvolvedSection() {
  const partnerTypes = [
    {
      icon: GraduationCap,
      title: '교육 전문가 & 연구자',
      description:
        '교육학, 교육공학, 인지심리학, AI 등 다양한 분야의 전문가와 함께 연구하고 배우고 싶습니다.',
      items: [
        '공동 연구 프로젝트',
        '제품 개발 자문',
        '교육 효과성 검증',
        '논문 및 연구 결과 공유',
      ],
    },
    {
      icon: Building2,
      title: '교육청 & 학교',
      description:
        '현장의 목소리를 듣고, 실제로 도움이 되는 솔루션을 만들고 싶습니다.',
      items: [
        '파일럿 프로그램 운영',
        '교사 연수 협력',
        '학생 학습 지원',
        '피드백 기반 제품 개선',
      ],
    },
    {
      icon: Heart,
      title: '기업 후원',
      description:
        '교육 평등이라는 가치에 공감하는 기업과 함께 지속 가능한 변화를 만들어가고 싶습니다.',
      items: [
        'CSR 프로그램 협력',
        '재정 후원',
        '기술 인프라 지원',
        '임직원 봉사 프로그램',
      ],
    },
    {
      icon: Code,
      title: '기술 파트너',
      description:
        'AI, 교육 플랫폼, 데이터 분석 등 기술 협력을 통해 더 나은 제품을 만들고 싶습니다.',
      items: [
        '기술 인프라 협력',
        '오픈소스 프로젝트 공동 개발',
        '기술 자문 및 멘토링',
        '클라우드 및 서버 지원',
      ],
    },
  ];

  return (
    <section id="get-involved" className="py-24 lg:py-32 bg-white">
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
                Get Involved
              </h2>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
                함께하기
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl mx-auto space-y-4 text-lg text-slate-600 leading-relaxed"
            >
              <p className="text-xl font-medium text-slate-800">
                새벽별과 함께 교육의 미래를 만들어가세요
              </p>
              <p>
                우리는 혼자서는 갈 수 없는 길을 함께 가고자 합니다.
                <br />
                교육의 본질을 되찾고, 모든 아이가 자신의 잠재력을 발견할 수 있는
                세상을 만드는 일.
                <br />
                이 여정에 여러분을 초대합니다.
              </p>
            </motion.div>
          </div>

          {/* Support Section */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-10 lg:p-12 text-white text-center"
            >
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  💝 후원하기
                </h4>
                <p className="text-xl mb-6 text-white/90">
                  여러분의 후원이 평등한 교육을 만듭니다
                </p>
                <p className="text-white/80 mb-8 leading-relaxed">
                  새벽별 파운데이션은 투명하게 운영되는 비영리 공익법인입니다.
                  <br />
                  여러분의 후원은 경제적 어려움이 있는 학생들을 위한 무료 학습
                  도구 제공,
                  <br />
                  AI 교육 기술 연구 및 개발, 교사 지원 프로그램 운영, 교육 격차
                  해소를 위한 정책 연구에 사용됩니다.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                  <p className="text-lg font-semibold mb-2">준비 중입니다</p>
                  <p className="text-white/80">
                    후원 시스템을 준비하고 있습니다. 곧 만나요!
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 font-semibold shadow-xl"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  이메일로 알림 받기
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Partnership Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h4 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                🤝 파트너십
              </h4>
              <p className="text-xl text-slate-600">
                함께 교육의 미래를 만들어갈 파트너를 찾습니다
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {partnerTypes.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <partner.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h5 className="text-xl font-bold text-slate-900 mb-2">
                        {partner.title}
                      </h5>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-0">
                    {partner.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-slate-600"
                      >
                        <span className="text-purple-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 rounded-2xl p-8 text-center"
            >
              <p className="text-lg text-slate-700 mb-4">
                <strong>준비 중입니다</strong>
              </p>
              <p className="text-slate-600 mb-6">
                파트너십 문의 시스템을 준비하고 있습니다. 곧 만나요!
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-4 font-semibold"
              >
                <Mail className="mr-2 w-5 h-5" />
                이메일로 알림 받기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
