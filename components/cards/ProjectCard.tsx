import Image from "next/image";
import { TechStack } from "@/Types/techstack";
import { Project } from "@/Types/project";
import Link from "next/link";
import { div } from "framer-motion/client";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.href}>
      <div
        className={`max-[588px]:max-w-[388px] group border-slate-700 hover:border-emerald-400/20 overflow-hidden hover:cursor-pointer 
    hover:shadow-[0px_8px_30px_rgba(16,185,129,0.1)] hover:scale-[1.01] transition-all duration-300 border-[3px] max-w-[520px] rounded-xl flex flex-col bg-slate-900/40`}
      >
        <div
          className={`relative w-full aspect-[15/9] border-emerald-800 border-2 overflow-hidden ${
            project.id === "raeefPortfolio" ? "contrast-110" : ""
          }  bg-slate-800`}
        >
          <Image
            src={project.image}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            width={544}
            height={340}
            alt={project.alt}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 520px"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
        </div>

        <div className="p-8 flex flex-col gap-[1.6rem] max-[588px]:items-center">
          <h3 className="text-emerald-400 font-bold text-4xl transition-colors duration-300 group-hover:text-emerald-300">
            {project.title}
          </h3>
          <div className="flex items-center my-[1.2rem] gap-12">
            {" "}
            {/* increased from gap-4 */}
            {project.stats.map((stat, i) => (
              <div key={i} className="flex  items-center gap-2">
                {" "}
                {/* increased from gap-1 */}
                <stat.icon className="w-8 h-8 text-emerald-600 " />
                <div className="flex items-center gap-2">
                  <span className="text-[1.6rem] font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-[1rem] text-slate-400">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-300 leading-relaxed text-[1.7rem] line-clamp-3">
            {project.description}
          </p>

          <ul className="flex flex-wrap gap-3 mt-2">
            {project.techStack.map((item: TechStack, index: number) => (
              <li
                key={index}
                className={`text-[1.4rem] font-medium bg-slate-800/60 px-4 py-2 rounded-md border border-slate-700/50 ${item.color}`}
              >
                {item.skill}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 text-[1.4rem] font-medium mt-6 text-center bg-emerald-900 text-white px-12 py-4 rounded-2xl w-[fit-content] group-hover:gap-3 transition-all duration-300">
            <span>{project.cta}</span>
            <svg
              className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default ProjectCard;
