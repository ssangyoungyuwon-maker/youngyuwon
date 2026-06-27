# 서유원 포트폴리오

React, Vite, JavaScript, Tailwind CSS로 만든 백엔드 개발자 포트폴리오입니다.

## 기술 구성

- React
- Vite
- JavaScript
- Tailwind CSS
- GitHub Actions / GitHub Pages

## 내용 수정

이름, 소개, 프로젝트, 기술 스택과 경력은 `src/data/portfolio.js`에서 관리합니다.

프로젝트 저장소가 공개되면 각 프로젝트의 `url`을 추가하고 `src/App.jsx`의 프로젝트 카드 링크에 연결할 수 있습니다.

## 로컬 실행

```bash
npm install
npm run dev
```

## 프로덕션 빌드

```bash
npm run build
npm run preview
```

## GitHub Pages 배포

`main` 브랜치에 푸시하면 `.github/workflows/deploy.yml`이 Vite 프로젝트를 빌드하고 `dist` 폴더를 배포합니다.

처음 한 번은 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 선택해야 합니다.

현재 저장소 이름을 유지할 경우 예상 주소:

`https://ssangyoungyuwon-maker.github.io/youngyuwon/`
