'use client';

import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  GraduationCap,
  Heart,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

export default function ManifestoSection() {
  const principles = [
    {
      icon: Heart,
      title: '교육은 모든 사람의 권리입니다',
      description:
        '태어난 곳, 부모의 소득, 학교의 위치에 관계없이 모든 아이는 양질의 교육을 받을 권리가 있습니다.',
    },
    {
      icon: Target,
      title: '교육은 개인의 속도를 존중해야 합니다',
      description:
        '모든 학생은 고유한 학습 방식과 속도를 가지고 있습니다. 우리는 각자에게 맞는 학습 경험을 제공합니다.',
    },
    {
      icon: Sparkles,
      title: '교육은 잠재력을 발견하는 여정입니다',
      description:
        '교육의 목적은 시험 점수가 아니라 한 사람의 가능성을 발견하고 키우는 것입니다.',
    },
    {
      icon: Users,
      title: '기술은 교사를 돕는 도구입니다',
      description:
        'AI는 교사를 대체하는 것이 아니라, 교사가 더 나은 교육을 제공할 수 있도록 돕는 동반자입니다.',
    },
    {
      icon: TrendingUp,
      title: '교육 환경의 변화가 필요합니다',
      description:
        '개인의 노력만으로는 구조적 불평등을 해결할 수 없습니다. 시스템 차원의 변화를 만들어야 합니다.',
    },
    {
      icon: Shield,
      title: '데이터는 학생을 이해하는 도구입니다',
      description:
        '데이터는 학생을 더 깊이 이해하고 지원하는 도구이지, 선별하거나 차별하는 도구가 아닙니다.',
    },
    {
      icon: BookOpen,
      title: '학습은 경쟁이 아닌 협력입니다',
      description:
        '학생들은 서로 경쟁 상대가 아닌 함께 성장하는 동료입니다. 협력적 학습 문화를 만듭니다.',
    },
    {
      icon: GraduationCap,
      title: '교육은 평생 지속됩니다',
      description:
        '학습은 졸업과 함께 끝나지 않습니다. 모든 연령대의 학습자를 지원하고 평생 학습을 장려합니다.',
    },
    {
      icon: Award,
      title: '투명성과 책임이 신뢰를 만듭니다',
      description:
        '재단의 운영, 재정, 연구를 투명하게 공개하고 커뮤니티에 대한 책임을 다합니다.',
    },
    {
      icon: Zap,
      title: '함께할 때 더 강합니다',
      description:
        '교육의 변화는 혼자 만들 수 없습니다. 교사, 학생, 학부모, 연구자, 모든 이들과 협력합니다.',
    },
  ];

  return (
    <section id="manifesto" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                The DawnStar Manifesto
              </h2>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
                우리가 믿는 것
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl mx-auto space-y-4 text-lg text-slate-600 leading-relaxed"
            >
              <p>
                교육은 세상을 바꿀 수 있는 가장 강력한 도구입니다.
                <br />
                하지만 지금 우리 교육은 너무 많은 아이들을 놓치고 있습니다.
              </p>
              <p className="font-medium text-slate-800">
                우리는 이것을 바꿀 수 있다고 믿습니다.
                <br />
                기술이 아니라, 사람을 중심에 두고.
                <br />
                경쟁이 아니라, 성장을 목표로 하며.
                <br />
                선별이 아니라, 포용을 실천하는 교육을 만들 수 있다고 믿습니다.
              </p>
            </motion.div>
          </div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <principle.icon className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {index + 1}. {principle.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 lg:p-12 space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed">
                이 열 가지 원칙은 새벽별 파운데이션의 나침반입니다.
                <br />
                우리는 이 신념을 바탕으로 모든 결정을 내리고,
                <br />
                모든 프로젝트를 시작하며, 모든 파트너십을 맺습니다.
              </p>
              <p className="text-xl font-semibold text-slate-900">
                교육의 미래는 우리 모두의 손에 달려 있습니다.
                <br />
                새벽별 파운데이션과 함께 그 미래를 만들어가실 수 있기를
                바랍니다.
              </p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
