import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

type Project = {
  name: string;
  summary: string;
  details: string[];
  tech: string[];
  github: string;
  inProgress?: boolean;
};

const projects: Project[] = [
  {
    name: "Smart Portfolio Assistant",
    summary:
      "The AI assistant on this site. Recruiters can ask about my experience, skills, and projects, and it answers from my resume.",
    details: [
      "React + TypeScript frontend deployed on Vercel.",
      "Each question goes to a Supabase Edge Function, which loads my resume text from Postgres and passes it to Gemini in the system prompt, along with rules to stay factual, use the latest resume for dates, and ignore instructions hidden in documents.",
      "Uses full-context prompting rather than retrieval: the resumes are small enough to send in full, so there are no embeddings or vector search.",
      "Resume uploads go through a password-checked edge function, and row-level security blocks public writes to the database.",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind", "Supabase", "Edge Functions", "Gemini", "Vercel"],
    github: "https://github.com/vasanthgeethanraju/smart-portfolio-assistant",
  },
  {
    name: "SF Penya Agent",
    summary:
      "An AI match-day assistant for Penya Barcelonista San Francisco, the local FC Barcelona supporters club.",
    details: [
      "Finds the next Barça match and gathers local San Francisco context: weather, events, and transit alerts.",
      "Generates match-day posts and a poster with the OpenAI API, validated against Zod schemas.",
      "Emails an approval package and publishes only after a human approves, to sandbox WhatsApp, Instagram, and email channels.",
    ],
    tech: ["TypeScript", "Node.js", "Express", "OpenAI API", "Zod", "Gmail API"],
    github: "https://github.com/vasanthgeethanraju/sf-penya-agent",
    inProgress: true,
  },
  {
    name: "Jobs Follow-up Agent",
    summary:
      "A command-line tool that checks my Gmail and lists which job applications are due for a follow-up.",
    details: [
      "Reads the applications I've sent and skips any that got a reply, bounced, were already followed up, or are outside a configurable day window.",
      "Also skips a company if a rejection or next-steps email from it appears in any other conversation.",
      "Keeps the follow-up rules separate from the Gmail API code so they're easy to unit-test.",
    ],
    tech: ["Go", "Gmail API", "OAuth 2.0"],
    github: "https://github.com/vasanthgeethanraju/jobs-followup-agent",
  },
  {
    name: "Job Search",
    summary:
      "A personal tool to search job postings across Greenhouse, Lever, Ashby, and other platforms in one go.",
    details: [
      "Pick a job title, a time range, and the platforms to include.",
      "Builds a targeted Google site search across all selected platforms.",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
    github: "https://github.com/vasanthgeethanraju/JobSearch",
    inProgress: true,
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Projects</h1>
            <p className="text-foreground/80">Things I've built outside of work, mostly around AI agents and automation.</p>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <Card key={project.name} className="p-8 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h2 className="text-xl font-bold text-foreground">{project.name}</h2>
                    {project.inProgress && <Badge variant="outline">In progress</Badge>}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-accent hover:underline flex-shrink-0"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>
                </div>

                <p className="text-foreground/80 leading-relaxed mb-4">{project.summary}</p>

                <ul className="space-y-2 text-foreground/80 mb-5">
                  {project.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span aria-hidden="true">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
