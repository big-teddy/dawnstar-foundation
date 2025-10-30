import { STATS, TESTIMONIALS } from '@/lib/constants';
import { Star } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

export default function ImpactSection() {
  return (
    <section id="impact" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              우리의 임팩트
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              더 나은 교육을 통해 만들어가는 변화
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {STATS.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div
                className={`bg-gradient-to-br ${stat.color} text-white rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300`}
              >
                <p className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm opacity-90">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={testimonial.author} delay={index * 0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-700 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${testimonial.color} rounded-full`} />
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
