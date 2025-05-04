timeline-viewer/
├── node_modules/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── EventCard.jsx
│   │   └── TimelineContainer.jsx
│   ├── data/
│   │   └── events.json
│   ├── index.css
│   ├── index.js
│   └── App.jsx
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
public/: CRA 기본 HTML 및 정적파일

src/components/: 컴포넌트 분리 (EventCard, TimelineContainer)

src/data/: 이벤트 JSON 데이터

src/index.css: Tailwind 진입점 (@import "tailwindcss";)

src/index.js: CSS 임포트 및 React 루트 마운트

src/App.jsx: 전체 레이아웃 + TimelineContainer 호출

tailwind.config.js: Tailwind 설정

postcss.config.js: PostCSS 플러그인 설정

README.md: 프로젝트 개요 및 실행 방법 정리