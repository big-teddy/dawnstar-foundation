import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Mission & Vision | 새벽별 파운데이션',
  description: 'AI 기술로 모든 학생에게 맞춤형 교육 기회를 제공합니다',
};

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission */}
        <section className="mb-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Our Mission</h1>
          <p className="text-3xl text-slate-700 font-medium leading-relaxed mb-8">
            AI 기술로 모든 학생에게 맞춤형 교육 기회를 제공합니다
          </p>
          <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
            <p>
              새벽별 파운데이션은 경제적 배경이나 환경에 관계없이 모든 학생이
              자신만의 속도로 배우고 성장할 수 있는 교육 환경을 만들어갑니다.
            </p>
            <p>
              우리는 AI 기술을 통해 교육의 격차를 줄이고, 각 학생의 잠재력을
              발견하고 키울 수 있도록 지원합니다.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section className="mb-20">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">Our Vision</h2>
          <p className="text-3xl text-slate-700 font-medium leading-relaxed mb-8">
            기술로 교육의 본질을 되찾는다
          </p>
          <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
            <p>우리는 교육이 본래의 목적을 잃어버렸다고 믿습니다.</p>
            <p>
              시험 점수와 성적표가 교육의 전부가 되어버린 세상에서, 아이들은
              배움의 기쁨 대신 경쟁의 무게를 짊어지고 있습니다.
            </p>
            <p>하지만 기술은 다릅니다. 기술은 우리가 교육의 본질로 돌아갈 수 있게 합니다.</p>
            <p>
              모든 학생이 자신의 속도로 배우고, 자신의 방식으로 이해하며,
              자신의 잠재력을 발견할 수 있는 교육.
            </p>
            <p className="text-xl font-semibold text-slate-900">
              그것이 우리가 추구하는 미래입니다.
            </p>
          </div>
        </section>

        {/* Core Beliefs */}
        <section>
          <h2 className="text-4xl font-bold text-slate-900 mb-12">
            핵심 신념
          </h2>
          <div className="space-y-8">
            {[
              {
                title: '교육은 모든 사람의 권리',
                description:
                  '태어난 환경에 관계없이 평등하게 접근할 수 있어야 합니다',
              },
              {
                title: '학생 개개인의 속도와 방식 존중',
                description:
                  '교육은 학생 개개인의 속도와 방식을 존중해야 합니다',
              },
              {
                title: '잠재력을 발견하는 여정',
                description:
                  '교육은 단순한 지식 전달을 넘어, 한 사람의 잠재력을 발견하고 실현할 수 있도록 돕는 여정입니다',
              },
              {
                title: '기술은 교사의 동반자',
                description:
                  '기술은 교사를 대체하는 것이 아니라, 더 나은 교육을 가능하게 하는 동반자입니다',
              },
              {
                title: '환경의 변화가 필요',
                description:
                  '진정한 교육 혁신은 시스템의 변화에서 시작되며, 우리는 모든 학생이 성장할 수 있는 환경을 만들어야 합니다',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {index + 1}. {value.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
