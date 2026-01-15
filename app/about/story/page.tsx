'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BookOpen, Lightbulb, Rocket, Heart } from 'lucide-react';

const timeline = [
  {
    year: '2024',
    title: '질문이 시작되다',
    content: '왜 어떤 아이들은 최고의 교육을 받고, 어떤 아이들은 그 기회조차 갖지 못할까? 이 질문에서 모든 것이 시작되었습니다.',
    icon: BookOpen,
  },
  {
    year: '2024',
    title: '문제를 직시하다',
    content: '한국은 연간 26조 원을 사교육에 지출합니다. 부모의 소득이 아이의 교육 기회를 결정하는 현실을 바꾸고자 했습니다.',
    icon: Lightbulb,
  },
  {
    year: '2025',
    title: '새벽별의 탄생',
    content: 'AI 기술이 답이 될 수 있다는 확신으로 새벽별 파운데이션이 설립되었습니다.',
    icon: Rocket,
  },
  {
    year: '미래',
    title: '함께 만드는 내일',
    content: '교육의 민주화를 향한 여정, 함께 걸어가실 분들을 기다립니다.',
    icon: Heart,
  },
];

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
        {/* Hero Section - Enhanced */}
        <section className="relative min-h-[70vh] flex items-center justify-center">

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
                우리는 왜
                <br />
                <span className="gradient-text">시작했나요</span>
              </h1>

              <p className="text-body-lg text-slate-600 max-w-2xl mx-auto">
                한 아이의 잠재력이 태어난 환경에 의해 결정되는 세상.
                <br />
                우리는 그 불공평한 현실에 질문을 던졌습니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Question - Large Quote (Typography-driven, no box) */}
        <section className="py-20">
          <div className="container-apple">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto text-center"
            >
              <blockquote className="hero-statement-large text-slate-900">
                "왜 어떤 아이들은 최고의 교육을 받고,
                <br />
                <span className="gradient-text">어떤 아이들은 그 기회조차 갖지 못할까?</span>"
              </blockquote>
            </motion.div>
          </div>
        </section>

        {/* The Problem - Stats as Heroes (Content-first, minimal containers) */}
        <section className="py-20">
          <div className="container-apple">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <p className="text-sm font-medium tracking-widest text-indigo-600 uppercase mb-4">
                  The Problem
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                  문제는 명확합니다
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
                {[
                  { number: '26조 원', label: '한국 연간 사교육비' },
                  { number: '43만 원', label: '가구당 월평균 지출' },
                  { number: '2배', label: '소득별 교육 격차' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="text-center"
                  >
                    <div className="stat-hero gradient-text stat-glow whitespace-nowrap">
                      {stat.number}
                    </div>
                    <p className="stat-hero-label">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline - Subtle glass (toned down) */}
        <section className="py-20">
          <div className="container-apple">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-10 md:p-16 rounded-3xl subtle-glass-card"
            >
              <div className="text-center mb-12">
                <p className="text-sm font-medium tracking-widest text-indigo-600 uppercase mb-4">
                  Timeline
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                  우리의 여정
                </h2>
              </div>

              <div className="max-w-2xl mx-auto">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-12 pb-10 last:pb-0"
                  >
                    {/* Vertical line */}
                    {index < timeline.length - 1 && (
                      <div className="absolute left-[15px] top-8 w-px h-full bg-gradient-to-b from-indigo-300 to-transparent" />
                    )}

                    {/* Icon */}
                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-600">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>

                    {/* Content */}
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-bold text-indigo-600 bg-indigo-50 rounded-full mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed">
                        {item.content}
                      </p>
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
