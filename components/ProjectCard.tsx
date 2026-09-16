import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-accent"
    >
      <img
        src={project.cardScreenshot}
        alt={`${project.title} screenshot`}
        className="h-40 w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-link">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-4">
          {project.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
