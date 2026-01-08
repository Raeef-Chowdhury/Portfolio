import Heading from "@/components/heading";
import Link from "next/link";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
const techs = [
  {
    name: "React",
    color: "text-cyan-400",
    borderColor: "border-cyan-500/40",
    bgColor: "bg-cyan-500/5",
    hoverBorder: "hover:border-cyan-400/60",
    hoverBg: "hover:bg-cyan-500/10",
    shadow: "hover:shadow-cyan-500/20",
    icon: SiReact,
  },
  {
    name: "TypeScript",
    color: "text-blue-400",
    borderColor: "border-blue-500/40",
    bgColor: "bg-blue-500/5",
    hoverBorder: "hover:border-blue-400/60",
    hoverBg: "hover:bg-blue-500/10",
    shadow: "hover:shadow-blue-500/20",
    icon: SiTypescript,
  },
  {
    name: "Next.js",
    color: "text-slate-300",
    borderColor: "border-slate-500/40",
    bgColor: "bg-slate-500/5",
    hoverBorder: "hover:border-slate-400/60",
    hoverBg: "hover:bg-slate-500/10",
    shadow: "hover:shadow-slate-400/20",
    icon: SiNextdotjs,
  },
  {
    name: "Tailwind",
    color: "text-sky-400",
    borderColor: "border-sky-500/40",
    bgColor: "bg-sky-500/5",
    hoverBorder: "hover:border-sky-400/60",
    hoverBg: "hover:bg-sky-500/10",
    shadow: "hover:shadow-sky-400/20",
    icon: SiTailwindcss,
  },
];
export default function TechStack() {
  return (
    <section className="w-full flex flex-col items-center  max-w-7xl mx-auto mt-32 px-6">
      {/* Section Heading */}
      <Heading content="Stack" />

      <div className="relative w-full border border-slate-700/50 rounded-3xl p-12 bg-slate-900/50 backdrop-blur-sm mt-12">
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-tl-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-sky-500/5 to-transparent rounded-br-3xl pointer-events-none" />

        <div
          className="absolute inset-0 opacity-[0.02] rounded-3xl pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.5) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Content - Left aligned */}
        <div className="relative space-y-8">
          {/* Message */}
          <p className="text-text text-[2.8rem] font-semibold self-center justify-self-center mb-[3.2rem] leading-tight">
            I build{" "}
            <span className="text-emerald-600 bg-black rounded-md">fast</span>,{" "}
            <span className="text-emerald-600 bg-black rounded-md">
              accessible
            </span>{" "}
            web apps with{" "}
            <span className="text-emerald-600 bg-black rounded-md">modern</span>{" "}
            tools
          </p>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-12">
            {techs.map((tech) => (
              <span
                key={tech.name}
                className={` text-[1.8rem]
                  group
                  inline-flex items-center gap-4
                  px-9 py-3 
                  ${tech.color}
                  ${tech.bgColor}
                  border-2 ${tech.borderColor}
                  rounded-full
                  font-semibold text-base
                  ${tech.hoverBorder}
                  ${tech.hoverBg}
                  hover:shadow-lg ${tech.shadow}
                  hover:scale-105
                  transition-all duration-300
                  cursor-default
                `}
              >
                <tech.icon className="w-9 h-9" /> {tech.name}
              </span>
            ))}
          </div>

          {/* CTA Link */}
          <div className="flex justify-center w-full">
            <Link
              href="/skills"
              className="
      inline-flex text-[1.8rem] mt-[1.8rem] items-center gap-2
      text-base font-medium
      text-emerald-400
      transition-colors duration-200
      group
      pt-2
    "
            >
              <span className="relative">
                View the what, how and why
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
