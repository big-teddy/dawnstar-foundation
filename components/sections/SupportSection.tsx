import ScrollReveal from '../animations/ScrollReveal';
import Button from '../ui/Button';

export default function SupportSection() {
  const donationOptions = [
    {
      amount: '₩10,000',
      description: '1명의 학생에게 한 달간 무료 프리미엄 제공',
      popular: false,
    },
    {
      amount: '₩50,000',
      description: '5명의 학생에게 한 달간 무료 프리미엄 제공',
      popular: true,
    },
    {
      amount: '₩100,000',
      description: '한 학급 전체에게 한 달간 무료 프리미엄 제공',
      popular: false,
    },
  ];

  return (
    <section id="support" className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              교육 평등의 꿈에 동참해주세요
            </h2>
            <p className="text-lg sm:text-xl text-blue-100">
              여러분의 후원으로 더 많은 학생들이 양질의 교육을 받을 수 있습니다
            </p>
          </div>
        </ScrollReveal>

        {/* Donation Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {donationOptions.map((option, index) => (
            <ScrollReveal key={option.amount} delay={index * 0.2}>
              <div
                className={`bg-white/10 backdrop-blur-md border ${
                  option.popular ? 'border-yellow-300 border-2' : 'border-white/20'
                } rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                <p className="text-3xl font-bold text-white mb-2">
                  {option.amount}
                </p>
                <p className="text-blue-100 text-sm">{option.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary">
              일회 후원하기
            </Button>
            <Button size="lg" variant="outline">
              정기 후원하기
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-center text-blue-100 text-sm">
            새벽별 파운데이션은 비영리 공익법인으로 기부금 세액 공제 혜택을 받을 수
            있습니다
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
