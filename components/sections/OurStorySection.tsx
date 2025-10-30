'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Lightbulb, Rocket, Users } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

export default function OurStorySection() {
  const storyParts = [
    {
      icon: AlertCircle,
      title: '문제를 마주하다',
      content: [
        '한국의 사교육비는 연간 26조 원을 넘어섭니다. 어떤 가정은 자녀 한 명당 월 수백만 원을 사교육에 쓰고, 어떤 가정은 교과서 한 권 사기도 버겁습니다.',
        '코로나19는 이 격차를 더욱 벌려놓았습니다. 디지털 기기가 있는 학생과 없는 학생, 안정적인 인터넷이 있는 가정과 없는 가정 사이의 학습 격차는 회복하기 어려운 수준으로 커졌습니다.',
        '그리고 이제 AI 시대가 시작되었습니다. 미국에서는 Khanmigo 같은 AI 튜터가 학생들의 학습을 혁신하고 있지만, 한국의 학생들은 언어와 교육과정의 차이로 인해 이러한 혁신적 도구에 접근조차 할 수 없습니다.',
      ],
    },
    {
      icon: Lightbulb,
      title: '가능성을 발견하다',
      content: [
        '하지만 우리는 문제만 본 것이 아니라 가능성도 보았습니다.',
        '기술은 교육의 격차를 줄일 수 있는 강력한 도구입니다. 적절히 설계되고 공정하게 배분된다면, AI는 모든 학생에게 맞춤형 학습 기회를 제공할 수 있습니다.',
        '학생 천 명이 있으면 천 가지의 학습 방식이 있습니다. 한 교실에 30명의 학생이 있을 때, 한 명의 교사가 모든 학생을 완벽하게 이해하고 지원하기는 불가능합니다.',
        '하지만 기술은 가능합니다. 각 학생의 이해도를 실시간으로 파악하고, 적절한 수준의 문제와 설명을 제공하며, 교사가 더 의미 있는 상호작용에 집중할 수 있도록 돕는 것.',
      ],
    },
    {
      icon: Rocket,
      title: '새벽별이 탄생하다',
      content: [
        '2025년, 우리는 새벽별 파운데이션을 설립했습니다.',
        '새벽별은 가장 어두운 밤에도 길을 밝히는 별입니다. 우리는 교육의 어둠 속에서 희망의 빛이 되고자 합니다.',
        '우리의 첫 프로젝트는 \'샛별\'입니다. 한국 학생과 교사를 위해 특별히 설계된 AI 학습 플랫폼입니다.',
        '하지만 이것은 시작일 뿐입니다. 우리의 진짜 목표는 단순히 제품을 만드는 것이 아니라, 교육 생태계 전체를 바꾸는 것입니다.',
      ],
    },
    {
      icon: Users,
      title: '함께 만들어가는 미래',
      content: [
        '새벽별 파운데이션은 혼자 가는 길이 아닙니다.',
        '우리는 현장의 교사들과 함께, 배움에 목마른 학생들과 함께, 교육의 가치를 믿는 모든 이들과 함께 이 여정을 만들어가고 있습니다.',
        '아직 가야 할 길이 멉니다. 하지만 우리는 확신합니다.',
        '기술로 교육의 본질을 되찾을 수 있다는 것. 모든 아이의 잠재력이 빛나는 세상을 만들 수 있다는 것.',
        '이것이 우리의 이야기이고, 우리가 여러분을 초대하는 이유입니다. 함께 만들어갈 내일은 오늘보다 밝을 것입니다.',
      ],
    },
  ];

  return (
    <section id="story" className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-wider text-purple-600 uppercase mb-4">
                Our Story
              </h2>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
                우리는 왜 시작했나요
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              모든 위대한 여정은 작은 질문에서 시작됩니다.
              <br />
              새벽별 파운데이션의 시작도 그랬습니다.
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-2xl sm:text-3xl font-semibold text-slate-900 italic"
            >
              "왜 어떤 아이들은 최고의 교육을 받고,
              <br />
              어떤 아이들은 그 기회조차 갖지 못할까?"
            </motion.blockquote>
          </div>

          {/* Story Parts */}
          <div className="space-y-16">
            {storyParts.map((part, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <part.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {part.title}
                  </h4>
                </div>

                {/* Content */}
                <div className="ml-0 sm:ml-18 space-y-4">
                  {part.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-lg text-slate-600 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Divider */}
                {index < storyParts.length - 1 && (
                  <div className="mt-12 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto sm:mx-0 sm:ml-7" />
                )}
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
