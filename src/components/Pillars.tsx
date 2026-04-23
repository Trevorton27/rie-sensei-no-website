const pillars = [
  {
    kana: "文",
    number: "01",
    title: "Writing",
    subtitle: "言葉の力",
    description:
      "Essays, criticism, and narrative nonfiction that probe the edges of culture, identity, and the examined life. Words chosen like flowers — each one placed for its weight, its silence, and its color.",
    accent: "oklch(0.78 0.075 12 / 0.7)",
    accentLight: "oklch(0.78 0.075 12 / 0.08)",
  },
  {
    kana: "学",
    number: "02",
    title: "Education",
    subtitle: "知識の庭",
    description:
      "Curriculum design, mentorship, and teaching at the intersection of liberal arts and applied knowledge. Rie believes that the deepest education cultivates a way of seeing, not merely a set of skills.",
    accent: "oklch(0.72 0.095 78 / 0.7)",
    accentLight: "oklch(0.72 0.095 78 / 0.07)",
  },
  {
    kana: "業",
    number: "03",
    title: "Business",
    subtitle: "美の商い",
    description:
      "Strategy and venture-building rooted in culture. Rie works with founders and institutions who understand that lasting enterprises are shaped by values — and that aesthetics are never merely decorative.",
    accent: "oklch(0.56 0.068 148 / 0.75)",
    accentLight: "oklch(0.56 0.068 148 / 0.07)",
  },
  {
    kana: "芸",
    number: "04",
    title: "Art",
    subtitle: "形と空間",
    description:
      "A practice informed by ikebana, calligraphy, and the Japanese sensibility of ma — the purposeful interval between. Her artistic work asks what it means to make something beautiful in a world of relentless noise.",
    accent: "oklch(0.58 0.080 280 / 0.65)",
    accentLight: "oklch(0.58 0.080 280 / 0.06)",
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="py-24 md:py-36 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16 md:mb-20">
          <div>
            <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground block mb-3">
              Work &amp; Practice
            </span>
            <h2
              className="font-serif text-4xl md:text-5xl leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              Four Domains
            </h2>
          </div>
          <span
            className="hidden md:block font-japanese text-8xl opacity-[0.06] leading-none select-none"
            aria-hidden="true"
          >
            道
          </span>
        </div>

        {/* Ink divider */}
        <span className="ink-line block mb-14 opacity-40" />

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border/40">
          {pillars.map((p) => (
            <PillarCard key={p.number} pillar={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Pillar = (typeof pillars)[number];

function PillarCard({ pillar: p }: { pillar: Pillar }) {
  return (
    <article
      className="group relative bg-background p-8 md:p-10 flex flex-col gap-6 overflow-hidden transition-colors duration-500 hover:bg-background"
      style={
        {
          "--pillar-accent": p.accent,
          "--pillar-light": p.accentLight,
        } as React.CSSProperties
      }
    >
      {/* Hover background wash */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `var(--pillar-light)` }}
        aria-hidden="true"
      />

      {/* Number + kana row */}
      <div className="relative flex items-start justify-between">
        <span className="text-[10px] tracking-[0.3em] text-muted-foreground/60">
          {p.number}
        </span>
        <span
          className="font-japanese text-5xl leading-none opacity-15 select-none"
          aria-hidden="true"
        >
          {p.kana}
        </span>
      </div>

      {/* Title block */}
      <div className="relative">
        {/* Accent line left border */}
        <div
          className="absolute -left-8 md:-left-10 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `var(--pillar-accent)` }}
          aria-hidden="true"
        />

        <h3
          className="font-serif text-3xl md:text-4xl leading-tight tracking-tight mb-1"
          style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
        >
          {p.title}
        </h3>
        <p
          className="font-japanese text-xs opacity-35 tracking-wider"
          aria-label={p.subtitle}
        >
          {p.subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="relative text-sm leading-[1.85] text-muted-foreground">
        {p.description}
      </p>
    </article>
  );
}
