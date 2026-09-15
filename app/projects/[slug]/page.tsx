import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { ProjectHero } from "@/components/ProjectHero";
import { ScreenshotRow } from "@/components/ScreenshotRow";
import { getProjectBySlug, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Nav variant="project" />
      <main>
        <ProjectHero project={project} />
        {project.sections.map((section, index) => (
          <ScreenshotRow
            key={`${project.slug}-${section.heading}`}
            section={section}
            index={index}
          />
        ))}
      </main>
    </>
  );
}
