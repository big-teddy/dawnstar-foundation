import { Metadata } from 'next';
import {
  FileText,
  CheckCircle2,
  BookOpen,
  Users,
  Clock,
  Lightbulb,
  BarChart3,
  MessageCircle,
} from 'lucide-react';
import FadeInSection from '@/components/animations/FadeInSection';
import HoverCard from '@/components/animations/HoverCard';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: '샛별 (선생님용) | 새벽별 파운데이션',
  description: '선생님을 위한 무료 AI 교육 보조 도구',
};

export default function TeachersPage() {
  const teacherFeatures = [
    {
      icon: FileText,
      title: '생활기록부 작성 지원',
      description:
        '세부능력특기사항(세특) 초안을 생성하고, 선생님이 검토하고 다듬을 수 있게 합니다. 교육부 가이드라인을 완벽하게 준수합니다.',
      timesSaved: '작성 시간 70% 단축',
    },
    {
      icon: CheckCircle2,
      title: '평가 및 피드백',
      description:
        '서술형 평가 채점과 학생별 맞춤 피드백 작성을 도와 시간을 절약합니다. 일관성 있는 평가 기준을 유지합니다.',
      timesSaved: '채점 시간 50% 단축',
    },
    {
      icon: BookOpen,
      title: '수업 설계',
      description:
        '교육과정에 맞춘 수업 계획과 학습지를 빠르게 제작할 수 있습니다. 교과서 단원별 맞춤 자료를 제공합니다.',
      timesSaved: '준비 시간 60% 단축',
    },
    {
      icon: Users,
      title: '학생 진단 및 분석',
      description:
        '학급 전체 학생의 이해도를 한눈에 파악하고, 도움이 필요한 학생을 빠르게 찾습니다. 데이터 기반 교육을 실현합니다.',
      timesSaved: '실시간 모니터링',
    },
  ];

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

  const useCases = [
    {
      title: '아침 출근길',
      time: '8:00 AM',
      task: '오늘 수업 계획 최종 점검',
      result: '수업 도입 활동 아이디어를 받고 학습지 수정',
    },
    {
      title: '수업 준비',
      time: '10:30 AM',
      task: '다음 주 수업 자료 준비',
      result: '단원별 핵심 개념 정리와 활동지 초안 완성',
    },
    {
      title: '평가 시즌',
      time: '2:00 PM',
      task: '서술형 평가 채점',
      result: '30명 학생 채점을 1시간 안에 완료하고 피드백 작성',
    },
    {
      title: '방과 후',
      time: '5:00 PM',
      task: '생활기록부 작성',
      result: '학생별 세특 초안을 검토하고 개인화된 내용으로 다듬기',
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <FadeInSection>
          <div className="mb-20 text-center">
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
              <Button size="lg" className="font-semibold">
                무료로 시작하기
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold border-2"
              >
                데모 영상 보기
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              신용카드 등록 불필요 · 언제든 무료 사용
            </p>
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

          {/* Main Features */}
          <div className="mb-16">
            <FadeInSection>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 text-center">
                샛별이 도와드리는 주요 업무
              </h3>
              <p className="text-lg text-slate-600 mb-12 text-center leading-relaxed">
                가장 시간이 많이 걸리는 업무부터 자동화합니다
              </p>
            </FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teacherFeatures.map((feature, index) => (
                <FadeInSection key={index} delay={index * 0.1}>
                  <HoverCard className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-shadow h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">
                          {feature.title}
                        </h4>
                        <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                          {feature.timesSaved}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </HoverCard>
                </FadeInSection>
              ))}
            </div>
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

        {/* A Day with Saetbyeol */}
        <div className="mb-32">
          <FadeInSection>
            <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              샛별과 함께하는 하루
            </h3>
          </FadeInSection>
          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-purple-600">
                          {useCase.time}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-900 mb-2">
                        {useCase.title}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-slate-500 mb-1">
                            필요한 작업
                          </p>
                          <p className="text-slate-700">{useCase.task}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 mb-1">
                            샛별의 도움
                          </p>
                          <p className="text-slate-700">{useCase.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              지금 바로 시작하세요
            </h3>
            <p className="text-xl text-white/90 mb-8">
              샛별은 대한민국 모든 선생님께 영원히 무료입니다
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-slate-50 font-semibold"
              >
                무료로 시작하기
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold"
              >
                사용 가이드 보기
              </Button>
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
