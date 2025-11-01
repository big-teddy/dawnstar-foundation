'use client';

import { motion } from 'framer-motion';
import DawnstarRefined, {
  BloomRefinedLogo,
  MorningStarLogo,
  DawnGlowLogo,
  HorizonLightLogo,
  FirstLightLogo,
  RadiantLogo
} from '@/components/logo/DawnstarRefined';
import { useState } from 'react';

export default function DawnstarLogosPage() {
  const [selected, setSelected] = useState('bloom-refined');

  const logos = [
    {
      id: 'bloom-refined',
      name: 'Bloom Refined',
      title: '세련된 개화',
      tagline: '당신이 선택한 Bloom의 진화 버전',
      description: '부드러운 꽃잎이 새벽별처럼 빛나며 피어나는 모습. 따뜻한 새벽 색감의 그라디언트로 희망과 성장을 표현합니다.',
      concept: '6개의 타원형 꽃잎 + 빛나는 중심',
      colors: ['#FFD166', '#FFB347', '#FF6B9D', '#FFE66D'],
      mood: '따뜻한, 희망적, 부드러운',
      recommended: true
    },
    {
      id: 'morning-star',
      name: 'Morning Star',
      title: '새벽별',
      tagline: '새벽별 그 자체의 모습',
      description: '클래식한 별 형태에 새벽 하늘의 색감을 입혔습니다. 어둠 속에서 가장 밝게 빛나는 별을 표현합니다.',
      concept: '6각 별 + 새벽 그라디언트 + 후광',
      colors: ['#FFE66D', '#FF6B9D', '#845EC2'],
      mood: '고전적, 신뢰감, 빛나는'
    },
    {
      id: 'dawn-glow',
      name: 'Dawn Glow',
      title: '새벽의 빛남',
      tagline: '중심에서 퍼져나가는 빛',
      description: '중심의 밝은 빛이 사방으로 퍼져나가는 모습. 한 사람의 배움이 많은 이들에게 영향을 주는 것을 상징합니다.',
      concept: '동심원 + 8방향 광선',
      colors: ['#FFE66D', '#FFB347', '#FF6B9D', '#845EC2'],
      mood: '확산적, 영향력, 빛나는'
    },
    {
      id: 'horizon-light',
      name: 'Horizon Light',
      title: '지평선의 빛',
      tagline: '동이 트는 순간',
      description: '지평선 위로 떠오르는 새벽별. 새로운 하루의 시작, 희망의 시작을 표현합니다.',
      concept: '지평선 + 떠오르는 별 + 빛 광선',
      colors: ['#1A1A2E', '#845EC2', '#FFB347', '#FFE66D'],
      mood: '새로운 시작, 희망, 극적'
    },
    {
      id: 'first-light',
      name: 'First Light',
      title: '첫 번째 빛',
      tagline: '어둠을 밝히는 순간',
      description: '어둠 속에서 터지는 빛의 폭발. 무지에서 깨달음으로의 극적인 전환을 표현합니다.',
      concept: '어둠 배경 + 빛의 폭발 + 8방향 광선',
      colors: ['#1A1A2E', '#FFE66D', '#FFB347', '#FF6B9D'],
      mood: '극적, 강렬, 임팩트'
    },
    {
      id: 'radiant',
      name: 'Radiant',
      title: '빛나는',
      tagline: 'Bloom의 미니멀 버전',
      description: 'Bloom을 5개 꽃잎으로 단순화. 더 깔끔하고 현대적인 느낌을 유지합니다.',
      concept: '5개 꽃잎 + 단순한 중심',
      colors: ['#FFE66D', '#FF6B9D'],
      mood: '미니멀, 현대적, 깔끔'
    }
  ];

  const selectedLogo = logos.find(l => l.id === selected) || logos[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero */}
      <section className="pt-24 pb-12 px-4">
        <div className="container-apple text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl font-bold text-slate-900 mb-4">
              새벽별 로고
            </h1>
            <p className="text-2xl text-slate-600 mb-2">
              동이 트기 직전, 가장 밝게 빛나는 별
            </p>
            <p className="text-lg text-slate-500">
              Bloom을 기반으로 '새벽별'의 본질에 집중한 6가지 버전
            </p>
          </motion.div>
        </div>
      </section>

      {/* Logo Grid */}
      <section className="pb-12 px-4">
        <div className="container-apple">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {logos.map((logo, idx) => (
              <motion.button
                key={logo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelected(logo.id)}
                className={`relative p-6 rounded-3xl transition-all duration-500 ${
                  selected === logo.id
                    ? 'bg-white shadow-2xl ring-4 ring-purple-400 scale-105'
                    : 'bg-white/70 hover:bg-white hover:shadow-xl hover:scale-102'
                }`}
              >
                {logo.recommended && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    ★ 추천
                  </div>
                )}
                <div className="mb-4">
                  <DawnstarRefined variant={logo.id as any} size={80} />
                </div>
                <div className="text-sm font-bold text-slate-900">{logo.name}</div>
                <div className="text-xs text-slate-500 mt-1">{logo.title}</div>
              </motion.button>
            ))}
          </div>

          {/* Detail View */}
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[2rem] shadow-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Visual */}
              <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 p-16 flex flex-col items-center justify-center relative overflow-hidden">
                {/* 배경 패턴 */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>

                <div className="relative z-10">
                  {/* 메인 로고 */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-12"
                  >
                    <DawnstarRefined variant={selected as any} size={250} />
                  </motion.div>

                  {/* 크기 변형 */}
                  <div className="flex items-end justify-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <DawnstarRefined variant={selected as any} size={40} />
                      <span className="text-xs text-white/60">40px</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <DawnstarRefined variant={selected as any} size={64} />
                      <span className="text-xs text-white/60">64px</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <DawnstarRefined variant={selected as any} size={96} />
                      <span className="text-xs text-white/60">96px</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Info */}
              <div className="p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="mb-6">
                    <h2 className="text-4xl font-bold text-slate-900 mb-2">
                      {selectedLogo.name}
                    </h2>
                    <p className="text-2xl text-purple-600 font-semibold mb-2">
                      {selectedLogo.title}
                    </p>
                    <p className="text-lg text-slate-500 italic">
                      "{selectedLogo.tagline}"
                    </p>
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-8 text-lg">
                    {selectedLogo.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                        디자인 컨셉
                      </h3>
                      <p className="text-slate-800 font-medium">{selectedLogo.concept}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                        분위기
                      </h3>
                      <p className="text-slate-800 font-medium">{selectedLogo.mood}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                        컬러 팔레트
                      </h3>
                      <div className="flex gap-3">
                        {selectedLogo.colors.map((color, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-2">
                            <div
                              className="w-14 h-14 rounded-2xl shadow-lg border-2 border-white"
                              style={{ backgroundColor: color }}
                            />
                            <span className="text-xs text-slate-500 font-mono">
                              {color}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-4 bg-white">
        <div className="container-apple">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            다양한 배경에서 비교
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* White BG */}
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-12 flex flex-col items-center gap-4">
              <DawnstarRefined variant={selected as any} size={120} />
              <span className="text-sm text-slate-600 font-medium">밝은 배경</span>
            </div>

            {/* Dark BG */}
            <div className="bg-slate-900 rounded-3xl p-12 flex flex-col items-center gap-4">
              <DawnstarRefined variant={selected as any} size={120} />
              <span className="text-sm text-white/80 font-medium">어두운 배경</span>
            </div>

            {/* Gradient BG */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 flex flex-col items-center gap-4">
              <DawnstarRefined variant={selected as any} size={120} />
              <span className="text-sm text-white font-medium">컬러 배경</span>
            </div>

            {/* Pattern BG */}
            <div className="relative bg-slate-50 rounded-3xl p-12 flex flex-col items-center gap-4 overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, #94a3b8 1px, transparent 0)',
                backgroundSize: '30px 30px'
              }}></div>
              <DawnstarRefined variant={selected as any} size={120} className="relative z-10" />
              <span className="text-sm text-slate-600 font-medium relative z-10">패턴 배경</span>
            </div>

            {/* Image BG (simulated) */}
            <div className="relative bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl p-12 flex flex-col items-center gap-4 overflow-hidden">
              <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIiBmaWxsPSIjMDAwIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')]"></div>
              <DawnstarRefined variant={selected as any} size={120} className="relative z-10" />
              <span className="text-sm text-slate-800 font-medium relative z-10">텍스처 배경</span>
            </div>

            {/* Blurred BG */}
            <div className="relative bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-3xl p-12 flex flex-col items-center gap-4 overflow-hidden">
              <div className="absolute inset-0 backdrop-blur-sm"></div>
              <DawnstarRefined variant={selected as any} size={120} className="relative z-10" />
              <span className="text-sm text-white font-medium relative z-10">블러 효과</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendation */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white relative overflow-hidden">
        {/* 배경 애니메이션 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-apple relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-10">
                <BloomRefinedLogo size={180} />
              </div>

              <h2 className="text-5xl font-bold mb-6">
                최종 추천: Bloom Refined
              </h2>

              <p className="text-2xl text-white/90 mb-8 leading-relaxed">
                당신이 선택한 Bloom을 더욱 세련되게 발전시킨 버전입니다.
                <br />
                새벽의 따뜻한 색감과 부드러운 형태로
                <br />
                희망, 성장, 빛을 완벽하게 표현합니다.
              </p>

              <div className="grid md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                  <div className="text-3xl mb-2">✨</div>
                  <div className="text-sm font-semibold">부드럽고 따뜻함</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                  <div className="text-3xl mb-2">🌅</div>
                  <div className="text-sm font-semibold">새벽의 색감</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                  <div className="text-3xl mb-2">💫</div>
                  <div className="text-sm font-semibold">기억하기 쉬움</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="text-sm font-semibold">범용성 높음</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
