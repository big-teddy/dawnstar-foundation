import { BookOpen, Globe, Lightbulb } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

export default function MissionSection() {
  const missions = [
    {
      icon: BookOpen,
      title: '평등한 교육 기회',
      description:
        '경제적 배경이나 지역에 관계없이 모든 학생이 최고 수준의 교육을 받을 수 있도록 합니다.',
      gradient: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-500',
    },
    {
      icon: Lightbulb,
      title: 'AI 기반 맞춤 학습',
      description:
        '각 학생의 학습 수준과 속도에 맞춘 개인화된 AI 튜터가 24시간 학습을 지원합니다.',
      gradient: 'from-purple-500 to-purple-600',
      iconBg: 'bg-purple-500',
    },
    {
      icon: Globe,
      title: '지속 가능한 임팩트',
      description:
        '수익의 100%를 교육 기회 확대에 재투자하여 지속 가능한 교육 생태계를 만듭니다.',
      gradient: 'from-green-500 to-green-600',
      iconBg: 'bg-green-500',
    },
  ];

  return (
    <section id="mission" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              우리의 미션
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              교육 불평등을 해소하고, 모든 학생에게 세계 최고 수준의
              <br className="hidden sm:block" />
              개인 맞춤형 학습 경험을 제공합니다
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <ScrollReveal key={mission.title} delay={index * 0.2}>
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${mission.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />
                <div className="relative">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 ${mission.iconBg} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <mission.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {mission.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
