import { Metadata } from 'next';
import { ArrowRight, Heart, Handshake } from 'lucide-react';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Get Involved | 새벽별 파운데이션',
  description: '함께하기',
};

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          Get Involved
        </h1>
        <p className="text-2xl text-slate-600 mb-16">함께하기</p>

        {/* Opening */}
        <div className="max-w-4xl mb-20">
          <p className="text-2xl text-slate-700 font-medium leading-relaxed mb-6">
            새벽별과 함께 교육의 미래를 만들어가세요
          </p>
          <p className="text-xl text-slate-600 leading-relaxed">
            우리는 혼자서는 갈 수 없는 길을 함께 가고자 합니다. 교육의 본질을
            되찾고, 모든 아이가 자신의 잠재력을 발견할 수 있는 세상을 만드는
            일. 이 여정에 여러분을 초대합니다.
          </p>
        </div>

        {/* Support Us Section */}
        <section id="support" className="mb-32">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">후원하기</h2>
            </div>

            <p className="text-2xl text-slate-700 font-medium mb-8">
              여러분의 후원이 평등한 교육을 만듭니다
            </p>

            <div className="prose prose-lg max-w-none text-slate-600 mb-8 space-y-4">
              <p>
                새벽별 파운데이션은 투명하게 운영되는 비영리 공익법인입니다.
              </p>
              <p className="font-semibold text-slate-900">
                여러분의 후원은 다음과 같이 사용됩니다:
              </p>
              <ul className="space-y-2">
                <li>
                  경제적 어려움이 있는 학생들을 위한 무료 학습 도구 제공
                </li>
                <li>AI 교육 기술 연구 및 개발</li>
                <li>교사 지원 프로그램 운영</li>
                <li>교육 격차 해소를 위한 정책 연구</li>
              </ul>
              <p className="text-sm text-slate-500 italic">
                모든 후원금 사용 내역은 투명하게 공개됩니다.
                <br />
                기부금 세액 공제 혜택을 받을 수 있습니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <p className="text-lg text-slate-700 font-semibold mb-4">
                준비 중입니다
              </p>
              <p className="text-slate-600 mb-6">
                후원 시스템을 준비하고 있습니다. 곧 만나요!
              </p>
              <Button
                className="bg-slate-900 text-white hover:bg-slate-800"
                disabled
              >
                이메일로 알림 받기 (곧 출시)
              </Button>
            </div>
          </div>
        </section>

        {/* Partner With Us Section */}
        <section id="partner" className="mb-32">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">파트너십</h2>
            </div>

            <p className="text-2xl text-slate-700 font-medium mb-12">
              함께 교육의 미래를 만들어갈 파트너를 찾습니다
            </p>

            <div className="space-y-12">
              {/* Partner Types */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-slate-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    교육 전문가 & 연구자
                  </h3>
                  <p className="text-slate-600 mb-6">
                    교육학, 교육공학, 인지심리학, AI 등 다양한 분야의 전문가와
                    함께 연구하고 배우고 싶습니다.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li>• 공동 연구 프로젝트</li>
                    <li>• 제품 개발 자문</li>
                    <li>• 교육 효과성 검증</li>
                    <li>• 논문 및 연구 결과 공유</li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    교육청 & 학교
                  </h3>
                  <p className="text-slate-600 mb-6">
                    현장의 목소리를 듣고, 실제로 도움이 되는 솔루션을 만들고
                    싶습니다.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li>• 파일럿 프로그램 운영</li>
                    <li>• 교사 연수 협력</li>
                    <li>• 학생 학습 지원</li>
                    <li>• 피드백 기반 제품 개선</li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    기업 후원
                  </h3>
                  <p className="text-slate-600 mb-6">
                    교육 평등이라는 가치에 공감하는 기업과 함께 지속 가능한
                    변화를 만들어가고 싶습니다.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li>• CSR 프로그램 협력</li>
                    <li>• 재정 후원</li>
                    <li>• 기술 인프라 지원</li>
                    <li>• 임직원 봉사 프로그램</li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    기술 파트너
                  </h3>
                  <p className="text-slate-600 mb-6">
                    AI, 교육 플랫폼, 데이터 분석 등 기술 협력을 통해 더 나은
                    제품을 만들고 싶습니다.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li>• 기술 인프라 협력</li>
                    <li>• 오픈소스 프로젝트 공동 개발</li>
                    <li>• 기술 자문 및 멘토링</li>
                    <li>• 클라우드 및 서버 지원</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-8">
                <p className="text-lg text-slate-700 font-semibold mb-4">
                  준비 중입니다
                </p>
                <p className="text-slate-600 mb-6">
                  파트너십 문의 시스템을 준비하고 있습니다. 곧 만나요!
                </p>
                <Button
                  className="bg-slate-900 text-white hover:bg-slate-800"
                  disabled
                >
                  이메일로 알림 받기 (곧 출시)
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Note */}
        <div className="text-center">
          <p className="text-lg text-slate-600">
            모든 후원금 사용 내역은 투명하게 공개됩니다
          </p>
        </div>
      </div>
    </main>
  );
}
