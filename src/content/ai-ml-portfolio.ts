type ArtifactFile = {
  href: string;
  filename: string;
};

type ArtifactReference = {
  citation: string;
  href: string;
  category: "research" | "image";
};

// Source: the original 13-slide Assignment 1.3 presentation supplied by Vasanth.
// Citations retain the source details used in slides 12–13.
// Process describes the organization and source use visible in the final slides.
export const timelineArtifact: {
  presentation: ArtifactFile;
  process: string[];
  references: ArtifactReference[];
} = {
  "presentation": {
    "href": "/artifacts/raju-ai-ml-timelines.pptx",
    "filename": "Raju_VasanthGeethan_1.3_AI_ML_Timelines.pptx"
  },
  "process": [
    "Built the historical overview around the sources cited in the presentation: IBM’s history of AI, Stanford’s 2026 AI Index Report, the Transformer paper, OpenAI’s ChatGPT announcement, and the 2024 Nobel Prize in Chemistry announcement.",
    "Organized the timeline into periods, from the birth of AI and the AI winters to expert systems, deep learning, generative AI, and AI in everyday work.",
    "Presented each milestone with a date and a short explanation, supported by an at-a-glance timeline and slides on key organizations and industry applications.",
    "Concluded with lessons about computing resources, realistic expectations, and human oversight, and included separate research references and image credits."
  ],
  "references": [
    {
      "category": "research",
      "citation": "IBM. (2024). The history of artificial intelligence.",
      "href": "https://www.ibm.com/think/topics/history-of-artificial-intelligence"
    },
    {
      "category": "research",
      "citation": "Stanford Institute for Human-Centered Artificial Intelligence. (2026). Artificial intelligence index report 2026.",
      "href": "https://hai.stanford.edu/assets/files/ai_index_report_2026.pdf"
    },
    {
      "category": "research",
      "citation": "Vaswani, A., et al. (2017). Attention is all you need. arXiv.",
      "href": "https://arxiv.org/abs/1706.03762"
    },
    {
      "category": "research",
      "citation": "OpenAI. (2022, November 30). Introducing ChatGPT.",
      "href": "https://openai.com/index/chatgpt"
    },
    {
      "category": "research",
      "citation": "Nobel Prize Outreach. (2024). The Nobel Prize in Chemistry 2024: Press release.",
      "href": "https://www.nobelprize.org/prizes/chemistry/2024/press-release/"
    },
    {
      "category": "image",
      "citation": "Encyclopaedia Britannica. (n.d.). Alan Turing [Photograph].",
      "href": "https://www.britannica.com/biography/Alan-Turing"
    },
    {
      "category": "image",
      "citation": "Holmes, A. (2020, February 24). The chess grandmaster who was beaten by a computer predicts that AI will 'destroy' most jobs [Photograph by Reuters].",
      "href": "https://www.businessinsider.com/chess-grandmaster-gary-kasparov-ai-artificial-intelligence-destroy-jobs-prediction-2020-2"
    },
    {
      "category": "image",
      "citation": "Hern, A. (2016, March 15). AlphaGo: Its creator on the computer that learns by thinking [Photograph by Lee Jin-man/AP]. The Guardian.",
      "href": "https://www.theguardian.com/technology/2016/mar/15/alphago-what-does-google-advanced-software-go-next"
    },
    {
      "category": "image",
      "citation": "EMBL-EBI. (2022, July 29). DeepMind AI powers major scientific breakthrough: AlphaFold generates 3D view of the protein universe [Illustration credited to Karen Arnott/EMBL-EBI]. SciTechDaily.",
      "href": "https://scitechdaily.com/deepmind-ai-powers-major-scientific-breakthrough-alphafold-generates-3d-view-of-the-protein-universe/"
    }
  ]
};
