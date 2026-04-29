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
              22 years of experience,{" "}
              <em
                className="not-italic"
                style={{ color: "oklch(0.78 0.075 12 / 0.9)" }}
              >
                now on your side.
              </em>
            </h2>

            <div className="space-y-5 text-[15px] leading-[1.85] text-muted-foreground">
              <p>
                Rie Takagi spent 22 years in corporate life, including over 10
                years as an executive secretary at a global corporation of
                40,000 people.
              </p>
              <p>
                Today she runs Bloom Link — supporting small businesses with
                online operations, and helping individuals build a working life
                that truly fits them.
              </p>
              <p>
                She is a Japanese language educator who believes that language
                carries culture. She wears kimono, practices tea ceremony, and
                shares the depth of Japanese tradition with those around her.
              </p>
              <p>
                She has also taken action beyond borders: delivering stationery
                donations directly to children in the Philippines, and hosting a
                pop-up restaurant in Chiang Mai — fusing Japanese ingredients
                with local Thai cuisine.
              </p>
              <p>
                She travels with her children to expose them to different
                cultures, believing that a wider view of the world opens up a
                wider sense of what&apos;s possible in life.
              </p>
              <p>
                Her vision: to connect Japan and the world through food, travel,
                and meaningful work.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border/60">
              <p
                className="font-serif italic text-xl leading-relaxed"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
              >
                &ldquo;When the environment is right, people naturally begin to
                move.&rdquo;
              </p>
            </div>
          </div>

          {/* Right — quiet detail */}
          <div className="hidden md:flex md:col-span-3 flex-col items-end justify-start gap-8 md:pt-3">
            <div className="flex flex-col items-end gap-2 text-right">
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60">
                Based in
              </span>
              <span className="text-sm text-muted-foreground">Japan</span>
            </div>
            <div className="flex flex-col items-end gap-2 text-right">
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60">
                Languages
              </span>
              <span className="text-sm text-muted-foreground">日本語 · EN</span>
            </div>
            <div className="flex flex-col items-end gap-2 text-right">
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60">
                Work
              </span>
              <span className="text-sm text-muted-foreground">
                Business Support
                <br />
                Coaching · Culture
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
