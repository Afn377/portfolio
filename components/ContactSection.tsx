import { Reveal } from "@/components/Reveal";

const links = [
  { label: "Email", href: "mailto:you@example.com" },
  { label: "GitHub", href: "https://github.com/yourname" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
];

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Contact
        </h2>
        <p className="mt-3 text-muted">
          Interested in working together? Reach out through any of these.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/90"
          >
            Download resume
          </a>
        </div>
      </Reveal>
    </section>
  );
}
