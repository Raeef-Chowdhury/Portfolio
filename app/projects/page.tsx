import Heading from "@/components/heading";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/Types/project";
import { projects } from "@/Data/projects";
import { TechStack } from "@/Types/techstack";
function Projects() {
  return (
    <div className="flex max-w-[1920px] mt-[6rem] mx-auto flex-col items-center">
      <Heading content="Projects" />
      <div className="grid grid-cols-3 gap-[6rem] mt-[6rem] mx-[3rem]">
        {projects.map((project: Project, index: number) => (
          <Link href={project.href} key={index} className="mx-auto">
            <div className="group border-slate-700 hover:border-emerald-600/50 overflow-hidden hover:cursor-pointer hover:shadow-[0px_8px_30px_rgba(16,185,129,0.2)] hover:scale-[1.01] transition-all duration-300 border-[3px] max-w-[520px] rounded-xl flex flex-col bg-slate-900/40">
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
                  {project.title}{" "}
                </h3>

                <p className="text-slate-300 leading-relaxed text-[1.7rem] line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
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

                <div className="flex items-center gap-2 text-emerald-400 text-[1.4rem] font-medium mt-6 text-center bg-secondary px-12 py-4 rounded-2xl w-[fit-content] group-hover:gap-3 transition-all duration-300">
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
        ))}
      </div>
    </div>
  );
}
export default Projects;
export const metadata = {
  title: "Projects | Raeef Chowdhury",
  description:
    "A collection of web development projects featuring React, Next.js, Three.js, and modern frontend technologies.",
  openGraph: {
    title: "Projects | Raeef Chowdhury",
    description:
      "Explore my portfolio of interactive web applications and 3D experiences.",
    url: "https://yourdomain.com/projects",
    images: [
      {
        url: "/og-projects.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website" as const,
  },
};
