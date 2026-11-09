// Summaries and evidence come from Vasanth's completed Assignment 1.4 document.
// The original download and extracted screenshots are preserved unchanged.
export const aiLabArtifact = {
  title: "AI Lab Exercise: FC Barcelona Fan Assistant",
  document: {
    href: "/artifacts/raju-ai-lab.docx",
    filename: "Raju_Vasanth_Geethan_1.4_AI_Lab.docx",
  },
  demoHref: "https://www.chatbase.co/preview/HMfZkAZzsNQf4Aii8fWc3?channel=chat-widget",
  tools: ["ChatGPT", "Writing Assistant custom GPT", "STORM AI", "Chatbase"],
  process: [
    {
      title: "Compare and refine AI-generated writing",
      description: "I tested the same WhatsApp announcement prompt in three separate ChatGPT conversations and compared accuracy, clarity, tone, formatting, and instruction following. I then used the Writing Assistant custom GPT by Mohammed to refine the tone, length, and emoji use and explore a last-minute venue change.",
    },
    {
      title: "Research the community use case",
      description: "I used STORM to explore AI-supported communication and event planning for sports fan communities. I reviewed its event-planner, fan-community-organizer, and AI-researcher perspectives, while noting that some examples needed stronger evidence.",
    },
    {
      title: "Apply design thinking",
      description: "I worked through empathy, define, ideate, prototype, and test. My experience in the supporters club helped identify recurring questions about venues, event confirmation, and +1 guests, along with the need for announcements that sound natural.",
    },
    {
      title: "Build a focused Chatbase prototype",
      description: "After considering Poe, I selected Chatbase and configured the assistant’s instructions, welcome message, and fictional event knowledge source. The instructions required clear answers, clarification when details were missing, and organizer approval before announcements were published.",
    },
    {
      title: "Test, change the instructions, and retest",
      description: "I tested announcements, guest availability, missing event information, and venue changes. When an announcement sounded too formal and placed emojis after the required closing phrase, I changed the instructions and reran the original prompt. The recorded retest ended with “Visca Barça!” as intended.",
    },
  ],
  tests: [
    { scenario: "Match-day announcement", outcome: "Accurate details; tone needed work", detail: "Included the fictional event details, but the first response sounded too formal." },
    { scenario: "+1 guest availability", outcome: "Passed", detail: "Answered using the guest policy supplied in the fictional knowledge source." },
    { scenario: "Natural wording and closing phrase", outcome: "Revision needed", detail: "The wording improved, but emojis appeared after the required closing phrase." },
    { scenario: "Retest after instruction change", outcome: "Passed after revision", detail: "Used the fictional event details and ended with “Visca Barça!” without extra emojis afterward." },
    { scenario: "Unconfirmed Champions League watch party", outcome: "Passed", detail: "Said that details were unconfirmed and directed the user to the organizer." },
    { scenario: "Last-minute venue change", outcome: "Passed", detail: "Clearly announced Test Venue B and repeated the supplied date, time, and location." },
  ],
  evidence: [
    {
      src: "/artifacts/ai-lab-announcement-retest.png",
      width: 435,
      height: 625,
      title: "Instruction change → successful retest",
      caption: "Figure 19: after revising the instructions, the announcement ends with the exact closing phrase.",
      alt: "Chatbase retest showing a fictional match announcement with supplied event details and Visca Barça! as the closing phrase.",
    },
    {
      src: "/artifacts/ai-lab-unconfirmed-watch-party.png",
      width: 435,
      height: 629,
      title: "Handling missing information",
      caption: "Figure 20: the assistant asks the user to check with the organizer when watch-party details are unconfirmed.",
      alt: "Chatbase response saying there are no confirmed details for the next Champions League watch party and to check with the organizer.",
    },
    {
      src: "/artifacts/ai-lab-venue-change.png",
      width: 429,
      height: 618,
      title: "Communicating a venue change",
      caption: "Figure 21: a clearly labeled update replaces the old location with fictional Test Venue B.",
      alt: "Chatbase venue-change response announcing fictional Test Venue B, repeating the supplied date and time, and identifying the message as a draft for organizer approval.",
    },
  ],
  references: [
    { citation: "Chatbase. (2026). Privacy statement.", href: "https://www.chatbase.co/legal/privacy" },
    { citation: "Chatbase. (n.d.). Terms of service.", href: "https://www.chatbase.co/legal/terms" },
    { citation: "OpenAI. (n.d.). ChatGPT [Large language model].", href: "https://chatgpt.com/" },
    { citation: "Quora. (n.d.). Poe [AI chatbot platform explored for comparison].", href: "https://poe.com/" },
    { citation: "STORM. (n.d.). STORM: Synthesis of topic outlines through retrieval and multi-perspective question asking. Stanford University.", href: "https://storm.genie.stanford.edu/" },
  ],
};
