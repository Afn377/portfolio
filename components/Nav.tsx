import Link from "next/link";

export function Nav({
  variant = "landing",
}: {
  variant?: "landing" | "project";
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-heading text-lg font-semibold text-foreground"
        >
          Your Name
        </Link>
        {variant === "landing" ? (
          <ul className="flex gap-6 text-sm text-muted">
            <li>
              <a href="#skills" className="transition-colors hover:text-accent">
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="transition-colors hover:text-accent"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-colors hover:text-accent"
              >
                Contact
              </a>
            </li>
          </ul>
        ) : (
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            ← Home
          </Link>
        )}
      </nav>
    </header>
  );
}
