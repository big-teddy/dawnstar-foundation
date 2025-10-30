# 가비아 도메인 → Vercel 연결 가이드

## 📋 준비사항
- 가비아에서 구매한 도메인
- Vercel 프로젝트 (dawnstar-foundation)
- 가비아 계정 로그인 정보

---

## 🚀 단계별 설정 방법

### 1️⃣ Vercel에서 도메인 추가

1. **Vercel 대시보드**: https://vercel.com/dashboard
2. **프로젝트 선택**: `dawnstar-foundation` 클릭
3. **Settings** → **Domains** 이동
4. 도메인 입력 후 **Add** 클릭
5. **DNS 설정값 확인** (다음 단계에서 사용)

---

### 2️⃣ 가비아 DNS 설정

#### A. 가비아 로그인 및 DNS 관리 페이지 이동

1. **My가비아 접속**: https://my.gabia.com
2. 로그인
3. 상단 메뉴에서 **서비스 관리** 클릭
4. **DNS 관리** 또는 **도메인 관리** 클릭
5. 연결할 도메인 선택 후 **관리** 버튼 클릭

#### B. DNS 레코드 설정

##### 방법 1: 호스트 IP 설정 (권장)

1. **DNS 레코드 설정** 또는 **호스트 IP 관리** 클릭
2. 기존 레코드가 있다면 삭제 (또는 수정)
3. **레코드 추가** 버튼 클릭

**루트 도메인 (@ 레코드) 설정:**
```
타입: A
호스트: @ (또는 비워두기)
값/IP 주소: 76.76.21.21
TTL: 3600 (또는 기본값)
```

**www 서브도메인 설정:**
```
타입: CNAME
호스트: www
값/IP 주소: cname.vercel-dns.com
TTL: 3600 (또는 기본값)
```

4. **저장** 또는 **적용** 버튼 클릭

##### 방법 2: 네임서버 변경 (고급)

Vercel 네임서버를 직접 사용하려면:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

⚠️ 주의: 이 방법은 다른 서비스에도 영향을 줄 수 있습니다.

---

## 📸 스크린샷 가이드

### 가비아 DNS 설정 화면

1. **My가비아 → 서비스 관리**
   ```
   [서비스 관리] → [DNS 관리] → [도메인 선택]
   ```

2. **DNS 정보 탭**
   - 호스트명: @
   - 레코드 타입: A
   - 값: 76.76.21.21

3. **추가 레코드 설정**
   - 호스트명: www
   - 레코드 타입: CNAME
   - 값: cname.vercel-dns.com

---

## ⏱️ DNS 전파 시간

- **최소**: 10-30분
- **평균**: 1-2시간
- **최대**: 24-48시간

💡 Tip: 가비아는 보통 10-20분 내로 빠르게 전파됩니다.

---

## ✅ 설정 확인 방법

### 1. DNS 전파 확인
https://dnschecker.org 에서 도메인 입력

### 2. 터미널에서 확인
```bash
# Mac/Linux
dig yourdomain.com
dig www.yourdomain.com

# Windows
nslookup yourdomain.com
nslookup www.yourdomain.com
```

### 3. Vercel 대시보드 확인
- Vercel Dashboard → Domains
- 도메인 옆에 **Active** 표시 확인
- SSL 인증서 자동 발급 확인

### 4. 브라우저 테스트
```
http://yourdomain.com
http://www.yourdomain.com
https://yourdomain.com (SSL 자동 발급 후)
```

---

## 🔒 SSL 인증서

Vercel이 자동으로 처리합니다:
1. 도메인 연결 완료 후 5-10분 대기
2. Let's Encrypt 무료 SSL 자동 발급
3. HTTPS 자동 리다이렉트 설정
4. 90일마다 자동 갱신

---

## ❗ 문제 해결

### DNS가 적용되지 않는 경우

1. **레코드 값 재확인**
   - @ 레코드: A, 76.76.21.21
   - www 레코드: CNAME, cname.vercel-dns.com

2. **기존 레코드 삭제**
   - 중복된 A 레코드가 있는지 확인
   - 이전 설정 레코드 삭제

3. **TTL 값 낮추기**
   - 300초 (5분)로 설정
   - 빠른 전파를 위함

4. **DNS 캐시 삭제**
   ```bash
   # Mac
   sudo dscacheutil -flushcache
   sudo killall -HUP mDNSResponder

   # Windows
   ipconfig /flushdns
   ```

### "Invalid Configuration" 오류

1. Vercel에서 도메인 삭제 후 재추가
2. DNS 레코드 정확히 재입력
3. 10-20분 대기 후 재확인

### SSL 인증서 오류

1. DNS가 완전히 전파될 때까지 대기 (최대 24시간)
2. Vercel Dashboard → Domains → Renew Certificate

---

## 📞 가비아 고객센터

문제가 계속되면 가비아에 문의:
- 전화: 1544-4755
- 이메일: customer@gabia.com
- 라이브챗: https://www.gabia.com

---

## 📝 체크리스트

도메인 연결 전 확인사항:

- [ ] Vercel 프로젝트 배포 완료
- [ ] Vercel Dashboard에서 도메인 추가
- [ ] DNS 설정값 확인 및 복사
- [ ] 가비아 My가비아 로그인
- [ ] DNS 관리 페이지 접속
- [ ] A 레코드 추가 (@ → 76.76.21.21)
- [ ] CNAME 레코드 추가 (www → cname.vercel-dns.com)
- [ ] 설정 저장
- [ ] 10-30분 대기
- [ ] DNS 전파 확인
- [ ] 브라우저에서 도메인 접속 테스트
- [ ] HTTPS 작동 확인

---

## 🎯 예상 결과

모든 설정이 완료되면:

1. **http://yourdomain.com** → Vercel 사이트 연결
2. **http://www.yourdomain.com** → 자동으로 루트 도메인으로 리다이렉트
3. **https://yourdomain.com** → SSL 적용된 안전한 연결
4. Vercel Dashboard에서 "Active" 상태 표시

---

**설정 완료 시간**: 평균 20-30분
**마지막 업데이트**: 2025-10-30

---

## 💡 추가 팁

### 여러 도메인 연결
- Vercel에서 여러 도메인 추가 가능
- 기본 도메인 설정 가능
- 자동 리다이렉트 설정

### 서브도메인 추가
예: `blog.yourdomain.com`
```
타입: CNAME
호스트: blog
값: cname.vercel-dns.com
```

### 이메일 서버 사용 시
A/CNAME 레코드 외에 MX 레코드도 유지하세요!

---

궁금한 점이 있으시면 언제든 질문해주세요! 🙌
