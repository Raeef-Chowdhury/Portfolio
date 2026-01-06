"use client";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiGit,
  SiNpm,
  SiGooglechrome,
} from "react-icons/si";
import Heading from "./heading";
import { useState } from "react";
import { IconType } from "react-icons";
import React from "react";

// Placeholder Heading component - replace with your actual Heading component

interface Skill {
  name: string;
  icon: IconType;
  colorGradient: string;
  color: string;
  yearsExp: number;
  projectsBuilt: number;
  category: string;
}

// Category Icons
const categoryIcons = {
  Frontend: "⚡",
  Tools: "🛠️",
  Backend: "⚙️",
};

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    // Frontend
    {
      name: "HTML",
      icon: SiHtml5,
      colorGradient: "from-red-500 to-red-600",
      color: "red-500",
      yearsExp: 3,
      projectsBuilt: 25,
      category: "Frontend",
    },
    {
      name: "CSS",
      icon: SiCss3,
      colorGradient: "from-blue-700 to-blue-800",
      color: "blue-700",
      yearsExp: 3,
      projectsBuilt: 25,
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      colorGradient: "from-yellow-400 to-yellow-600",
      color: "yellow-400",
      yearsExp: 3,
      projectsBuilt: 20,
      category: "Frontend",
    },
    {
      name: "React",
      icon: SiReact,
      colorGradient: "from-cyan-400 to-blue-500",
      color: "cyan-400",
      yearsExp: 2,
      projectsBuilt: 11,
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      colorGradient: "from-slate-200 to to-slate-300",
      color: "slate-300",
      yearsExp: 1,
      projectsBuilt: 3,
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      colorGradient: "from-blue-500 to-blue-700",
      color: "blue-500",
      yearsExp: 1,
      projectsBuilt: 3,
      category: "Frontend",
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      colorGradient: "from-teal-400 to-cyan-500",
      color: "teal-500",
      yearsExp: 2,
      projectsBuilt: 9,
      category: "Frontend",
    },
    {
      name: "SASS",
      icon: SiSass,
      colorGradient: "from-pink-500 to-purple-600",
      color: "pink-500",
      yearsExp: 1,
      projectsBuilt: 4,
      category: "Frontend",
    },

    // Tools
    {
      name: "Git",
      icon: SiGit,
      colorGradient: "from-orange-500 to-red-600",
      color: "orange-500",
      yearsExp: 2,
      projectsBuilt: 16,
      category: "Tools",
    },

    {
      name: "npm",
      icon: SiNpm,
      colorGradient: "from-red-500 to-red-700",
      color: "red-800",
      yearsExp: 2,
      projectsBuilt: 10,
      category: "Tools",
    },
    {
      name: "Chrome DevTools",
      icon: SiGooglechrome,
      colorGradient: "from-green-400 to-blue-500",
      color: "emerald-700",
      yearsExp: 3,
      projectsBuilt: 20,
      category: "Tools",
    },
  ];

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <div className="min-h-screen mt-[18rem] py-24 px-6 lg:px-12 2xl:px-20">
      <div className="w-full max-w-[1800px] mx-auto">
        <div className="mb-20">
          <Heading content="Tech Stack" />
        </div>

        <div className="space-y-24">
          {categories.map((category) => (
            <div key={category}>
              <div className="flex items-center gap-4 mb-12">
                <div className="text-5xl">
                  {categoryIcons[category as keyof typeof categoryIcons]}
                </div>
                <h2 className="text-5xl font-bold text-white uppercase tracking-tight">
                  {category}
                </h2>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-gray-700 via-gray-600 to-transparent ml-4"></div>
                <div className="text-gray-500 text-sm font-medium">
                  {skills.filter((s) => s.category === category).length} skills
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, idx) => {
                    const isHovered = hoveredSkill === skill.name;

                    return (
                      <div
                        key={skill.name}
                        className="group relative"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div
                          className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${
                            skill.colorGradient
                          } opacity-0 blur-lg transition-all duration-500 ${
                            isHovered ? "opacity-20 " : ""
                          }`}
                        ></div>

                        <div className="max-w-[398px]  mx-auto relative h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:scale-[1.02] hover:border-slate-600 hover:shadow-2xl">
                          <div className="flex items-center justify-between">
                            <div
                              className={`text-5xl lg:text-6xl mb-4 lg:mb-6 text-black transform transition-all duration-500 ${
                                isHovered
                                  ? "scale-110 rotate-[6deg] transform translate-y-[-0.5rem] translate-x-[-0.5rem]"
                                  : ""
                              }`}
                            >
                              {React.createElement(skill.icon, {
                                className: `w-16 h-16 lg:w-20 lg:h-20  ${
                                  skill.name === "HTML"
                                    ? "text-red-500"
                                    : skill.name === "CSS"
                                    ? "text-blue-700"
                                    : skill.name === "JavaScript"
                                    ? "text-yellow-400"
                                    : skill.name === "React"
                                    ? "text-cyan-400"
                                    : skill.name === "Next.js"
                                    ? "text-slate-300"
                                    : skill.name === "TypeScript"
                                    ? "text-blue-500"
                                    : skill.name === "Tailwind"
                                    ? "text-teal-500"
                                    : skill.name === "SASS"
                                    ? "text-pink-500"
                                    : skill.name === "Git"
                                    ? "text-orange-500"
                                    : skill.name === "npm"
                                    ? "text-red-800"
                                    : skill.name === "Chrome DevTools"
                                    ? "text-emerald-700"
                                    : "text-gray-400"
                                }`,
                              })}{" "}
                            </div>

                            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-6 lg:mb-8">
                              {skill.name}
                            </h3>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-800/50 rounded-xl p-3 lg:p-4 border border-slate-700/30">
                              <div className="text-[1.2rem] text-gray-400 uppercase tracking-wider mb-1">
                                Experience
                              </div>
                              <div className="flex items-baseline gap-2 mt-[1.2rem]">
                                <span
                                  className={`text-[2.4rem] font-bold bg-gradient-to-r ${skill.colorGradient} bg-clip-text text-transparent`}
                                >
                                  {skill.yearsExp}
                                </span>
                                <span className="text-sm lg:text-base text-gray-500">
                                  {skill.yearsExp === 1 ? "yr" : "yrs"}
                                </span>
                              </div>
                            </div>

                            <div className="bg-slate-800/50 rounded-xl p-3 lg:p-4 border border-slate-700/30">
                              <div className="text-[1.2rem] text-gray-400 uppercase tracking-wider mb-1">
                                Projects
                              </div>
                              <div className="flex items-baseline gap-2 mt-[1.2rem]">
                                <span
                                  className={`text-[2.4rem]  font-bold bg-gradient-to-r ${skill.colorGradient} bg-clip-text text-transparent`}
                                >
                                  {skill.projectsBuilt}
                                </span>
                                <span className="text-sm lg:text-base text-gray-500">
                                  built
                                </span>
                              </div>
                            </div>
                          </div>

                          {/*  */}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
