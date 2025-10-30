'use client';

import { ArrowRight, Check } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import Button from '../ui/Button';

export default function ProductSection() {
  const features = [
    '한국 교육과정 완벽 지원: 초등학교부터 고등학교까지 전 과정 커버',
    '실시간 대화형 학습: 궁금한 점을 언제든지 질문하고 즉시 피드백',
    '학습 진도 추적: AI가 분석한 맞춤형 학습 로드맵 제공',
  ];

  return (
    <section id="product" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <ScrollReveal direction="left">
            <div>
              <div className="inline-block bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-xs font-semibold mb-6 tracking-wide">
                출시 준비 중
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
                새벽별 AI 튜터
                <br />
                <span className="text-cyan-600">
                  당신만의 학습 파트너
                </span>
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed font-light">
                한국 교육과정에 최적화된 AI 튜터가 수학, 과학, 영어 등 모든
                과목에서 1:1 맞춤형 학습을 제공합니다. 단순히 답을 알려주는 것이
                아니라, 학생 스스로 사고하고 문제를 해결할 수 있도록 소크라테스식
                질문으로 이끕니다.
              </p>

              <div className="space-y-4 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </div>
                    <p className="text-neutral-700">{feature}</p>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800">
                베타 테스트 신청하기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </ScrollReveal>

          {/* Right: Demo/Mockup */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="bg-neutral-50 rounded-2xl shadow-xl p-8 border border-neutral-200">
                {/* Chat Interface Mockup */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-neutral-900 rounded-full" />
                    <div className="flex-1 bg-white rounded-2xl rounded-tl-none p-4 border border-neutral-200">
                      <p className="text-neutral-700">
                        안녕하세요! 오늘은 어떤 것을 공부하고 싶나요?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 flex-row-reverse">
                    <div className="flex-shrink-0 w-10 h-10 bg-neutral-300 rounded-full" />
                    <div className="flex-1 bg-neutral-900 text-white rounded-2xl rounded-tr-none p-4">
                      <p>이차방정식의 근의 공식이 이해가 안 가요</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-neutral-900 rounded-full" />
                    <div className="flex-1 bg-white rounded-2xl rounded-tl-none p-4 border border-neutral-200">
                      <p className="text-neutral-700">
                        좋아요! 먼저 이차방정식이 무엇인지 설명해볼 수 있나요?
                        스스로 생각해보는 것이 중요해요.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="flex items-center gap-2 mt-4 ml-14">
                  <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" />
                  <div
                    className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  />
                  <div
                    className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                    style={{ animationDelay: '0.4s' }}
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-cyan-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold text-sm animate-float">
                AI 학습 중
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
