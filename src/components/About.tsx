export default function About() {
  return (
    <section id="about" className="py-28 md:py-40">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Left — label + accent line */}
          <div className="md:col-span-3 flex flex-col items-start md:pt-3">
            <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-4">
              About
            </span>
            <span
              className="block w-px h-20 opacity-30"
              style={{
                background:
                  "linear-gradient(to bottom, oklch(0.78 0.075 12), transparent)",
              }}
            />
            <span
              className="mt-4 font-japanese text-5xl opacity-10 leading-none select-none"
              aria-hidden="true"
            >
              私
            </span>
          </div>

          {/* Center — main text */}
          <div className="md:col-span-6">
            <h2
              className="font-serif text-4xl md:text-5xl leading-[1.2] tracking-tight mb-8"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              A life lived at the{" "}
              <em
                className="not-italic"
                style={{ color: "oklch(0.78 0.075 12 / 0.9)" }}
              >
                intersection
              </em>{" "}
              of beauty and purpose.
            </h2>

            <div className="space-y-5 text-[15px] leading-[1.85] text-muted-foreground">
              <p>
                Born in Kyoto and shaped by a world that crosses cultural
                boundaries, Rie Takagi is a writer, educator, and entrepreneur
                who believes that the pursuit of beauty is inseparable from the
                pursuit of meaning.
              </p>
              <p>
                Her education spans literature, philosophy, and business — a
                triad she inhabits not in sequence but simultaneously, allowing
                each discipline to inform and enrich the others. She writes with
                the precision of a scholar and the sensibility of a poet.
              </p>
              <p>
                Outside of her creative practice, Rie advises organizations and
                builds ventures that place culture and craft at their core. She
                is particularly drawn to people and projects that refuse to
                choose between intellectual rigor and aesthetic excellence.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border/60">
              <p
                className="font-serif italic text-xl leading-relaxed"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
              >
                &ldquo;In ikebana, emptiness is not absence — it is breath. I
                carry that principle into everything I make.&rdquo;
              </p>
            </div>
          </div>

          {/* Right — quiet detail */}
          <div className="hidden md:flex md:col-span-3 flex-col items-end justify-start gap-8 md:pt-3">
            <div className="flex flex-col items-end gap-2 text-right">
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60">
                Based in
              </span>
              <span className="text-sm text-muted-foreground">
                Tokyo · New York
              </span>
            </div>
            <div className="flex flex-col items-end gap-2 text-right">
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60">
                Languages
              </span>
              <span className="text-sm text-muted-foreground">日本語 · EN</span>
            </div>
            <div className="flex flex-col items-end gap-2 text-right">
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60">
                Discipline
              </span>
              <span className="text-sm text-muted-foreground">
                Writing · Business
                <br />
                Education · Art
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
