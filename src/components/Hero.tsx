export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle washi paper texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Asymmetric ikebana-inspired background shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Soft bloom — upper right */}
        <div
          className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.78 0.075 12) 0%, transparent 70%)",
          }}
        />
        {/* Soft bloom — lower left */}
        <div
          className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.56 0.068 148) 0%, transparent 70%)",
          }}
        />
        {/* Thin vertical brush stroke — right third */}
        <div
          className="absolute top-16 bottom-16 right-[30%] w-px opacity-20"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(0.78 0.075 12 / 0.6) 30%, oklch(0.78 0.075 12 / 0.4) 70%, transparent)",
          }}
        />
        {/* Thin horizontal brush stroke — lower area */}
        <div
          className="absolute bottom-[28%] left-16 right-[40%] h-px opacity-15"
          style={{
            background:
              "linear-gradient(to right, transparent, oklch(0.72 0.095 78 / 0.5) 40%, transparent)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 w-full pt-24 pb-16">
        <div className="grid md:grid-cols-12 gap-8 md:gap-0 items-center min-h-[80vh]">
          {/* Main content — left-aligned, asymmetric */}
          <div className="md:col-span-7 flex flex-col justify-center">
            {/* Japanese kana — subtle, above the name */}
            <p
              className="font-japanese text-sm tracking-[0.4em] opacity-40 mb-6"
              aria-hidden="true"
            >
              美・知・創
            </p>

            <h1
              className="font-serif leading-[1.1] tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
                fontWeight: 300,
              }}
            >
              Rie
              <br />
              <span
                className="italic"
                style={{ color: "oklch(0.78 0.075 12 / 0.85)" }}
              >
                Takagi
              </span>
            </h1>

            {/* Tagline with ink-line decoration */}
            <div className="flex items-center gap-4 mb-8">
              <span
                className="block h-px w-10 opacity-40"
                style={{
                  background:
                    "linear-gradient(to right, oklch(0.18 0.012 60), transparent)",
                }}
              />
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Writer · Educator · Artist
              </p>
            </div>

            <p
              className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-md mb-12"
              style={{ fontWeight: 300 }}
            >
              Devoted to the intersection of beauty and intellect — crafting
              words, cultivating minds, and building ventures with those who
              believe that elegance and excellence are inseparable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="#about"
                className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase border border-foreground/25 px-8 py-4 hover:border-foreground/60 transition-colors duration-300 group"
              >
                Discover More
                <span className="block w-4 h-px bg-current opacity-60 group-hover:w-7 transition-all duration-300" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right side — decorative ikebana composition */}
          <div
            className="hidden md:flex md:col-span-5 flex-col items-end justify-center"
            aria-hidden="true"
          >
            <IkebanaComposition />
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <p className="text-[10px] tracking-[0.35em] uppercase">Scroll</p>
          <div className="w-px h-10 bg-foreground/40 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

function IkebanaComposition() {
  return (
    <svg
      viewBox="0 0 300 500"
      className="w-64 lg:w-80 h-auto opacity-75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Abstract ikebana floral arrangement"
      role="img"
    >
      {/* Main stem — tall, slightly curved */}
      <path
        d="M 155 480 C 152 420, 148 360, 142 280 C 138 220, 135 160, 140 80"
        stroke="oklch(0.40 0.020 75)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Branch left — medium */}
      <path
        d="M 148 300 C 130 270, 100 240, 60 210"
        stroke="oklch(0.40 0.020 75)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Branch right — short */}
      <path
        d="M 144 220 C 165 200, 190 185, 220 170"
        stroke="oklch(0.40 0.020 75)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Secondary stem — shorter, off-center */}
      <path
        d="M 180 480 C 178 440, 172 400, 168 350 C 164 310, 162 280, 165 240"
        stroke="oklch(0.40 0.020 75)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Bloom 1 — top of main stem, sakura */}
      <circle cx="140" cy="78" r="16" fill="oklch(0.85 0.065 12 / 0.5)" />
      <circle cx="140" cy="78" r="10" fill="oklch(0.78 0.075 12 / 0.65)" />
      <circle cx="140" cy="78" r="4" fill="oklch(0.68 0.08 12 / 0.8)" />

      {/* Bloom 2 — left branch end */}
      <circle cx="58" cy="208" r="13" fill="oklch(0.85 0.065 12 / 0.4)" />
      <circle cx="58" cy="208" r="8" fill="oklch(0.78 0.075 12 / 0.55)" />
      <circle cx="58" cy="208" r="3" fill="oklch(0.68 0.08 12 / 0.7)" />

      {/* Bloom 3 — right branch, moss green */}
      <circle cx="222" cy="168" r="11" fill="oklch(0.65 0.068 148 / 0.35)" />
      <circle cx="222" cy="168" r="6" fill="oklch(0.56 0.068 148 / 0.55)" />

      {/* Bloom 4 — secondary stem top, gold */}
      <circle cx="166" cy="238" r="9" fill="oklch(0.82 0.085 78 / 0.45)" />
      <circle cx="166" cy="238" r="5" fill="oklch(0.72 0.095 78 / 0.6)" />
      <circle cx="166" cy="238" r="2" fill="oklch(0.62 0.10 78 / 0.75)" />

      {/* Leaf — left side */}
      <path
        d="M 148 340 C 120 325, 95 330, 80 350 C 100 345, 125 342, 148 340 Z"
        fill="oklch(0.56 0.068 148 / 0.35)"
      />
      {/* Leaf — right side */}
      <path
        d="M 145 260 C 170 248, 195 252, 210 265 C 190 258, 165 257, 145 260 Z"
        fill="oklch(0.56 0.068 148 / 0.30)"
      />

      {/* Kenzan (flower pin base) */}
      <ellipse
        cx="162"
        cy="478"
        rx="45"
        ry="6"
        fill="oklch(0.40 0.020 75 / 0.25)"
      />
      {/* Vase outline — minimal, elegant */}
      <path
        d="M 125 478 C 118 470, 115 455, 117 440 C 119 430, 125 425, 130 420 L 195 420 C 200 425, 206 430, 208 440 C 210 455, 207 470, 200 478 Z"
        stroke="oklch(0.40 0.020 75 / 0.35)"
        strokeWidth="1"
        fill="oklch(0.72 0.095 78 / 0.08)"
      />
    </svg>
  );
}
