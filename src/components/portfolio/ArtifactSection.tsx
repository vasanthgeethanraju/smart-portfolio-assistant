import type { ReactNode } from "react";

export function ArtifactSection({ id, title, icon, children }: {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 border-t border-border py-7 first:border-t-0 first:pt-0 last:pb-0">
      <h3 id={`${id}-heading`} className="mb-3 flex items-center gap-3 text-lg font-semibold text-foreground">
        <span aria-hidden="true" className="shrink-0 text-accent">{icon}</span>
        {title}
      </h3>
      <div className="space-y-3 text-foreground/80 leading-relaxed">{children}</div>
    </section>
  );
}
