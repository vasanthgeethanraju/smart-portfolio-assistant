import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown, ArrowUpRight, BookOpen, Download, FileSliders,
  GraduationCap, ListChecks, Target, Wrench,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { timelineArtifact } from "@/content/ai-ml-portfolio";
import { portfolioArtifacts } from "@/content/portfolio-artifacts";
import { ArtifactSection } from "@/components/portfolio/ArtifactSection";
import { AILabArtifact } from "@/components/portfolio/AILabArtifact";
import { AITrainingArtifact } from "@/components/portfolio/AITrainingArtifact";
import { PortfolioContents } from "@/components/portfolio/PortfolioContents";

const AIMLPortfolio = () => {
  const { presentation, process, references } = timelineArtifact;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "AI/ML Learning Portfolio | Vasanth Geethan Raju";
    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) target.scrollIntoView();
      else window.scrollTo(0, 0);
    });
    return () => {
      document.title = previousTitle;
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="portfolio" className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <header className="mb-10 max-w-3xl">
            <p className="mb-4 flex items-center gap-2 text-sm font-medium text-foreground/70">
              <GraduationCap aria-hidden="true" className="h-5 w-5 text-accent flex-shrink-0" />
              Indiana Wesleyan University · Graduate studies in AI
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-5">
              My AI/ML Learning Portfolio
            </h1>
            <p className="text-lg leading-relaxed text-foreground/80">
              Connecting my software engineering experience with what I’m learning
              in artificial intelligence and machine learning, one artifact at a time.
            </p>
            <a href="#coursework" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline">
              Explore my coursework <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
          </header>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_15rem] items-start">
            <div className="min-w-0 space-y-6">
              <Card className="p-6 sm:p-8 shadow-md">
                <section id="professional-bio" aria-labelledby="bio-heading" className="scroll-mt-24">
                  <div className="flex items-center gap-4 mb-5">
                    <img src="/profile.jpg" alt="Vasanth Geethan Raju" className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full object-cover border border-border" />
                    <div>
                      <h2 id="bio-heading" className="text-xl font-bold">Professional Bio</h2>
                      <p className="text-sm text-foreground/70 mt-1">Vasanth Geethan Raju · Software Engineer</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-foreground/80 leading-relaxed">
                    <p>
                      I’m a software engineer with over seven years of experience building
                      web applications and working on software automation. My work spans
                      full-stack development with React, TypeScript, Node.js, and MongoDB,
                      as well as integrating AI tools into practical applications.
                    </p>
                    <p>
                      I’m currently pursuing graduate studies in AI at Indiana Wesleyan
                      University. Through this portfolio, I share my coursework, explore
                      how AI and machine learning solve real-world problems, and connect
                      what I learn to my experience as an engineer.
                    </p>
                  </div>
                </section>
                <section id="personal-value" aria-labelledby="personal-value-heading" className="scroll-mt-24 mt-7 pt-7 border-t border-border">
                  <h2 id="personal-value-heading" className="text-xl font-bold mb-3">Personal Value Proposition</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    I bring practical software engineering experience and a growing
                    understanding of AI and machine learning. I’m interested in the
                    work that connects the two: turning an idea into a useful application,
                    testing whether it solves the problem, and improving its reliability.
                    My goal is to use that foundation to build thoughtful AI-powered
                    tools and continue growing as an engineer.
                  </p>
                </section>
              </Card>

              <section id="coursework" aria-labelledby="coursework-heading" className="scroll-mt-24 py-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                  <h2 id="coursework-heading" className="text-xl font-bold">Coursework & Artifacts</h2>
                  <span className="text-sm text-foreground/65">{portfolioArtifacts.length} artifacts · AIML-500</span>
                </div>
                <p className="text-foreground/75 leading-relaxed mb-5">
                  From understanding how AI evolved to building and evaluating a
                  practical assistant. Each artifact includes its original coursework
                  and the thinking behind it.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {portfolioArtifacts.map((artifact) => (
                    <a key={artifact.id} href={`#${artifact.id}`} className="group flex flex-col rounded-lg border border-border bg-card p-5 shadow-sm transition-colors hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-semibold text-accent">ARTIFACT {artifact.number}</span>
                        <ArrowUpRight aria-hidden="true" className="w-4 h-4 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold leading-snug">{artifact.shortTitle}</h3>
                      <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{artifact.summary}</p>
                      <p className="mt-4 pt-4 border-t border-border text-xs text-foreground/65">{artifact.format}</p>
                      <p className="mt-3 text-sm font-medium text-accent group-hover:underline underline-offset-4">Explore Artifact {artifact.number}</p>
                    </a>
                  ))}
                </div>
              </section>

              <article id="artifact-1" aria-labelledby="artifact-heading" className="scroll-mt-24">
                <Card className="overflow-hidden shadow-md">
                  <header className="p-6 sm:p-8 border-b border-border bg-secondary/30">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <Badge variant="secondary">Workshop 1</Badge>
                      <span className="text-sm text-foreground/70">Assignment 1.3 · PowerPoint timeline</span>
                    </div>
                    <p className="text-sm font-medium text-accent mb-2">Artifact 1</p>
                    <h2 id="artifact-heading" className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                      Evolution of Artificial Intelligence and Machine Learning
                    </h2>
                  </header>

                  <div className="p-6 sm:p-8">
                    <ArtifactSection id="introduction" title="Introduction" icon={<BookOpen className="h-5 w-5" />}>
                      <p>
                        Understanding where AI came from helps me put today’s tools in
                        context. This artifact is a 13-slide timeline of the evolution of
                        artificial intelligence and machine learning, created for my
                        graduate coursework at Indiana Wesleyan University.
                      </p>
                    </ArtifactSection>

                    <ArtifactSection id="description" title="Description" icon={<FileSliders className="h-5 w-5" />}>
                      <p>
                        My presentation, “The Evolution of Artificial Intelligence:
                        From Early Research to Modern AI Systems,” covers 1950–2026.
                        It follows Turing’s Imitation Game, the Dartmouth conference,
                        early neural networks, AI winters, expert systems, Deep Blue,
                        Watson, AlexNet, AlphaGo, Transformers, and generative AI.
                        It also examines key organizations, applications across
                        industries, and the continuing importance of human oversight.
                      </p>
                      <p>
                        <strong className="text-foreground">Intended audience:</strong>{" "}
                        Fellow students, early-career software engineers, and readers
                        who want an approachable introduction to AI and ML history.
                        The timeline format makes the sequence easier to follow without
                        requiring a technical background.
                      </p>
                    </ArtifactSection>

                    <ArtifactSection id="objective" title="Objective" icon={<Target className="h-5 w-5" />}>
                      <p>
                        My objective is to build a historical foundation for my AI and
                        ML studies. Organizing developments over time helps me connect
                        earlier ideas to current applications and communicate that
                        understanding in a concise, visual format.
                      </p>
                    </ArtifactSection>

                    <ArtifactSection id="process" title="Process" icon={<ListChecks className="h-5 w-5" />}>
                      <ol className="list-decimal pl-5 space-y-2">
                        {process.map((step) => <li key={step}>{step}</li>)}
                      </ol>
                    </ArtifactSection>

                    <ArtifactSection id="tools" title="Tools and Technologies Used" icon={<Wrench className="h-5 w-5" />}>
                      <Badge variant="secondary">Microsoft PowerPoint</Badge>
                      <p>
                        Microsoft PowerPoint was used to organize the timeline,
                        milestone explanations, visuals, and references into a
                        13-slide presentation. The research sources and image credits
                        are listed below and in the original slides.
                      </p>
                    </ArtifactSection>

                    <ArtifactSection id="value-proposition" title="Value Proposition" icon={<Target className="h-5 w-5" />}>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Unique Value</h4>
                          <p>
                            This artifact pairs a visual historical overview with
                            explanations of individual milestones, key contributors,
                            and applications in healthcare, software development,
                            business, and education. It connects my study of AI history
                            with my perspective as a software engineer.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Relevance</h4>
                          <p>
                            Historical context supports my graduate learning by helping
                            me ask better questions about current AI capabilities and
                            limitations. For fellow learners, the presentation offers
                            an accessible starting point before exploring individual
                            methods and applications in greater depth.
                          </p>
                        </div>
                      </div>
                    </ArtifactSection>

                    <ArtifactSection id="references" title="References" icon={<BookOpen className="h-5 w-5" />}>
                      <p className="text-sm">Sources and image credits from slides 12–13 of my presentation.</p>
                      {(["research", "image"] as const).map((category) => (
                        <div key={category}>
                          <h4 className="font-semibold text-foreground mb-3">
                            {category === "research" ? "Research References" : "Image References"}
                          </h4>
                          <ul className="space-y-3 list-disc pl-5 break-words text-sm">
                            {references.filter((reference) => reference.category === category).map((reference) => (
                              <li key={reference.citation}>
                                <a href={reference.href} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4 hover:opacity-80">
                                  {reference.citation}<span className="sr-only"> (opens in a new tab)</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </ArtifactSection>

                    <ArtifactSection id="actual-artifact" title="The Actual Artifact" icon={<FileSliders className="h-5 w-5" />}>
                      <p>
                        My completed Assignment 1.3 presentation for AIML-500:
                        Machine Learning Fundamentals.
                      </p>
                      <figure className="overflow-hidden rounded-lg border border-border">
                        <img
                          src="/artifacts/ai-ml-timeline-overview.png"
                          alt="Timeline overview from slide 2: AI begins in the 1950s, the first AI winter in the 1970s, expert systems in the 1980s, machine learning in the 1990s, deep learning in the 2010s, generative AI in the 2020s, and AI adoption and agents in 2026."
                          width={999}
                          height={271}
                          loading="lazy"
                          className="w-full h-auto"
                        />
                        <figcaption className="border-t border-border px-4 py-3 text-sm text-foreground/70">
                          “AI History at a Glance” — overview from slide 2 of my original presentation.
                        </figcaption>
                      </figure>
                      <p className="text-sm">13 slides · PowerPoint (.pptx) · 14.7 MB</p>
                      <Button asChild className="h-auto min-h-10 max-w-full whitespace-normal bg-accent py-3 text-left text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent">
                        <a href={presentation.href} download={presentation.filename}>
                          <Download aria-hidden="true" /> <span>Download completed PowerPoint</span>
                        </a>
                      </Button>
                    </ArtifactSection>
                  </div>
                </Card>
              </article>
              <AILabArtifact />
              <AITrainingArtifact />
              <p className="text-sm text-foreground/70">
                Explore how I apply my engineering skills in my{" "}
                <Link to="/projects" className="text-accent underline underline-offset-4">personal projects</Link>.
              </p>
            </div>

            <PortfolioContents />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIMLPortfolio;
