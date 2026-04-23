export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-44">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Left */}
          <div className="md:col-span-5">
            <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground block mb-4">
              Contact
            </span>
            <h2
              className="font-serif text-4xl md:text-5xl leading-tight tracking-tight mb-8"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              Let us begin{" "}
              <em className="italic" style={{ fontWeight: 300 }}>
                slowly.
              </em>
            </h2>
            <p className="text-[15px] leading-[1.85] text-muted-foreground max-w-sm mb-10">
              Rie reads every message personally. She asks only that you write
              with the same intention with which she will reply.
            </p>

            {/* Decorative ikebana accent */}
            <div className="relative w-24 h-32 opacity-30" aria-hidden="true">
              <svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 50 135 C 49 110, 48 85, 46 55 C 44 35, 43 20, 45 5"
                  stroke="oklch(0.40 0.020 75)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 47 80 C 35 68, 18 62, 5 65"
                  stroke="oklch(0.40 0.020 75)"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M 46 50 C 62 42, 78 43, 88 50"
                  stroke="oklch(0.40 0.020 75)"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <circle cx="45" cy="5" r="8" fill="oklch(0.78 0.075 12 / 0.55)" />
                <circle cx="45" cy="5" r="4" fill="oklch(0.68 0.08 12 / 0.75)" />
                <circle cx="5" cy="64" r="6" fill="oklch(0.78 0.075 12 / 0.45)" />
                <circle cx="88" cy="50" r="5" fill="oklch(0.56 0.068 148 / 0.55)" />
                <ellipse cx="50" cy="134" rx="18" ry="3" fill="oklch(0.40 0.020 75 / 0.2)" />
              </svg>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <form
      action="mailto:rie@example.com"
      method="post"
      encType="text/plain"
      className="space-y-7"
    >
      <div className="grid sm:grid-cols-2 gap-7">
        <FormField id="name" label="Your Name" type="text" placeholder="Yamamoto Keiko" />
        <FormField id="email" label="Email Address" type="email" placeholder="keiko@example.com" />
      </div>
      <FormField id="subject" label="Subject" type="text" placeholder="What brings you here?" />
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Write freely. Rie appreciates thoughtfulness over brevity."
          className="w-full bg-transparent border border-border/70 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors duration-300 resize-none"
        />
      </div>
      <div className="flex items-center justify-between pt-2">
        <p className="text-[11px] text-muted-foreground/50 tracking-wide">
          She replies within a few days, thoughtfully.
        </p>
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

function FormField({
  id,
  label,
  type,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="bg-transparent border border-border/70 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors duration-300"
      />
    </div>
  );
}
