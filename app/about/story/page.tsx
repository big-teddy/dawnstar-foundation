'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Quote, Cpu, Sparkles, Linkedin, Mail } from 'lucide-react';
import { useRef } from 'react';

// ============================================
// DATA STRUCTURES
// ============================================

interface TeamMember {
  name: string;
  role: string;
  roleEn: string;
  bio?: string;
  image?: string;
  linkedin?: string;
  email?: string;
}

// Founder data
const founder: TeamMember = {
  name: '김성현',
  role: '창업자',
  roleEn: 'Founder',
  bio: '1세대 홈스쿨러 출신의 교육 혁신가. 펜실베이니아 주립대(PSU) 재학 중 비영리 법인 이사 및 창업가로 활동하며 교육의 본질을 탐구해 왔습니다.',
  linkedin: 'https://linkedin.com/in/example',
};

// Board & Advisors - placeholder structure
const boardMembers: TeamMember[] = [
  { name: '추후 공개', role: '교육학 자문', roleEn: 'Education Advisor' },
  { name: '추후 공개', role: 'AI 기술 자문', roleEn: 'AI Advisor' },
  { name: '추후 공개', role: '법률 자문', roleEn: 'Legal Advisor' },
  { name: '추후 공개', role: '재무 자문', roleEn: 'Finance Advisor' },
];

// Team members - placeholder structure
const teamMembers: TeamMember[] = [
  { name: '추후 공개', role: '개발', roleEn: 'Developer' },
  { name: '추후 공개', role: '디자인', roleEn: 'Designer' },
  { name: '추후 공개', role: '교육 기획', roleEn: 'Education Planner' },
  { name: '추후 공개', role: '운영', roleEn: 'Operations' },
];

// ============================================
// ANIMATION VARIANTS
// ============================================

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

// ============================================
// PROFILE CARD COMPONENT
// Premium design with hover interactions
// ============================================

function ProfileCard({
  member,
  variant = 'default',
  index = 0,
}: {
  member: TeamMember;
  variant?: 'compact' | 'default';
  index?: number;
}) {
  const isPlaceholder = member.name === '추후 공개';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={`group relative ${isPlaceholder ? 'opacity-40' : ''}`}
    >
      <div className="text-center">
        {/* Avatar with hover effect */}
        <div className="relative mx-auto mb-5 w-28 h-28 sm:w-32 sm:h-32">
          <div className={`
            w-full h-full rounded-2xl overflow-hidden
            ${isPlaceholder
              ? 'border-2 border-dashed border-slate-200 bg-slate-50'
              : 'bg-gradient-to-br from-slate-100 to-slate-50 ring-4 ring-white shadow-lg'
            }
            group-hover:ring-indigo-100 group-hover:shadow-xl
            transition-all duration-300
          `}>
            {member.image ? (
              <Image
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className={`text-3xl font-bold ${isPlaceholder ? 'text-slate-200' : 'text-slate-300'}`}>
                  {isPlaceholder ? '?' : member.name.charAt(0)}
                </span>
              </div>
            )}
          </div>

          {/* Social links overlay - only for non-placeholder */}
          {!isPlaceholder && (member.linkedin || member.email) && (
            <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-slate-900/40 rounded-2xl backdrop-blur-sm" />
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-slate-700" />
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="relative z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-slate-700" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Name & Role */}
        <h4 className="font-semibold text-slate-900 text-lg mb-1 group-hover:text-indigo-600 transition-colors">
          {member.name}
        </h4>
        <p className="text-sm text-slate-500">{member.role}</p>
        {variant === 'default' && (
          <p className="text-xs text-slate-400 mt-0.5">{member.roleEn}</p>
        )}
      </div>
    </motion.div>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================

export default function StoryPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

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
            Parallax effect with premium typography
            ========================================= */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
        >
          <motion.div
            style={{ opacity: heroOpacity, y: heroY }}
            className="relative max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10"
            >
              {/* Section Label */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xs font-semibold tracking-[0.3em] text-indigo-600 uppercase"
              >
                Our Story
              </motion.p>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.08] tracking-tight"
              >
                "나는 미래 세대에게
                <br />
                <span className="gradient-text">어떤 유산을 물려줄 것인가?"</span>
              </motion.h1>

              {/* Intro paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-[1.7] font-light"
              >
                새벽별 파운데이션은 청소년 시절 스스로 던진 이 질문에서 시작되었습니다.
                <span className="hidden md:inline"><br /></span>
                제도권 안팎의 독특한 교육을 경험하며 마주한 한 사람의 소명이자,
                <span className="hidden md:inline"><br /></span>
                교육의 본질을 되찾아 미래세대에게 전하고자 하는 여정입니다.
              </motion.p>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="pt-12"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex flex-col items-center gap-3 text-slate-400"
                >
                  <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
                  <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* =========================================
            Section 2: Narrative
            Magazine-style editorial with drop cap
            ========================================= */}
        <section className="py-32 sm:py-40 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="space-y-12"
            >
              {/* Section Label */}
              <motion.p
                variants={fadeInUp}
                className="text-xs font-semibold tracking-[0.3em] text-indigo-600 uppercase"
              >
                The Journey
              </motion.p>

              {/* Headline */}
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-[1.12] tracking-tight"
              >
                교육은 아이들의 잠재력을
                <br />
                이끌어내는 과정
              </motion.h2>

              {/* Body with drop cap effect */}
              <motion.div
                variants={fadeInUp}
                className="space-y-8 text-lg sm:text-xl text-slate-600 leading-[1.85]"
                style={{ fontWeight: 300 }}
              >
                <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-indigo-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  초등학교 5학년, 저는 학교를 떠나 한국의 1세대 홈스쿨러가 되었습니다.
                  이후 미국에서 대학 생활을 하며 한국의 공교육과 대안 교육,
                  그리고 글로벌 교육의 현장을 두루 경험하며 배움이 가진 다양한 이면을 깊이 있게 마주했습니다.
                </p>

                <p>
                  서로 다른 교육 환경의 경계를 넘나들며 제가 확인한 본질은 단 하나였습니다.
                </p>
              </motion.div>

              {/* Pull Quote - Editorial style */}
              <motion.blockquote
                variants={fadeInUp}
                className="relative py-10 my-12"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-violet-500 to-indigo-300 rounded-full" />
                <p className="pl-8 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 leading-[1.35]">
                  교육은 아이 안의 잠재력을 세상으로 이끌어내고 실현하도록 돕는
                  <span className="gradient-text"> 가장 순수한 과정</span>이어야 한다는 것.
                </p>
              </motion.blockquote>

              {/* Closing */}
              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-slate-600 leading-[1.85]"
                style={{ fontWeight: 300 }}
              >
                교육은 결코 경쟁의 도구나 사회적 지위를 얻기 위한 수단이 되어서는 안 됩니다.
              </motion.p>
            </motion.article>
          </div>
        </section>

        {/* =========================================
            Section 3: Insight
            Premium glass card with icon badge
            ========================================= */}
        <section className="py-32 sm:py-40 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="relative"
            >
              {/* Icon Badge */}
              <motion.div
                variants={fadeInUp}
                className="absolute -top-8 left-8 sm:left-12 z-10"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-xl shadow-indigo-500/25">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              {/* Card */}
              <motion.div
                variants={fadeInUp}
                className="relative p-10 sm:p-14 md:p-20 pt-14 sm:pt-16 md:pt-20 rounded-[2.5rem] bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_20px_80px_-20px_rgba(99,102,241,0.15)]"
              >
                <div className="space-y-10">
                  {/* Section Label */}
                  <p className="text-xs font-semibold tracking-[0.3em] text-indigo-600 uppercase">
                    The Insight
                  </p>

                  {/* Headline */}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-[1.12] tracking-tight">
                    낡은 관성을 허무는
                    <br />
                    <span className="gradient-text">혁신의 열쇠, AI</span>
                  </h2>

                  {/* Body */}
                  <div className="space-y-7 text-lg sm:text-xl text-slate-600 leading-[1.85]" style={{ fontWeight: 300 }}>
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
            </motion.div>
          </div>
        </section>

        {/* =========================================
            Section 4: Legacy
            Centered statement with visual impact
            ========================================= */}
        <section className="py-32 sm:py-40 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="text-center space-y-12"
            >
              {/* Section Label */}
              <motion.p
                variants={fadeInUp}
                className="text-xs font-semibold tracking-[0.3em] text-indigo-600 uppercase"
              >
                The Legacy
              </motion.p>

              {/* Headline */}
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-[1.12] tracking-tight"
              >
                우리가 미래 세대에게
                <br />
                물려줄 진정한 유산
              </motion.h2>

              {/* Body */}
              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-[1.75] max-w-3xl mx-auto"
                style={{ fontWeight: 300 }}
              >
                아이들이 환경에 구애받지 않고 각자의 잠재력대로 살아갈 수 있는 세상.
                진정한 교육의 목적과 본질이 실현되는 것이 우리가 다음 세대에게 주고 싶은 유산이자,
                새벽별 파운데이션이 존재하는 이유입니다.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            Section 5: Governance (Our People)
            Professional team showcase
            ========================================= */}
        <section className="py-32 sm:py-40 px-6 bg-gradient-to-b from-slate-50/80 via-slate-50/60 to-transparent">
          <div className="max-w-6xl mx-auto">

            {/* Section Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-24 sm:mb-32 space-y-6"
            >
              <motion.p
                variants={fadeInUp}
                className="text-xs font-semibold tracking-[0.3em] text-indigo-600 uppercase"
              >
                Our People
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-[1.12] tracking-tight"
              >
                함께 변화를 만드는 사람들
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
                style={{ fontWeight: 300 }}
              >
                새벽별 파운데이션은 교육과 기술, 사회적 가치를 아우르는 전문가들과 함께 성장합니다.
              </motion.p>
            </motion.div>

            {/* 5-1. Founder - Featured Hero Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-24 sm:mb-32"
            >
              <div className="relative p-10 sm:p-14 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px]" />

                <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-br from-indigo-400/20 to-violet-400/20 flex items-center justify-center ring-2 ring-white/10 overflow-hidden shadow-2xl">
                      {founder.image ? (
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          width={192}
                          height={192}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <Sparkles className="w-20 h-20 text-indigo-400/50" />
                      )}
                    </div>
                  </div>

                  {/* Info & Quote */}
                  <div className="flex-1 text-center lg:text-left space-y-6">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.25em] text-indigo-400 uppercase mb-4">
                        {founder.role} · {founder.roleEn}
                      </p>
                      <h3 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                        {founder.name}
                      </h3>
                      <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                        {founder.bio}
                      </p>
                    </div>

                    {/* Quote */}
                    <blockquote className="relative pl-0 lg:pl-8 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l-2 border-indigo-400/30 mt-8">
                      <Quote className="hidden lg:block absolute -left-3 top-0 w-5 h-5 text-indigo-400/60" />
                      <p className="text-xl sm:text-2xl text-white/90 font-light italic leading-relaxed">
                        "제가 걸어온 길이 정답은 아닙니다.
                        다만, 다른 길도 있다는 것을 보여주고 싶습니다.
                        모든 아이가 자신만의 길을 찾을 수 있도록."
                      </p>
                    </blockquote>

                    {/* Social Links */}
                    {founder.linkedin && (
                      <div className="flex justify-center lg:justify-start gap-3 pt-4">
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                          <Linkedin className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 5-2. Board & Advisors */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24 sm:mb-32"
            >
              <div className="mb-10">
                <p className="text-xs font-semibold tracking-[0.25em] text-indigo-600 uppercase mb-3">
                  이사 및 자문단 · Board & Advisors
                </p>
                <p className="text-base sm:text-lg text-slate-600 max-w-2xl" style={{ fontWeight: 300 }}>
                  교육학자, AI 개발자, 현직 교사 등 각 분야의 리더들이 모여
                  기술적 완성도와 교육적 윤리를 책임집니다.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-10">
                {boardMembers.map((member, index) => (
                  <ProfileCard key={index} member={member} variant="compact" index={index} />
                ))}
              </div>
            </motion.div>

            {/* 5-3. Team DawnStar */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24 sm:mb-32"
            >
              <div className="mb-10">
                <p className="text-xs font-semibold tracking-[0.25em] text-indigo-600 uppercase mb-3">
                  팀 새벽별 · Team DawnStar
                </p>
                <p className="text-base sm:text-lg text-slate-600 mb-3" style={{ fontWeight: 300 }}>
                  개발자, 교육 기획자, 디자이너가 함께 만들어갑니다.
                </p>
                <p className="text-sm text-slate-500 italic">
                  "아이들의 교육의 미래를 설계합니다."
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10">
                {teamMembers.map((member, index) => (
                  <ProfileCard key={index} member={member} variant="compact" index={index} />
                ))}
              </div>
            </motion.div>

            {/* 5-4. Partners */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-10">
                <p className="text-xs font-semibold tracking-[0.25em] text-indigo-600 uppercase mb-3">
                  파트너 · Partners
                </p>
                <p className="text-base sm:text-lg text-slate-600" style={{ fontWeight: 300 }}>
                  새벽별의 여정에 함께하는 기관과 기업들입니다.
                </p>
              </div>

              {/* Logo Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={`partner-${i}`}
                    className="h-28 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center bg-white/40 hover:bg-white/60 transition-colors"
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
        <section className="py-32 sm:py-40 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-[2.5rem] py-20 sm:py-28 px-8 sm:px-16"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px]" />

              <div className="relative text-center space-y-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                  이 여정에 함께하시겠습니까?
                </h2>

                <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: 300 }}>
                  교육의 민주화를 향한 길, 함께 걸어가실 분들을 기다립니다.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link
                    href="/get-involved"
                    className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-900 font-semibold rounded-full hover:bg-white/90 transition-all shadow-xl shadow-white/10"
                  >
                    함께하기
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/about/manifesto"
                    className="inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-medium border border-white/20 rounded-full hover:bg-white/10 transition-all"
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
