import type { Project } from "@/lib/projects";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
        {project.title}
      </h1>
      <p className="mt-3 text-lg text-muted">{project.tagline}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-border px-3 py-1 text-xs text-foreground"
          >
            {skill}
          </li>
        ))}
      </ul>
      {(project.links?.github || project.links?.demo) && (
        <div className="mt-6 flex gap-4">
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/90"
            >
              Live demo
            </a>
          )}
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent"
            >
              Source code
            </a>
          )}
        </div>
      )}
    </section>
  );
}
