'use client';

import { motion } from 'framer-motion';
import DawnstarEssence, {
  VenusLogo,
  HorizonLogo,
  BreakthroughLogo,
  GuideLogo,
  AwakeningLogo,
  SolitaryLogo
} from '@/components/logo/DawnstarEssence';
import { useState } from 'react';

export default function EssencePage() {
  const [selected, setSelected] = useState('venus');

  const logos = [
    {
      id: 'venus',
      name: 'Venus',
      title: '금성 - 새벽별',
      essence: '가장 순수한 형태',
      description: '동이 트기 직전, 어둠 속에서 가장 밝게 빛나는 단 하나의 별. 새벽 하늘의 그라디언트 속에 빛나는 금성의 모습을 그대로 담았습니다.',
      symbolism: '희망, 새로운 시작, 안내',
      emotion: '고요하면서도 강렬한',
      recommended: true
    },
    {
      id: 'horizon',
      name: 'Horizon',
      title: '지평선',
      essence: '밤과 낮의 경계',
      description: '지평선 위에 정확히 위치한 별. 밤이 끝나고 낮이 시작되는 그 경계에서 가장 또렷하게 빛납니다. 전환의 순간을 포착했습니다.',
      symbolism: '경계, 전환, 새로운 차원',
      emotion: '극적이고 의미있는'
    },
    {
      id: 'breakthrough',
      name: 'Breakthrough',
      title: '돌파',
      essence: '어둠을 뚫고 나오는 빛',
      description: '완전한 어둠 속에서 터져나오는 빛의 폭발. 무지에서 깨달음으로, 절망에서 희망으로의 극적인 순간을 표현합니다.',
      symbolism: '돌파, 깨달음, 변혁',
      emotion: '강렬하고 임팩트 있는'
    },
    {
      id: 'guide',
      name: 'Guide',
      title: '안내자',
      essence: '길을 밝히는 빛',
      description: '위에서 아래로 내려오는 빛의 경로. 새벽별이 길을 잃은 이들에게 방향을 제시하는 안내자 역할을 시각화했습니다.',
      symbolism: '안내, 방향, 인도',
      emotion: '따뜻하고 신뢰감 있는'
    },
    {
      id: 'awakening',
      name: 'Awakening',
      title: '깨어남',
      essence: '어둠에서 빛으로',
      description: '아래에서 위로 퍼져나가는 빛. 잠에서 깨어나듯, 무지에서 지식으로 나아가는 점진적인 각성의 과정을 담았습니다.',
      symbolism: '각성, 성장, 확장',
      emotion: '점진적이고 희망적인'
    },
    {
      id: 'solitary',
      name: 'Solitary',
      title: '고독한 빛',
      essence: '광활한 어둠 속 유일한 빛',
      description: '끝없는 어둠 속에 홀로 빛나는 별. 고독하지만 그렇기에 더욱 강력한 존재감. 유일무이한 가치를 표현합니다.',
      symbolism: '유일성, 독립, 강인함',
      emotion: '고독하면서도 당당한'
    }
  ];

  const selectedLogo = logos.find(l => l.id === selected) || logos[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* 배경 별들 */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3
              }}
            />
          ))}
        </div>

        <div className="container-apple text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block mb-8">
              <VenusLogo size={120} />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              새벽별의 본질
            </h1>
            <p className="text-2xl text-blue-200 mb-4">
              샛별 • 금성 • Venus
            </p>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              동이 트기 직전, 어둠이 가장 깊을 때
              <br />
              가장 밝게 빛나는 단 하나의 별
            </p>
          </motion.div>
        </div>
      </section>

      {/* Logo Selection */}
      <section className="pb-16 px-4">
        <div className="container-apple">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {logos.map((logo, idx) => (
              <motion.button
                key={logo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                onClick={() => setSelected(logo.id)}
                className={`group relative p-6 rounded-2xl transition-all duration-500 ${
                  selected === logo.id
                    ? 'bg-white/10 ring-2 ring-yellow-400 shadow-2xl shadow-yellow-500/20'
                    : 'bg-white/5 hover:bg-white/10 hover:ring-1 hover:ring-white/30'
                }`}
              >
                {logo.recommended && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">★</span>
                  </div>
                )}
                <div className="mb-4">
                  <DawnstarEssence variant={logo.id as any} size={70} />
                </div>
                <div className="text-sm font-semibold text-white">{logo.name}</div>
                <div className="text-xs text-slate-400 mt-1">{logo.title}</div>
              </motion.button>
            ))}
          </div>

          {/* Detail View */}
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/10"
          >
            <div className="grid lg:grid-cols-2">
              {/* Visual */}
              <div className="relative bg-black p-20 flex items-center justify-center overflow-hidden">
                {/* 배경 효과 */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
                </div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="relative z-10"
                >
                  <DawnstarEssence variant={selected as any} size={300} />
                </motion.div>
              </div>

              {/* Info */}
              <div className="p-12 lg:p-16 flex flex-col justify-center text-white">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-semibold mb-4">
                    {selectedLogo.essence}
                  </div>

                  <h2 className="text-5xl font-bold mb-2">
                    {selectedLogo.name}
                  </h2>
                  <p className="text-2xl text-blue-300 mb-8">
                    {selectedLogo.title}
                  </p>

                  <p className="text-lg text-slate-300 leading-relaxed mb-10">
                    {selectedLogo.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                        상징
                      </h3>
                      <p className="text-white/90 text-lg">{selectedLogo.symbolism}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                        감성
                      </h3>
                      <p className="text-white/90 text-lg">{selectedLogo.emotion}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-black/30">
        <div className="container-apple">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-12">새벽별이 주는 의미</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              >
                <div className="text-5xl mb-4">🌅</div>
                <h3 className="text-xl font-bold mb-3">새로운 시작</h3>
                <p className="text-slate-300 leading-relaxed">
                  어둠이 끝나고 새로운 하루가 시작됨을 알리는 첫 번째 신호
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              >
                <div className="text-5xl mb-4">🧭</div>
                <h3 className="text-xl font-bold mb-3">안내와 방향</h3>
                <p className="text-slate-300 leading-relaxed">
                  길을 잃은 이들에게 올바른 방향을 제시하는 우주의 나침반
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              >
                <div className="text-5xl mb-4">💪</div>
                <h3 className="text-xl font-bold mb-3">고독한 강인함</h3>
                <p className="text-slate-300 leading-relaxed">
                  홀로 빛나지만 그렇기에 더욱 강렬한 존재감과 영향력
                </p>
              </motion.div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-white/10">
              <p className="text-2xl text-white/90 leading-relaxed italic">
                "어둠이 가장 깊을 때, 빛은 가장 밝게 빛난다.
                <br />
                새벽별은 우리에게 말합니다.
                <br />
                가장 어려운 순간이 새로운 시작의 전조임을."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Recommendation */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* 배경 빛 효과 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-3xl"></div>
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
                <VenusLogo size={200} />
              </div>

              <h2 className="text-5xl font-bold text-white mb-6">
                추천: Venus (금성)
              </h2>

              <p className="text-2xl text-blue-200 mb-12 leading-relaxed">
                가장 순수하고 본질적인 형태.
                <br />
                새벽 하늘의 아름다운 그라디언트 속에서
                <br />
                단 하나의 빛으로 존재하는 새벽별의 모습 그대로.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-lg px-8 py-4 rounded-full border border-white/20 text-white">
                  ✓ 본질에 충실
                </div>
                <div className="bg-white/10 backdrop-blur-lg px-8 py-4 rounded-full border border-white/20 text-white">
                  ✓ 시각적으로 아름다움
                </div>
                <div className="bg-white/10 backdrop-blur-lg px-8 py-4 rounded-full border border-white/20 text-white">
                  ✓ 즉시 이해 가능
                </div>
                <div className="bg-white/10 backdrop-blur-lg px-8 py-4 rounded-full border border-white/20 text-white">
                  ✓ 감성적 연결
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
