const SunIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="size-[18px] fill-none stroke-current stroke-[1.5]"
  >
    <path
      d="M12 3v2M12 19v2M3 12h2M19 12h2M5.64 5.64l1.42 1.42M16.94 16.94l1.42 1.42M18.36 5.64l-1.42 1.42M7.06 16.94l-1.42 1.42"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

export default function Header({ name, dark, onThemeToggle }) {
  return (
    <header className="mx-auto grid h-20 w-full max-w-[1384px] grid-cols-[1fr_auto] items-center px-5 md:h-24 md:grid-cols-[1fr_auto_1fr] md:px-10 xl:px-[4.5rem]">
      <a
        href="#top"
        aria-label="처음으로"
        className="font-korean justify-self-start text-xl font-bold tracking-[-0.06em]"
      >
        {name}
        <span className="text-accent">.</span>
      </a>

      <nav
        aria-label="주요 메뉴"
        className="hidden items-center gap-8 text-[13px] font-medium md:flex"
      >
        {["About", "Journey", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="nav-link py-2"
          >
            {item}
          </a>
        ))}
      </nav>

      <button
        type="button"
        onClick={onThemeToggle}
        aria-label={dark ? "밝은 테마 사용" : "어두운 테마 사용"}
        className="grid size-11 cursor-pointer place-items-center justify-self-end rounded-full border border-line transition hover:rotate-12 hover:bg-surface"
      >
        <SunIcon />
      </button>
    </header>
  );
}
