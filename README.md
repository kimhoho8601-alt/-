# TeamFlow React + Vite

팀원이 각자 업무를 등록하고 하나의 대시보드에서 함께 확인하는 프론트엔드 프로토타입입니다.
현재 데이터는 브라우저 `localStorage`에 저장되며, 이후 Supabase와 Google Calendar를 연결할 수 있도록 구조를 분리했습니다.

## 포함 파일

```text
team-dashboard-react/
├─ .github/workflows/deploy-pages.yml
├─ public/
├─ src/
│  ├─ components/
│  ├─ data/
│  ├─ pages/
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ styles.css
├─ .env.example
├─ .gitignore
├─ index.html
├─ package.json
└─ vite.config.js
```

## 로컬 실행

Node.js 20 이상 권장.

```bash
npm install
npm run dev
```

## 배포용 빌드 확인

```bash
npm run build
npm run preview
```

## GitHub Pages 배포

1. 프로젝트의 모든 파일을 GitHub 저장소 루트에 올립니다.
2. 저장소 `Settings → Pages`로 이동합니다.
3. `Build and deployment`의 Source를 `GitHub Actions`로 선택합니다.
4. `main` 브랜치에 push하면 `.github/workflows/deploy-pages.yml`이 자동 빌드·배포합니다.

`vite.config.js`의 `base: './'` 설정으로 프로젝트 저장소명과 관계없이 상대 경로로 정적 파일을 불러옵니다.

## 현재 동작 기능

- 전체 업무 대시보드
- 팀원 캐릭터 아바타
- 업무 등록, 편집, 삭제
- 회의록 조회 및 편집
- 캘린더 일정 등록
- 관리자 카테고리 추가 및 삭제
- 브라우저 localStorage 저장

## 추후 연동 위치

- Supabase Auth / Database / Realtime
- Google Calendar API
- Vercel 배포

환경 변수 예시는 `.env.example`을 참고하세요. 실제 비밀키나 service role 키는 프론트엔드에 넣지 마세요.
