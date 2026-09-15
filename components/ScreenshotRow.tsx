import { Reveal } from "@/components/Reveal";
import type { ProjectSection } from "@/lib/projects";

export function ScreenshotRow({
  section,
  index,
}: {
  section: ProjectSection;
  index: number;
}) {
  const imageFirst = index % 2 === 0;

  return (
    <Reveal className="mx-auto max-w-4xl px-6 py-10">
      <div
        className={`flex flex-col gap-8 md:flex-row md:items-center ${
          imageFirst ? "" : "md:flex-row-reverse"
        }`}
      >
        <img
          src={section.screenshot}
          alt={section.heading}
          className="w-full flex-1 rounded-lg border border-border object-cover md:w-1/2"
        />
        <div className="flex-1">
          <h3 className="font-heading text-xl font-semibold text-foreground">
            {section.heading}
          </h3>
          <p className="mt-3 text-muted">{section.text}</p>
        </div>
      </div>
    </Reveal>
  );
}
