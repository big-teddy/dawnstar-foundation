import { ArrowRight, Play } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import Button from '../ui/Button';

export default function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              지금 바로 시작하세요
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 mb-12">
              새벽별 AI 튜터와 함께 학습의 즐거움을 발견하세요
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="gradient">
                무료로 시작하기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="ghost">
                <Play className="mr-2 w-5 h-5" />
                데모 보기
              </Button>
            </div>

            <p className="text-sm text-slate-500">
              신용카드 불필요 · 언제든 해지 가능
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
