const pillars = [
  {
    kana: "仕",
    number: "01",
    title: "Online Business Support",
    subtitle: "事業の土台づくり",
    description:
      "Executive support and back-office operations for small businesses. Task management, team building, promotion strategy, and workflow design — all in one place.",
    accent: "oklch(0.72 0.095 78 / 0.7)",
    accentLight: "oklch(0.72 0.095 78 / 0.07)",
  },
  {
    kana: "導",
    number: "02",
    title: "Coaching & Programs",
    subtitle: "方向性を見つける",
    description:
      "For those who don't know what they want yet. Coaching to find your direction, combined with practical training to start earning — at the same time.",
    accent: "oklch(0.78 0.075 12 / 0.7)",
    accentLight: "oklch(0.78 0.075 12 / 0.08)",
  },
  {
    kana: "繋",
    number: "03",
    title: "Work & Connection",
    subtitle: "日本とつながる",
    description:
      "For foreigners who want to work in Japanese, people living abroad who want to stay connected to Japan, and anyone ready to start something online. Rie helps you find the right path forward.",
    accent: "oklch(0.56 0.068 148 / 0.75)",
    accentLight: "oklch(0.56 0.068 148 / 0.07)",
  },
  {
    kana: "食",
    number: "04",
    title: "Food, Culture & Travel",
    subtitle: "日本の生きた文化",
    description:
      "Japanese language classes, tea ceremony, kimono — sharing Japan's living culture. Pop-up dining experiences that bridge Japanese and local cuisines around the world. Family travel designed to give children a wider view of what's possible.",
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
              Four Pillars
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
