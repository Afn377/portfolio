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
    slug: "servicenow-rag-assistant",
    title: "ServiceNow AI Ticket Resolution Assistant",
    tagline:
      "AI-powered RAG assistant that surfaces cited resolution steps inside ServiceNow via a Chrome extension.",
    skills: [
      "Python",
      "FastAPI",
      "RAG",
      "Sentence Transformers",
      "DeepSeek API",
      "Docker",
      "AWS",
    ],
    links: { github: "https://github.com/Afn377/ServiceNow-Ticket-RAG" },
    sections: [
      {
        screenshot: "/placeholder-screenshot.svg",
        heading: "Retrieval pipeline",
        text: "Built a BGE embedding and semantic retrieval pipeline with Sentence Transformers and DeepSeek, achieving a 94.5% retrieval hit rate for relevant support knowledge across 200 test tickets.",
      },
      {
        screenshot: "/placeholder-screenshot.svg",
        heading: "Real-world impact",
        text: "Beta-tested with 10 consultants across 50 tickets, cutting average ticket-response time from 17 to 10 minutes (41%) — secured with client-side PII redaction and a Dockerized AWS backend.",
      },
    ],
  },
  {
    slug: "profiq",
    title: "ProfIQ — AI-Powered Professor Analytics Platform",
    tagline:
      "Django + React platform for professor search, comparison, review analytics, and recommendations.",
    skills: [
      "Python",
      "Django",
      "React",
      "PostgreSQL",
      "PyTorch",
      "Hugging Face",
    ],
    sections: [
      {
        screenshot: "/placeholder-screenshot.svg",
        heading: "Full-stack system",
        text: "Developed a Django REST + React system supporting professor search, filtering, comparison, review analytics, and recommendations, validated with 87 automated tests across backend and ML workflows.",
      },
      {
        screenshot: "/placeholder-screenshot.svg",
        heading: "ETL & ML at scale",
        text: "Engineered a resumable ETL pipeline using the RateMyProfessors GraphQL and Reddit JSON APIs — with pagination, deduplication, checkpointing, and validation — to analyze 350K+ student reviews across 1.7M+ professor records, achieving 85.7% sentiment-classification accuracy with MiniLM-based recommendations.",
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
