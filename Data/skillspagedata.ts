import { Skill } from "@/Types/skill";

import {
  Code2,
  Palette,
  Zap,
  Users,
  LucideIcon,
  Lightbulb,
} from "lucide-react";

import {
  SiSimpleicons,
  SiTypescript,
  SiNextdotjs,
  SiFramer,
} from "react-icons/si";

interface Capabilities {
  icon: LucideIcon;
  title: string;
  description: string;
  evidence: { text: string; link: string };
  color: string;
}
interface Improving {
  text: string;
  detail: string;
  color: string;
  icon: typeof SiSimpleicons;
}
export const skills: Skill[] = [
  // Frontend
  {
    name: "HTML",
    icon: "SiHtml5",
    colorGradient: "from-red-500 to-red-600",
    color: "red-500",
    yearsExp: 3,
    projectsBuilt: 25,
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: "SiCss3",
    colorGradient: "from-blue-700 to-blue-800",
    color: "blue-700",
    yearsExp: 3,
    projectsBuilt: 25,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: "SiJavascript",
    colorGradient: "from-yellow-400 to-yellow-600",
    color: "yellow-400",
    yearsExp: 3,
    projectsBuilt: 20,
    category: "Frontend",
  },
  {
    name: "React",
    icon: "SiReact",
    colorGradient: "from-cyan-400 to-blue-500",
    color: "cyan-400",
    yearsExp: 2,
    projectsBuilt: 11,
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "SiNextdotjs",
    colorGradient: "from-slate-200 to to-slate-300",
    color: "slate-300",
    yearsExp: 1,
    projectsBuilt: 3,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: "SiTypescript",
    colorGradient: "from-blue-500 to-blue-700",
    color: "blue-500",
    yearsExp: 1,
    projectsBuilt: 3,
    category: "Frontend",
  },
  {
    name: "Tailwind",
    icon: "SiTailwindcss",
    colorGradient: "from-teal-400 to-cyan-500",
    color: "teal-500",
    yearsExp: 2,
    projectsBuilt: 9,
    category: "Frontend",
  },
  {
    name: "SASS",
    icon: "SiSass",
    colorGradient: "from-pink-500 to-purple-600",
    color: "pink-500",
    yearsExp: 1,
    projectsBuilt: 4,
    category: "Frontend",
  },

  // Tools
  {
    name: "Git",
    icon: "SiGit",
    colorGradient: "from-orange-500 to-red-600",
    color: "orange-500",
    yearsExp: 2,
    projectsBuilt: 16,
    category: "Tools",
  },

  {
    name: "npm",
    icon: "SiNpm",
    colorGradient: "from-red-500 to-red-700",
    color: "red-800",
    yearsExp: 2,
    projectsBuilt: 10,
    category: "Tools",
  },
  {
    name: "DevTools",
    icon: "SiGooglechrome",
    colorGradient: "from-green-400 to-blue-500",
    color: "emerald-700",
    yearsExp: 3,
    projectsBuilt: 20,
    category: "Tools",
  },
];
export const capabilities: Capabilities[] = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Building scalable, maintainable component architectures. I think in systems, not just components—understanding how state flows, when to lift it, and how to keep things predictable as complexity grows.",
    evidence: { text: "View component library", link: "#" },
    color: "primary",
  },
  {
    icon: Palette,
    title: "UI Thinking",
    description:
      "Translating design into code that feels right. I focus on micro-interactions, visual hierarchy, and the details that make interfaces feel polished rather than just functional.",
    evidence: { text: "See interaction examples", link: "#" },
    color: "secondary",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Making things fast where it matters. Code splitting, lazy loading, image optimization, and understanding the critical rendering path. I profile before optimizing and measure the impact.",
    evidence: { text: "Performance case study", link: "#" },
    color: "accent",
  },
  {
    icon: Users,
    title: "Accessibility",
    description:
      "Semantic HTML, keyboard navigation, ARIA when needed (not by default), and proper focus management. Building for everyone isn't an afterthought.",
    evidence: { text: "Accessibility audit", link: "#" },
    color: "tertiary",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Breaking down ambiguous requirements, asking the right questions, and finding the simplest solution that works. Knowing when to build and when to use what already exists.",
    evidence: { text: "See thought process", link: "#" },
    color: "highlight",
  },
];

export const improving: Improving[] = [
  {
    text: "Animation with Framer Motion",
    detail:
      "I’m refining my Framer Motion usage by creating reusable animation patterns, limiting motion to where it adds clarity, and focusing on performance-aware,",
    color: "text-purple-400",
    icon: SiFramer,
  },
  {
    text: "Typescript for React",
    detail:
      "I’m using TypeScript to make my codebase more predictable, scalable, and self-documenting, rather than just adding types on top of JavaScript.",
    color: "text-cyan-400",
    icon: SiTypescript,
  },
  {
    text: "NextJS",
    detail:
      "NextJS is a React framework with many built in features to help with server-side rendering, routing, and static site generation.",
    color: "text-slate-300",
    icon: SiNextdotjs,
  },
];
export const colorMap = {
  primary: {
    icon: "text-emerald-400",
    title: "text-emerald-400",
    border: "border-emerald-500/10 hover:border-emerald-500/30",
    glow: "from-emerald-500/20 to-emerald-600/20",
    shadow: "group-hover:shadow-emerald-500/20",
  },
  accent: {
    icon: "text-amber-400",
    title: "text-amber-400",
    border: "border-amber-500/10 hover:border-amber-500/30",
    glow: "from-amber-500/20 to-amber-600/20",
    shadow: "group-hover:shadow-amber-500/20",
  },

  secondary: {
    icon: "text-cyan-400",
    title: "text-cyan-400",
    border: "border-cyan-500/10 hover:border-cyan-500/30",
    glow: "from-cyan-500/20 to-cyan-600/20",
    shadow: "group-hover:shadow-cyan-500/20",
  },

  tertiary: {
    icon: "text-violet-400",
    title: "text-violet-400",
    border: "border-violet-500/10 hover:border-violet-500/30",
    glow: "from-violet-500/20 to-violet-600/20",
    shadow: "group-hover:shadow-violet-500/20",
  },
  highlight: {
    icon: "text-lime-400",
    title: "text-lime-400",
    border: "border-lime-500/10 hover:border-lime-500/30",
    glow: "from-lime-500/20 to-lime-600/20",
    shadow: "group-hover:shadow-lime-500/20",
  },
};
