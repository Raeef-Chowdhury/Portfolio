export interface Milestone {
  year: string;
  title: string;
  description: string;
  emotion: string;
}
export const milestones: Milestone[] = [
  {
    year: "2018",
    title: "The First Line",
    description:
      "Wrote my first 'Hello World' and felt something click. That moment when the console printed back at me—I was hooked. Not by the code itself, but by the realization that I could bring ideas to life.",
    emotion: "curiosity",
  },
  {
    year: "2020",
    title: "Breaking Things",
    description:
      "Spent three days debugging a single semicolon. Wanted to quit. Didn't. That's when I learned: great developers aren't the ones who never break things—they're the ones who fix them until they work.",
    emotion: "resilience",
  },
  {
    year: "2022",
    title: "Building for Others",
    description:
      "My first project that people actually used. Watching someone solve their problem with something I built changed everything. It wasn't about the code anymore—it was about impact.",
    emotion: "purpose",
  },
  {
    year: "2024",
    title: "The Journey Continues",
    description:
      "Every project teaches me something new. Every bug humbles me. Every solution empowers me. I'm not just writing code—I'm crafting experiences, solving real problems, and growing with every line.",
    emotion: "growth",
  },
];
