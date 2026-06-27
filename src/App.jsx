import { useEffect, useState } from "react";
import Header from "./components/Header";
import Reveal from "./components/Reveal";
import SectionHeading from "./components/SectionHeading";
import SkillIcon from "./components/SkillIcon";
import { portfolio } from "./data/portfolio";
import profilePhoto from "./assets/profile-photo.jpg";

const shell = "mx-auto w-full max-w-[1384px] px-5 md:px-10 xl:px-[4.5rem]";
const sectionPadding = "py-24 md:py-36 xl:py-40";
const githubUrl = `https://github.com/${portfolio.githubUsername}`;

function Arrow({ down = false }) {
  return <span aria-hidden="true">{down ? "↘" : "↗"}</span>;
}

function Hero() {
  return (
    <>
      <section
        id="top"
        className={`${shell} grid min-h-[calc(100svh-5rem)] items-center gap-14 pt-14 pb-24 md:min-h-[calc(100svh-6rem)] md:pt-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20`}
      >
        <Reveal className="relative z-10">
          <p className="mb-8 flex items-center text-xs font-semibold tracking-[0.14em] text-muted before:mr-3 before:h-px before:w-10 before:bg-accent before:content-['']">
            {portfolio.eyebrow}
          </p>
          <h1 className="font-korean m-0 max-w-[820px] text-[clamp(2.8rem,7vw,6.5rem)] leading-[1.06] font-semibold tracking-[-0.08em] break-keep">
            <span className="block">{portfolio.headline[0]}</span>
            <span className="block text-accent">{portfolio.headline[1]}</span>
          </h1>
          <p className="font-korean mt-9 max-w-[620px] text-[15px] leading-8 text-muted break-keep md:text-[18px]">
            {portfolio.introduction}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5 md:gap-8">
            <a
              href="#projects"
              className="font-korean inline-flex min-h-14 items-center justify-center gap-8 rounded-full bg-ink px-6 text-sm font-semibold text-bg transition hover:-translate-y-1"
            >
              프로젝트 보기 <Arrow down />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="border-b border-line pb-1 text-sm"
            >
              GitHub <Arrow />
            </a>
            <a
              href={portfolio.blogUrl}
              target="_blank"
              rel="noreferrer"
              className="border-b border-line pb-1 text-sm"
            >
              Tech Blog <Arrow />
            </a>
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className="relative mx-auto grid min-h-[430px] w-full max-w-[520px] place-items-center md:min-h-[520px]"
        >
          <div className="system-panel">
            <div className="flex h-12 items-center justify-between border-b border-white/10 px-4">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="size-2 rounded-full bg-[#ff745c]" />
                <span className="size-2 rounded-full bg-[#ffbd44]" />
                <span className="size-2 rounded-full bg-[#00ca4e]" />
              </div>
              <span className="font-mono text-[9px] tracking-[0.14em] text-[#8d9b92]">
                SYSTEM.FLOW
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[9px] text-[#91c7a5]">
                <i className="live-dot size-1.5 rounded-full bg-[#5bd188]" />
                LIVE
              </span>
            </div>

            <div className="system-canvas">
              <div className="request-chip">
                <span className="text-[#f0a88f]">POST</span>
                <span>/api/reservations</span>
              </div>

              <div className="flow-connector">
                <i />
              </div>

              <div className="api-node">
                <div>
                  <span className="font-mono text-[9px] tracking-[0.12em] text-[#f0a88f]">
                    JAVA · SERVICE
                  </span>
                  <strong className="mt-1 block text-[17px] font-medium text-white">
                    Spring Boot API
                  </strong>
                </div>
                <span className="rounded-full border border-[#5bd188]/30 bg-[#5bd188]/10 px-2 py-1 font-mono text-[8px] text-[#7ee3a3]">
                  HEALTHY
                </span>
              </div>

              <div className="branch-connector" aria-hidden="true" />

              <div className="system-branches">
                <div className="infra-node">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[9px] text-[#98a69d]">
                      CACHE · LOCK
                    </span>
                    <span className="size-1.5 rounded-full bg-[#f0a88f]" />
                  </div>
                  <strong>Redis</strong>
                  <span>Redisson distributed lock</span>
                </div>
                <div className="infra-node">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[9px] text-[#98a69d]">
                      DATABASE
                    </span>
                    <span className="size-1.5 rounded-full bg-[#5bd188]" />
                  </div>
                  <strong>Oracle DB</strong>
                  <span>transaction committed</span>
                </div>
              </div>

              <div className="response-line" aria-hidden="true">
                <i />
              </div>

              <div className="response-chip">
                <span className="font-mono text-[#7ee3a3]">201 CREATED</span>
                <span className="text-[#77847c]">84 ms</span>
              </div>
            </div>

            <div className="flex h-10 items-center justify-between border-t border-white/10 px-4 font-mono text-[8px] text-[#66736b]">
              <span>request_id: yu-won-01</span>
              <span>no overbooking · 200 VU</span>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="overflow-hidden border-y border-line py-4">
        <div className="marquee-track flex w-max items-center gap-9 text-[11px] tracking-[0.17em] text-muted">
          {[0, 1].map((group) => (
            <div key={group} className="flex items-center gap-9">
              <span>BACKEND DEVELOPMENT</span>
              <i>✦</i>
              <span>DATA INTEGRITY</span>
              <i>✦</i>
              <span>DOMAIN UNDERSTANDING</span>
              <i>✦</i>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function About() {
  return (
    <section id="about" className={`${shell} ${sectionPadding}`}>
      <SectionHeading index="01">ABOUT ME</SectionHeading>
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.48fr_0.95fr] lg:gap-16 xl:gap-20">
        <Reveal>
          <h2 className="font-korean text-[clamp(2.4rem,3.8vw,3.6rem)] leading-[1.25] font-semibold tracking-[-0.07em]">
            <span className="block">근거로 판단하고</span>
            <span className="block whitespace-nowrap">
              <em>안정적으로</em> 만듭니다.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={80} className="mx-auto w-full max-w-[230px]">
          <div className="relative">
            <div className="absolute top-4 -right-4 h-full w-full rounded-[112px_112px_22px_22px] border border-accent/65" />
            <figure className="relative z-10 aspect-[0.76] overflow-hidden rounded-[112px_112px_22px_22px] border border-line bg-surface shadow-[0_24px_55px_rgba(24,32,28,0.13)]">
              <img
                src={profilePhoto}
                alt="서유원 프로필 사진"
                className="h-full w-full object-cover object-top saturate-[0.84] contrast-[0.98]"
              />
            </figure>
            <span className="absolute -right-8 bottom-7 z-20 rounded-full border border-line bg-bg px-3 py-2 font-serif text-xs italic shadow-lg">
              Seo Yuwon
            </span>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="font-korean text-[16px] leading-8 text-muted break-keep md:text-[17px]">
            {portfolio.about}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-5 border-t border-line pt-6">
            <div>
              <span className="text-[9px] font-semibold tracking-[0.13em] text-accent">
                ROLE
              </span>
              <p className="mt-2 text-xs">{portfolio.role}</p>
            </div>
            <div>
              <span className="text-[9px] font-semibold tracking-[0.13em] text-accent">
                LOCATION
              </span>
              <p className="mt-2 text-xs">{portfolio.location}</p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-3 md:grid-cols-12">
        {portfolio.skillGroups.map((group, index) => (
          <Reveal
            key={group.title}
            delay={index * 70}
            className={
              index === 0 || index === 3
                ? "md:col-span-7"
                : "md:col-span-5"
            }
          >
            <article
              className={`h-full min-h-52 rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 md:p-7 ${
                group.featured
                  ? "border-accent/45 bg-accent/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                  : "border-line bg-surface/45 hover:border-accent/30"
              }`}
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.14em] text-accent uppercase">
                    {group.featured ? "Core" : `0${index + 1}`}
                  </span>
                  <h3 className="mt-2 text-xl font-medium tracking-[-0.04em]">
                    {group.title}
                  </h3>
                </div>
                <p className="font-korean max-w-44 text-right text-[11px] leading-5 text-muted break-keep">
                  {group.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="group inline-flex items-center gap-2 rounded-full border border-line bg-bg/65 py-2 pr-4 pl-2 text-xs transition hover:-translate-y-0.5 hover:border-accent/50 hover:bg-bg"
                  >
                    <SkillIcon name={skill} />
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-24 grid border-t border-line md:mt-32 md:grid-cols-3">
        {portfolio.values.map((value, index) => (
          <Reveal
            key={value.title}
            delay={index * 80}
            className="border-b border-line py-7 md:border-b-0 md:px-8 md:py-8 md:first:pl-0 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-line"
          >
            <span className="text-xs text-accent">{value.number}</span>
            <h3 className="mt-8 mb-4 text-xl font-medium">{value.title}</h3>
            <p className="font-korean max-w-[320px] text-sm leading-7 text-muted break-keep">
              {value.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section
      id="journey"
      className={`${shell} ${sectionPadding} border-t border-line`}
    >
      <SectionHeading index="02">EXPERIENCE &amp; EDUCATION</SectionHeading>
      <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-28">
        <Reveal className="self-start lg:sticky lg:top-12">
          <p className="mb-6 text-[11px] font-semibold tracking-[0.14em] text-accent">
            CAREER SHIFT
          </p>
          <h2 className="font-korean text-[clamp(2.4rem,4.5vw,4.5rem)] leading-[1.2] font-semibold tracking-[-0.07em]">
            도메인 경험을
            <br />
            개발의 <em>맥락</em>으로.
          </h2>
          <p className="font-korean mt-8 max-w-[390px] text-sm leading-7 text-muted break-keep">
            규제 데이터의 정확성을 책임지던 실무자에서, 데이터와 로직을 직접
            설계하는 개발자로 전환하고 있습니다.
          </p>
        </Reveal>

        <div className="relative before:absolute before:top-2 before:bottom-0 before:left-[5px] before:w-px before:bg-line">
          {portfolio.experiences.map((experience, index) => (
            <Reveal
              key={`${experience.period}-${experience.title}`}
              delay={index * 60}
              className="relative grid grid-cols-[1rem_1fr] gap-x-4 pb-14 md:grid-cols-[1rem_130px_1fr] md:gap-x-6"
            >
              <span className="z-10 mt-1 size-3 rounded-full border-2 border-bg bg-accent ring-1 ring-accent" />
              <p className="col-start-2 text-xs leading-5 text-muted md:col-start-auto">
                {experience.period}
              </p>
              <div className="col-start-2 mt-5 md:col-start-auto md:mt-0">
                <span className="text-[10px] font-semibold tracking-[0.12em] text-accent uppercase">
                  {experience.type}
                </span>
                <h3 className="font-korean mt-3 text-lg font-semibold tracking-[-0.04em]">
                  {experience.title}
                </h3>
                <p className="font-korean mt-2 text-[13px]">
                  {experience.organization}
                </p>
                <p className="font-korean mt-4 text-[13px] leading-6 text-muted break-keep">
                  {experience.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <Reveal>
      <article
        className="group grid min-h-44 grid-cols-[36px_1fr_36px] items-center gap-3 border-b border-line py-7 transition hover:bg-ink/[0.035] md:grid-cols-[60px_1fr_minmax(260px,0.8fr)_44px] md:gap-8 md:hover:px-5 dark:border-white/15 dark:hover:bg-white/[0.04]"
      >
        <span className="self-start pt-1 text-xs text-accent">
          0{index + 1}
        </span>
        <div>
          <span className="text-[10px] text-muted dark:text-[#96a49b]">
            {project.period}
          </span>
          <h3 className="mt-3 text-[clamp(1.6rem,3vw,2.7rem)] font-medium tracking-[-0.05em]">
            {project.name}
          </h3>
          <span className="mt-3 block text-[10px] text-muted dark:text-[#96a49b]">
            {project.role}
          </span>
        </div>
        <div className="col-start-2 md:col-start-auto">
          <p className="font-korean text-xs leading-6 text-muted break-keep md:text-sm dark:text-[#aeb9b2]">
            {project.description}
          </p>
          <ul className="font-korean mt-3 space-y-1.5 text-[11px] text-ink dark:text-[#f5f1e7]">
            {(project.results ?? [project.result]).map((result) => (
              <li
                key={result}
                className="flex gap-2 before:shrink-0 before:text-accent before:content-['✓']"
              >
                {result}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-x-2 text-[10px] text-muted dark:text-[#ced5d0]">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="before:mr-2 before:text-accent before:content-['•'] first:before:hidden"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.document && (
            <a
              href={project.document}
              target="_blank"
              rel="noreferrer"
              className="font-korean mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-[11px] font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              PDF 포트폴리오 보기 <Arrow />
            </a>
          )}
        </div>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} GitHub 보기`}
          className="col-start-3 row-span-2 row-start-1 grid size-9 place-items-center self-center rounded-full border border-line transition hover:rotate-45 hover:bg-accent hover:text-white md:col-start-4 md:size-11 dark:border-white/25"
        >
          <Arrow />
        </a>
      </article>
    </Reveal>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className={`${sectionPadding} bg-surface text-ink transition-colors duration-300 dark:bg-deep dark:text-[#f5f1e7]`}
    >
      <div className={shell}>
        <SectionHeading index="03" light>
          SELECTED PROJECTS
        </SectionHeading>
        <Reveal className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-korean text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.2] font-semibold tracking-[-0.07em]">
            문제를 해결한 기록.
          </h2>
          <p className="font-korean max-w-[300px] text-xs leading-6 text-muted break-keep dark:text-[#a9b5ad]">
            역할과 구현보다, 어떤 문제를 어떻게 검증했는지에 집중했습니다.
          </p>
        </Reveal>
        <div className="border-t border-line dark:border-white/15">
          {portfolio.projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
        <Reveal>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="font-korean mt-10 inline-flex gap-3 border-b border-line pb-1 text-xs dark:border-white/25"
          >
            GitHub에서 모든 프로젝트 보기 <Arrow />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className={`${shell} ${sectionPadding}`}>
      <SectionHeading index="04">GET IN TOUCH</SectionHeading>
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-28">
        <Reveal>
          <p className="font-korean mb-6 text-sm text-muted">
            좋은 제품은 긴 호흡의 협업에서 만들어진다고 믿습니다.
          </p>
          <h2 className="font-korean text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.2] font-semibold tracking-[-0.07em]">
            함께 일할수록
            <br />
            <em>믿음이 가는 개발자.</em>
          </h2>
        </Reveal>
        <Reveal delay={100} className="flex flex-col justify-end">
          <p className="font-korean mb-10 max-w-[420px] text-[15px] leading-8 text-muted break-keep">
            {portfolio.availability}
          </p>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between border-y border-line py-5 text-[clamp(1.05rem,2vw,1.4rem)]"
          >
            GitHub에서 연락하기
            <span className="grid size-11 place-items-center rounded-full bg-accent text-white transition group-hover:rotate-45">
              <Arrow />
            </span>
          </a>
          <div className="mt-6 flex flex-col justify-between gap-3 text-xs text-muted sm:flex-row">
            <span>{portfolio.location}</span>
            <span className="flex items-center gap-2">
              <i className="size-2 rounded-full bg-[#38a269] shadow-[0_0_0_4px_rgba(56,162,105,0.12)]" />
              Available for work
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function App() {
  const themeStorageKey = "portfolio-theme-v2";
  const systemThemeQuery = "(prefers-color-scheme: dark)";
  const [theme, setTheme] = useState(
    () => localStorage.getItem(themeStorageKey) ?? "system",
  );
  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia?.(systemThemeQuery).matches ?? false,
  );
  const dark = theme === "dark" || (theme === "system" && systemDark);

  useEffect(() => {
    const mediaQuery = window.matchMedia(systemThemeQuery);
    const handleSystemThemeChange = (event) => setSystemDark(event.matches);

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", dark ? "#121714" : "#f3f0e8");
  }, [dark]);

  const handleThemeToggle = () => {
    const nextTheme = dark ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem(themeStorageKey, nextTheme);
  };

  return (
    <div className="min-h-screen bg-bg text-ink transition-colors duration-300">
      <a
        href="#main"
        className="fixed top-3 left-3 z-50 -translate-y-24 rounded-full bg-ink px-4 py-3 text-xs text-bg transition focus:translate-y-0"
      >
        본문으로 바로가기
      </a>
      <Header
        name={portfolio.name}
        dark={dark}
        onThemeToggle={handleThemeToggle}
      />
      <main id="main">
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Contact />
      </main>
      <footer
        className={`${shell} flex flex-col justify-between gap-3 border-t border-line py-8 text-[11px] text-muted sm:flex-row`}
      >
        <p>
          © {new Date().getFullYear()} {portfolio.name}
        </p>
        <p>Designed &amp; built with React.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
