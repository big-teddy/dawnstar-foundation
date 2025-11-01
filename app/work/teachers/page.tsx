import { Metadata } from 'next';
import Link from 'next/link';
import {
  Clock,
  Lightbulb,
  BarChart3,
  MessageCircle,
} from 'lucide-react';
import FadeInSection from '@/components/animations/FadeInSection';
import HoverCard from '@/components/animations/HoverCard';
import Button from '@/components/ui/Button';
import TeacherFeatureShowcase from '@/components/showcase/TeacherFeatureShowcase';

export const metadata: Metadata = {
  title: '샛별 (선생님용) | 새벽별 파운데이션',
  description: '선생님을 위한 무료 AI 교육 보조 도구',
};

export default function TeachersPage() {
  const additionalTools = [
    {
      icon: Lightbulb,
      title: '수업 아이디어',
      description: '창의적인 수업 도입부와 활동 아이디어를 제안합니다',
    },
    {
      icon: MessageCircle,
      title: '학부모 소통',
      description: '학부모 상담 자료와 가정통신문 작성을 도와드립니다',
    },
    {
      icon: BarChart3,
      title: '학습 데이터 분석',
      description: '학급별, 학생별 학습 패턴과 성취도를 시각화합니다',
    },
    {
      icon: Clock,
      title: '일정 관리',
      description: '학사 일정에 맞춘 수업 계획과 평가 일정을 관리합니다',
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <FadeInSection>
          <div className="mb-20 text-center relative">
            {/* Animated gradient background blur */}
            <div className="absolute -inset-x-32 -inset-y-16 opacity-20 blur-3xl pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 animate-gradient-x" />
            </div>
            <div className="relative">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm mb-6">
              선생님께 무료로 제공됩니다
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              더 나은 수업에 집중하세요
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                나머지는 샛별이 도와드립니다
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              행정 업무와 반복 작업에서 벗어나
              <br />
              학생들과의 의미 있는 시간에 집중하세요
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/get-involved">
                <Button size="lg" className="font-semibold" aria-label="선생님용 샛별 무료로 시작하기">
                  무료로 시작하기
                </Button>
              </Link>
              <Link href="/work/saetbyeol">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold border-2"
                  aria-label="샛별 데모 영상 보기"
                >
                  데모 영상 보기
                </Button>
              </Link>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              신용카드 등록 불필요 · 언제든 무료 사용
            </p>
            </div>
          </div>
        </FadeInSection>

        {/* Value Proposition */}
        <div className="mb-32">
          <FadeInSection>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 lg:p-12 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                선생님의 시간은 소중합니다
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-black text-purple-600 mb-2">
                    주 15시간
                  </div>
                  <p className="text-slate-700">
                    행정 업무에 소요되는 평균 시간
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-black text-purple-600 mb-2">
                    60%
                  </div>
                  <p className="text-slate-700">업무 시간 단축 효과</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-purple-600 mb-2">
                    100%
                  </div>
                  <p className="text-slate-700">무료, 영원히</p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Feature Showcase */}
          <div className="mb-16">
            <FadeInSection>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 text-center">
                샛별이 도와드리는 주요 업무
              </h3>
              <p className="text-lg text-slate-600 mb-12 text-center leading-relaxed">
                가장 시간이 많이 걸리는 업무부터 자동화합니다
              </p>
            </FadeInSection>
            <FadeInSection>
              <TeacherFeatureShowcase />
            </FadeInSection>
          </div>
        </div>

        {/* Additional Tools */}
        <div className="mb-32">
          <FadeInSection>
            <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              이런 것들도 도와드립니다
            </h3>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalTools.map((tool, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {tool.title}
                  </h4>
                  <p className="text-sm text-slate-600">{tool.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>

        {/* Korean Education Optimized */}
        <div className="mb-32">
          <FadeInSection>
            <div className="bg-slate-900 rounded-3xl p-10 lg:p-12">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                한국 교육 현장에 맞춰 설계했습니다
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-white">
                      2022/2015 개정 교육과정 반영
                    </strong>
                    <p className="text-white/70">
                      교과서 단원별 성취기준 완벽 대응
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-white">
                      생기부 작성 가이드라인 준수
                    </strong>
                    <p className="text-white/70">교육부 기준에 맞춘 표현</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-white">수능/내신 대비 자료</strong>
                    <p className="text-white/70">
                      평가 문항 제작 및 분석 지원
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-white">
                      학생 데이터 완벽 보호
                    </strong>
                    <p className="text-white/70">개인정보보호법 완전 준수</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Testimonials Placeholder */}
        <div className="mb-32">
          <FadeInSection>
            <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              선생님들의 이야기
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <p className="text-slate-700 mb-4 italic">
                  "생기부 작성 시간이 정말 많이 줄었어요. 초안을 빠르게
                  만들어주니까 학생 개개인에 집중할 시간이 생겼습니다."
                </p>
                <p className="text-sm text-slate-500">
                  — 서울 ○○고등학교 국어 교사
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <p className="text-slate-700 mb-4 italic">
                  "수업 자료 준비가 훨씬 수월해졌습니다. 교육과정에 맞춰서
                  자료를 추천해주니 신뢰할 수 있어요."
                </p>
                <p className="text-sm text-slate-500">
                  — 경기 ○○중학교 수학 교사
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <p className="text-slate-700 mb-4 italic">
                  "학급 전체 학생들의 이해도를 한눈에 볼 수 있어서 좋습니다.
                  도움이 필요한 학생을 놓치지 않게 됐어요."
                </p>
                <p className="text-sm text-slate-500">
                  — 부산 ○○초등학교 담임 교사
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* CTA */}
        <FadeInSection>
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-3xl p-10 lg:p-12 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              지금 바로 시작하세요
            </h3>
            <p className="text-xl text-white/90 mb-8">
              샛별은 대한민국 모든 선생님께 영원히 무료입니다
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/get-involved">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-slate-50 font-semibold"
                  aria-label="선생님용 샛별 무료로 시작하기"
                >
                  무료로 시작하기
                </Button>
              </Link>
              <Link href="/work/saetbyeol">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold"
                  aria-label="샛별 사용 가이드 보기"
                >
                  사용 가이드 보기
                </Button>
              </Link>
            </div>
            <p className="text-sm text-white/70 mt-6">
              2025년 중 베타 버전 출시 예정 · 조기 액세스 신청 가능
            </p>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
}
