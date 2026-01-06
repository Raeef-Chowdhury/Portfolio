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
import React from "react";
import { useState } from "react";
import { IconType } from "react-icons";
interface Skill {
  name: string;
  icon: string;
  colorGradient: string;
  color: string;
  yearsExp: number;
  projectsBuilt: number;
  category: string;
}
const iconMap: Record<string, IconType> = {
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
};
function SkillCard({ skill }: { skill: Skill }) {
  const [isHovered, setHoveredSkill] = useState<string | null>(null);
  const IconComponent = iconMap[skill.icon];

  {
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
              {IconComponent && (
                <IconComponent
                  className={`w-16 h-16 lg:w-20 lg:h-20 ${
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
                  }`}
                />
              )}
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
  }
}
export default SkillCard;
