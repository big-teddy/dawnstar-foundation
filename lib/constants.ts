export const SITE_CONFIG = {
  name: '새벽별 파운데이션',
  nameEn: 'DawnStar Foundation',
  description:
    'AI 기술로 모든 학생에게 맞춤형 교육 기회를 제공하는 비영리 교육 기술 단체입니다.',
  mission: '모든 학생이 최고의 교육을 받을 수 있는 세상',
  url: 'https://dawnstar.org',
  email: 'hello@dawnstar.org',
  phone: '02-1234-5678',
  address: '서울특별시 강남구 테헤란로 123',
  social: {
    twitter: 'https://twitter.com/dawnstar',
    github: 'https://github.com/dawnstar',
    linkedin: 'https://linkedin.com/company/dawnstar',
  },
} as const;

export const NAVIGATION_ITEMS = [
  { label: '미션', href: '#mission' },
  { label: '제품', href: '#product' },
  { label: '임팩트', href: '#impact' },
  { label: '파트너십', href: '#partners' },
  { label: '후원', href: '#support' },
] as const;

export const STATS = [
  {
    value: '10K+',
    label: '베타 사용자',
    color: 'from-blue-500 to-blue-600',
  },
  {
    value: '95%',
    label: '만족도',
    color: 'from-purple-500 to-purple-600',
  },
  {
    value: '500+',
    label: '협력 학교',
    color: 'from-green-500 to-green-600',
  },
  {
    value: '24/7',
    label: '학습 지원',
    color: 'from-pink-500 to-pink-600',
  },
] as const;

export const PRICING_PLANS = [
  {
    name: '무료 플랜',
    price: '₩0',
    period: undefined,
    description: '평생 무료',
    features: [
      '기본 AI 튜터 이용',
      '일일 10회 질문',
      '모든 교과 커버',
    ],
    popular: false,
  },
  {
    name: '프리미엄',
    price: '₩19,900',
    period: '/월',
    description: '가장 인기',
    features: [
      '무제한 질문',
      '고급 AI 분석',
      '개인 학습 로드맵',
      '학부모 리포트',
    ],
    popular: true,
  },
  {
    name: '학교/기관',
    price: '문의',
    period: undefined,
    description: '',
    features: [
      '관리자 대시보드',
      '학급 관리 기능',
      '진도 분석 리포트',
      '전담 지원팀',
    ],
    popular: false,
  },
] as const;

export const TESTIMONIALS = [
  {
    content:
      '수학을 포기했었는데 새벽별 AI 튜터 덕분에 다시 흥미를 찾았어요. 제 속도에 맞춰 설명해주니까 이해가 잘 돼요!',
    author: '김○○',
    role: '중학교 2학년',
    rating: 5,
    color: 'bg-blue-500',
  },
  {
    content:
      '아이가 언제든 질문할 수 있다는 게 가장 좋아요. 학원에서는 부끄러워서 못 물어봤던 것들도 편하게 물어봐요.',
    author: '이○○ 학부모',
    role: '초등학교 5학년 자녀',
    rating: 5,
    color: 'bg-purple-500',
  },
  {
    content:
      '학생들의 이해도를 실시간으로 파악할 수 있어 수업 준비에 큰 도움이 됩니다. 교육 격차 해소에 실질적으로 기여하고 있어요.',
    author: '박○○ 선생님',
    role: '고등학교 수학교사',
    rating: 5,
    color: 'bg-green-500',
  },
] as const;

export const BLOG_POSTS = [
  {
    date: '2025.10.15',
    title: '베타 서비스 10,000명 돌파 - 사용자들의 이야기',
    excerpt:
      '출시 3개월 만에 베타 사용자 1만 명을 돌파했습니다. 학생과 학부모, 교사들의 생생한 후기를 들어보세요.',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    date: '2025.10.10',
    title: '서울시교육청과 MOU 체결 - 공교육 혁신 협력',
    excerpt:
      '서울시 소재 50개 학교에 새벽별 AI 튜터를 시범 도입합니다. 공교육과 에듀테크의 만남.',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    date: '2025.10.05',
    title: 'AI 시대, 교육은 어떻게 변할까? - 파운더 인터뷰',
    excerpt:
      '새벽별 파운데이션 대표가 생각하는 AI와 교육의 미래, 그리고 우리가 나아갈 방향.',
    gradient: 'from-green-500 to-green-600',
  },
] as const;
