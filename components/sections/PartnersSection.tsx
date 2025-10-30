import { ArrowRight, Briefcase, Building2, Check } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import Button from '../ui/Button';

export default function PartnersSection() {
  const partners = [
    {
      icon: Building2,
      title: '학교 및 교육기관',
      description:
        '학교 전체 또는 학급 단위로 새벽별 AI 튜터를 도입하여 학생들의 학습 성과를 높이고 교사의 업무 부담을 줄일 수 있습니다.',
      benefits: [
        '특별 할인 요금제',
        '교사용 관리 대시보드 제공',
        '전담 지원팀 배정',
      ],
    },
    {
      icon: Briefcase,
      title: '기업 후원',
      description:
        '교육 불평등 해소라는 사회적 가치에 동참하고, 귀사의 ESG 및 사회공헌 목표 달성을 지원합니다.',
      benefits: [
        '세제 혜택 (기부금 세액 공제)',
        'CSR/ESG 리포트 제공',
        '브랜드 파트너십 기회',
      ],
    },
  ];

  return (
    <section id="partners" className="py-24 lg:py-32 bg-neutral-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-neutral-500 tracking-[0.2em] uppercase block mb-4">
              Partnership
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
              함께하는 파트너
            </h2>
            <p className="text-lg text-neutral-600 font-light">
              교육의 미래를 함께 만들어갈 파트너를 찾습니다
            </p>
          </div>
        </ScrollReveal>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {partners.map((partner, index) => (
            <ScrollReveal key={partner.title} delay={index * 0.2}>
              <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:border-neutral-300 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-neutral-900 rounded-xl mb-6">
                  <partner.icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {partner.title}
                </h3>

                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {partner.description}
                </p>

                <div className="space-y-3 mb-8">
                  {partner.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-neutral-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-neutral-900 text-white hover:bg-neutral-800">
                  {partner.title === '학교 및 교육기관'
                    ? '파트너십 문의'
                    : '후원 문의'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Partner Logos */}
        <ScrollReveal>
          <div className="bg-white rounded-xl p-8 border border-neutral-200">
            <p className="text-center text-neutral-500 mb-8 text-sm font-medium tracking-wide">함께하는 파트너</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4'].map(
                (partner) => (
                  <div
                    key={partner}
                    className="bg-neutral-50 rounded-lg p-6 flex items-center justify-center border border-neutral-200 opacity-40 hover:opacity-70 transition-opacity"
                  >
                    <span className="text-neutral-400 font-medium text-sm">{partner}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
