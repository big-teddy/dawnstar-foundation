import { Metadata } from 'next';
import {
  Shield,
  Eye,
  Heart,
  TrendingUp,
  MessageCircle,
  Clock,
  Award,
  Users,
} from 'lucide-react';
import FadeInSection from '@/components/animations/FadeInSection';
import HoverCard from '@/components/animations/HoverCard';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: '샛별 (학부모용) | 새벽별 파운데이션',
  description: '자녀의 학습을 안전하고 효과적으로 지원하는 AI 학습 도구',
};

export default function ParentsPage() {
  const parentFeatures = [
    {
      icon: Eye,
      title: '학습 과정 투명하게 확인',
      description:
        '자녀가 샛별과 나눈 대화 내용을 확인하실 수 있습니다. 어떤 주제를 공부했는지, 어떤 질문을 했는지 투명하게 공유됩니다.',
    },
    {
      icon: TrendingUp,
      title: '학습 진도와 성장 추적',
      description:
        '자녀의 학습 진도, 이해도, 관심 분야를 한눈에 파악하실 수 있습니다. 강점과 보완이 필요한 부분을 데이터로 확인하세요.',
    },
    {
      icon: Shield,
      title: '안전하고 건전한 학습 환경',
      description:
        '학습과 관련 없는 주제는 차단됩니다. 부적절한 내용이 감지되면 즉시 알림을 보내드립니다.',
    },
    {
      icon: MessageCircle,
      title: '자녀와의 대화 소재',
      description:
        '자녀가 관심 있어 하는 주제와 학습 현황을 파악하여 더 깊이 있는 대화를 나누실 수 있습니다.',
    },
  ];

  const parentTools = [
    {
      icon: Heart,
      title: '학습 동기 부여',
      description: '자녀의 작은 성취를 함께 축하하고 격려하세요',
    },
    {
      icon: Clock,
      title: '학습 시간 관리',
      description: '적절한 학습 시간과 휴식 시간을 설정할 수 있습니다',
    },
    {
      icon: Award,
      title: '목표 설정 지원',
      description: '자녀와 함께 학습 목표를 세우고 달성을 응원하세요',
    },
    {
      icon: Users,
      title: '여러 자녀 관리',
      description: '최대 3명의 자녀를 하나의 계정으로 관리할 수 있습니다',
    },
  ];

  const concerns = [
    {
      question: 'AI가 숙제를 대신 해주지 않을까요?',
      answer:
        '아닙니다. 샛별은 답을 직접 알려주지 않습니다. 질문을 통해 자녀가 스스로 생각하고 답을 찾도록 유도합니다. 이 과정은 모두 학부모님께 공유됩니다.',
    },
    {
      question: '개인정보는 안전한가요?',
      answer:
        '네. 자녀의 모든 데이터는 암호화되어 저장되며, 학습 목적 외에는 절대 사용되지 않습니다. 언제든지 데이터를 삭제하실 수 있습니다.',
    },
    {
      question: '부적절한 내용에 노출되지 않을까요?',
      answer:
        '샛별은 학습 주제에만 집중하도록 설계되었습니다. 부적절한 질문이나 내용이 감지되면 즉시 차단하고 학부모님께 알림을 보냅니다.',
    },
    {
      question: '학교 숙제에 도움이 될까요?',
      answer:
        '네. 하지만 대신 해주는 것이 아니라, 이해하고 스스로 풀 수 있도록 단계별로 안내합니다. 이는 실제 학습 효과가 높습니다.',
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <FadeInSection>
          <div className="mb-20 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              자녀의 학습,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                안심하고 맡기세요
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              투명하게 확인 가능한 AI 학습 도구
              <br />
              자녀의 성장을 함께 응원합니다
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="font-semibold">
                자녀 등록하고 시작하기
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold border-2"
              >
                안전 기능 알아보기
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              첫 달 무료 체험 · 언제든 해지 가능
            </p>
          </div>
        </FadeInSection>

        {/* Why Parents Trust */}
        <div className="mb-32">
          <FadeInSection>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 lg:p-12 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 text-center">
                학부모님이 샛별을 선택하는 이유
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-black text-blue-600 mb-2">
                    100%
                  </div>
                  <p className="text-slate-700">투명한 학습 기록</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-blue-600 mb-2">
                    24/7
                  </div>
                  <p className="text-slate-700">언제든 질문 가능</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-blue-600 mb-2">
                    안전
                  </div>
                  <p className="text-slate-700">부적절 내용 차단</p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Main Features */}
          <div className="mb-16">
            <FadeInSection>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 text-center">
                학부모님을 위한 핵심 기능
              </h3>
              <p className="text-lg text-slate-600 mb-12 text-center leading-relaxed">
                자녀의 학습을 투명하게 확인하고 안전하게 지원합니다
              </p>
            </FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {parentFeatures.map((feature, index) => (
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

        {/* Additional Tools */}
        <div className="mb-32">
          <FadeInSection>
            <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              이런 것들도 할 수 있어요
            </h3>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {parentTools.map((tool, index) => (
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

        {/* How it Benefits Your Child */}
        <div className="mb-32">
          <FadeInSection>
            <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              자녀에게 이런 도움을 줍니다
            </h3>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={0}>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📚</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  학습 자신감 향상
                </h4>
                <p className="text-slate-600">
                  모르는 것을 부끄러워하지 않고 자유롭게 질문하며 배웁니다
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  자기주도 학습 능력
                </h4>
                <p className="text-slate-600">
                  스스로 질문하고 답을 찾는 과정에서 학습 능력이 길러집니다
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  깊이 있는 이해
                </h4>
                <p className="text-slate-600">
                  단순 암기가 아닌 개념의 본질을 이해하게 됩니다
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>

        {/* Parent Concerns */}
        <div className="mb-32">
          <FadeInSection>
            <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              학부모님들이 가장 궁금해하시는 것들
            </h3>
          </FadeInSection>
          <div className="space-y-6 max-w-4xl mx-auto">
            {concerns.map((concern, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-white border border-slate-200 rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {concern.question}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {concern.answer}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>

        {/* Safety Features */}
        <div className="mb-32">
          <FadeInSection>
            <div className="bg-slate-900 rounded-3xl p-10 lg:p-12">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                안전을 최우선으로 생각합니다
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-white">
                      실시간 내용 모니터링
                    </strong>
                    <p className="text-white/70">
                      부적절한 내용 감지 시 즉시 차단 및 알림
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-white">학습 주제만 집중</strong>
                    <p className="text-white/70">
                      오락, 게임 등 학습 외 주제는 대화하지 않음
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-white">완전한 대화 기록</strong>
                    <p className="text-white/70">
                      모든 대화 내역을 학부모님께 투명하게 공개
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-white">
                      개인정보 철저히 보호
                    </strong>
                    <p className="text-white/70">
                      GDPR 및 한국 개인정보보호법 완전 준수
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Pricing */}
        <div className="mb-32">
          <FadeInSection>
            <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              합리적인 가격
            </h3>
            <div className="max-w-2xl mx-auto bg-white border-2 border-slate-200 rounded-3xl p-10 text-center">
              <div className="mb-6">
                <div className="text-5xl font-black text-slate-900 mb-2">
                  월 ₩9,900
                </div>
                <p className="text-slate-600">
                  최대 3명 자녀 등록 가능 · 언제든 해지 가능
                </p>
              </div>
              <div className="space-y-3 text-left mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-slate-700">무제한 질문 및 학습</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-slate-700">학습 진도 리포트</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-slate-700">
                    전체 대화 내역 확인 가능
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-slate-700">안전 모니터링 알림</span>
                </div>
              </div>
              <Button size="lg" className="w-full font-semibold">
                첫 달 무료로 시작하기
              </Button>
              <p className="text-sm text-slate-500 mt-4">
                2025년 출시 전 사전 등록 시 특별 혜택 제공
              </p>
            </div>
          </FadeInSection>
        </div>

        {/* CTA */}
        <FadeInSection>
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-10 lg:p-12 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              자녀의 학습 여정을 함께 시작하세요
            </h3>
            <p className="text-xl text-white/90 mb-8">
              안전하고 효과적인 AI 학습 도구, 샛별과 함께라면 안심입니다
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-50 font-semibold"
              >
                지금 시작하기
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold"
              >
                자세히 알아보기
              </Button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
}
