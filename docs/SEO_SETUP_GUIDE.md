# SEO 설정 가이드

이 문서는 새벽별 파운데이션 웹사이트의 Google SEO 최적화를 위한 설정 가이드입니다.

## 1. Google Search Console 설정

### 1.1 사이트 등록
1. [Google Search Console](https://search.google.com/search-console)에 접속
2. "속성 추가" 클릭
3. "URL 접두어" 선택 후 `https://dawnstar.org` 입력
4. 소유권 확인 방법 선택

### 1.2 소유권 확인
**HTML 태그 방법 (권장):**
1. Google에서 제공하는 메타 태그 복사
2. `app/layout.tsx` 파일의 `metadata.verification.google` 값을 업데이트
   ```typescript
   verification: {
     google: 'YOUR_VERIFICATION_CODE_HERE',
   },
   ```
3. 배포 후 "확인" 버튼 클릭

### 1.3 Sitemap 제출
1. Google Search Console > Sitemaps
2. `https://dawnstar.org/sitemap.xml` 입력 후 제출
3. 상태가 "성공"으로 표시되는지 확인

## 2. Google Analytics 설정

### 2.1 계정 생성
1. [Google Analytics](https://analytics.google.com)에 접속
2. "측정 시작" 클릭
3. 계정 및 속성 생성
4. 데이터 스트림 생성 (웹)

### 2.2 측정 ID 설정
1. 측정 ID (G-XXXXXXXXXX) 복사
2. `.env.local` 파일 생성 (또는 Vercel 환경 변수에 추가)
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. Vercel에 배포하는 경우:
   - Vercel Dashboard > Settings > Environment Variables
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` 추가

## 3. Vercel 배포 설정

### 3.1 환경 변수 설정
Vercel Dashboard에서 다음 환경 변수를 설정:
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics 측정 ID

### 3.2 도메인 연결
1. Vercel Dashboard > Domains
2. `dawnstar.org` 도메인 추가
3. DNS 설정에 따라 A/CNAME 레코드 추가

## 4. SEO 체크리스트

### 완료된 항목 ✅
- [x] `sitemap.xml` 동적 생성
- [x] `robots.txt` 최적화
- [x] 메타 태그 최적화 (title, description, keywords)
- [x] Open Graph 태그 추가
- [x] Twitter Card 태그 추가
- [x] 구조화된 데이터 (Schema.org) 추가
- [x] Open Graph 이미지 동적 생성
- [x] Google Analytics 통합
- [x] Canonical URL 설정
- [x] 보안 헤더 설정

### 추가 권장 사항
- [ ] Google Search Console 소유권 확인 완료
- [ ] Sitemap을 Google Search Console에 제출
- [ ] Google Analytics 데이터 수집 확인
- [ ] Core Web Vitals 모니터링
- [ ] 백링크 구축 (교육 관련 사이트, 블로그 포스팅 등)
- [ ] 소셜 미디어 공유 최적화
- [ ] 정기적인 콘텐츠 업데이트

## 5. 주요 SEO 키워드

현재 설정된 주요 키워드:
- AI 교육
- AI 튜터
- 에듀테크
- 비영리 교육
- 교육 평등
- 개인 맞춤 학습
- 한국 교육
- 새벽별
- 교육 불평등 해소
- 온라인 학습

## 6. 성능 모니터링

### Google Search Console
- 검색 성능 리포트 확인
- 색인 생성 상태 모니터링
- Core Web Vitals 확인

### Google Analytics
- 트래픽 소스 분석
- 사용자 행동 분석
- 전환율 모니터링

### 기타 도구
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## 7. 문제 해결

### 검색 결과에 표시되지 않는 경우
1. Google Search Console에서 색인 생성 요청
2. robots.txt가 크롤링을 차단하지 않는지 확인
3. 최소 며칠에서 몇 주 대기 (새 사이트의 경우)

### 메타 태그가 제대로 표시되지 않는 경우
1. [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. [Twitter Card Validator](https://cards-dev.twitter.com/validator)
3. 캐시 새로고침

## 8. 지속적인 개선

- 정기적으로 새로운 콘텐츠 추가
- 블로그 섹션 추가 고려
- 뉴스 및 업데이트 섹션 활성화
- 사용자 후기 및 사례 연구 추가
- 외부 교육 사이트와의 파트너십 및 백링크 구축
