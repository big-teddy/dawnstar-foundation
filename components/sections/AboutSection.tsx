'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Heart, Target, Users } from 'lucide-react';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const values = [
    {
      icon: Heart,
      title: '교육 평등',
      description: '모든 학생이 동등한 기회를 가질 수 있도록',
    },
    {
      icon: Target,
      title: '혁신',
      description: 'AI 기술로 교육의 새로운 가능성을 탐구',
    },
    {
      icon: Users,
      title: '협력',
      description: '학교, 기업, 정부와 함께 만드는 변화',
    },
    {
      icon: Award,
      title: '투명성',
      description: '모든 활동과 재정을 투명하게 공개',
    },
  ];

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Animated background element */}
      <motion.div
        style={{ y, opacity }}
        className="absolute right-0 top-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="space-y-8"
          >
            <div>
              <span className="text-xs font-semibold text-neutral-500 tracking-[0.2em] uppercase">
                About Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-neutral-900 mt-4 mb-6 tracking-tight leading-tight">
                교육의 미래를
                <br />
                함께 만들어갑니다
              </h2>
            </div>

            <div className="space-y-6 text-neutral-600 leading-relaxed">
              <p className="text-lg">
                새벽별 파운데이션은 교육 불평등이라는 사회적 문제를 해결하기 위해 설립된 비영리 단체입니다.
              </p>
              <p>
                한국의 모든 학생이 경제적 배경이나 지역에 관계없이 최고 수준의 교육을 받을 수 있어야 한다고 믿습니다.
                AI 기술을 활용해 개인 맞춤형 학습을 제공하고, 교육 격차를 해소하는 것이 우리의 목표입니다.
              </p>
              <p>
                우리는 단순히 기술을 만드는 것을 넘어, 지속 가능한 교육 생태계를 구축하고
                모든 학생에게 평등한 기회를 제공하는 것을 최우선 가치로 삼고 있습니다.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-neutral-900">2024</div>
                <div className="text-sm text-neutral-600">설립 연도</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-neutral-900">100%</div>
                <div className="text-sm text-neutral-600">재투자 비율</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 }}
            className="space-y-4"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">우리의 가치</h3>
              <p className="text-neutral-600">
                이 가치들이 우리의 모든 결정과 행동의 기준이 됩니다
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                  }}
                  whileHover={{ y: -4 }}
                  className="group relative bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:border-neutral-300 transition-all duration-300"
                >
                  <div className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-neutral-900 mb-1">
                        {value.title}
                      </h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
