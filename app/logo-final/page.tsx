'use client';

import { motion } from 'framer-motion';
import DawnstarLogoFinal, {
  SparkLogo,
  BloomLogo,
  OrbitLogo,
  AscendLogo,
  ConnectLogo,
  SimpleLogo
} from '@/components/logo/DawnstarLogoFinal';
import { useState } from 'react';

export default function LogoFinalPage() {
  const [selectedLogo, setSelectedLogo] = useState<string>('spark');

  const logos = [
    {
      id: 'spark',
      name: 'Spark',
      title: '불꽃 - 영감의 순간',
      description: '새벽별의 빛이 터지는 순간. 아이디어와 영감이 폭발하는 학습의 순간을 표현합니다.',
      concept: '중심에서 사방으로 퍼져나가는 빛의 광선',
      mood: '역동적, 창의적, 영감적',
      useCase: '브랜드 메인 로고, SNS, 학생 대상 자료',
      colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#1A1A2E'],
      recommended: true
    },
    {
      id: 'bloom',
      name: 'Bloom',
      title: '개화 - 성장과 꽃핌',
      description: 'Khan Academy 스타일. 꽃이 피어나듯 학습을 통해 성장하는 모습을 기하학적으로 표현합니다.',
      concept: '6개의 꽃잎이 중심에서 피어나는 형태',
      mood: '따뜻한, 성장적, 희망적',
      useCase: '교육 프로그램, 학부모 자료, 성장 스토리',
      colors: ['#FF6B6B', '#FFD93D', '#6BCF7F', '#4ECDC4', '#45B7D1', '#96CEB4']
    },
    {
      id: 'orbit',
      name: 'Orbit',
      title: '궤도 - 체계적 학습',
      description: '별을 중심으로 도는 궤도. 체계적이고 지속적인 학습 여정을 상징합니다.',
      concept: '3개의 동심원 궤도와 학습자를 나타내는 점들',
      mood: '체계적, 지속적, 안정적',
      useCase: '커리큘럼 소개, 학습 경로, 시스템 설명',
      colors: ['#4ECDC4', '#45B7D1', '#FF6B6B', '#1A1A2E']
    },
    {
      id: 'ascend',
      name: 'Ascend',
      title: '상승 - 발전과 성취',
      description: '위로 올라가는 계단과 별. 단계적 성장과 목표 달성을 시각화합니다.',
      concept: '3단계 성장 막대와 정상의 별',
      mood: '성취적, 목표지향적, 동기부여적',
      useCase: '성과 리포트, 기부 캠페인, 성장 스토리',
      colors: ['#4ECDC4', '#45B7D1', '#FF6B6B', '#FFD93D']
    },
    {
      id: 'connect',
      name: 'Connect',
      title: '연결 - 커뮤니티',
      description: '연결된 점들의 네트워크. 학생, 교사, 학부모가 함께하는 학습 커뮤니티를 표현합니다.',
      concept: '중심점과 4개 노드의 연결망',
      mood: '협력적, 포용적, 커뮤니티적',
      useCase: '커뮤니티 소개, 파트너십, 협력 프로그램',
      colors: ['#FF6B6B', '#FFD93D', '#6BCF7F', '#45B7D1', '#1A1A2E']
    },
    {
      id: 'simple',
      name: 'Simple',
      title: '심플 - 순수한 별',
      description: '클래식한 5각 별에 현대적 그라디언트. 가장 직관적이고 보편적인 디자인입니다.',
      concept: '5각 별의 타임리스한 형태',
      mood: '직관적, 보편적, 클래식',
      useCase: '파비콘, 공식 문서, 전통적 매체',
      colors: ['#FFD93D', '#FF6B6B']
    }
  ];

  const selectedLogoData = logos.find(l => l.id === selectedLogo) || logos[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4">
        <div className="container-apple">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              새로운 로고 제안
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-2">
              별(★)을 추상적으로 재해석한 창의적 디자인
            </p>
            <p className="text-sm text-slate-400">
              Khan Academy, Duolingo, Coursera 등 성공한 교육 브랜드에서 영감을 받았습니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Logo Selector */}
      <section className="pb-12 px-4">
        <div className="container-apple">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {logos.map((logo, idx) => (
              <motion.button
                key={logo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedLogo(logo.id)}
                className={`relative p-6 rounded-2xl transition-all duration-300 ${
                  selectedLogo === logo.id
                    ? 'bg-white shadow-xl ring-2 ring-blue-500'
                    : 'bg-white/60 hover:bg-white hover:shadow-lg'
                }`}
              >
                {logo.recommended && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    추천
                  </div>
                )}
                <DawnstarLogoFinal variant={logo.id as any} size={64} className="mx-auto mb-3" />
                <div className="text-sm font-semibold text-slate-900">{logo.name}</div>
                <div className="text-xs text-slate-500">{logo.title}</div>
              </motion.button>
            ))}
          </div>

          {/* Selected Logo Detail */}
          <motion.div
            key={selectedLogo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8 p-12">
              {/* Left: Logo Display */}
              <div className="flex flex-col items-center justify-center">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-16 mb-6 w-full flex items-center justify-center">
                  <DawnstarLogoFinal variant={selectedLogo as any} size={200} />
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-slate-900 rounded-2xl p-8 flex items-center justify-center">
                    <DawnstarLogoFinal variant={selectedLogo as any} size={80} />
                  </div>
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 flex items-center justify-center">
                    <DawnstarLogoFinal variant={selectedLogo as any} size={80} />
                  </div>
                </div>
              </div>

              {/* Right: Details */}
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-2">
                  {selectedLogoData.name}
                </h2>
                <p className="text-xl text-blue-600 font-semibold mb-6">
                  {selectedLogoData.title}
                </p>
                <p className="text-slate-700 leading-relaxed mb-8">
                  {selectedLogoData.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-500 uppercase mb-2">
                      디자인 컨셉
                    </h3>
                    <p className="text-slate-700">{selectedLogoData.concept}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-500 uppercase mb-2">
                      분위기
                    </h3>
                    <p className="text-slate-700">{selectedLogoData.mood}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-500 uppercase mb-2">
                      추천 사용처
                    </h3>
                    <p className="text-slate-700">{selectedLogoData.useCase}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-500 uppercase mb-2">
                      컬러 팔레트
                    </h3>
                    <div className="flex gap-2">
                      {selectedLogoData.colors.map((color, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-1">
                          <div
                            className="w-10 h-10 rounded-lg border-2 border-slate-200"
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-xs text-slate-400 font-mono">
                            {color}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Size Variations */}
      <section className="py-16 px-4 bg-white">
        <div className="container-apple">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            크기별 적용 예시
          </h2>
          <div className="bg-slate-50 rounded-3xl p-12 flex items-end justify-center gap-8">
            <div className="flex flex-col items-center gap-3">
              <DawnstarLogoFinal variant={selectedLogo as any} size={24} />
              <span className="text-xs text-slate-500">24px</span>
              <span className="text-xs text-slate-400">파비콘</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <DawnstarLogoFinal variant={selectedLogo as any} size={40} />
              <span className="text-xs text-slate-500">40px</span>
              <span className="text-xs text-slate-400">헤더</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <DawnstarLogoFinal variant={selectedLogo as any} size={64} />
              <span className="text-xs text-slate-500">64px</span>
              <span className="text-xs text-slate-400">앱 아이콘</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <DawnstarLogoFinal variant={selectedLogo as any} size={120} />
              <span className="text-xs text-slate-500">120px</span>
              <span className="text-xs text-slate-400">히어로</span>
            </div>
          </div>
        </div>
      </section>

      {/* With Text */}
      <section className="py-16 px-4">
        <div className="container-apple">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            텍스트 조합
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-12 shadow-lg flex items-center justify-center">
              <DawnstarLogoFinal variant={selectedLogo as any} size={80} showText />
            </div>
            <div className="bg-slate-900 rounded-3xl p-12 shadow-lg flex items-center justify-center">
              <div className="flex items-center gap-3">
                <DawnstarLogoFinal variant={selectedLogo as any} size={80} />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-4xl leading-tight">
                    새벽별
                  </span>
                  <span className="text-white/60 font-normal text-xl leading-tight">
                    파운데이션
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendation */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container-apple">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <SparkLogo size={120} />
              </div>
              <h2 className="text-4xl font-bold mb-6">
                추천: Spark (불꽃) 로고
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                영감의 순간, 학습의 기쁨을 가장 역동적으로 표현합니다.
                <br />
                Khan Academy의 따뜻함과 Duolingo의 에너지를 결합한 디자인으로,
                <br />
                교육 브랜드로서 최적의 균형을 갖추었습니다.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full">
                  ✓ 기억하기 쉬움
                </div>
                <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full">
                  ✓ 모든 크기에서 선명
                </div>
                <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full">
                  ✓ 밝고 긍정적
                </div>
                <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full">
                  ✓ 차별화된 디자인
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why These Are Better */}
      <section className="py-20 px-4 bg-white">
        <div className="container-apple">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            왜 이 디자인들이 더 나은가?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                창의적 재해석
              </h3>
              <p className="text-slate-600 leading-relaxed">
                전통적인 별 모양에서 벗어나 '새벽별'의 본질(빛, 희망, 영감)을
                추상적으로 표현했습니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                현대적 감각
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Khan Academy, Duolingo 같은 성공한 교육 브랜드의 디자인 철학을
                반영한 2024년 트렌드입니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                감성적 연결
              </h3>
              <p className="text-slate-600 leading-relaxed">
                밝은 컬러와 유기적 형태로 학생들이 친근하게 느낄 수 있는
                따뜻한 브랜드 이미지를 구축합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
