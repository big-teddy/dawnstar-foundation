'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check, Users, Lock, Wallet, Eye, Globe, Leaf, Shield } from 'lucide-react';

const commitments = [
  { icon: Users, title: '접근성 우선 설계', items: ['경제적 어려움이 있는 학생들을 위한 무료 요금제', '다양한 디바이스에서 작동하는 경량화 설계', '장애 학생을 위한 접근성 기능'] },
  { icon: Users, title: '교사와의 진정한 협력', items: ['교사 커뮤니티의 피드백을 제품에 반영', '교사 연수 프로그램 무상 제공', '교사의 전문성을 존중하는 AI 설계'] },
  { icon: Lock, title: '데이터 프라이버시 보호', items: ['학생 데이터를 제3자에게 판매하지 않음', '필요한 최소한의 데이터만 수집', '투명한 데이터 사용 정책 공개'] },
  { icon: Wallet, title: '경제적 접근성 보장', items: ['핵심 기능은 영구 무료', '소득 기반 차등 요금제', '취약계층 학생 장학 프로그램'] },
  { icon: Eye, title: '투명한 운영', items: ['연간 재정 보고서 공개', '기부금 사용 내역 투명 공개', '연구 결과 오픈소스 공개'] },
  { icon: Globe, title: '글로벌 연결', items: ['다국어 지원', '국제 교육 기관과의 협력', '문화적 맥락을 존중하는 현지화'] },
  { icon: Leaf, title: '지속 가능한 모델', items: ['자립 가능한 수익 모델', '수익성과 사회적 가치의 균형', '환경적으로 지속 가능한 인프라'] },
];

export default function CommitmentsPage() {
  return (
    <main className="min-h-screen aurora-bg aurora-start-amber">
      {/* Fixed Aurora Background */}
      <div className="aurora-container">
        <div className="aurora-gradient" />
      </div>
      <div className="aurora-overlay" />

      {/* Content Layer */}
      <div className="aurora-content">
        {/* Hero Section - Enhanced */}
        <section className="relative min-h-[70vh] flex items-center justify-center">

          <div className="relative container-apple text-center py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-overline text-indigo-600 mb-6">
                Our Commitments
              </p>

              <h1 className="text-display text-slate-900 mb-8">
                <span className="gradient-text">우리의 약속</span>
              </h1>

              <p className="text-body-lg text-slate-600 max-w-2xl mx-auto">
                비전은 행동으로 증명됩니다.
                <br />
                우리는 말이 아닌 실천으로 교육의 미래를 만들어갑니다.
                <br />
                이것이 우리가 지키는 약속입니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Commitments List */}
        <section className="section-content">
          <div className="container-apple">
            <div className="grid md:grid-cols-2 gap-8">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.05 }}
                  className="group content-card rounded-2xl p-8 md:p-10"
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl liquid-glass-icon flex items-center justify-center group-hover:scale-105 transition-transform">
                      <commitment.icon className="w-8 h-8 text-indigo-600" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="liquid-badge-glow text-sm">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors liquid-text-shadow">
                          {commitment.title}
                        </h3>
                      </div>

                      <ul className="space-y-2">
                        {commitment.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-slate-500">
                            <Check className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Rounded Box */}
        <section className="py-24">
          <div className="container-apple">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl py-16 md:py-20 px-8 md:px-16"
            >
              {/* Dark gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/15 rounded-full blur-[100px]" />

              <div className="relative text-center">
                <Shield className="w-12 h-12 text-indigo-400 mx-auto mb-6" />

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
                  우리가 약속을 지키고 있는지,
                  <br />
                  함께 지켜봐주세요
                </h2>

                <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto mb-10">
                  이 일곱 가지 약속은 새벽별 파운데이션의 운영 원칙입니다.
                  <br />
                  커뮤니티의 감시와 피드백을 환영합니다.
                </p>

                <Link
                  href="/get-involved"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-white/90 transition-all"
                >
                  함께하기
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
