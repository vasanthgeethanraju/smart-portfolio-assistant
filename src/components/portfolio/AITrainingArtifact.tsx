import { BookOpen, BrainCircuit, CheckCircle2, Download, FileText, Layers3, ListChecks, SearchCheck, ShieldCheck, Target, Wrench } from "lucide-react";
import { ArtifactSection } from "./ArtifactSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { aiTrainingArtifact } from "@/content/ai-training";

const stageIcons = [SearchCheck, BrainCircuit, Layers3, CheckCircle2];

export function AITrainingArtifact() {
  const artifact = aiTrainingArtifact;

  return (
    <article id="artifact-3" aria-labelledby="artifact-3-heading" className="scroll-mt-24">
      <Card className="overflow-hidden shadow-md">
        <header className="p-6 sm:p-8 border-b border-border bg-secondary/30">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="secondary">Workshop 3</Badge>
            <span className="text-sm text-foreground/70">Assignment 3.3 · Learning interaction</span>
          </div>
          <p className="text-sm font-medium text-accent mb-2">Artifact 3</p>
          <h2 id="artifact-3-heading" className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight">{artifact.title}</h2>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            Understanding how language models learn, why they sometimes hallucinate,
            and when their answers should be verified.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["LLM training", "Hallucinations", "Critical thinking", "AI evaluation"].map((skill) => <Badge key={skill} variant="outline">{skill}</Badge>)}
          </div>
        </header>

        <div className="p-6 sm:p-8">
          <ArtifactSection id="artifact-3-introduction" title="Introduction" icon={<BookOpen className="h-5 w-5" />}>
            <p>
              For Assignment 3.3, I entered my professor’s Professor Predict prompt
              into ChatGPT. ChatGPT acted as an interactive instructor, guiding me
              through four learning stages and responding to my answers. The
              interaction examined how large language models learn, why they
              sometimes hallucinate, and when their answers should be verified.
            </p>
          </ArtifactSection>

          <ArtifactSection id="artifact-3-description" title="Description and Intended Audience" icon={<FileText className="h-5 w-5" />}>
            <p>
              My original three-page Word report documents the completed ChatGPT
              interaction for AIML-500 Machine Learning Fundamentals, Workshop 3,
              Assignment 3.3. After the four stages, ChatGPT generated a personalized
              completion summary based on my interaction. I documented that summary
              and my own reflection in Microsoft Word.
            </p>
            <p>
              <strong className="text-foreground">Intended audience:</strong>{" "}
              AI/ML beginners, students, and software engineers learning to evaluate
              AI output. The overview below explains the learning journey in plain
              language, with the original report available for download.
            </p>
          </ArtifactSection>

          <ArtifactSection id="artifact-3-objective" title="Objective" icon={<Target className="h-5 w-5" />}>
            <p>
              My objective was to use the guided ChatGPT interaction to understand
              AI training sources, recognize hallucinations, and distinguish Good
              Fit tasks from Danger Zone tasks. I applied lessons from the earlier
              stages when considering how reliable information, live data,
              calculators, or external tools affect a task’s suitability.
            </p>
          </ArtifactSection>

          <ArtifactSection id="artifact-3-process" title="Process" icon={<ListChecks className="h-5 w-5" />}>
            <h4 className="font-semibold text-foreground">My Four-Stage Learning Journey</h4>
            <ol className="grid gap-4 sm:grid-cols-2 pt-1">
              {artifact.stages.map((stage, index) => {
                const Icon = stageIcons[index];
                return (
                  <li key={stage.number} className="relative flex flex-col overflow-hidden rounded-xl border border-border bg-secondary/20 p-5">
                    <span aria-hidden="true" className="absolute right-4 top-3 text-5xl font-bold tracking-tight text-accent/15">{stage.number}</span>
                    <div aria-hidden="true" className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-xs font-medium uppercase tracking-wider text-foreground/60">Stage {stage.number}</p>
                    <h5 className="mt-1 font-semibold text-foreground">{stage.title}</h5>
                    <p className="mt-3 mb-4 text-sm leading-relaxed">{stage.description}</p>
                    <p className="mt-auto border-t border-border pt-3 text-sm font-medium text-foreground">{stage.insight}</p>
                  </li>
                );
              })}
            </ol>

            <aside aria-labelledby="artifact-3-insight-heading" className="rounded-xl border border-accent/30 bg-accent/5 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">Documented insight · Verification</p>
                  <h4 id="artifact-3-insight-heading" className="font-semibold text-lg leading-snug text-foreground">AI can sound confident without being correct.</h4>
                  <p className="mt-3 text-sm leading-relaxed">
                    The personalized completion summary generated by ChatGPT emphasizes
                    that LLMs generate plausible responses from learned patterns.
                    Their training data, post-training,
                    supplied context, and external tools influence reliability.
                    Assess the task and available information, and check important
                    answers before relying on them.
                  </p>
                </div>
              </div>
            </aside>
          </ArtifactSection>

          <ArtifactSection id="artifact-3-tools" title="Tools and Technologies Used" icon={<Wrench className="h-5 w-5" />}>
            <div className="flex flex-wrap gap-2">
              {artifact.tools.map((tool) => <Badge key={tool} variant="secondary">{tool}</Badge>)}
            </div>
            <p>
              I entered the professor-provided Professor Predict prompt into ChatGPT,
              which guided the four-stage interaction, responded to my answers,
              and generated the personalized completion summary. I used Microsoft
              Word to document that summary and my own reflection in the submitted
              three-page report.
            </p>
          </ArtifactSection>

          <ArtifactSection id="artifact-3-value-proposition" title="Value Proposition" icon={<Target className="h-5 w-5" />}>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Unique Value</h4>
              <p>
                This artifact captures my individual interaction with ChatGPT, my
                decisions, and my learning progression across four stages. It records
                my choice to say I did not know about Velmora and how I applied
                lessons about hallucinations and training data to evaluate task
                suitability in the final stage. The personalized completion summary
                documents that individual progression.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Relevance</h4>
              <p>
                As a software engineer, I need to evaluate AI responses critically
                and choose AI tools responsibly for real tasks. This exercise connects
                awareness of model limitations to practical decisions about what
                information is available, which tools a task needs, and when an
                answer should be verified before it is used.
              </p>
            </div>
          </ArtifactSection>

          <ArtifactSection id="artifact-3-references" title="References" icon={<BookOpen className="h-5 w-5" />}>
            <p>
              Source material: my professor’s Professor Predict prompt, which I
              entered into ChatGPT for Assignment 3.3. My original Word report
              documents ChatGPT’s personalized completion summary and my own
              reflection. The report does not cite external research sources or
              include a separate bibliography.
            </p>
          </ArtifactSection>

          <ArtifactSection id="artifact-3-actual-artifact" title="The Actual Artifact" icon={<FileText className="h-5 w-5" />}>
            <div className="rounded-lg border border-border bg-secondary/30 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <FileText aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-accent" />
                <div className="min-w-0">
                  <h4 className="font-semibold text-foreground">3.3 AI Training Interaction</h4>
                  <p className="mt-1 text-sm">Original Word document (.docx) · 3 pages</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm">
                {["Personalized completion summary generated by ChatGPT", "My personal reflection on all four learning stages"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-5 h-auto min-h-10 max-w-full whitespace-normal bg-accent py-3 text-left text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent">
                <a href={artifact.document.href} download={artifact.document.filename}>
                  <Download aria-hidden="true" /> <span>Download completed Word document</span>
                </a>
              </Button>
            </div>
          </ArtifactSection>
        </div>
      </Card>
    </article>
  );
}
