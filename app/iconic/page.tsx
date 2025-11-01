'use client';

import { motion } from 'framer-motion';
import DawnstarIconic, {
  MarkLogo,
  MonolineLogo,
  StellarLogo,
  RayLogo,
  MinimalStarLogo,
  AbstractLogo
} from '@/components/logo/DawnstarIconic';
import { useState } from 'react';

export default function IconicPage() {
  const [selected, setSelected] = useState('mark');
  const [bgColor, setBgColor] = useState('white');

  const logos = [
    {
      id: 'mark',
      name: 'The Mark',
      title: '더 마크',
      principle: 'Nike Swoosh 원칙',
      description: '다이아몬드 형태의 중심 + 4방향 광선. 별의 핵심과 빛의 확산을 하나의 아이코닉한 마크로 압축했습니다.',
      strength: '즉시 인식 가능, 독특하고 기억하기 쉬움',
      recommended: true
    },
    {
      id: 'monoline',
      name: 'Monoline',
      title: '모노라인',
      principle: '하나의 연속된 선',
      description: '끊김 없는 단일 선으로 그린 6각 별. 연속성, 무한한 성장, 끊임없는 배움을 상징합니다.',
      strength: '우아하고 세련됨, 유니크함'
    },
    {
      id: 'stellar',
      name: 'Stellar',
      title: '스텔라',
      principle: 'Mercedes 원칙',
      description: '완벽한 기하학적 구조. 원 안에 정확히 60도 간격의 6개 광선. 체계적이고 정교한 브랜드 이미지.',
      strength: '프리미엄 느낌, 전문성, 정교함'
    },
    {
      id: 'ray',
      name: 'Ray',
      title: '레이',
      principle: '극도의 미니멀리즘',
      description: '중심점에서 퍼져나가는 8개의 광선만으로 구성. 빛의 폭발, 영감의 순간을 가장 단순하게 표현.',
      strength: '초미니멀, 현대적, 강렬함'
    },
    {
      id: 'minimal-star',
      name: 'Minimal Star',
      title: '미니멀 스타',
      principle: 'Apple 원칙',
      description: '군더더기 없는 순수한 6각 별 실루엣. 가장 보편적이면서도 타임리스한 디자인.',
      strength: '클래식, 타임리스, 보편적'
    },
    {
      id: 'abstract',
      name: 'Abstract',
      title: '추상',
      principle: '파격적 재해석',
      description: '3개의 겹친 삼각형으로 별을 추상화. 가장 독특하고 예술적인 접근. 다층적 의미.',
      strength: '독창적, 예술적, 현대적'
    }
  ];

  const selectedLogo = logos.find(l => l.id === selected) || logos[0];

  const backgrounds = [
    { id: 'white', name: '흰색', color: '#FFFFFF' },
    { id: 'black', name: '검정', color: '#000000' },
    { id: 'gray', name: '회색', color: '#6B7280' },
    { id: 'blue', name: '파랑', color: '#3B82F6' },
    { id: 'pattern', name: '패턴', color: 'pattern' }
  ];

  const logoColor = bgColor === 'black' || bgColor === '#000000' || bgColor === '#3B82F6' ? '#FFFFFF' : '#1A1A2E';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero */}
      <section className="pt-24 pb-12 px-4">
        <div className="container-apple text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block mb-8 p-8 bg-white rounded-3xl shadow-xl">
              <MarkLogo size={120} color="#1A1A2E" />
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-4">
              아이코닉 로고
            </h1>
            <p className="text-2xl text-slate-600 mb-2">
              배경 없이, 단색으로, 어디서나 작동하는
            </p>
            <p className="text-lg text-slate-500">
              Apple, Nike, Mercedes 수준의 아이코닉 디자인 원칙 적용
            </p>
          </motion.div>
        </div>
      </section>

      {/* Logo Selection */}
      <section className="pb-16 px-4">
        <div className="container-apple">
          {/* Logo Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {logos.map((logo, idx) => (
              <motion.button
                key={logo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelected(logo.id)}
                className={`relative p-6 rounded-2xl transition-all duration-300 ${
                  selected === logo.id
                    ? 'bg-white shadow-2xl ring-4 ring-blue-500 scale-105'
                    : 'bg-white/80 hover:bg-white hover:shadow-xl hover:scale-102'
                }`}
              >
                {logo.recommended && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">★</span>
                  </div>
                )}
                <div className="mb-4">
                  <DawnstarIconic variant={logo.id as any} size={64} color="#1A1A2E" />
                </div>
                <div className="text-sm font-bold text-slate-900">{logo.name}</div>
                <div className="text-xs text-slate-500 mt-1">{logo.title}</div>
              </motion.button>
            ))}
          </div>

          {/* Interactive Canvas */}
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12"
          >
            <div className="grid lg:grid-cols-2">
              {/* Canvas */}
              <div className="relative p-16">
                {/* Background Selector */}
                <div className="absolute top-6 left-6 flex gap-2">
                  {backgrounds.map(bg => (
                    <button
                      key={bg.id}
                      onClick={() => setBgColor(bg.color)}
                      className={`w-8 h-8 rounded-lg border-2 transition-all ${
                        bgColor === bg.color
                          ? 'border-blue-500 ring-2 ring-blue-200'
                          : 'border-slate-300 hover:border-slate-400'
                      }`}
                      style={{
                        backgroundColor: bg.color === 'pattern' ? '#F3F4F6' : bg.color,
                        backgroundImage: bg.color === 'pattern'
                          ? 'repeating-linear-gradient(45deg, #E5E7EB 0, #E5E7EB 10px, #F3F4F6 10px, #F3F4F6 20px)'
                          : 'none'
                      }}
                      title={bg.name}
                    />
                  ))}
                </div>

                {/* Logo Display */}
                <div
                  className="rounded-2xl p-20 flex items-center justify-center min-h-[400px]"
                  style={{
                    backgroundColor: bgColor === 'pattern' ? '#F3F4F6' : bgColor,
                    backgroundImage: bgColor === 'pattern'
                      ? 'repeating-linear-gradient(45deg, #E5E7EB 0, #E5E7EB 10px, #F3F4F6 10px, #F3F4F6 20px)'
                      : 'none'
                  }}
                >
                  <DawnstarIconic variant={selected as any} size={200} color={logoColor} />
                </div>

                {/* Size Variations */}
                <div className="flex items-end justify-center gap-8 mt-8">
                  <div className="flex flex-col items-center gap-2">
                    <DawnstarIconic variant={selected as any} size={24} color="#1A1A2E" />
                    <span className="text-xs text-slate-500">24px</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <DawnstarIconic variant={selected as any} size={48} color="#1A1A2E" />
                    <span className="text-xs text-slate-500">48px</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <DawnstarIconic variant={selected as any} size={96} color="#1A1A2E" />
                    <span className="text-xs text-slate-500">96px</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-12 lg:p-16 flex flex-col justify-center bg-slate-50">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6 w-fit">
                  {selectedLogo.principle}
                </div>

                <h2 className="text-4xl font-bold text-slate-900 mb-2">
                  {selectedLogo.name}
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  {selectedLogo.title}
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  {selectedLogo.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-500 uppercase mb-2">
                      강점
                    </h3>
                    <p className="text-slate-800 font-medium">{selectedLogo.strength}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-500 uppercase mb-3">
                      아이코닉 체크리스트
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-slate-700">배경 없이 독립적으로 존재</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-slate-700">단색으로 완벽하게 작동</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-slate-700">모든 크기에서 선명</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-slate-700">즉시 인식 가능</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-slate-700">어떤 매체에도 적용 가능</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* All Logos Comparison */}
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              전체 비교
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* White BG */}
              <div>
                <h3 className="text-sm font-bold text-slate-600 mb-4 text-center">흰색 배경</h3>
                <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 grid grid-cols-3 gap-6">
                  {logos.map(logo => (
                    <div key={logo.id} className="flex flex-col items-center gap-2">
                      <DawnstarIconic variant={logo.id as any} size={48} color="#1A1A2E" />
                      <span className="text-xs text-slate-500">{logo.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Black BG */}
              <div>
                <h3 className="text-sm font-bold text-slate-600 mb-4 text-center">검정 배경</h3>
                <div className="bg-black rounded-2xl p-8 grid grid-cols-3 gap-6">
                  {logos.map(logo => (
                    <div key={logo.id} className="flex flex-col items-center gap-2">
                      <DawnstarIconic variant={logo.id as any} size={48} color="#FFFFFF" />
                      <span className="text-xs text-white/60">{logo.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color BG */}
              <div>
                <h3 className="text-sm font-bold text-slate-600 mb-4 text-center">컬러 배경</h3>
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 grid grid-cols-3 gap-6">
                  {logos.map(logo => (
                    <div key={logo.id} className="flex flex-col items-center gap-2">
                      <DawnstarIconic variant={logo.id as any} size={48} color="#FFFFFF" />
                      <span className="text-xs text-white/80">{logo.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="container-apple">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            아이코닉 로고 원칙
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">단순함</h3>
              <p className="text-slate-300 leading-relaxed">
                Nike Swoosh처럼 군더더기 없이 본질만 남김. 설명 없이도 기억에 남는 형태.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">♾️</div>
              <h3 className="text-xl font-bold text-white mb-3">확장성</h3>
              <p className="text-slate-300 leading-relaxed">
                Apple 로고처럼 명함부터 빌보드까지, 1cm부터 10m까지 완벽하게 작동.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">⏳</div>
              <h3 className="text-xl font-bold text-white mb-3">영속성</h3>
              <p className="text-slate-300 leading-relaxed">
                Mercedes처럼 10년, 50년, 100년 후에도 여전히 현대적이고 관련성 있음.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Recommendation */}
      <section className="py-24 px-4">
        <div className="container-apple">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block p-12 bg-white rounded-3xl shadow-2xl mb-8">
                <MarkLogo size={160} color="#1A1A2E" />
              </div>

              <h2 className="text-5xl font-bold text-slate-900 mb-6">
                최종 추천: The Mark
              </h2>

              <p className="text-2xl text-slate-600 mb-8 leading-relaxed">
                다이아몬드 중심 + 4방향 광선
                <br />
                별의 본질을 가장 아이코닉하게 압축한 형태
              </p>

              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Why It Works</h3>
                  <ul className="text-left text-slate-700 space-y-2">
                    <li>• Nike Swoosh처럼 즉시 인식</li>
                    <li>• 독특하고 기억하기 쉬움</li>
                    <li>• 모든 크기에서 완벽</li>
                    <li>• 단색으로 강력함</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Applications</h3>
                  <ul className="text-left text-slate-700 space-y-2">
                    <li>• 파비콘부터 빌보드까지</li>
                    <li>• 흑백 인쇄물</li>
                    <li>• 자수, 각인</li>
                    <li>• 디지털 모든 매체</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
