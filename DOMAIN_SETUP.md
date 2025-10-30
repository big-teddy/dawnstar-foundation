# 도메인 연결 가이드

## Vercel에 도메인 연결하기

### 1️⃣ Vercel Dashboard 설정

1. https://vercel.com/dashboard 접속
2. `dawnstar-foundation` 프로젝트 선택
3. **Settings** → **Domains** 클릭
4. 구매한 도메인 입력 후 **Add** 클릭

### 2️⃣ DNS 설정

Vercel이 제공하는 정확한 값을 사용하세요. 일반적으로:

#### 루트 도메인 (예: dawnstar.org)

```
Type: A
Name: @ (또는 비워두기)
Value: 76.76.21.21
```

#### www 서브도메인 (예: www.dawnstar.org)

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 도메인 제공업체별 가이드

### 🇰🇷 국내 서비스

#### Gabia (가비아)
1. [My가비아](https://my.gabia.com) 로그인
2. **서비스 관리** → **DNS 관리**
3. 해당 도메인 선택
4. **레코드 추가** 클릭
5. 위의 DNS 설정값 입력

#### Cafe24
1. [도메인 관리](https://domain.cafe24.com) 로그인
2. **나의 서비스 관리** → 도메인 선택
3. **DNS 설정** 클릭
4. **레코드 추가**로 설정값 입력

#### 후이즈
1. [후이즈](https://www.whois.co.kr) 로그인
2. **도메인 관리** → **네임서버 설정**
3. DNS 레코드 추가

---

### 🌍 해외 서비스

#### GoDaddy
1. [GoDaddy DNS Management](https://dcc.godaddy.com/manage/dns) 로그인
2. 도메인 선택
3. **DNS** → **Manage DNS**
4. **Add** 버튼으로 레코드 추가

#### Namecheap
1. [Domain List](https://ap.www.namecheap.com/domains/list) 로그인
2. **Manage** 클릭
3. **Advanced DNS** 탭
4. **Add New Record** 클릭

#### Cloudflare
1. [Cloudflare Dashboard](https://dash.cloudflare.com) 로그인
2. 도메인 선택
3. **DNS** → **Records**
4. **Add record** 클릭

---

## ⏱️ 전파 시간

DNS 변경사항이 전파되는 데 걸리는 시간:
- **빠르면**: 10-30분
- **평균**: 1-2시간
- **최대**: 24-48시간

## ✅ 확인 방법

### 1. DNS 전파 확인
https://dnschecker.org 에서 도메인 입력 후 확인

### 2. 터미널에서 확인
```bash
# A 레코드 확인
dig yourdomain.com

# CNAME 레코드 확인
dig www.yourdomain.com
```

### 3. 브라우저 테스트
- http://yourdomain.com
- http://www.yourdomain.com
- https://yourdomain.com (SSL 자동 발급)

---

## 🔒 SSL 인증서

Vercel이 자동으로 무료 SSL 인증서(Let's Encrypt)를 발급합니다:
- 도메인 연결 후 자동 발급 (5-10분)
- HTTPS 자동 리다이렉트
- 자동 갱신

---

## ❗ 문제 해결

### DNS가 전파되지 않는 경우
1. DNS 레코드 값 재확인
2. TTL 값을 낮게 설정 (300초)
3. 기존 DNS 캐시 삭제
   ```bash
   # Mac
   sudo dscacheutil -flushcache

   # Windows
   ipconfig /flushdns
   ```

### SSL 인증서 오류
1. Vercel Dashboard에서 도메인 상태 확인
2. **Domains** → 도메인 선택 → **Renew Certificate**

### 여러 도메인 사용
- 기본 도메인 설정 가능
- 자동 리다이렉트 설정 가능
- 예: www → 루트 도메인으로 자동 리다이렉트

---

## 📞 지원

도움이 필요하시면:
1. Vercel 문서: https://vercel.com/docs/concepts/projects/domains
2. Vercel Support: support@vercel.com
3. GitHub Issues: https://github.com/big-teddy/dawnstar-foundation/issues

---

**마지막 업데이트**: 2025-10-30
