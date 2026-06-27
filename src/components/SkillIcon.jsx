import { FaJava } from "react-icons/fa";
import {
  SiDocker,
  SiGithubactions,
  SiK6,
  SiKubernetes,
  SiNextdotjs,
  SiOpenapiinitiative,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiSpringsecurity,
  SiTypescript,
} from "react-icons/si";
import {
  TbApi,
  TbArrowsExchange,
  TbDatabase,
  TbPlugConnected,
} from "react-icons/tb";

const skillIcons = {
  "Java 21": { icons: [FaJava], color: "#f89820" },
  "Spring Boot": { icons: [SiSpringboot], color: "#6db33f" },
  "Spring Security": { icons: [SiSpringsecurity], color: "#6db33f" },
  "REST API": { icons: [SiOpenapiinitiative, TbApi], color: "#6ba539" },
  MyBatis: { icons: [TbArrowsExchange], color: "#c7352c" },
  "Oracle DB": { icons: [TbDatabase], color: "#f80000" },
  "Redis · Redisson": { icons: [SiRedis], color: "#dc382d" },
  "WebSocket · STOMP": { icons: [TbPlugConnected], color: "#e85d35" },
  TypeScript: { icons: [SiTypescript], color: "#3178c6" },
  "Next.js · React": {
    icons: [SiNextdotjs, SiReact],
    colors: ["currentColor", "#61dafb"],
  },
  "Docker · Kubernetes": {
    icons: [SiDocker, SiKubernetes],
    colors: ["#2496ed", "#326ce5"],
  },
  "GitHub Actions": { icons: [SiGithubactions], color: "#2088ff" },
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
