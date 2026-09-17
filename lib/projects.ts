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
  cardScreenshot: string;
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
      "A Chrome extension that turns support tickets into actionable troubleshooting steps, with knowledge-base citations and explicit uncertainty labels.",
    skills: ["Python", "FastAPI", "RAG", "Chrome Extension"],
    cardScreenshot: "/projects/servicenow-rag-assistant/card.jpg",
    links: { github: "https://github.com/Afn377/ServiceNow-Ticket-RAG" },
    sections: [
      {
        screenshot: "/projects/servicenow-rag-assistant/1.jpg",
        heading: "Help inside the support workflow",
        text: "Support consultants need to connect a ticket's symptoms with the right troubleshooting documentation. I built a Chrome side panel that reads the current incident and presents suggested next steps alongside the ticket.",
      },
      {
        screenshot: "/projects/servicenow-rag-assistant/2.jpg",
        heading: "From ticket to cited recommendation",
        text: "The pipeline searches 1,394 cleaned knowledge-base articles using BGE embeddings and category-aware ranking. DeepSeek turns the retrieved material into structured steps with source citations and SUPPORTED, INFERRED, or UNCERTAIN labels. At this scale, an in-memory NumPy index is enough — brute-force cosine similarity across all 1,394 articles finishes in single-digit milliseconds, so a dedicated vector database would only add operational complexity without a real latency win.",
      },
      {
        screenshot: "/projects/servicenow-rag-assistant/3.jpg",
        heading: "Handling weak evidence",
        text: "Each recommended step carries its own confidence label — SUPPORTED means it's grounded directly in a cited KB article, INFERRED means the model reasoned beyond what's explicitly written. When retrieval turns up nothing usable at all, the system skips generation entirely and returns an insufficient-evidence response instead of guessing.",
      },
      {
        screenshot: "/projects/servicenow-rag-assistant/4.jpg",
        heading: "Evaluating retrieval quality",
        text: "On 200 hand-written evaluation tickets, an expected article appeared in the top five results for 189 of them — a 94.5% hit rate, with a mean reciprocal rank of 0.845. These numbers measure how well the system finds the right article, not whether a ticket actually got resolved.",
      },
    ],
  },
  {
    slug: "profiq",
    title: "ProfIQ — AI-Powered Professor Analytics Platform",
    tagline:
      "Search and compare professors using student-review sentiment, recurring themes, and recommendations based on similar review profiles.",
    skills: ["React", "Django REST", "NLP", "scikit-learn"],
    cardScreenshot: "/projects/profiq/card.jpg",
    links: { github: "https://github.com/Afn377/ProfIQ" },
    sections: [
      {
        screenshot: "/projects/profiq/1.jpg",
        heading: "Make reviews easier to compare",
        text: "ProfIQ brings professor search, review analytics, and comparison into one interface, helping students explore patterns across reviews before choosing a class.",
      },
      {
        screenshot: "/projects/profiq/2.jpg",
        heading: "From individual reviews to a clearer profile",
        text: "Professor profiles combine sentiment summaries, recurring review themes, and similar-professor recommendations. A comparison view places those signals side by side for two professors at once.",
      },
      {
        screenshot: "/projects/profiq/3.jpg",
        heading: "Build a recoverable data pipeline",
        text: "The professor catalog and review corpus are collected from the RateMyProfessors GraphQL API and Reddit's JSON API. Because collection runs long enough to get interrupted, the pipeline paginates through results, checkpoints progress, deduplicates records, and validates each batch — so a dropped connection resumes cleanly instead of re-fetching everything or creating duplicate entries.",
      },
      {
        screenshot: "/projects/profiq/4.jpg",
        heading: "Choose models for the running application",
        text: "The live app scores every review with a fast VADER baseline (76.4% test accuracy) and an optional TF-IDF/logistic-regression classifier (80.2% accuracy, evaluated on a larger 52,445-review test set) as a second signal, then recommends similar professors using MiniLM embeddings — a separate task measured by a 4.17x department-purity lift, not sentiment accuracy. DistilBERT, evaluated offline only, reached the highest raw accuracy at 85.7%, but transformer inference is too slow to run inline on every API request, and its macro-F1 of 0.64 trails the logistic-regression classifier's 0.72 — which balances the underrepresented neutral class better — so it remained a comparison point rather than a live upgrade.",
      },
    ],
  },
  {
    slug: "ucl-match-forecasting",
    title: "UCL Match Forecasting",
    tagline:
      "Forecast Champions League match outcomes using football statistics and market odds, with chronological evaluation and recorded pre-match predictions.",
    skills: ["Python", "pandas", "scikit-learn", "Statistical Modeling"],
    cardScreenshot: "/projects/ucl-match-forecasting/card.jpg",
    links: { github: "https://github.com/Afn377/UCL-Predictor" },
    sections: [
      {
        screenshot: "/projects/ucl-match-forecasting/1.jpg",
        heading: "Predict probabilities, not just winners",
        text: "The project estimates home-win, draw, and away-win probabilities for regulation-time Champions League matches, comparing football-based models against market-odds and base-rate benchmarks rather than just picking a winner.",
      },
      {
        screenshot: "/projects/ucl-match-forecasting/2.jpg",
        heading: "Build features available before kickoff",
        text: "Each match is described using only information available before kickoff — Elo ratings, recent form, goals, rest days, fixture congestion, venue performance, and expected goals (xG) — built chronologically so no feature ever leaks information from after the match. Models retrain on a rolling two-year window ahead of each evaluation season.",
      },
      {
        screenshot: "/projects/ucl-match-forecasting/3.jpg",
        heading: "Compare against meaningful baselines",
        text: "Five models were compared on the same 966 UCL fixtures, evaluated on accuracy, log loss, and ranked probability score rather than accuracy alone. The closing-odds benchmark led at 62.22% accuracy, with a football/odds blend close behind at 61.80%. Football features alone (with xG) reached 59.83%, and a combined logistic model scored 58.70%, both comfortably ahead of the 47.41% base rate — a sign the engineered features carry real signal, even though closing-market odds, gathered minutes before kickoff, remain a tough benchmark to beat. These are retrospective results on previously-inspected development seasons, not a held-out test of future accuracy.",
      },
      {
        screenshot: "/projects/ucl-match-forecasting/4.jpg",
        heading: "Record predictions before results exist",
        text: "A forecasting workflow freezes model artifacts, checks quote freshness and kickoff timing, and records each prediction in an append-only SQLite ledger before the match is played — so it can be scored later without any chance of hindsight leaking in. Quote collection is currently a manual step; automating live tracking is still on the roadmap.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
