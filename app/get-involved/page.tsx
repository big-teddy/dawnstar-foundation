'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Handshake, GraduationCap, Building2, Cpu, ArrowRight, Sparkles } from 'lucide-react';

const partnerTypes = [
  { icon: GraduationCap, title: '교육 전문가 & 연구자', description: '공동 연구 프로젝트, 제품 개발 자문, 교육 효과성 검증' },
  { icon: Building2, title: '교육청 & 학교', description: '파일럿 프로그램, 교사 연수 협력, 학생 학습 지원' },
  { icon: Heart, title: '기업 후원', description: 'CSR 프로그램, 재정 후원, 임직원 봉사' },
  { icon: Cpu, title: '기술 파트너', description: '기술 인프라, 오픈소스 협력, 클라우드 지원' },
];

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen aurora-bg aurora-start-pink">
      {/* Fixed Aurora Background */}
      <div className="aurora-container">
        <div className="aurora-gradient" />
      </div>
      <div className="aurora-overlay" />

      {/* Content Layer */}
      <div className="aurora-content">
        {/* Hero Section - Minimal */}
        <section className="relative min-h-[70vh] flex items-center justify-center">

          <div className="relative container-apple text-center py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-overline text-indigo-600 mb-6">
                Get Involved
              </p>

              <h1 className="text-display text-slate-900 mb-8">
                <span className="gradient-text">함께</span> 만들어가는
                <br />
                교육의 미래
              </h1>

              <p className="text-body-lg text-slate-500 max-w-2xl mx-auto">
                우리는 혼자서는 갈 수 없는 길을 함께 가고자 합니다
              </p>
            </motion.div>
          </div>
        </section>

        {/* Support Section */}
        <section className="section-content">
          <div className="container-apple">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-12 md:p-16 rounded-3xl liquid-glass-card"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl liquid-glass-icon bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 liquid-text-shadow">후원하기</h2>
                    <p className="text-slate-500">여러분의 후원이 평등한 교육을 만듭니다</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-4 liquid-text-shadow">후원금 사용처</h3>
                    <ul className="space-y-3 text-slate-600">
                      {[
                        '경제적 어려움이 있는 학생들을 위한 무료 학습 도구',
                        'AI 교육 기술 연구 및 개발',
                        '교사 지원 프로그램 운영',
                        '교육 격차 해소를 위한 정책 연구',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-center items-center text-center p-8 rounded-2xl liquid-glass-light">
                    <Sparkles className="w-10 h-10 text-indigo-400 mb-4" />
                    <p className="text-slate-500 mb-6">
                      후원 시스템을 준비하고 있습니다.
                      <br />
                      출시되면 알려드릴게요!
                    </p>
                    <div className="relative">
                      <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full">Coming Soon</span>
                      <button
                        className="px-6 py-3 rounded-xl bg-white/40 backdrop-blur-sm border border-white/40 text-slate-400 cursor-not-allowed shadow-inner"
                        disabled
                      >
                        후원 시스템 준비 중
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-24 md:py-32 liquid-section-bg">
          <div className="container-apple">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-sm font-medium tracking-widest text-indigo-600 uppercase mb-4">
                Partnership
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                파트너십
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {partnerTypes.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 rounded-2xl liquid-glass-card"
                >
                  <div className="w-14 h-14 rounded-xl liquid-glass-icon flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <partner.icon className="w-7 h-7 text-indigo-600" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors liquid-text-shadow">
                    {partner.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed">
                    {partner.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto mt-16 text-center"
            >
              <div className="p-8 rounded-2xl liquid-glass-card">
                <Handshake className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
                <p className="text-slate-500 mb-6">
                  파트너쉽 문의 시스템을 준비하고 있습니다
                </p>
                <div className="relative">
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full">Coming Soon</span>
                  <button
                    className="px-6 py-3 rounded-xl bg-white/40 backdrop-blur-sm border border-white/40 text-slate-400 cursor-not-allowed shadow-inner"
                    disabled
                  >
                    파트너십 문의 준비 중
                  </button>
                </div>
              </div>
            </motion.div>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
                  모든 아이가 빛날 수 있는 세상
                  <br />
                  함께 만들어가요
                </h2>

                <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto mb-10">
                  여러분의 참여가 변화의 시작입니다.
                </p>

                <Link
                  href="/about/story"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-white/90 transition-all"
                >
                  우리의 이야기 읽기
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
