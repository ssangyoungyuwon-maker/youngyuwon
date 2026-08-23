import { FaJava } from "react-icons/fa";
import {
  SiApachetomcat,
  SiAxios,
  SiDocker,
  SiFlyway,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiJunit5,
  SiK6,
  SiKubernetes,
  SiMysql,
  SiNextdotjs,
  SiOpenapiinitiative,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiSpringsecurity,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import {
  TbApi,
  TbArrowsExchange,
  TbBrandCss3,
  TbBrowserCheck,
  TbCloudComputing,
  TbDatabase,
  TbPlugConnected,
} from "react-icons/tb";

const skillIcons = {
  "Java 21": { icons: [FaJava], color: "#f89820" },
  "Spring Boot": { icons: [SiSpringboot], color: "#6db33f" },
  "Spring Security": { icons: [SiSpringsecurity], color: "#6db33f" },
  "REST API": { icons: [SiOpenapiinitiative, TbApi], color: "#6ba539" },
  MyBatis: { icons: [TbArrowsExchange], color: "#c7352c" },
  "JSP · Servlet": {
    icons: [FaJava, SiApachetomcat],
    colors: ["#f89820", "#d22128"],
  },
  "PostgreSQL · Flyway": {
    icons: [SiPostgresql, SiFlyway],
    colors: ["#4169e1", "#cc0200"],
  },
  "Oracle DB": { icons: [TbDatabase], color: "#f80000" },
  MySQL: { icons: [SiMysql], color: "#4479a1" },
  "Redis · Redisson": { icons: [SiRedis], color: "#dc382d" },
  "WebSocket · STOMP": { icons: [TbPlugConnected], color: "#e85d35" },
  TypeScript: { icons: [SiTypescript], color: "#3178c6" },
  "JavaScript · TypeScript": {
    icons: [SiJavascript, SiTypescript],
    colors: ["#f7df1e", "#3178c6"],
  },
  "Next.js · React": {
    icons: [SiNextdotjs, SiReact],
    colors: ["currentColor", "#61dafb"],
  },
  "HTML5 · CSS3": {
    icons: [SiHtml5, TbBrandCss3],
    colors: ["#e34f26", "#1572b6"],
  },
  "jQuery · Vue.js": {
    icons: [SiJquery, SiVuedotjs],
    colors: ["#0769ad", "#4fc08d"],
  },
  "Zustand · Axios": {
    icons: [TbApi, SiAxios],
    colors: ["#443e38", "#5a29e4"],
  },
  "Docker · Kubernetes": {
    icons: [SiDocker, SiKubernetes],
    colors: ["#2496ed", "#326ce5"],
  },
  "Docker Compose · Kubernetes": {
    icons: [SiDocker, SiKubernetes],
    colors: ["#2496ed", "#326ce5"],
  },
  "GitHub Actions": { icons: [SiGithubactions], color: "#2088ff" },
  "GitHub Actions · OCI": {
    icons: [SiGithubactions, TbCloudComputing],
    colors: ["#2088ff", "#f80000"],
  },
  "JUnit 5 · Testcontainers": {
    icons: [SiJunit5, SiDocker],
    colors: ["#25a162", "#2496ed"],
  },
  Playwright: { icons: [TbBrowserCheck], color: "#2ead33" },
  k6: { icons: [SiK6], color: "#7d64ff" },
};

export default function SkillIcon({ name }) {
  const config = skillIcons[name] ?? {
    icons: [TbApi],
    color: "currentColor",
  };

  return (
    <span
      aria-hidden="true"
      className="grid size-6 shrink-0 place-items-center rounded-full bg-surface text-[13px] transition-transform duration-200 group-hover:scale-110"
    >
      <span className="flex items-center justify-center gap-0.5">
        {config.icons.map((Icon, index) => (
          <Icon
            key={`${name}-${index}`}
            style={{ color: config.colors?.[index] ?? config.color }}
            className={config.icons.length > 1 ? "size-[11px]" : "size-[13px]"}
          />
        ))}
      </span>
    </span>
  );
}
