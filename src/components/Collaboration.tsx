const qualities = [
  "A foreigner in Japan who wants to work or build something using Japanese",
  "Living abroad, but wanting to connect with Japanese clients or culture",
  "Someone who wants to start something, but doesn't know where to begin",
  "A parent who wants to give your children a wider view of the world",
  "Someone drawn to Japanese food, language, and ways of living",
];

export default function Collaboration() {
  return (
    <section className="py-24 md:py-36 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-start">
          {/* Left text */}
          <div className="md:col-span-6">
            <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground block mb-4">
              Who Rie Works With
            </span>
            <h2
              className="font-serif text-4xl md:text-5xl leading-tight tracking-tight mb-8"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              You might be{" "}
              <em
                className="not-italic"
                style={{ color: "oklch(0.56 0.068 148 / 0.9)" }}
              >
                someone like this.
              </em>
            </h2>

            <p className="text-[15px] leading-[1.85] text-muted-foreground mb-8 max-w-md">
              Rie works with people at all kinds of starting points — not just
              those who already have a clear plan. What matters most is the
              willingness to take the next step.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase border border-foreground/25 px-8 py-4 hover:border-foreground/60 transition-colors duration-300 group"
            >
              Get in Touch
              <span className="block w-4 h-px bg-current opacity-60 group-hover:w-7 transition-all duration-300" />
            </a>
          </div>

          {/* Right — qualities list */}
          <div className="md:col-span-6 md:pl-8">
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
              You might be —
            </p>
            <ul className="space-y-0">
              {qualities.map((q, i) => (
                <QualityItem key={i} index={i} text={q} />
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-border/60">
              <p
                className="font-serif italic text-xl leading-relaxed text-muted-foreground"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
              >
                &ldquo;I don&apos;t tell people what to do. I help create the
                environment where they discover it themselves.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QualityItem({ index, text }: { index: number; text: string }) {
  return (
    <li className="flex items-center gap-5 py-4 border-b border-border/50 group">
      <span className="text-[9px] tracking-[0.3em] text-muted-foreground/40 w-5 shrink-0">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="w-px h-5 bg-border/60 shrink-0" aria-hidden="true" />
      <span className="text-sm leading-relaxed text-foreground/80 group-hover:text-foreground transition-colors duration-300">
        {text}
      </span>
    </li>
  );
}
