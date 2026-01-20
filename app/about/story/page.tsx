'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Quote, Cpu, Sparkles } from 'lucide-react';

// Placeholder for future team members
interface TeamMember {
  name: string;
  role: string;
  roleEn: string;
  bio?: string;
  image?: string;
}

// Data structure for governance section - easily expandable
const founder: TeamMember = {
  name: '김성현',
  role: '창업자',
  roleEn: 'Founder',
  bio: '1세대 홈스쿨러 출신의 교육 혁신가. 펜실베이니아 주립대(PSU) 재학 중 비영리 법인 이사 및 창업가로 활동하며 교육의 본질을 탐구해 왔습니다.',
};

const boardMembers: TeamMember[] = [
  // Placeholder - to be filled
  { name: '추후 공개', role: '이사', roleEn: 'Board Member' },
];

const teamMembers: TeamMember[] = [
  // Placeholder - to be filled
  { name: '추후 공개', role: '개발', roleEn: 'Developer' },
  { name: '추후 공개', role: '디자인', roleEn: 'Designer' },
  { name: '추후 공개', role: '교육 기획', roleEn: 'Education' },
];

// Profile Card Component
function ProfileCard({
  member,
  variant = 'default',
  showBio = false,
}: {
  member: TeamMember;
  variant?: 'default' | 'featured' | 'compact';
  showBio?: boolean;
}) {
  const isPlaceholder = member.name === '추후 공개';

  if (variant === 'featured') {
    return (
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center overflow-hidden ring-4 ring-white shadow-lg">
            {member.image ? (
              <Image
                src={member.image}
                alt={member.name}
                width={144}
                height={144}
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-4xl sm:text-5xl font-bold text-indigo-300">
                {member.name.charAt(0)}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <p className="text-xs font-semibold tracking-widest text-indigo-600 uppercase mb-2">
            {member.role} · {member.roleEn}
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            {member.name}
          </h3>
          {showBio && member.bio && (
            <p className="text-base text-slate-600 leading-relaxed">
              {member.bio}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`text-center ${isPlaceholder ? 'opacity-50' : ''}`}>
        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center mb-4 ring-2 ring-slate-100">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              width={96}
              height={96}
              className="object-cover w-full h-full rounded-2xl"
            />
          ) : (
            <span className="text-2xl font-bold text-slate-300">
              {isPlaceholder ? '?' : member.name.charAt(0)}
            </span>
          )}
        </div>
        <p className="font-semibold text-slate-900 mb-1">{member.name}</p>
        <p className="text-xs text-slate-500">{member.role}</p>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`flex items-center gap-4 ${isPlaceholder ? 'opacity-50' : ''}`}>
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center flex-shrink-0">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            width={56}
            height={56}
            className="object-cover w-full h-full rounded-xl"
          />
        ) : (
          <span className="text-lg font-bold text-slate-300">
            {isPlaceholder ? '?' : member.name.charAt(0)}
          </span>
        )}
      </div>
      <div>
        <p className="font-semibold text-slate-900">{member.name}</p>
        <p className="text-sm text-slate-500">{member.role}</p>
      </div>
    </div>
  );
}

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
            Premium typography with careful spacing
            ========================================= */}
        <section className="relative min-h-[85vh] flex items-center justify-center px-6">
          <div className="relative max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Section Label */}
              <p className="text-xs font-semibold tracking-[0.25em] text-indigo-600 uppercase">
                Our Story
              </p>

              {/* Main Headline - Large, impactful */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                "나는 미래 세대에게
                <br />
                <span className="gradient-text">어떤 유산을 물려줄 것인가?"</span>
              </h1>

              {/* Intro paragraph - generous line height */}
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-[1.8] font-light">
                새벽별 파운데이션은 청소년 시절 스스로 던진 이 질문에서 시작되었습니다.
                <span className="hidden sm:inline"><br /></span>
                제도권 안팎의 독특한 교육을 경험하며 마주한 한 사람의 소명이자,
                <span className="hidden sm:inline"><br /></span>
                교육의 본질을 되찾아 미래세대에게 전하고자 하는 여정입니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            Section 2: Narrative
            Editorial-style with emphasis on readability
            ========================================= */}
        <section className="py-28 sm:py-36 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              {/* Section Label */}
              <p className="text-xs font-semibold tracking-[0.25em] text-indigo-600 uppercase">
                The Journey
              </p>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-[1.15] tracking-tight">
                교육은 아이들의 잠재력을
                <br />
                이끌어내는 과정
              </h2>

              {/* Body - Magazine-style typography */}
              <div className="space-y-8 text-lg sm:text-xl text-slate-600 leading-[1.9] font-light">
                <p>
                  초등학교 5학년, 저는 학교를 떠나 한국의 1세대 홈스쿨러가 되었습니다.
                  이후 미국에서 대학 생활을 하며 한국의 공교육과 대안 교육,
                  그리고 글로벌 교육의 현장을 두루 경험하며 배움이 가진 다양한 이면을 깊이 있게 마주했습니다.
                </p>

                <p>
                  서로 다른 교육 환경의 경계를 넘나들며 제가 확인한 본질은 단 하나였습니다.
                </p>
              </div>

              {/* Pull Quote - Visual highlight */}
              <blockquote className="relative py-8 pl-8 border-l-[3px] border-indigo-500">
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 leading-[1.4]">
                  교육은 아이 안의 잠재력을 세상으로 이끌어내고 실현하도록 돕는
                  <span className="gradient-text"> 가장 순수한 과정</span>이어야 한다는 것.
                </p>
              </blockquote>

              {/* Closing paragraph */}
              <p className="text-lg sm:text-xl text-slate-600 leading-[1.9] font-light">
                교육은 결코 경쟁의 도구나 사회적 지위를 얻기 위한 수단이 되어서는 안 됩니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            Section 3: Insight
            Glass card with visual distinction
            ========================================= */}
        <section className="py-28 sm:py-36 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative p-10 sm:p-14 md:p-20 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_60px_-12px_rgba(99,102,241,0.15)]"
            >
              {/* Decorative icon */}
              <div className="absolute -top-6 left-10 sm:left-14 md:left-20 w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg">
                <Cpu className="w-6 h-6 text-white" />
              </div>

              <div className="space-y-10 pt-4">
                {/* Section Label */}
                <p className="text-xs font-semibold tracking-[0.25em] text-indigo-600 uppercase">
                  The Insight
                </p>

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-[1.15] tracking-tight">
                  낡은 관성을 허무는
                  <br />
                  <span className="gradient-text">혁신의 열쇠, AI</span>
                </h2>

                {/* Body */}
                <div className="space-y-7 text-lg sm:text-xl text-slate-600 leading-[1.9] font-light">
                  <p>
                    세상의 기술이 정점을 향해 질주하는 동안에도 교육 현장은
                    200년 넘게 고착된 낡은 시스템에 갇혀 있습니다.
                  </p>

                  <p>
                    우리는 이 시스템을 혁신하기 위한 첫 단추로 <strong className="font-semibold text-slate-900">AI 기술에 주목했습니다.</strong>
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
            Centered, statement-style
            ========================================= */}
        <section className="py-28 sm:py-36 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-10"
            >
              {/* Section Label */}
              <p className="text-xs font-semibold tracking-[0.25em] text-indigo-600 uppercase">
                The Legacy
              </p>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-[1.15] tracking-tight">
                우리가 미래 세대에게
                <br />
                물려줄 진정한 유산
              </h2>

              {/* Body */}
              <p className="text-lg sm:text-xl text-slate-600 leading-[1.9] font-light max-w-3xl mx-auto">
                아이들이 환경에 구애받지 않고 각자의 잠재력대로 살아갈 수 있는 세상.
                진정한 교육의 목적과 본질이 실현되는 것이 우리가 다음 세대에게 주고 싶은 유산이자,
                새벽별 파운데이션이 존재하는 이유입니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            Section 5: Governance (Our People)
            Professional profile cards layout
            ========================================= */}
        <section className="py-28 sm:py-36 px-6 bg-gradient-to-b from-slate-50/80 via-slate-50/60 to-transparent">
          <div className="max-w-5xl mx-auto">

            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20 sm:mb-28 space-y-6"
            >
              <p className="text-xs font-semibold tracking-[0.25em] text-indigo-600 uppercase">
                Our People
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-[1.15] tracking-tight">
                함께 변화를 만드는 사람들
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                새벽별 파운데이션은 교육과 기술, 사회적 가치를 아우르는 전문가들과 함께 성장합니다.
              </p>
            </motion.div>

            {/* 5-1. Founder - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 sm:mb-28"
            >
              <div className="relative p-8 sm:p-12 rounded-[2rem] bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-500/10 rounded-full blur-[80px]" />

                <div className="relative">
                  {/* Founder Profile */}
                  <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-indigo-400/20 to-violet-400/20 flex items-center justify-center ring-2 ring-white/10 overflow-hidden">
                        {founder.image ? (
                          <Image
                            src={founder.image}
                            alt={founder.name}
                            width={160}
                            height={160}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <Sparkles className="w-16 h-16 text-indigo-400/60" />
                        )}
                      </div>
                    </div>

                    {/* Info & Quote */}
                    <div className="flex-1 space-y-6">
                      <div>
                        <p className="text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase mb-3">
                          {founder.role} · {founder.roleEn}
                        </p>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                          {founder.name}
                        </h3>
                        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                          {founder.bio}
                        </p>
                      </div>

                      {/* Quote */}
                      <blockquote className="relative pl-6 border-l-2 border-indigo-400/50 mt-8">
                        <Quote className="absolute -left-3 -top-1 w-5 h-5 text-indigo-400/70" />
                        <p className="text-lg sm:text-xl text-white/90 font-light italic leading-relaxed">
                          "제가 걸어온 길이 정답은 아닙니다.
                          다만, 다른 길도 있다는 것을 보여주고 싶습니다.
                          모든 아이가 자신만의 길을 찾을 수 있도록."
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 5-2. Board & Advisors */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 sm:mb-28"
            >
              <div className="mb-8">
                <p className="text-xs font-semibold tracking-[0.2em] text-indigo-600 uppercase mb-2">
                  이사 및 자문단 · Board & Advisors
                </p>
                <p className="text-base text-slate-600">
                  교육학자, AI 개발자, 현직 교사 등 각 분야의 리더들이 모여 기술적 완성도와 교육적 윤리를 책임집니다.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
                {boardMembers.map((member, index) => (
                  <ProfileCard key={index} member={member} variant="compact" />
                ))}
                {/* Placeholder slots */}
                {[...Array(3)].map((_, i) => (
                  <div key={`placeholder-board-${i}`} className="text-center opacity-30">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center mb-4">
                      <span className="text-slate-300 text-sm">+</span>
                    </div>
                    <p className="text-sm text-slate-400">Coming Soon</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 5-3. Team DawnStar */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 sm:mb-28"
            >
              <div className="mb-8">
                <p className="text-xs font-semibold tracking-[0.2em] text-indigo-600 uppercase mb-2">
                  팀 새벽별 · Team DawnStar
                </p>
                <p className="text-base text-slate-600 mb-2">
                  개발자, 교육 기획자, 디자이너가 함께 만들어갑니다.
                </p>
                <p className="text-sm text-slate-500 italic">
                  "아이들의 교육의 미래를 설계합니다."
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
                {teamMembers.map((member, index) => (
                  <ProfileCard key={index} member={member} variant="compact" />
                ))}
                {/* Placeholder slots */}
                {[...Array(2)].map((_, i) => (
                  <div key={`placeholder-team-${i}`} className="text-center opacity-30">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center mb-4">
                      <span className="text-slate-300 text-sm">+</span>
                    </div>
                    <p className="text-sm text-slate-400">Coming Soon</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 5-4. Partners */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <p className="text-xs font-semibold tracking-[0.2em] text-indigo-600 uppercase mb-2">
                  파트너 · Partners
                </p>
                <p className="text-base text-slate-600">
                  새벽별의 여정에 함께하는 기관과 기업들입니다.
                </p>
              </div>

              {/* Logo Grid Placeholder */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={`partner-${i}`}
                    className="h-24 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center bg-white/50"
                  >
                    <p className="text-sm text-slate-400">파트너 로고</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            CTA Section
            ========================================= */}
        <section className="py-28 sm:py-36 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[2rem] py-20 sm:py-24 px-8 sm:px-16"
            >
              {/* Dark gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/15 rounded-full blur-[120px]" />

              <div className="relative text-center space-y-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                  이 여정에 함께하시겠습니까?
                </h2>

                <p className="text-lg sm:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                  교육의 민주화를 향한 길, 함께 걸어가실 분들을 기다립니다.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link
                    href="/get-involved"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-white/90 transition-all shadow-lg shadow-white/10"
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
