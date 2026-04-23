const qualities = [
  "Curious and deeply read",
  "Committed to craft over convenience",
  "Building something that outlasts a trend",
  "Interested in beauty as a form of intelligence",
  "Willing to think slowly in a fast world",
];

export default function Collaboration() {
  return (
    <section className="py-24 md:py-36 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-start">
          {/* Left text */}
          <div className="md:col-span-6">
            <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground block mb-4">
              Collaboration
            </span>
            <h2
              className="font-serif text-4xl md:text-5xl leading-tight tracking-tight mb-8"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              The people Rie works{" "}
              <em
                className="not-italic"
                style={{ color: "oklch(0.56 0.068 148 / 0.9)" }}
              >
                best with.
              </em>
            </h2>

            <p className="text-[15px] leading-[1.85] text-muted-foreground mb-8 max-w-md">
              Rie is selective about her collaborations — not from elitism, but
              from a conviction that the best work emerges from genuine
              alignment. She is drawn to people who share her values, even if
              their domain is entirely different from hers.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase border border-foreground/25 px-8 py-4 hover:border-foreground/60 transition-colors duration-300 group"
            >
              Begin a Conversation
              <span className="block w-4 h-px bg-current opacity-60 group-hover:w-7 transition-all duration-300" />
            </a>
          </div>

          {/* Right — qualities list */}
          <div className="md:col-span-6 md:pl-8">
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
              You are probably someone who is —
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
                &ldquo;I am not looking for the most impressive person in the
                room. I am looking for the most awake.&rdquo;
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
