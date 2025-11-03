# SEO 다음 단계 작업 가이드

이 문서는 기본 SEO 설정 완료 후 추가로 진행할 수 있는 작업들을 정리한 것입니다.

## ✅ 완료된 기본 SEO 작업

- [x] sitemap.xml 동적 생성
- [x] robots.txt 최적화
- [x] 메타 태그 최적화 (모든 페이지)
- [x] Open Graph 이미지 동적 생성
- [x] Schema.org 구조화된 데이터
- [x] Google Analytics 통합 준비
- [x] 보안 헤더 설정
- [x] 올바른 도메인으로 수정 (dawnstarfoundation.org)

---

## 🚀 배포 직후 필수 작업

### 1. Google Search Console 설정 (최우선)

#### 단계:
1. **도메인 등록**
   - https://search.google.com/search-console 접속
   - "속성 추가" 클릭
   - `https://dawnstarfoundation.org` 입력

2. **소유권 확인**
   - HTML 태그 방법 선택
   - 제공된 verification code 복사
   - `app/layout.tsx` 파일 수정:
   ```typescript
   verification: {
     google: 'YOUR_ACTUAL_CODE_HERE', // 여기에 코드 입력
   },
   ```
   - 변경사항 커밋 & 푸시
   - 배포 완료 후 "확인" 클릭

3. **Sitemap 제출**
   - Google Search Console > Sitemaps
   - `https://dawnstarfoundation.org/sitemap.xml` 입력
   - "제출" 클릭
   - 상태가 "성공"이 될 때까지 대기

### 2. Google Analytics 설정

#### 단계:
1. **계정 생성**
   - https://analytics.google.com 접속
   - "측정 시작" 클릭
   - 속성 이름: "새벽별 파운데이션"

2. **데이터 스트림 생성**
   - 웹 스트림 선택
   - URL: `https://dawnstarfoundation.org`
   - 측정 ID 복사 (G-XXXXXXXXXX)

3. **환경 변수 설정**
   - Vercel Dashboard > Settings > Environment Variables
   - 키: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - 값: `G-XXXXXXXXXX`
   - Production, Preview, Development 모두 체크
   - "Save" 클릭
   - 프로젝트 재배포

### 3. Vercel 도메인 설정 확인

- [ ] Vercel Dashboard > Domains에서 dawnstarfoundation.org 상태 확인
- [ ] SSL 인증서 발급 완료 확인
- [ ] HTTPS 리다이렉트 작동 확인
- [ ] www.dawnstarfoundation.org → dawnstarfoundation.org 리다이렉트 설정

---

## 📈 추가 SEO 개선 작업 (우선순위 순)

### 우선순위 1: 콘텐츠 최적화

#### 1.1 각 페이지별 고유 메타데이터 추가
현재 누락된 페이지들:
- [ ] `/about/story` - 우리의 이야기 페이지
- [ ] `/about/manifesto` - 선언문 페이지
- [ ] `/about/commitments` - 약속 페이지
- [ ] `/work/students` - 학생용 페이지
- [ ] `/work/teachers` - 교사용 페이지
- [ ] `/work/parents` - 학부모용 페이지

각 페이지에 `layout.tsx` 파일을 만들어 메타데이터 추가:
```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '페이지 제목',
  description: '페이지 설명 (150-160자)',
  keywords: ['관련', '키워드', '배열'],
  openGraph: {
    title: 'OG 제목',
    description: 'OG 설명',
    url: 'https://dawnstarfoundation.org/페이지경로',
  },
};
```

#### 1.2 블로그/뉴스 섹션 추가
- [ ] `/blog` 또는 `/news` 페이지 생성
- [ ] 정기적인 콘텐츠 발행 계획 수립
- [ ] 교육 관련 키워드를 타겟팅한 포스트 작성
- [ ] 각 포스트에 적절한 메타데이터 추가

#### 1.3 FAQ 페이지 추가
- [ ] `/faq` 페이지 생성
- [ ] Schema.org FAQPage 마크업 추가
- [ ] 자주 묻는 질문 10-15개 작성

### 우선순위 2: 기술적 SEO 개선

#### 2.1 이미지 최적화
- [ ] 모든 이미지에 alt 텍스트 추가
- [ ] next/image 컴포넌트 사용 확인
- [ ] WebP 포맷 사용
- [ ] 적절한 이미지 크기 설정

#### 2.2 페이지 속도 최적화
- [ ] Lighthouse 테스트 실행
- [ ] Core Web Vitals 개선
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1
- [ ] 불필요한 JavaScript 제거
- [ ] 폰트 최적화 (font-display: swap)

#### 2.3 모바일 최적화
- [ ] 모바일 반응형 디자인 테스트
- [ ] Google Mobile-Friendly Test 통과
- [ ] 터치 타겟 크기 확인 (최소 48x48px)

### 우선순위 3: 백링크 구축

#### 3.1 교육 관련 디렉토리 등록
- [ ] 한국 교육 관련 웹사이트 디렉토리
- [ ] 비영리 단체 디렉토리
- [ ] 에듀테크 관련 플랫폼

#### 3.2 소셜 미디어 프로필 생성
- [ ] 링크드인 페이지
- [ ] 페이스북 페이지
- [ ] 트위터/X 계정
- [ ] 인스타그램 계정
- [ ] 유튜브 채널

각 프로필에 웹사이트 링크 추가

#### 3.3 파트너십 및 미디어 노출
- [ ] 교육청/학교와의 협력 발표
- [ ] 교육 관련 미디어 기고
- [ ] 컨퍼런스/세미나 참가
- [ ] 프레스 릴리스 배포

### 우선순위 4: 지역 SEO (선택)

#### 4.1 Google 비즈니스 프로필
- [ ] Google Business Profile 생성
- [ ] 사무실 주소 등록
- [ ] 업무 시간 설정
- [ ] 사진 업로드

#### 4.2 지역 키워드 최적화
- [ ] "서울 AI 교육", "한국 에듀테크" 등 지역 키워드 추가
- [ ] 지역 관련 콘텐츠 작성

### 우선순위 5: 고급 Schema.org 마크업

#### 5.1 추가 스키마 타입
- [ ] BreadcrumbList (빵 부스러기 네비게이션)
- [ ] FAQPage (FAQ 페이지)
- [ ] Article (블로그 포스트)
- [ ] Event (이벤트/세미나)
- [ ] Review (사용자 후기)

예시 코드:
```typescript
// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "홈",
    "item": "https://dawnstarfoundation.org"
  }, {
    "@type": "ListItem",
    "position": 2,
    "name": "우리의 활동",
    "item": "https://dawnstarfoundation.org/work"
  }]
};
```

---

## 📊 성능 모니터링

### 주간 체크리스트
- [ ] Google Search Console에서 검색 성능 확인
- [ ] Google Analytics에서 트래픽 분석
- [ ] 새로운 페이지가 색인되었는지 확인
- [ ] 크롤링 오류 확인 및 수정

### 월간 체크리스트
- [ ] 키워드 순위 변화 추적
- [ ] 경쟁사 분석
- [ ] 백링크 프로필 확인
- [ ] Core Web Vitals 지표 확인
- [ ] 콘텐츠 업데이트 계획 수립

---

## 🛠️ 유용한 도구들

### SEO 분석 도구
- **Google Search Console**: 검색 성능 모니터링
- **Google Analytics**: 트래픽 분석
- **PageSpeed Insights**: 페이지 속도 측정
- **Google Mobile-Friendly Test**: 모바일 최적화 확인
- **Rich Results Test**: 구조화된 데이터 검증

### 키워드 리서치 도구
- **Google Keyword Planner**: 키워드 검색량 확인
- **Answer the Public**: 질문 형식 키워드 찾기
- **Ubersuggest**: 키워드 아이디어

### 기술적 SEO 도구
- **Screaming Frog**: 사이트 크롤링
- **GTmetrix**: 성능 분석
- **Lighthouse**: Chrome DevTools 내장 도구

---

## 📝 콘텐츠 전략

### 타겟 키워드 (예시)
1. **핵심 키워드**
   - AI 교육
   - AI 튜터
   - 에듀테크
   - 맞춤형 학습

2. **롱테일 키워드**
   - 초등학생 AI 학습
   - 무료 AI 튜터 한국
   - 온라인 개인 맞춤 학습
   - 교육 격차 해소 방법

3. **지역 키워드**
   - 한국 AI 교육 플랫폼
   - 서울 에듀테크 스타트업

### 콘텐츠 아이디어
1. **교육 가이드**
   - "AI 튜터를 활용한 효과적인 학습 방법"
   - "학부모를 위한 AI 교육 가이드"
   - "교사를 위한 AI 활용 수업 설계"

2. **사례 연구**
   - "샛별로 수학 성적이 향상된 학생 이야기"
   - "AI 튜터로 시간을 절약한 교사의 경험"

3. **업계 인사이트**
   - "AI 시대의 교육 트렌드"
   - "한국 에듀테크 산업 현황"

---

## 🎯 3개월 로드맵

### 첫 달 (즉시 시작)
- [x] 기본 SEO 설정 완료
- [ ] Google Search Console 설정
- [ ] Google Analytics 설정
- [ ] 누락된 페이지 메타데이터 추가
- [ ] 이미지 alt 텍스트 추가

### 둘째 달
- [ ] 블로그 섹션 추가 및 첫 포스트 3-5개 발행
- [ ] FAQ 페이지 생성
- [ ] 소셜 미디어 프로필 생성
- [ ] 교육 디렉토리 등록
- [ ] Core Web Vitals 개선

### 셋째 달
- [ ] 고급 Schema.org 마크업 추가
- [ ] 백링크 구축 활동 시작
- [ ] 정기적인 블로그 발행 (주 1회)
- [ ] 성능 최적화 지속
- [ ] SEO 성과 분석 및 전략 조정

---

## ❓ FAQ

### Q: 검색 결과에 나타나기까지 얼마나 걸리나요?
**A:** 새 사이트의 경우 Google에 색인되기까지 며칠에서 몇 주가 걸릴 수 있습니다. Google Search Console에 sitemap을 제출하면 더 빨라집니다.

### Q: 순위를 올리는 가장 빠른 방법은?
**A:** 빠른 방법은 없습니다. 양질의 콘텐츠 제작, 기술적 최적화, 백링크 구축을 꾸준히 해야 합니다.

### Q: 키워드를 얼마나 자주 사용해야 하나요?
**A:** 자연스럽게 사용하세요. 키워드 스터핑(과도한 사용)은 오히려 역효과입니다. 사용자 경험을 최우선으로 하세요.

### Q: 메타 설명은 순위에 영향을 주나요?
**A:** 직접적인 영향은 없지만, 좋은 메타 설명은 클릭률(CTR)을 높여 간접적으로 순위에 도움이 됩니다.

---

**마지막 업데이트**: 2025-11-03
**작성자**: Claude Code
**참고 문서**: docs/SEO_SETUP_GUIDE.md
