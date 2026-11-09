// Shared index for the overview, section navigation, and artifact summaries.
// Keep Artifact 1's original section IDs so previously shared links still work.
const sectionLabels = [
  ["introduction", "Introduction"],
  ["description", "Description & Audience"],
  ["objective", "Objective"],
  ["process", "Process"],
  ["tools", "Tools and Technologies"],
  ["value-proposition", "Value Proposition"],
  ["references", "References"],
  ["actual-artifact", "The Actual Artifact"],
] as const;

export const portfolioArtifacts = [
  {
    id: "artifact-1",
    number: 1,
    title: "Evolution of Artificial Intelligence and Machine Learning",
    shortTitle: "AI & ML Timeline",
    assignment: "1.3",
    workshop: "1",
    focus: "Historical research & communication",
    summary: "A visual history of AI and ML, from early research to modern applications. Explore the milestones, contributors, and lessons that shaped the field.",
    format: "PowerPoint · 13 slides",
    coverage: "1950–2026",
    evidenceHref: "#actual-artifact",
    sections: sectionLabels.map(([id, label]) => ({ id, label })),
  },
  {
    id: "artifact-2",
    number: 2,
    title: "AI Lab Exercise: FC Barcelona Fan Assistant",
    shortTitle: "AI Lab Exercise",
    assignment: "1.4",
    workshop: "1",
    focus: "Design thinking & chatbot evaluation",
    summary: "An AI lab exploring writing, research, and a Chatbase prototype for a supporters club, with documented tests, instruction changes, and a retest.",
    format: "Word document · chatbot prototype",
    coverage: "Experiments, design thinking & testing",
    evidenceHref: "#artifact-2-actual-artifact",
    sections: sectionLabels.map(([id, label]) => ({ id: `artifact-2-${id}`, label })),
  },
];
