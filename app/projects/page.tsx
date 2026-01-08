import Heading from "@/components/heading";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/Types/project";
import { projects } from "@/Data/projects";
import { TechStack } from "@/Types/techstack";
import AnimateStagger from "@/components/animatestagger";
function Projects() {
  return (
    <div className="flex pb-[20rem] relative max-w-[1920px] mt-[6rem] mx-auto flex-col items-center">
      <Heading content="Projects" />
      <Link
        href="/"
        className="flex absolute left-20 top-10 hover:gap-6 transition-all items-center gap-3 px-12 py-4 bg-tertiary text-slate-900 rounded-full shadow-lg font-medium text-[1.2rem]"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Home
      </Link>
      <div className="grid grid-cols-3 gap-[6rem] mt-[6rem] mx-[3rem]">
        {projects.map((project: Project, index: number) => (
          <AnimateStagger key={index} index={index}>
            <Link href={project.href}>
              <div
                className={`group border-slate-700 hover:border-emerald-400/20 overflow-hidden hover:cursor-pointer hover:shadow-[0px_8px_30px_rgba(16,185,129,0.2)] hover:scale-[1.01] transition-all duration-300 border-[3px] max-w-[520px] rounded-xl flex flex-col bg-slate-900/40`}
              >
                <div className="relative w-full aspect-[15/9] overflow-hidden bg-slate-800">
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

                <div className="p-8 flex flex-col gap-[1.6rem]">
                  <h3 className="text-emerald-400 font-bold text-4xl transition-colors duration-300 group-hover:text-emerald-300">
                    {project.title}
                  </h3>

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
                    <span>Learn more about this project</span>
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
          </AnimateStagger>
        ))}
      </div>
    </div>
  );
}

export default Projects;
