import { Metadata } from 'next';
import {
  BookOpen,
  MessageSquare,
  Sparkles,
  Zap,
  Code,
  PenTool,
  Brain,
  Award,
} from 'lucide-react';
import FadeInSection from '@/components/animations/FadeInSection';
import HoverCard from '@/components/animations/HoverCard';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: '샛별 (학생용) | 새벽별 파운데이션',
  description: '학생을 위한 AI 기반 개인 맞춤형 학습 플랫폼',
};

export default function StudentsPage() {
  const studentFeatures = [
    {
      icon: MessageSquare,
      title: '소크라테스식 대화',
      description:
        '답을 직접 주는 대신 질문을 통해 학생 스스로 생각하고 답을 찾을 수 있도록 유도합니다',
    },
    {
      icon: Sparkles,
      title: '개인화된 학습 경로',
      description:
        '각 학생의 이해도, 학습 속도, 흥미를 분석하여 최적의 학습 경로를 제시합니다',
    },
    {
      icon: Zap,
      title: '즉시 피드백',
      description:
        '문제를 풀 때마다 즉각적인 피드백을 제공하여, 오개념이 고착되기 전에 바로잡습니다',
    },
    {
      icon: BookOpen,
      title: '24/7 학습 지원',
      description: '언제 어디서나 질문하고 배울 수 있는 환경을 제공합니다',
    },
  ];

  const learningBenefits = [
    {
      icon: Brain,
      title: '깊이 있는 이해',
      description:
        '단순 암기가 아닌 개념의 본질을 이해하도록 돕습니다. 왜 그런지 알게 되면 더 오래 기억됩니다.',
    },
    {
      icon: PenTool,
      title: '창의적 글쓰기 코칭',
      description:
        '실시간 피드백으로 글쓰기 실력을 향상시킵니다. 에세이, 독후감, 창작까지 모든 글쓰기를 지원합니다.',
    },
    {
      icon: Code,
      title: '코딩 학습 지원',
      description:
        'Python, JavaScript 등 프로그래밍 언어를 배우고, 코드 리뷰를 받을 수 있습니다.',
    },
    {
      icon: Award,
      title: '자신감 향상',
      description:
        '작은 성취를 쌓아가며 학습에 대한 자신감을 키웁니다. 실패해도 괜찮은 안전한 학습 환경을 제공합니다.',
    },
  ];

  const subjects = [
    '수학',
    '과학',
    '영어',
    '국어',
    '사회',
    '역사',
    '코딩',
    '그 외 더 많은 과목',
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <FadeInSection>
          <div className="mb-20 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              언제 어디서나 함께하는
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                나만의 AI 튜터, 샛별
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              궁금한 게 있을 때, 숙제가 어려울 때, 더 깊이 배우고 싶을 때
              <br />
              샛별이 항상 곁에서 도와줍니다
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="font-semibold">
                지금 시작하기
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold border-2"
              >
                샛별 체험해보기
              </Button>
            </div>
          </div>
        </FadeInSection>

        {/* Why Different */}
        <div className="mb-32">
          <FadeInSection>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 lg:p-12 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                샛별은 다른 AI와 달라요
              </h2>
              <div className="space-y-4 text-lg text-slate-700">
                <p>
                  <strong className="text-slate-900">
                    ChatGPT처럼 답을 바로 알려주지 않습니다.
                  </strong>
                  <br />
                  대신 여러분이 스스로 답을 찾을 수 있도록 질문하고 힌트를
                  드립니다.
                </p>
                <p>
                  <strong className="text-slate-900">
                    한국 교육과정에 완벽하게 맞춰져 있습니다.
                  </strong>
                  <br />
                  수능, 내신, 생기부까지 한국 학생에게 필요한 모든 것을
                  지원합니다.
                </p>
                <p>
                  <strong className="text-slate-900">
                    여러분의 학습 속도를 존중합니다.
                  </strong>
                  <br />
                  빠르게 이해하든 천천히 배우든, 여러분의 속도에 맞춰
                  설명합니다.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Core Features */}
          <div className="mb-16">
            <FadeInSection>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 text-center">
                샛별이 도와주는 것들
              </h3>
              <p className="text-lg text-slate-600 mb-12 text-center leading-relaxed">
                학습의 모든 순간, 샛별이 함께합니다
              </p>
            </FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {studentFeatures.map((feature, index) => (
                <FadeInSection key={index} delay={index * 0.1}>
                  <HoverCard className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-shadow h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </HoverCard>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Benefits */}
        <div className="mb-32">
          <FadeInSection>
            <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              샛별과 함께하면 이런 것들이 좋아져요
            </h3>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningBenefits.map((benefit, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>

        {/* Subjects Covered */}
        <div className="mb-32">
          <FadeInSection>
            <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              어떤 과목이든 함께 배울 수 있어요
            </h3>
            <div className="bg-slate-900 rounded-3xl p-10 lg:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {subjects.map((subject, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white/10 rounded-xl"
                  >
                    <span className="text-white font-semibold text-lg">
                      {subject}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* How it Works */}
        <div className="mb-32">
          <FadeInSection>
            <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              이렇게 사용해요
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  질문하기
                </h4>
                <p className="text-slate-600">
                  모르는 문제나 궁금한 개념을 샛별에게 물어보세요
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  대화하기
                </h4>
                <p className="text-slate-600">
                  샛별이 질문을 통해 스스로 생각할 수 있도록 도와줍니다
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  이해하기
                </h4>
                <p className="text-slate-600">
                  개념을 완전히 이해하고 비슷한 문제도 풀 수 있게 됩니다
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Safety & Trust */}
        <div className="mb-32">
          <FadeInSection>
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 lg:p-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                안전하고 신뢰할 수 있어요
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-slate-900">학습에 집중</strong>
                    <p>학습과 관련 없는 주제는 대화하지 않습니다</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-slate-900">개인정보 보호</strong>
                    <p>여러분의 데이터는 철저히 보호됩니다</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-slate-900">
                      교육 전문가 감수
                    </strong>
                    <p>현직 선생님들과 함께 만들었습니다</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-slate-900">부모님께 투명하게</strong>
                    <p>부모님이 학습 내용을 확인하실 수 있습니다</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* CTA */}
        <FadeInSection>
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-10 lg:p-12 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              샛별과 함께 공부를 시작해볼까요?
            </h3>
            <p className="text-xl text-white/90 mb-8">
              지금 시작하면 무료 체험 기간을 드립니다
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-50 font-semibold"
              >
                무료로 시작하기
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold"
              >
                더 알아보기
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-6">
              2025년 중 베타 버전 출시 예정
            </p>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
}
