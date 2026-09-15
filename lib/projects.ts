export type ProjectSection = {
  screenshot: string;
  heading: string;
  text: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  skills: string[];
  links?: {
    github?: string;
    demo?: string;
  };
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    tagline: "A one-line description of what this project does.",
    skills: ["React", "TypeScript", "Node.js"],
    links: { github: "https://github.com/yourname/project-one" },
    sections: [
      {
        screenshot: "/placeholder-screenshot.svg",
        heading: "Overview",
        text: "Describe the core feature shown in this screenshot and why it matters.",
      },
      {
        screenshot: "/placeholder-screenshot.svg",
        heading: "Key feature",
        text: "Describe a second feature or workflow shown here.",
      },
    ],
  },
  {
    slug: "project-two",
    title: "Project Two",
    tagline: "A one-line description of what this project does.",
    skills: ["Python", "PostgreSQL", "Docker"],
    links: { github: "https://github.com/yourname/project-two" },
    sections: [
      {
        screenshot: "/placeholder-screenshot.svg",
        heading: "Overview",
        text: "Describe the core feature shown in this screenshot and why it matters.",
      },
      {
        screenshot: "/placeholder-screenshot.svg",
        heading: "Key feature",
        text: "Describe a second feature or workflow shown here.",
      },
    ],
  },
  {
    slug: "project-three",
    title: "Project Three",
    tagline: "A one-line description of what this project does.",
    skills: ["Next.js", "Tailwind CSS", "Vercel"],
    links: { demo: "https://project-three.vercel.app" },
    sections: [
      {
        screenshot: "/placeholder-screenshot.svg",
        heading: "Overview",
        text: "Describe the core feature shown in this screenshot and why it matters.",
      },
      {
        screenshot: "/placeholder-screenshot.svg",
        heading: "Key feature",
        text: "Describe a second feature or workflow shown here.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
