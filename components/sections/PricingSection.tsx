import { PRICING_PLANS } from '@/lib/constants';
import { Check } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import Button from '../ui/Button';

export default function PricingSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              모두를 위한 가격 정책
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {PRICING_PLANS.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 0.2}>
              <div
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white scale-105 shadow-2xl'
                    : 'bg-white border border-slate-200 shadow-lg'
                } transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                    가장 인기
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      plan.popular ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span
                      className={`text-4xl font-bold ${
                        plan.popular ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className={plan.popular ? 'text-blue-100' : 'text-slate-600'}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                  {plan.description && (
                    <p
                      className={`text-sm ${
                        plan.popular ? 'text-blue-100' : 'text-slate-600'
                      }`}
                    >
                      {plan.description}
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`flex-shrink-0 w-5 h-5 ${
                          plan.popular ? 'text-yellow-300' : 'text-green-500'
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.popular ? 'text-white' : 'text-slate-600'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.name !== '무료 플랜' && (
                  <Button
                    className="w-full"
                    variant={plan.popular ? 'secondary' : 'outline'}
                  >
                    {plan.name === '학교/기관' ? '문의하기' : '시작하기'}
                  </Button>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-center text-sm text-slate-600">
            * 수익의 100%는 저소득층 학생 무료 이용 지원에 사용됩니다
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
