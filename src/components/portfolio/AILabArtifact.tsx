import { ArrowUpRight, BookOpen, Bot, CheckCircle2, Download, FileText, FlaskConical, ListChecks, Maximize2, Target, Wrench } from "lucide-react";
import { ArtifactSection } from "./ArtifactSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { aiLabArtifact } from "@/content/ai-lab";

export function AILabArtifact() {
  const lab = aiLabArtifact;

  return (
    <article id="artifact-2" aria-labelledby="artifact-2-heading" className="scroll-mt-24">
      <Card className="overflow-hidden shadow-md">
        <header className="p-6 sm:p-8 border-b border-border bg-secondary/30">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="secondary">Workshop 1</Badge>
            <span className="text-sm text-foreground/70">Assignment 1.4 · AI Lab</span>
          </div>
          <p className="text-sm font-medium text-accent mb-2">Artifact 2</p>
          <h2 id="artifact-2-heading" className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight">{lab.title}</h2>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            From comparing AI-generated messages to building, testing, and improving
            a match-day assistant for a supporters club.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Design thinking", "Prompt design", "Chatbot testing"].map((skill) => <Badge key={skill} variant="outline">{skill}</Badge>)}
          </div>
        </header>

        <div className="p-6 sm:p-8">
          <ArtifactSection id="artifact-2-introduction" title="Introduction" icon={<BookOpen className="h-5 w-5" />}>
            <p>
              This AI Lab gave me hands-on experience with AI writing, research, and
              chatbot tools. I used a familiar problem from our FC Barcelona supporters
              club in San Francisco: making match-day announcements friendlier and
              helping members find clear watch-party information.
            </p>
            <p>
              Created for AIML-500: Machine Learning Fundamentals, this artifact
              complements my historical timeline by showing how I apply AI tools,
              evaluate their responses, and improve a prototype through testing.
            </p>
          </ArtifactSection>

          <ArtifactSection id="artifact-2-description" title="Description" icon={<FileText className="h-5 w-5" />}>
            <p>
              The Word document records three AI experiments, the five design-thinking
              phases, chatbot planning, tool selection, development, testing, privacy
              considerations, and my conclusions. It includes 21 figures documenting
              the experiments, configuration, and chatbot responses.
            </p>
            <p>
              My FC Barcelona Fan Assistant prototype uses Chatbase to draft WhatsApp
              announcements and answer questions about venues, kickoff times, and +1
              guests using organizer-provided information. All match details used in
              the lab are fictional test data.
            </p>
            <p>
              <strong className="text-foreground">Intended audience:</strong>{" "}
              Fellow AI/ML students, software engineers, and community organizers.
              The portfolio summary explains the problem and results in plain language;
              the original document provides the detailed prompts, screenshots, and
              development record.
            </p>
          </ArtifactSection>

          <ArtifactSection id="artifact-2-objective" title="Objective" icon={<Target className="h-5 w-5" />}>
            <p>
              My goal was to compare how AI tools support writing and research, then
              use design thinking to build a focused assistant for a real communication
              need. I wanted it to give clear, friendly answers, use the supplied event
              information, ask for missing details, and produce drafts for organizer
              approval.
            </p>
          </ArtifactSection>

          <ArtifactSection id="artifact-2-process" title="Process" icon={<ListChecks className="h-5 w-5" />}>
            <ol className="space-y-5 list-decimal pl-5">
              {lab.process.map((step) => (
                <li key={step.title} className="pl-1">
                  <h4 className="font-semibold text-foreground">{step.title}</h4>
                  <p className="mt-1">{step.description}</p>
                </li>
              ))}
            </ol>

            <div className="pt-4">
              <h4 className="font-semibold text-foreground mb-3">Testing and Improvements</h4>
              <p className="text-sm mb-4">
                Six recorded checks, including a retest after changing the instructions.
                These are qualitative observations from fictional scenarios.
              </p>
              <div className="space-y-3">
                {lab.tests.map((test) => (
                  <div key={test.scenario} className="rounded-lg border border-border p-4">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <p className="font-medium text-foreground">{test.scenario}</p>
                      <Badge variant="secondary" className="whitespace-normal">{test.outcome}</Badge>
                    </div>
                    <p className="mt-2 text-sm">{test.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </ArtifactSection>

          <ArtifactSection id="artifact-2-tools" title="Tools and Technologies Used" icon={<Wrench className="h-5 w-5" />}>
            <div className="flex flex-wrap gap-2">
              {lab.tools.map((tool) => <Badge key={tool} variant="secondary">{tool}</Badge>)}
            </div>
            <p>
              I used ChatGPT for repeated-prompt comparisons and documentation support,
              Writing Assistant by Mohammed for message refinement, STORM for
              multi-perspective research, and Chatbase to configure and test the
              assistant. I also explored Poe before choosing Chatbase.
            </p>
          </ArtifactSection>

          <ArtifactSection id="artifact-2-value-proposition" title="Value Proposition" icon={<Target className="h-5 w-5" />}>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Unique Value</h4>
              <p>
                This lab connects my experience in a supporters club to a documented
                AI prototype. It shows the decisions behind the assistant, the problems
                I observed, and the instruction change that improved a recorded
                response. The screenshots make that development process tangible.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Relevance</h4>
              <p>
                The work demonstrates foundational skills in prompt design,
                user-centered problem definition, knowledge-source configuration,
                qualitative evaluation, and responsible use of AI. For software
                engineering, it reinforces the need to test specific requirements
                and review generated outputs before using them.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-secondary/30 p-4 text-sm">
              <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
                <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
                What I learned
              </h4>
              <p>
                Clear prompts still need checking: one repeated ChatGPT response used
                five emojis despite a three-emoji limit. In the Chatbase prototype,
                revising the instructions fixed the recorded closing-phrase issue.
              </p>
            </div>
          </ArtifactSection>

          <ArtifactSection id="artifact-2-references" title="References" icon={<BookOpen className="h-5 w-5" />}>
            <p className="text-sm">References from my original AI Lab document.</p>
            <ul className="space-y-3 list-disc pl-5 break-words text-sm">
              {lab.references.map((reference) => (
                <li key={reference.href}>
                  <a href={reference.href} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4 hover:opacity-80">
                    {reference.citation}<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </ArtifactSection>

          <ArtifactSection id="artifact-2-actual-artifact" title="The Actual Artifact" icon={<FlaskConical className="h-5 w-5" />}>
            <div className="rounded-lg border border-border bg-secondary/30 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <FileText aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-accent" />
                <div className="min-w-0">
                  <h4 className="font-semibold text-foreground">My completed AI Lab</h4>
                  <p className="mt-1 text-sm">Assignment 1.4 · Original Word document (.docx) · 3.6 MB · 21 figures</p>
                </div>
              </div>
              <p className="mt-4 text-sm">
                Download the full lab for the prompts, tool comparisons, design-thinking
                process, chatbot setup, test results, reflections, and references.
              </p>
              <Button asChild className="mt-4 h-auto min-h-10 max-w-full whitespace-normal bg-accent py-3 text-left text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent">
                <a href={lab.document.href} download={lab.document.filename}>
                  <Download aria-hidden="true" /> <span>Download completed AI Lab (Word)</span>
                </a>
              </Button>
            </div>

            <div className="pt-3">
              <h4 className="font-semibold text-foreground mb-2">Evidence from my tests</h4>
              <p className="text-sm mb-4">Original screenshots from the lab. Select an image to enlarge it.</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {lab.evidence.map((item) => (
                  <figure key={item.src} className="min-w-0 overflow-hidden rounded-lg border border-border bg-card">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button type="button" aria-label={`Enlarge screenshot: ${item.title}`} className="group relative block w-full bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent">
                          <img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" className="w-full h-auto" />
                          <span aria-hidden="true" className="absolute bottom-2 right-2 rounded-md border border-border bg-background/95 p-2 text-foreground group-hover:text-accent">
                            <Maximize2 className="h-4 w-4" />
                          </span>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto p-5 sm:p-6">
                        <DialogTitle className="pr-7 leading-snug">{item.title}</DialogTitle>
                        <DialogDescription>{item.caption}</DialogDescription>
                        <img src={item.src} alt={item.alt} width={item.width} height={item.height} className="mx-auto h-auto w-full max-w-md rounded-lg" />
                      </DialogContent>
                    </Dialog>
                    <figcaption className="p-4 text-sm">
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="mt-2 text-foreground/70">{item.caption}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-border p-5">
              <Bot aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div>
                <h4 className="font-semibold text-foreground">FC Barcelona Fan Assistant demo</h4>
                <p className="mt-1 text-sm">
                  Uses fictional event details for this lab. The Chatbase preview is
                  hosted separately; the original document and screenshots above
                  preserve the recorded results.
                </p>
                <a href={lab.demoHref} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline">
                  Open Chatbase demo <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </ArtifactSection>
        </div>
      </Card>
    </article>
  );
}
