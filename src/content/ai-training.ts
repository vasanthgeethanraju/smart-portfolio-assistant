// Based on Vasanth's Assignment 3.3 report and his clarification that the
// professor-provided Professor Predict prompt was entered into ChatGPT.
// Its completion summary and personal reflection stay in the original download.
export const aiTrainingArtifact = {
  title: "AI Training Interaction",
  document: {
    href: "/artifacts/raju-ai-training-interaction.docx",
    filename: "Raju_Vasanth_Geethan_3.3_AI_Training_Interaction.docx",
  },
  tools: ["ChatGPT", "Microsoft Word"],
  stages: [
    {
      number: "01",
      title: "Velmora challenge",
      description: "I did not recognize Velmora as a fictional country. Since searching was not allowed, I said I did not know instead of inventing an answer.",
      insight: "Recognize uncertainty and the need for verification.",
    },
    {
      number: "02",
      title: "Understanding hallucinations",
      description: "In the second stage of the ChatGPT interaction, I explored hallucinations and why models can generate convincing, confident-looking responses that are incorrect instead of admitting uncertainty.",
      insight: "A plausible response still needs an accuracy check.",
    },
    {
      number: "03",
      title: "Training data",
      description: "I explored training-data categories and was surprised by publicly available Reddit discussions and academic papers. This stage also covered limitations regarding private information.",
      insight: "Consider the information behind a model’s responses.",
    },
    {
      number: "04",
      title: "Good Fit vs. Danger Zone",
      description: "I applied lessons from the previous stages to evaluate Good Fit versus Danger Zone tasks, including cover-letter writing and exact multiplication. I considered whether live information, calculators, or external tools were available and how reliable information could change a task’s suitability.",
      insight: "Assess the task, available tools, and ability to verify.",
    },
  ],
};
