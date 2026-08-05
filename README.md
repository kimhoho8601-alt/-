# 우리팀 업무 대시보드

GitHub Pages에 바로 배포할 수 있는 정적 웹사이트 데모입니다.

## 포함 기능
- 팀 업무 통합 대시보드
- 업무 등록, 검색, 필터, 상태/진행률 표시
- 주간 회의록 목록 및 상세 화면
- 통합 월간 캘린더와 일정 등록
- 관리자 페이지의 업무 카테고리 관리
- Supabase, Vercel, Google Calendar 연동 준비 UI
- 브라우저 localStorage 기반 데모 데이터 저장

## GitHub Pages 배포
1. 저장소 루트에 `index.html`, `styles.css`, `app.js`를 업로드합니다.
2. GitHub 저장소 `Settings > Pages`로 이동합니다.
3. `Deploy from a branch`를 선택하고 `main / root`를 지정합니다.
4. 저장 후 표시되는 Pages URL로 접속합니다.

## 이후 연동 포인트
- `app.js`의 localStorage 데이터 처리를 Supabase CRUD로 교체
- 인증은 Supabase Auth 연결
- Google Calendar OAuth 및 API 호출은 Vercel Functions 또는 Supabase Edge Functions에서 처리
- Google OAuth 비밀키와 refresh token은 프런트엔드에 저장하지 않기
