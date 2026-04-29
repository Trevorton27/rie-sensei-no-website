const year = new Date().getFullYear();

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Substack", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Name + tagline */}
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-2">
              <span
                className="font-japanese text-sm opacity-40"
                aria-hidden="true"
              >
                高木理恵
              </span>
              <span
                className="font-serif text-base tracking-wider"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
              >
                Rie Takagi
              </span>
            </div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/60">
              Online Business Partner · Educator · Japan Culture &amp; Travel
            </p>
          </div>

          {/* Social links */}
          <nav className="flex items-center gap-6">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/60 hover:text-foreground transition-colors duration-300"
              >
                {s.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground/40">
            &copy; {year} Rie Takagi. All rights reserved.
          </p>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-10">
          <span className="ink-line block opacity-30" />
          <p
            className="text-center mt-4 font-japanese text-xs opacity-15 tracking-[0.5em] select-none"
            aria-hidden="true"
          >
            美・知・創・道
          </p>
        </div>
      </div>
    </footer>
  );
}
