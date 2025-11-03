export default function StructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '새벽별 파운데이션',
    alternateName: 'DawnStar Foundation',
    url: 'https://dawnstar.org',
    logo: 'https://dawnstar.org/logo.png',
    description:
      '교육 불평등을 해소하고, 모든 학생에게 세계 최고 수준의 개인 맞춤형 학습 경험을 제공하는 비영리 교육 기술 단체',
    foundingDate: '2024',
    sameAs: [
      // 소셜 미디어 링크가 있다면 여기에 추가
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'Korean',
    },
  };

  const nonprofitData = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: '새벽별 파운데이션',
    url: 'https://dawnstar.org',
    logo: 'https://dawnstar.org/logo.png',
    description:
      '교육 불평등을 해소하고 AI 기술로 모든 학생에게 맞춤형 교육 기회를 제공하는 비영리 단체',
    areaServed: 'KR',
    slogan: 'AI 기술로 모든 학생에게 맞춤형 교육 기회를',
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '새벽별 파운데이션',
    url: 'https://dawnstar.org',
    description:
      '교육 불평등을 해소하고 모든 학생에게 AI 기반 맞춤형 학습을 제공하는 비영리 교육 기술 단체',
    inLanguage: 'ko-KR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://dawnstar.org/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nonprofitData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}
