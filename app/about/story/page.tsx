import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story | 새벽별 파운데이션',
  description: '우리는 왜 시작했나요',
};

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Our Story</h1>
        <p className="text-2xl text-slate-600 mb-16">우리는 왜 시작했나요</p>

        <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-12">
          <div className="space-y-6">
            <p className="text-xl text-slate-700 leading-relaxed italic">
              모든 위대한 여정은 작은 질문에서 시작됩니다.
            </p>
            <p className="text-xl text-slate-700 leading-relaxed italic">
              새벽별 파운데이션의 시작도 그랬습니다.
            </p>
            <p className="text-2xl text-slate-900 font-medium leading-relaxed">
              "왜 어떤 아이들은 최고의 교육을 받고,<br />
              어떤 아이들은 그 기회조차 갖지 못할까?"
            </p>
            <p>
              이 질문은 단순한 호기심이 아니었습니다. 이것은 우리 사회의 가장
              근본적인 불평등 중 하나이며, 수많은 아이들의 미래가 걸린
              문제였습니다.
            </p>
          </div>

          <div className="space-y-6 pt-8">
            <h2 className="text-3xl font-bold text-slate-900">문제를 마주하다</h2>
            <p>
              한국의 사교육비는 연간 26조 원을 넘어섭니다. 어떤 가정은 자녀 한
              명당 월 수백만 원을 사교육에 쓰고, 어떤 가정은 교과서 한 권 사기도
              버겁습니다.
            </p>
            <p>
              코로나19는 이 격차를 더욱 벌려놓았습니다. 디지털 기기가 있는
              학생과 없는 학생, 안정적인 인터넷이 있는 가정과 없는 가정 사이의
              학습 격차는 회복하기 어려운 수준으로 커졌습니다.
            </p>
            <p>
              그리고 이제 AI 시대가 시작되었습니다. 미국에서는 Khanmigo 같은 AI
              튜터가 학생들의 학습을 혁신하고 있지만, 한국의 학생들은 언어와
              교육과정의 차이로 인해 이러한 혁신적 도구에 접근조차 할 수
              없습니다.
            </p>
          </div>

          <div className="space-y-6 pt-8">
            <h2 className="text-3xl font-bold text-slate-900">
              가능성을 발견하다
            </h2>
            <p>하지만 우리는 문제만 본 것이 아니라 가능성도 보았습니다.</p>
            <p>
              기술은 교육의 격차를 줄일 수 있는 강력한 도구입니다. 적절히
              설계되고 공정하게 배분된다면, AI는 모든 학생에게 맞춤형 학습
              기회를 제공할 수 있습니다.
            </p>
            <p>
              학생 천 명이 있으면 천 가지의 학습 방식이 있습니다. 한 교실에
              30명의 학생이 있을 때, 한 명의 교사가 모든 학생을 완벽하게
              이해하고 지원하기는 불가능합니다.
            </p>
            <p>
              하지만 기술은 가능합니다. 각 학생의 이해도를 실시간으로 파악하고,
              적절한 수준의 문제와 설명을 제공하며, 교사가 더 의미 있는
              상호작용에 집중할 수 있도록 돕는 것.
            </p>
          </div>

          <div className="space-y-6 pt-8">
            <h2 className="text-3xl font-bold text-slate-900">
              새벽별이 탄생하다
            </h2>
            <p>2025년, 우리는 새벽별 파운데이션을 설립했습니다.</p>
            <p>
              새벽별은 가장 어두운 밤에도 길을 밝히는 별입니다. 우리는 교육의
              어둠 속에서 희망의 빛이 되고자 합니다.
            </p>
            <p>
              우리의 첫 프로젝트는 '샛별'입니다. 한국 학생과 교사를 위해
              특별히 설계된 AI 학습 플랫폼입니다.
            </p>
            <p>
              하지만 이것은 시작일 뿐입니다. 우리의 진짜 목표는 단순히 제품을
              만드는 것이 아니라, 교육 생태계 전체를 바꾸는 것입니다.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 my-12 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">
              함께 만들어가는 미래
            </h2>
            <p className="text-slate-700">
              새벽별 파운데이션은 혼자 가는 길이 아닙니다.
            </p>
            <p className="text-slate-700">
              우리는 현장의 교사들과 함께, 배움에 목마른 학생들과 함께, 교육의
              가치를 믿는 모든 이들과 함께 이 여정을 만들어가고 있습니다.
            </p>
            <p className="text-slate-700">
              아직 가야 할 길이 멉니다. 하지만 우리는 확신합니다.
            </p>
            <p className="text-slate-900 font-semibold text-lg">
              기술로 교육의 본질을 되찾을 수 있다는 것.
              <br />
              모든 아이의 잠재력이 빛나는 세상을 만들 수 있다는 것.
            </p>
          </div>

          <p className="text-center text-xl text-slate-700 italic pt-8">
            이것이 우리의 이야기이고, 우리가 여러분을 초대하는 이유입니다.
            <br />
            함께 만들어갈 내일은 오늘보다 밝을 것입니다.
          </p>
        </div>
      </div>
    </main>
  );
}
