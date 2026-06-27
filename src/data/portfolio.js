import tripanPortfolio from "../assets/tripan-portfolio.pdf";

export const portfolio = {
  name: "서유원",
  role: "Full-Stack Developer · Backend Focus",
  githubUsername: "ssangyoungyuwon-maker",
  blogUrl: "https://wonniedev.tistory.com/",
  eyebrow: "도메인을 이해하고 안정적인 시스템을 만듭니다.",
  headline: ["데이터의 흐름을 읽고,", "안정적인 로직을 설계합니다."],
  introduction:
    "화학 규제 데이터와 고객의 문제를 다뤄온 경험을 바탕으로, 화면부터 서버까지 비즈니스 흐름을 구현하고 Java·Spring 백엔드의 안정성에 집중하는 풀스택 개발자 서유원입니다.",
  about:
    "화학물질 규제 부서에서 3년간 30만 건 이상의 물질·규제 데이터를 관리하고, 고객 VOC를 개발팀과 함께 해결했습니다. 현상보다 원인을 구조적으로 파악하는 일에 매력을 느껴 개발자로 전환했으며, 현재 Java와 Spring Boot를 중심으로 데이터 정합성과 안정적인 운영을 고민하면서 제품의 전체 흐름을 이해하는 풀스택 개발자로 성장하고 있습니다.",
  availability:
    "도메인을 빠르게 이해하고, 기록과 소통으로 팀의 맥락을 이어가며 오래 함께 성장하는 개발자가 되고 싶습니다.",
  location: "Seoul, Korea",
  skillGroups: [
    {
      title: "Backend",
      description: "서버 로직과 API 설계",
      featured: true,
      skills: [
        "Java 21",
        "Spring Boot",
        "Spring Security",
        "REST API",
        "MyBatis",
        "WebSocket · STOMP",
      ],
    },
    {
      title: "Database & Cache",
      description: "데이터 정합성과 동시성 제어",
      skills: ["Oracle DB", "Redis · Redisson"],
    },
    {
      title: "Frontend",
      description: "사용자 흐름을 완성하는 화면",
      skills: ["TypeScript", "Next.js · React"],
    },
    {
      title: "DevOps & Testing",
      description: "배포 자동화와 성능 검증",
      skills: ["Docker · Kubernetes", "GitHub Actions", "k6"],
    },
  ],
  projects: [
    {
      name: "Univ-US",
      description:
        "대학별 LMS·커뮤니티·공간 예약을 통합한 플랫폼입니다. 팀장으로 개발 기준을 조율하고, Redis 분산 락과 STOMP를 활용한 실시간 예약 시스템을 구현했습니다.",
      period: "2026.06 — 진행 중",
      role: "Team Lead · Full Stack",
      result: "200 VU 동시 요청에서 초과 예약 0건",
      tags: ["Java 21", "Spring Boot", "Redis", "Next.js", "Kubernetes"],
    },
    {
      name: "Tripan",
      description:
        "여행 일정·숙소 예약·커뮤니티를 결합한 플랫폼입니다. B2B 파트너의 입점부터 객실·예약·리뷰·정산까지 이어지는 운영 흐름과 실시간 채팅을 구현했습니다.",
      period: "2026.03 · 4주",
      role: "Deputy Lead · Full Stack",
      result: "운영 예외를 반영한 숙소 신청 데이터 구조 개선",
      tags: ["Java", "Spring Boot", "MyBatis", "Oracle", "WebSocket"],
      document: tripanPortfolio,
    },
    {
      name: "Maknaez",
      description:
        "상품 조회부터 주문 생성·모의 결제·재고 관리까지 전자상거래 흐름을 구현한 신발 쇼핑몰입니다. 외부 결제 API 없이 장바구니 구매와 즉시 구매의 진입 경로를 통합했습니다.",
      period: "2026.01 · 3주",
      role: "Full Stack",
      result: "주문 서버 검증과 재입고 이메일 알림 구현",
      tags: ["Java", "Servlet/JSP", "MyBatis", "Oracle", "AJAX"],
    },
  ],
  experiences: [
    {
      period: "2026.05 — 현재",
      title: "기업 맞춤형 Java 웹 개발자 과정",
      organization: "한국IT전문가협회",
      description:
        "Java 웹 개발 역량을 고도화하며 Univ-US 프로젝트를 팀장으로 진행하고 있습니다.",
      type: "Training",
    },
    {
      period: "2025.09 — 2026.04",
      title: "AWS & CI/CD 기반 Java Full-Stack 과정",
      organization: "쌍용강북교육센터 · 1,120시간",
      description:
        "Java, Spring Boot, 데이터베이스, 프론트엔드와 배포 과정을 학습하고 세 번의 팀 프로젝트를 수행했습니다.",
      type: "Training",
    },
    {
      period: "2022.04 — 2025.06",
      title: "화학물질 규제 관리 · 컨설팅",
      organization: "켐토피아 · 주임",
      description:
        "30만 건 이상의 물질·규제 데이터를 관리하고, B2B 고객 VOC를 분석해 개발팀과 시스템 개선을 협업했습니다.",
      type: "Experience",
    },
    {
      period: "2021.10 — 2021.12",
      title: "공공데이터 청년인턴",
      organization: "한국지능정보사회진흥원",
      description:
        "공공데이터 일경험 수련 과정에 참여하며 데이터 기반 업무 경험을 쌓았습니다.",
      type: "Experience",
    },
    {
      period: "2014.03 — 2020.02",
      title: "화학공학과 학사",
      organization: "순천대학교",
      description:
        "화학공학을 전공하며 공정과 데이터에 기반해 문제를 분석하는 기초를 다졌습니다.",
      type: "Education",
    },
  ],
  values: [
    {
      number: "01",
      title: "Domain First",
      description:
        "요청을 곧바로 코드로 옮기기보다 업무 목적과 데이터 흐름부터 이해합니다.",
    },
    {
      number: "02",
      title: "Reliability",
      description:
        "트랜잭션 경계와 예외 상황을 확인하고 테스트 결과로 안정성을 검증합니다.",
    },
    {
      number: "03",
      title: "Collaboration",
      description:
        "문제의 재현 조건과 기대 결과를 명확히 공유해 팀의 판단 속도를 높입니다.",
    },
  ],
};
