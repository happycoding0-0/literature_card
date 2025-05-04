
```markdown
# 📚 문학 콘텐츠 카드 슬라이드

중간고사 공부를 하며 정리한 문학 작품 내용을 바탕으로,  
**React와 Tailwind CSS**를 활용한 **플래시카드 형식 웹앱**을 개발했습니다.

문학 작품을 반복 학습할 수 있도록 시각적인 카드 슬라이드 UI로 구성하였고,  
코딩 학습과 문학 학습을 동시에 경험한 프로젝트입니다.

---

## 🖼 미리 보기

![문학 플래시카드 미리 보기](./assets/preview.gif)

---

## ✨ 주요 기능

- 문학 콘텐츠를 **카드 슬라이드 UI**로 시각화
- **Swiper.js**를 사용한 부드러운 넘김 애니메이션
- 카드 클릭 시 **모달 팝업**으로 상세 내용 보기
- **모바일/PC 반응형** 인터페이스
- JSON 기반 문학 작품 정보 관리
- GitHub Pages 배포를 고려한 구조

---

## 💠 사용 기술

| 역할       | 사용 기술 |
|------------|-----------|
| 프론트엔드 | React     |
| 스타일링   | Tailwind CSS |
| 슬라이드   | Swiper.js |
| 데이터 관리| JSON      |

---

## 📁 프로젝트 구조

```

문학플래쉬카드/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── Modal.jsx
│   │   └── TimelineContainer.jsx
│   ├── data/
│   │   └── events.json
│   ├── App.jsx
│   ├── index.css
│   └── index.js
├── assets/
│   └── preview\.gif
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md

````

---

## 💻 실행 방법

```bash
# 패키지 설치
npm install

# 로컬 서버 실행
npm start
````

---

## 🚀 빌드

```bash
npm run build
```

빌드 후 `/build` 폴더가 생성되며, GitHub Pages 배포나 USB 제출용으로 활용 가능합니다.

---

## 🧠 프로젝트 동기

중간고사 정리를 하며 다양한 학습 방법을 고민하던 중,
플래시카드 학습법이 효과적이라는 것을 깨달았습니다.
이 경험을 바탕으로 직접 **웹 기반 플래시카드 시스템**을 만들어보고 싶어져서,
React와 Tailwind CSS를 활용한 이 프로젝트를 시작하게 되었습니다.

---

## 👤 개발자

**이지우**
광운인공지능고등학교 인공지능소프트웨어과 2학년
GitHub: [@happycoding0-0](https://github.com/happycoding0-0)

---

```




