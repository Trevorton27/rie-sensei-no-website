const principles = [
  {
    jp: "間",
    romaji: "Ma",
    meaning: "The meaningful interval",
    description:
      "Between words, between meetings, between plans — the pause that gives shape to what surrounds it. Rie designs her work around the value of deliberate space.",
  },
  {
    jp: "侘び寂び",
    romaji: "Wabi-sabi",
    meaning: "Beauty in impermanence",
    description:
      "The crack in the ceramic, the asymmetry in the arrangement — nothing is permanent, and that is precisely what makes it beautiful.",
  },
  {
    jp: "道",
    romaji: "Dō",
    meaning: "The way of continuous practice",
    description:
      "Excellence is not a destination. It is a way of moving through the world — with attention, with discipline, with endless curiosity.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-28 md:py-44 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Full-width quote — large, centered serif */}
        <div className="text-center mb-24 md:mb-32 relative">
          {/* Large decorative kana */}
          <span
            className="absolute -top-8 left-1/2 -translate-x-1/2 font-japanese text-[160px] md:text-[220px] opacity-[0.04] leading-none select-none pointer-events-none"
            aria-hidden="true"
          >
            美
          </span>

          <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground block mb-8">
            Philosophy
          </span>

          <blockquote
            className="font-serif text-2xl md:text-4xl lg:text-5xl leading-[1.4] tracking-tight max-w-4xl mx-auto relative"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            <span
              className="text-6xl md:text-8xl leading-none opacity-20 font-serif absolute -top-4 -left-2 select-none"
              aria-hidden="true"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              &ldquo;
            </span>
            The goal is not perfection. The goal is{" "}
            <em
              className="not-italic"
              style={{ color: "oklch(0.78 0.075 12 / 0.9)" }}
            >
              presence
            </em>{" "}
            — a quality of attention so complete that the work becomes{" "}
            <em className="italic">inevitable.</em>
          </blockquote>

          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="ink-line-gold block w-16" />
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Rie Takagi
            </span>
            <span className="ink-line-gold block w-16" />
          </div>
        </div>

        {/* Three principles */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {principles.map((p) => (
            <PrincipleCard key={p.romaji} principle={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Principle = (typeof principles)[number];

function PrincipleCard({ principle: p }: { principle: Principle }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Large kana */}
      <div className="flex items-baseline gap-3">
        <span
          className="font-japanese text-4xl md:text-5xl leading-none"
          style={{ color: "oklch(0.78 0.075 12 / 0.55)" }}
          aria-hidden="true"
        >
          {p.jp}
        </span>
        <div className="flex flex-col">
          <span
            className="font-serif italic text-lg leading-tight"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            {p.romaji}
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            {p.meaning}
          </span>
        </div>
      </div>
      {/* Gold ink line */}
      <span className="ink-line-gold block w-full opacity-50" />
      <p className="text-sm leading-[1.85] text-muted-foreground">
        {p.description}
      </p>
    </div>
  );
}
