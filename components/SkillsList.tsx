import { Reveal } from "@/components/Reveal";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Tailwind CSS",
  "Git",
];

export function SkillsList() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Skills
        </h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
