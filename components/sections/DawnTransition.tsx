'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function DawnTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Transform scroll progress to color values
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [
      'rgb(15, 23, 42)', // slate-900 (dark night)
      'rgb(30, 41, 59)', // slate-800
      'rgb(51, 65, 85)', // slate-700
      'rgb(100, 116, 139)', // slate-500 (dawn)
    ]
  );

  const gradientOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.4, 0.6]);

  const sunOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 0, 0.3, 0.6]);
  const sunY = useTransform(scrollYProgress, [0, 0.4, 1], ['100%', '100%', '20%']);

  const starsOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <motion.div
      ref={ref}
      className="relative min-h-[150vh]"
      style={{
        backgroundColor,
      }}
    >
      {/* Gradient overlay for dawn colors */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(251, 146, 60, 0.15) 50%, rgba(252, 211, 77, 0.25) 100%)',
          opacity: gradientOpacity,
        }}
      />

      {/* Rising sun */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.8) 0%, rgba(251, 146, 60, 0.6) 40%, transparent 70%)',
          opacity: sunOpacity,
          y: sunY,
          filter: 'blur(20px)',
        }}
      />

      {/* Additional glow */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, rgba(252, 211, 77, 0.2) 40%, transparent 70%)',
          opacity: sunOpacity,
          y: sunY,
          filter: 'blur(40px)',
        }}
      />

      {/* Stars fade out container */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: starsOpacity,
        }}
      >
        {/* Additional small stars for transition */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Content - Why We Exist Section */}
      <div className="relative z-10 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight"
              >
                Why We Exist
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-white/90"
              >
                우리는 왜 시작했나요
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none text-white/90 leading-relaxed space-y-8"
            >
              <div className="space-y-6 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <p className="text-xl text-white/80 leading-relaxed italic">
                  모든 위대한 여정은 작은 질문에서 시작됩니다.
                </p>

                <p className="text-xl text-white/80 leading-relaxed italic">
                  새벽별 파운데이션의 시작도 그랬습니다.
                </p>

                <p className="text-xl text-white font-medium leading-relaxed">
                  "왜 어떤 아이들은 최고의 교육을 받고,
                  <br />
                  어떤 아이들은 그 기회조차 갖지 못할까?"
                </p>

                <p className="text-lg text-white/70 leading-relaxed">
                  이 질문은 단순한 호기심이 아니었습니다. 이것은 우리 사회의 가장
                  근본적인 불평등 중 하나이며, 수많은 아이들의 미래가 걸린
                  문제였습니다.
                </p>
              </div>

              {/* Continue with the rest of Why We Exist content... */}
              <div className="space-y-8 mt-12">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    문제를 마주하다
                  </h3>
                  <div className="space-y-4 text-white/80">
                    <p>
                      한국의 사교육비는 연간 26조 원을 넘어섭니다. 어떤 가정은
                      자녀 한 명당 월 수백만 원을 사교육에 쓰고, 어떤 가정은
                      교과서 한 권 사기도 버겁습니다.
                    </p>
                    <p>
                      코로나19는 이 격차를 더욱 벌려놓았습니다. 디지털 기기가
                      있는 학생과 없는 학생, 안정적인 인터넷이 있는 가정과 없는
                      가정 사이의 학습 격차는 회복하기 어려운 수준으로 커졌습니다.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    가능성을 발견하다
                  </h3>
                  <div className="space-y-4 text-white/80">
                    <p>
                      하지만 우리는 문제만 본 것이 아니라 가능성도 보았습니다.
                      기술은 교육의 격차를 줄일 수 있는 강력한 도구입니다.
                    </p>
                    <p>
                      적절히 설계되고 공정하게 배분된다면, AI는 모든 학생에게
                      맞춤형 학습 기회를 제공할 수 있습니다.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    새벽별이 탄생하다
                  </h3>
                  <div className="space-y-4 text-white/80">
                    <p>
                      2025년, 우리는 새벽별 파운데이션을 설립했습니다. 새벽별은
                      가장 어두운 밤에도 길을 밝히는 별입니다. 우리는 교육의 어둠
                      속에서 희망의 빛이 되고자 합니다.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
