'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import DawnstarIconic, {
  MarkLogo,
  StellarLogo,
  RayLogo
} from '@/components/logo/DawnstarIconic';
import DawnstarEssence, {
  VenusLogo,
  HorizonLogo,
  BreakthroughLogo
} from '@/components/logo/DawnstarEssence';

export default function LogoComparisonPage() {
  const [approach, setApproach] = useState<'iconic' | 'essence'>('iconic');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="container-apple text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              두 가지 접근법
            </h1>
            <p className="text-2xl text-blue-200 mb-8">
              아이코닉 vs 본질적 표현
            </p>
          </motion.div>

          {/* Toggle */}
          <div className="inline-flex bg-white/10 rounded-full p-2 backdrop-blur-lg border border-white/20">
            <button
              onClick={() => setApproach('iconic')}
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                approach === 'iconic'
                  ? 'bg-white text-slate-900 shadow-xl'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              아이코닉 로고
            </button>
            <button
              onClick={() => setApproach('essence')}
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                approach === 'essence'
                  ? 'bg-white text-slate-900 shadow-xl'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              본질 로고
            </button>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="pb-24 px-4">
        <div className="container-apple">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Iconic Approach */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`bg-white/5 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border-2 transition-all duration-500 ${
                approach === 'iconic'
                  ? 'border-yellow-400 shadow-2xl shadow-yellow-500/20 scale-105'
                  : 'border-white/10'
              }`}
            >
              <div className="p-12">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      아이코닉 로고
                    </h2>
                    <p className="text-slate-300">Nike, Apple, Mercedes 스타일</p>
                  </div>
                  {approach === 'iconic' && (
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">★</span>
                    </div>
                  )}
                </div>

                {/* Examples on different backgrounds */}
                <div className="space-y-6">
                  {/* White background */}
                  <div className="bg-white rounded-2xl p-8 flex items-center justify-between">
                    <div className="flex gap-6">
                      <MarkLogo size={60} color="#1A1A2E" />
                      <StellarLogo size={60} color="#1A1A2E" />
                      <RayLogo size={60} color="#1A1A2E" />
                    </div>
                    <span className="text-sm text-slate-400 font-mono">흰 배경</span>
                  </div>

                  {/* Black background */}
                  <div className="bg-black rounded-2xl p-8 flex items-center justify-between">
                    <div className="flex gap-6">
                      <MarkLogo size={60} color="#FFFFFF" />
                      <StellarLogo size={60} color="#FFFFFF" />
                      <RayLogo size={60} color="#FFFFFF" />
                    </div>
                    <span className="text-sm text-slate-400 font-mono">검정 배경</span>
                  </div>

                  {/* Blue background */}
                  <div className="bg-blue-600 rounded-2xl p-8 flex items-center justify-between">
                    <div className="flex gap-6">
                      <MarkLogo size={60} color="#FFFFFF" />
                      <StellarLogo size={60} color="#FFFFFF" />
                      <RayLogo size={60} color="#FFFFFF" />
                    </div>
                    <span className="text-sm text-white/70 font-mono">컬러 배경</span>
                  </div>
                </div>

                {/* Principles */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-400 text-sm">✓</span>
                    </div>
                    <p className="text-white/90">배경 없이 독립적 존재</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-400 text-sm">✓</span>
                    </div>
                    <p className="text-white/90">단색으로 완벽하게 작동</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-400 text-sm">✓</span>
                    </div>
                    <p className="text-white/90">1cm부터 10m까지 모든 크기</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-400 text-sm">✓</span>
                    </div>
                    <p className="text-white/90">즉시 인식 가능</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-400 text-sm">✓</span>
                    </div>
                    <p className="text-white/90">명함, 현수막, 웹사이트 모두 동일</p>
                  </div>
                </div>

                {/* Use cases */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="text-white font-semibold mb-4">최적의 용도</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white">명함</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white">파비콘</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white">앱 아이콘</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white">간판</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white">현수막</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white">상품</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Essence Approach */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`bg-white/5 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border-2 transition-all duration-500 ${
                approach === 'essence'
                  ? 'border-yellow-400 shadow-2xl shadow-yellow-500/20 scale-105'
                  : 'border-white/10'
              }`}
            >
              <div className="p-12">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      본질 로고
                    </h2>
                    <p className="text-slate-300">새벽별의 정서와 분위기</p>
                  </div>
                  {approach === 'essence' && (
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">★</span>
                    </div>
                  )}
                </div>

                {/* Examples */}
                <div className="space-y-6">
                  <div className="bg-black rounded-2xl p-8 flex items-center justify-between">
                    <div className="flex gap-6">
                      <VenusLogo size={80} />
                      <HorizonLogo size={80} />
                      <BreakthroughLogo size={80} />
                    </div>
                    <span className="text-sm text-slate-400 font-mono">디자인 자체에<br/>배경 포함</span>
                  </div>
                </div>

                {/* Principles */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-400 text-sm">✦</span>
                    </div>
                    <p className="text-white/90">새벽 하늘의 그라디언트</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-400 text-sm">✦</span>
                    </div>
                    <p className="text-white/90">어둠과 빛의 대비</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-400 text-sm">✦</span>
                    </div>
                    <p className="text-white/90">금성의 빛과 후광</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-400 text-sm">✦</span>
                    </div>
                    <p className="text-white/90">지평선의 경계</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-400 text-sm">✦</span>
                    </div>
                    <p className="text-white/90">감성적 연결과 스토리</p>
                  </div>
                </div>

                {/* Use cases */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="text-white font-semibold mb-4">최적의 용도</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white">웹사이트 히어로</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white">포스터</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white">소셜미디어</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white">브로셔</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white">프레젠테이션</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Recommendation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-yellow-500/10 via-blue-500/10 to-purple-500/10 rounded-[2.5rem] p-12 border border-white/20 backdrop-blur-lg"
          >
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-6">전문가 추천</h2>
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                두 접근법 모두 가치가 있지만, 목적에 따라 선택해야 합니다.
              </p>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/5 rounded-2xl p-8 text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <MarkLogo size={40} color="#FFD700" />
                    <h3 className="text-2xl font-bold">아이코닉 로고</h3>
                  </div>
                  <p className="text-slate-300 mb-4">
                    <strong className="text-yellow-300">브랜드 정체성</strong>으로 사용
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    명함, 웹사이트 헤더, 앱 아이콘, 간판 등 모든 곳에서 일관되게 사용할 수 있는 <strong>메인 로고</strong>입니다.
                    어떤 크기, 어떤 배경에서도 작동해야 합니다.
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-8 text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <VenusLogo size={50} />
                    <h3 className="text-2xl font-bold">본질 로고</h3>
                  </div>
                  <p className="text-slate-300 mb-4">
                    <strong className="text-blue-300">감성적 표현</strong>으로 사용
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    웹사이트의 특별한 섹션, 포스터, 브로셔 등에서 <strong>새벽별의 의미와 감성</strong>을 전달하고 싶을 때 사용합니다.
                    스토리텔링에 최적화되어 있습니다.
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-white/20">
                <p className="text-2xl font-semibold text-yellow-200 mb-4">
                  이상적인 조합
                </p>
                <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                  <strong className="text-white">아이코닉 로고</strong>를 메인 브랜드 마크로 사용하고,
                  <br />
                  <strong className="text-white">본질 로고</strong>를 특별한 순간과 스토리를 전달할 때 사용하세요.
                  <br />
                  <br />
                  예: 명함과 웹사이트 헤더는 아이코닉 로고 → 홈페이지 히어로 섹션은 본질 로고
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <a
              href="/iconic"
              className="group bg-white/5 hover:bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">아이코닉 로고 탐색</h3>
                <span className="text-3xl group-hover:translate-x-2 transition-transform">→</span>
              </div>
              <p className="text-slate-300">6가지 아이코닉 로고 변형을 다양한 배경에서 테스트해보세요</p>
            </a>

            <a
              href="/essence"
              className="group bg-white/5 hover:bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">본질 로고 탐색</h3>
                <span className="text-3xl group-hover:translate-x-2 transition-transform">→</span>
              </div>
              <p className="text-slate-300">6가지 새벽별의 본질을 담은 로고와 그 의미를 살펴보세요</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
