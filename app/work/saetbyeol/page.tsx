import { Metadata } from 'next';
import { BookOpen, MessageSquare, Sparkles, Zap } from 'lucide-react';
import FadeInSection from '@/components/animations/FadeInSection';
import HoverCard from '@/components/animations/HoverCard';

export const metadata: Metadata = {
  title: '샛별 (AI Tutor) | 새벽별 파운데이션',
  description: '한국 교육 환경에 최적화된 AI 기반 맞춤형 학습 플랫폼',
};

export default function SaetbyeolPage() {
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

  const teacherFeatures = [
    {
      title: '생활기록부 작성 지원',
      description:
        '세부능력특기사항(세특) 초안을 생성하고, 선생님이 검토하고 다듬을 수 있게 합니다',
    },
    {
      title: '평가 및 피드백',
      description:
        '서술형 평가 채점, 학생별 맞춤 피드백 작성을 도와 시간을 절약합니다',
    },
    {
      title: '수업 설계',
      description:
        '교육과정에 맞춘 수업 계획과 학습지를 빠르게 제작할 수 있습니다',
    },
    {
      title: '학생 진단',
      description:
        '학급 전체 학생의 이해도를 한눈에 파악하고, 도움이 필요한 학생을 빠르게 찾습니다',
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <div className="mb-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            샛별 (Saetbyeol)
          </h1>
          <p className="text-2xl text-slate-600 mb-8">
            한국 교육 환경에 최적화된 AI 기반 맞춤형 학습 플랫폼
          </p>
          <div className="prose prose-lg max-w-none text-slate-600">
            <p>
              샛별은 한국 교육 현장의 실제 니즈를 반영하여 처음부터 설계된
              AI 학습 도구입니다. 단순히 답을 알려주는 것이 아니라,
              학생이 스스로 생각하고 문제를 해결할 수 있도록 돕습니다.
            </p>
          </div>
        </div>

        {/* What We Do - Overview */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">
            우리가 만들고 있는 것
          </h2>
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-12">
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              새벽별 파운데이션은 기술을 통해 교육 평등을 실현합니다. 우리의
              첫 번째 프로젝트는 '샛별(Saetbyeol)'입니다.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              샛별은 학생과 교사 모두를 위한 AI 학습 플랫폼으로, 한국
              교육과정에 완벽하게 최적화되어 있습니다. 우리는 기술이 교육의
              격차를 줄이고, 모든 학생이 자신의 잠재력을 발견할 수 있도록
              돕는다고 믿습니다.
            </p>
          </div>
        </div>

        {/* For Students */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            학생에게는 개인 맞춤형 튜터입니다
          </h3>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            샛별은 각 학생의 학습 속도와 이해도에 맞춰 최적의 학습 경험을
            제공합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studentFeatures.map((feature, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <HoverCard className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-shadow h-full">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
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

        {/* For Teachers */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            선생님에게는 더 나은 수업을 만드는 조력자입니다
          </h3>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            한국 선생님들이 가장 힘들어하는 부분을 돕습니다. AI는 교사를
            대체하는 것이 아니라, 교사가 더 나은 교육을 제공할 수 있도록 돕는
            동반자입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teacherFeatures.map((feature, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <HoverCard className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-shadow h-full">
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

        {/* Korean Optimization */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-slate-900 mb-12">
            한국 교육 환경에 맞춘 설계
          </h3>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span className="text-lg text-slate-700">
                  한국 교육과정 완벽 반영
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span className="text-lg text-slate-700">
                  생활기록부 작성 가이드라인 준수
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span className="text-lg text-slate-700">
                  수능과 내신 대비 학습 지원
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span className="text-lg text-slate-700">
                  한국어 자연어 처리 최적화
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span className="text-lg text-slate-700">
                  학생 데이터 보호 최우선
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Status */}
        <div className="bg-slate-900 text-white rounded-3xl p-12 text-center mb-32">
          <h3 className="text-3xl font-bold mb-4">현재 개발 상태</h3>
          <p className="text-xl text-white/90">
            샛별은 현재 개발 중이며, <strong>2025년 중 첫 베타 버전</strong>을
            선보일 예정입니다.
          </p>
        </div>

        {/* Future Plans */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-12">
            새벽별 파운데이션의 향후 계획
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                Research & Development
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>• AI 교육 효과성 연구</li>
                <li>• 학습 데이터 분석 방법론 개발</li>
                <li>• 교육 격차 해소 전략 수립</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                Community Building
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>• 교사 커뮤니티 네트워크</li>
                <li>• 학생 학습 공동체</li>
                <li>• 학부모 교육 지원</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                Policy Advocacy
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>• 교육 기술 정책 제안</li>
                <li>• 공교육과 에듀테크 협력 모델</li>
                <li>• 데이터 프라이버시 가이드라인</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
