import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { portfolioArtifacts } from "@/content/portfolio-artifacts";
import { cn } from "@/lib/utils";

export function PortfolioContents() {
  const [activeId, setActiveId] = useState(portfolioArtifacts[0].id);
  const active = portfolioArtifacts.find((artifact) => artifact.id === activeId) ?? portfolioArtifacts[0];

  useEffect(() => {
    let frame: number | undefined;
    const update = () => {
      let current = portfolioArtifacts[0].id;
      for (const artifact of portfolioArtifacts) {
        const element = document.getElementById(artifact.id);
        if (element && element.getBoundingClientRect().top <= 140) current = artifact.id;
      }
      setActiveId(current);
    };
    const onScroll = () => {
      if (frame !== undefined) return;
      frame = window.requestAnimationFrame(() => { frame = undefined; update(); });
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== undefined) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <aside aria-label="Portfolio navigation and artifact summary" className="space-y-5 lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto">
      <Card className="p-5">
        <nav aria-label="On this page">
          <h2 className="font-semibold mb-3">On This Page</h2>
          <ul className="space-y-1 mb-4">
            {[["professional-bio", "Professional Bio"], ["personal-value", "Personal Value Proposition"], ["coursework", "All Artifacts"]].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="block rounded-md px-3 py-2 text-sm text-foreground/75 hover:text-foreground hover:bg-secondary transition-colors">{label}</a>
              </li>
            ))}
          </ul>
          <ol className="border-t border-border pt-3 space-y-2">
            {portfolioArtifacts.map((artifact) => (
              <li key={artifact.id}>
                <a
                  href={`#${artifact.id}`}
                  aria-current={artifact.id === activeId ? "location" : undefined}
                  className={cn("block rounded-md px-3 py-2 text-sm font-medium transition-colors", artifact.id === activeId ? "bg-accent/10 text-accent" : "text-foreground/75 hover:text-foreground hover:bg-secondary")}
                >
                  <span className="block">Artifact {artifact.number}</span>
                  <span className="block mt-0.5 text-xs font-normal text-foreground/65">{artifact.shortTitle}</span>
                </a>
                {artifact.id === activeId && (
                  <ul className="ml-3 mt-2 border-l border-border pl-2 space-y-0.5">
                    {artifact.sections.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`} className="block rounded-md px-2 py-1.5 text-xs leading-relaxed text-foreground/70 hover:text-foreground hover:bg-secondary transition-colors">{section.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </Card>
      <Card className="p-5">
        <h2 className="font-semibold mb-1">Artifact Summary</h2>
        <p className="text-sm text-accent mb-4">{active.shortTitle}</p>
        <dl className="space-y-3 text-sm">
          <div><dt className="text-foreground/60">Course</dt><dd className="font-medium mt-0.5">AIML-500 · Machine Learning Fundamentals</dd></div>
          <div><dt className="text-foreground/60">Workshop / Assignment</dt><dd className="font-medium mt-0.5">{active.workshop} / {active.assignment}</dd></div>
          <div><dt className="text-foreground/60">Focus</dt><dd className="font-medium mt-0.5">{active.focus}</dd></div>
          <div><dt className="text-foreground/60">Format</dt><dd className="font-medium mt-0.5">{active.format}</dd></div>
          <div><dt className="text-foreground/60">Coverage</dt><dd className="font-medium mt-0.5">{active.coverage}</dd></div>
        </dl>
        <a href={active.evidenceHref} className="mt-5 inline-flex gap-2 items-center text-sm font-medium text-accent hover:underline underline-offset-4">
          View artifact <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </Card>
    </aside>
  );
}
