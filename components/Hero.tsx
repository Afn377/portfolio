import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-6 py-24 md:flex-row">
      <Reveal className="flex-1 text-center md:text-left">
        <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
          Your Name
        </h1>
        <p className="mt-3 text-lg text-accent">Software Engineering Student</p>
        <p className="mt-6 max-w-xl text-muted">
          A short bio goes here — a couple of sentences about who you are,
          what you build, and what kind of internship you&apos;re looking
          for.
        </p>
        <div className="mt-8 flex justify-center gap-4 md:justify-start">
          <a
            href="#contact"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent/90"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent"
          >
            View projects
          </a>
        </div>
      </Reveal>
      <Reveal className="flex-shrink-0">
        <img
          src="/photo-placeholder.svg"
          alt="Portrait photo"
          className="h-48 w-48 rounded-full border border-border object-cover md:h-56 md:w-56"
        />
      </Reveal>
    </section>
  );
}
