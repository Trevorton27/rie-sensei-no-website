import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Starting an Online Business in Japan — Rie Takagi",
  description:
    "Are you a foreigner living in Japan and thinking about building something of your own? Rie Takagi helps you find your direction and take your first real steps toward earning online.",
};

export default function ForForeigners() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Programs />
        <Stories />
        <LanguageNote />
        <JapaneseWebsite />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.78 0.075 12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.56 0.068 148) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 w-full pt-32 pb-20">
        <div className="max-w-2xl">
          <p
            className="font-japanese text-sm tracking-[0.4em] opacity-40 mb-6"
            aria-hidden="true"
          >
            外国人の方へ
          </p>

          <h1
            className="font-serif leading-[1.1] tracking-tight mb-8"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 300,
            }}
          >
            Start Your Online Business{" "}
            <em
              className="not-italic"
              style={{ color: "oklch(0.78 0.075 12 / 0.85)" }}
            >
              in Japan.
            </em>
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-lg mb-4"
            style={{ fontWeight: 300 }}
          >
            Are you a foreigner living in Japan — or connected to Japan — and
            thinking about building something of your own?
          </p>
          <p
            className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-lg mb-12"
            style={{ fontWeight: 300 }}
          >
            You don&apos;t need to have it all figured out.
            <br />
            That&apos;s exactly where Rie starts.
          </p>

          <a
            href="#programs"
            className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase border border-foreground/25 px-8 py-4 hover:border-foreground/60 transition-colors duration-300 group"
          >
            See Programs
            <span className="block w-4 h-px bg-current opacity-60 group-hover:w-7 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" className="py-24 md:py-36 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground block mb-3">
            Programs
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            How Rie Can Help
          </h2>
        </div>

        <span className="ink-line block mb-14 opacity-40" />

        <div className="grid md:grid-cols-2 gap-px bg-border/40">
          <ProgramCard
            number="01"
            kana="導"
            title="1on1 Business Coaching"
            description="Not sure what you want to build yet? That's okay. Rie helps you find your direction and take your first real steps toward earning online in Japan."
            accent="oklch(0.78 0.075 12 / 0.7)"
            accentLight="oklch(0.78 0.075 12 / 0.08)"
          />
          <ProgramCard
            number="02"
            kana="実"
            title="Online Partner Program"
            description="A practical course to build skills and start earning — step by step, at your own pace."
            accent="oklch(0.56 0.068 148 / 0.75)"
            accentLight="oklch(0.56 0.068 148 / 0.07)"
          />
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  number,
  kana,
  title,
  description,
  accent,
  accentLight,
}: {
  number: string;
  kana: string;
  title: string;
  description: string;
  accent: string;
  accentLight: string;
}) {
  return (
    <article
      className="group relative bg-background p-8 md:p-10 flex flex-col gap-6 overflow-hidden transition-colors duration-500"
      style={
        {
          "--pillar-accent": accent,
          "--pillar-light": accentLight,
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `var(--pillar-light)` }}
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between">
        <span className="text-[10px] tracking-[0.3em] text-muted-foreground/60">
          {number}
        </span>
        <span
          className="font-japanese text-5xl leading-none opacity-15 select-none"
          aria-hidden="true"
        >
          {kana}
        </span>
      </div>

      <div className="relative">
        <div
          className="absolute -left-8 md:-left-10 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `var(--pillar-accent)` }}
          aria-hidden="true"
        />
        <h3
          className="font-serif text-3xl md:text-4xl leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
        >
          {title}
        </h3>
      </div>

      <p className="relative text-sm leading-[1.85] text-muted-foreground">
        {description}
      </p>
    </article>
  );
}

const testimonials = [
  "I didn't know where to start. After talking with Rie, I finally felt ready to take my first step.",
  "One conversation changed everything. I found clarity I didn't know I was missing.",
  "I couldn't do it alone. Rie was there to help me move forward — at my own pace.",
];

function Stories() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground block mb-3">
            Real Stories
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            From People Like You
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((quote, i) => (
            <blockquote key={i} className="flex flex-col gap-4">
              <span className="ink-line-gold block w-full opacity-50" />
              <p
                className="font-serif italic text-lg leading-relaxed text-muted-foreground"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
              >
                &ldquo;{quote}&rdquo;
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function LanguageNote() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl border-l-2 border-foreground/15 pl-8">
          <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground block mb-4">
            One thing to know
          </span>
          <p className="text-[15px] leading-[1.85] text-muted-foreground mb-4">
            Both programs are conducted in Japanese. Basic Japanese ability is
            helpful.
          </p>
          <p className="text-[15px] leading-[1.85] text-muted-foreground">
            Not sure if your level is enough? Feel free to ask.
            <br />
            Let&apos;s find out together.
          </p>
        </div>
      </div>
    </section>
  );
}

function JapaneseWebsite() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div>
            <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground block mb-3">
              日本語サイト
            </span>
            <p className="text-[15px] leading-[1.85] text-muted-foreground mb-4">
              More details available in Japanese here:
            </p>
            <a
              href="https://salmon934503.studio.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase border border-foreground/25 px-8 py-4 hover:border-foreground/60 transition-colors duration-300 group"
            >
              Bloom Link
              <span className="block w-4 h-px bg-current opacity-60 group-hover:w-7 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-28 md:py-36 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="max-w-xl">
          <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground block mb-4">
            Ready?
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl leading-tight tracking-tight mb-8"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Get in Touch{" "}
            <em
              className="not-italic"
              style={{ color: "oklch(0.78 0.075 12 / 0.85)" }}
            >
              with Rie.
            </em>
          </h2>
          <p className="text-[15px] leading-[1.85] text-muted-foreground mb-10">
            Send a message and let Rie know where you are right now. You
            don&apos;t need all the answers — just a willingness to start.
          </p>
          <CTAForm />
        </div>
      </div>
    </section>
  );
}

function CTAForm() {
  return (
    <form action="mailto:rie@example.com" method="post" encType="text/plain" className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="fi-name"
            className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
          >
            Your Name
          </label>
          <input
            id="fi-name"
            name="name"
            type="text"
            placeholder="Your name"
            className="bg-transparent border border-border/70 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors duration-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="fi-email"
            className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
          >
            Email Address
          </label>
          <input
            id="fi-email"
            name="email"
            type="email"
            placeholder="your@email.com"
            className="bg-transparent border border-border/70 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="fi-message"
          className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
        >
          Your Message
        </label>
        <textarea
          id="fi-message"
          name="message"
          rows={5}
          placeholder="Tell Rie where you are right now — and what you're hoping for."
          className="w-full bg-transparent border border-border/70 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors duration-300 resize-none"
        />
      </div>
      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase bg-foreground text-background px-8 py-4 hover:bg-foreground/85 transition-colors duration-300 group"
        >
          Send
          <span className="block w-4 h-px bg-current opacity-60 group-hover:w-7 transition-all duration-300" />
        </button>
      </div>
    </form>
  );
}
