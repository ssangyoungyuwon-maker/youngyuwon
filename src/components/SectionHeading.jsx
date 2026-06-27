export default function SectionHeading({ index, children, light = false }) {
  return (
    <div
      className={`mb-14 flex items-center gap-4 text-[11px] font-semibold tracking-[0.14em] md:mb-24 ${
        light ? "text-[#a9b5ad]" : "text-muted"
      }`}
    >
      <span className="text-accent">{index}</span>
      <p className="m-0">{children}</p>
      <span
        className={`ml-2 h-px flex-1 ${
          light ? "bg-white/15" : "bg-line"
        }`}
      />
    </div>
  );
}
