'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Users, Building2, Handshake, Quote } from 'lucide-react';

export default function StoryPage() {
  return (
    <main className="min-h-screen aurora-bg aurora-start-pink">
      {/* Fixed Aurora Background */}
      <div className="aurora-container">
        <div className="aurora-gradient" />
      </div>
      <div className="aurora-overlay" />

      {/* Content Layer */}
      <div className="aurora-content">
        {/* =========================================
            Section 1: Hero
            ========================================= */}
        <section className="relative min-h-[80vh] flex items-center justify-center">
          <div className="relative container-apple text-center py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-overline text-indigo-600 mb-6">
                Our Story
              </p>

              <h1 className="text-display text-slate-900 mb-8">
                "나는 미래 세대에게
                <br />
                <span className="gradient-text">어떤 유산을 물려줄 것인가?"</span>
              </h1>

              <p className="text-body-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                새벽별 파운데이션은 청소년 시절 스스로 던진 이 질문에서 시작되었습니다.
                <br className="hidden sm:block" />
                제도권 안팎의 독특한 교육을 경험하며 마주한 한 사람의 소명이자,
                <br className="hidden sm:block" />
                교육의 본질을 되찾아 미래세대에게 전하고자 하는 여정입니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            Section 2: Narrative
            ========================================= */}
        <section className="py-24">
          <div className="container-apple">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-sm font-medium tracking-widest text-indigo-600 uppercase mb-6">
                The Journey
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-8">
                교육은 아이들의 잠재력을
                <br />
                이끌어내는 과정
              </h2>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  초등학교 5학년, 저는 학교를 떠나 한국의 1세대 홈스쿨러가 되었습니다.
                  이후 미국에서 대학 생활을 하며 한국의 공교육과 대안 교육,
                  그리고 글로벌 교육의 현장을 두루 경험하며 배움이 가진 다양한 이면을 깊이 있게 마주했습니다.
                </p>

                <p>
                  서로 다른 교육 환경의 경계를 넘나들며 제가 확인한 본질은 단 하나였습니다.
                </p>

                <blockquote className="relative pl-6 border-l-4 border-indigo-500 py-2">
                  <p className="text-xl md:text-2xl font-semibold text-slate-900">
                    교육은 아이 안의 잠재력을 세상으로 이끌어내고 실현하도록 돕는
                    <span className="gradient-text"> 가장 순수한 과정</span>이어야 한다는 것.
                  </p>
                </blockquote>

                <p>
                  교육은 결코 경쟁의 도구나 사회적 지위를 얻기 위한 수단이 되어서는 안 됩니다.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            Section 3: Insight
            ========================================= */}
        <section className="py-24">
          <div className="container-apple">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-10 md:p-16 rounded-3xl subtle-glass-card"
            >
              <div className="max-w-4xl mx-auto">
                <p className="text-sm font-medium tracking-widest text-indigo-600 uppercase mb-6">
                  The Insight
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-8">
                  낡은 관성을 허무는
                  <br />
                  <span className="gradient-text">혁신의 열쇠, AI</span>
                </h2>

                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    세상의 기술이 정점을 향해 질주하는 동안에도 교육 현장은
                    200년 넘게 고착된 낡은 시스템에 갇혀 있습니다.
                  </p>

                  <p>
                    우리는 이 시스템을 혁신하기 위한 첫 단추로 <strong className="text-slate-900">AI 기술에 주목했습니다.</strong>
                  </p>

                  <p>
                    AI는 단순히 지식을 전달하는 도구가 아니라,
                    모든 학생이 자신만의 속도로 빛날 수 있게 돕는 가장 강력한 조력자가 될 것입니다.
                    이를 통해 기존 시스템을 효과적으로 변화시키고
                    더 나아가 AI가 해결할 수 없는 인간의 고유한 영역과의 조화를 만들어 갈 것입니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            Section 4: Legacy
            ========================================= */}
        <section className="py-24">
          <div className="container-apple">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="text-sm font-medium tracking-widest text-indigo-600 uppercase mb-6">
                The Legacy
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-8">
                우리가 미래 세대에게
                <br />
                물려줄 진정한 유산
              </h2>

              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                아이들이 환경에 구애받지 않고 각자의 잠재력대로 살아갈 수 있는 세상.
                진정한 교육의 목적과 본질이 실현되는 것이 우리가 다음 세대에게 주고 싶은 유산이자,
                새벽별 파운데이션이 존재하는 이유입니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            Section 5: Governance (Our People)
            ========================================= */}
        <section className="py-24 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent">
          <div className="container-apple">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-sm font-medium tracking-widest text-indigo-600 uppercase mb-4">
                Our People
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                함께 변화를 만드는 사람들
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                새벽별 파운데이션은 교육과 기술, 사회적 가치를 아우르는 전문가들과 함께 성장합니다.
              </p>
            </motion.div>

            {/* 5-1. Founder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="max-w-4xl mx-auto">
                <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
                  {/* Decorative glow */}
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px]" />

                  <div className="relative">
                    <p className="text-sm font-medium tracking-widest text-indigo-400 uppercase mb-4">
                      창업자 · Founder
                    </p>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      {/* Avatar placeholder */}
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-white" />
                      </div>

                      <div className="flex-1">
                        <p className="text-white/80 leading-relaxed mb-6">
                          1세대 홈스쿨러 출신의 교육 혁신가.
                          펜실베이니아 주립대(PSU) 재학 중 비영리 법인 이사 및 창업가로 활동하며
                          교육의 본질을 탐구해 왔습니다.
                        </p>

                        <blockquote className="relative pl-6 border-l-2 border-indigo-400">
                          <Quote className="absolute -left-3 -top-2 w-6 h-6 text-indigo-400" />
                          <p className="text-lg md:text-xl text-white font-medium italic">
                            "제가 걸어온 길이 정답은 아닙니다.
                            다만, 다른 길도 있다는 것을 보여주고 싶습니다.
                            모든 아이가 자신만의 길을 찾을 수 있도록."
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 5-2, 5-3, 5-4 Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* 5-2. Board & Advisors */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-2xl subtle-glass-card"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium tracking-widest text-indigo-600 uppercase mb-2">
                  이사 및 자문단
                </p>
                <p className="text-xs text-slate-500 mb-4">Board & Advisors</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  교육학자, AI 개발자, 현직 교사 등 각 분야의 리더들이 모여
                  기술적 완성도와 교육적 윤리를 책임집니다.
                </p>
              </motion.div>

              {/* 5-3. Team DawnStar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-2xl subtle-glass-card"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium tracking-widest text-indigo-600 uppercase mb-2">
                  팀 새벽별
                </p>
                <p className="text-xs text-slate-500 mb-4">Team DawnStar</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  개발자, 교육 기획자, 디자이너가 함께 만들어갑니다.
                </p>
                <p className="text-sm font-medium text-slate-900 italic">
                  "아이들의 교육의 미래를 설계합니다."
                </p>
              </motion.div>

              {/* 5-4. Partners */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-8 rounded-2xl subtle-glass-card"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mb-4">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium tracking-widest text-indigo-600 uppercase mb-2">
                  파트너
                </p>
                <p className="text-xs text-slate-500 mb-4">Partners</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  새벽별의 여정에 함께하는 기관과 기업들입니다.
                </p>
                <p className="text-xs text-slate-400 italic">
                  파트너 로고 영역 (추후 업데이트)
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            CTA Section
            ========================================= */}
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
                  이 여정에 함께하시겠습니까?
                </h2>

                <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto mb-10">
                  교육의 민주화를 향한 길, 함께 걸어가실 분들을 기다립니다.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/get-involved"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-white/90 transition-all"
                  >
                    함께하기
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/about/manifesto"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-medium border border-white/20 rounded-full hover:bg-white/10 transition-all"
                  >
                    선언문 읽기
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
