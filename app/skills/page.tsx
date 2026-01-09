import SkillCard from "@/components/skillcard";
import { Skill } from "@/Types/skill";
import AnimateStagger from "@/components/animatestagger";
import Heading from "@/components/heading";
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
const skills: Skill[] = [
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
const capabilities: Capabilities[] = [
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

const improving: Improving[] = [
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
const categories = Array.from(new Set(skills.map((s) => s.category)));
export default function SkillsPage() {
  return (
    <div className="w-full px-12 py-32">
      {/* Header */}
      <header className="text-center mb-48 max-w-5xl mx-auto">
        <Heading content="Skills" />
        <p className="text-3xl text-text/50">
          What I bring to the table, and what Im learning next
        </p>
      </header>

      <section className="mb-[24rem] max-w-[1440px] mx-auto">
        <h2 className="text-center text-[3.2rem] uppercase tracking-[0.4em] text-emerald-700 mb-24 font-medium">
          What I Can Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            const colorMap = {
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
            const colors = colorMap[capability.color as keyof typeof colorMap];

            return (
              <AnimateStagger key={index} index={index}>
                <div className="group relative ">
                  <div
                    className={`relative min-h-[280px] flex flex-col gap-[1.6rem] p-12 border-2 ${colors.border} transition-all duration-300 rounded-xl bg-slate-900/50 backdrop-blur-sm group-hover:scale-[1.02] shadow-2xs ${colors.shadow}`}
                  >
                    <Icon
                      className={`w-14 h-14  ${colors.icon} group-hover:scale-110 transition-transform duration-300`}
                      strokeWidth={1.5}
                    />
                    <h3
                      className={`text-[3.2rem] mb-[1.2rem] font-bold  tracking-tight ${colors.title}`}
                    >
                      {capability.title}
                    </h3>
                    <p className="text-[1.4rem] text-text  leading-relaxed group-hover:text-text/90 transition-colors">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </AnimateStagger>
            );
          })}
        </div>
      </section>

      <section className="mb-[24rem]  max-w-[1444px] mx-auto">
        <h2 className="text-center text-[3.2rem] uppercase tracking-[0.4em] text-emerald-700 mb-24 font-medium">
          Tech Skills
        </h2>
        <div className="flex  flex-col gap-[6rem]">
          {categories.map((category) => (
            <div key={category}>
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-5xl font-bold text-white uppercase tracking-tight">
                  {category}
                </h2>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-gray-700 via-gray-600 to-transparent ml-4"></div>
                <div className="text-gray-200 text-[1rem] font-medium">
                  {skills.filter((s) => s.category === category).length} skills
                </div>
              </div>

              <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <AnimateStagger
                      key={skill.name}
                      index={skills.indexOf(skill)}
                    >
                      <SkillCard key={skill.name} skill={skill} />
                    </AnimateStagger>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Currently Improving - Horizontal Cards */}
      <section className="max-w-[1440px] mx-auto">
        <div className="flex justify-center items-center mb-12">
          <h2 className="text-center text-[3.2rem] uppercase tracking-[0.4em] text-emerald-700 mb-24 font-medium">
            Currently Working On
          </h2>
        </div>

        <div className="flex gap-[4.8rem] justify-center items-center">
          {improving.map((item, index) => (
            <AnimateStagger key={index} index={index}>
              <div className="bg-slate-900/40 border max-w-[388px] border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 backdrop-blur-sm group">
                {/* Icon */}
                <div
                  className={`text-4xl  flex items-center justify-start rounded-lg ${item.color} mb-6`}
                >
                  <item.icon className="w-18 h-18" />
                </div>

                {/* Title */}
                <h3
                  className={`text-[2.4rem] mt-[2.4rem] font-bold mb-12 ${item.color}`}
                >
                  {item.text}
                </h3>

                {/* Description */}
                <p className="text-[1.4rem] text-text/50 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </AnimateStagger>
          ))}
        </div>
      </section>
    </div>
  );
}
