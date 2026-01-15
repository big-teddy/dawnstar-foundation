'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const principles = [
  { title: '교육은 모든 사람의 권리입니다', description: '태어난 곳, 부모의 소득에 관계없이 모든 아이는 양질의 교육을 받을 권리가 있습니다.' },
  { title: '교육은 개인의 속도를 존중해야 합니다', description: '모든 학생은 고유한 학습 방식과 속도를 가지고 있습니다.' },
  { title: '교육은 잠재력을 발견하는 여정입니다', description: '교육의 목적은 시험 점수가 아니라 한 사람의 가능성을 발견하는 것입니다.' },
  { title: '기술은 교사를 돕는 도구입니다', description: 'AI는 교사를 대체하는 것이 아니라, 교사가 더 나은 교육을 제공할 수 있도록 돕습니다.' },
  { title: '교육 환경의 변화가 필요합니다', description: '개인의 노력만으로는 구조적 불평등을 해결할 수 없습니다.' },
  { title: '데이터는 학생을 이해하는 도구입니다', description: '데이터를 활용해 학생을 더 깊이 이해하고 지원합니다. 절대 차별의 도구가 되어서는 안 됩니다.' },
  { title: '학습은 경쟁이 아닌 협력입니다', description: '학생들은 서로 경쟁 상대가 아닌 함께 성장하는 동료입니다.' },
  { title: '교육은 평생 지속됩니다', description: '학습은 졸업과 함께 끝나지 않습니다. 모든 연령대의 학습자를 지원합니다.' },
  { title: '투명성과 책임이 신뢰를 만듭니다', description: '재단의 운영, 재정, 연구를 투명하게 공개합니다.' },
  { title: '함께할 때 더 강합니다', description: '교육의 변화는 혼자 만들 수 없습니다. 뜻을 같이하는 모든 이들과 협력합니다.' },
];

export default function ManifestoPage() {
  return (
    <main className="min-h-screen aurora-bg aurora-start-blue">
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
                Our Manifesto
              </p>

              <h1 className="text-display text-slate-900 mb-8">
                <span className="gradient-text">새벽별</span>
                <br />
                선언문
              </h1>

              <p className="text-body-lg text-slate-600 max-w-2xl mx-auto">
                기술이 교육을 바꿀 수 있다는 믿음,
                <br />
                모든 아이가 빛날 수 있다는 확신.
                <br />
                이것이 우리가 믿는 것입니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Statement - Typography-driven (no box) */}
        <section className="py-20">
          <div className="container-apple">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <blockquote className="text-2xl md:text-3xl text-slate-600 leading-relaxed mb-10">
                교육은 세상을 바꿀 수 있는 가장 강력한 도구입니다.
                <br />
                하지만 지금 우리 교육은 너무 많은 아이들을 놓치고 있습니다.
              </blockquote>

              <p className="hero-statement-large gradient-text liquid-text-glow">
                우리는 이것을 바꿀 수 있다고 믿습니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Values - Minimal */}
        <section className="py-16">
          <div className="container-apple">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            >
              기술이 아니라, <span className="font-semibold text-indigo-600">사람을 중심에</span> 두고.
              <br />
              경쟁이 아니라, <span className="font-semibold text-indigo-600">성장을 목표로</span> 하며.
              <br />
              선별이 아니라, <span className="font-semibold text-indigo-600">포용을 실천하는</span> 교육을 만듭니다.
            </motion.p>
          </div>
        </section>

        {/* 10 Principles - Subtle glass container */}
        <section className="py-20">
          <div className="container-apple">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl subtle-glass-card"
            >
              <div className="text-center mb-12">
                <p className="text-overline text-indigo-600 mb-4">
                  10 Principles
                </p>
                <h2 className="text-headline text-slate-900">
                  핵심 원칙
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: index * 0.05 }}
                    className="group py-5 px-5 rounded-xl hover:bg-white/60 transition-all"
                  >
                    <div className="flex items-start gap-5">
                      <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                          {principle.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
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
                <p className="text-slate-400 mb-4">
                  이 열 가지 원칙은 새벽별 파운데이션의 나침반입니다
                </p>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-10">
                  교육의 미래는
                  <br />
                  우리 모두의 손에 달려 있습니다
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/get-involved"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-white/90 transition-all"
                  >
                    함께하기
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/about/commitments"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-medium border border-white/20 rounded-full hover:bg-white/10 transition-all"
                  >
                    우리의 약속 보기
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
