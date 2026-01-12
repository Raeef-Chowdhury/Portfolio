import Heading from "@/components/ui/heading";
import Link from "next/link";
import { Project } from "@/Types/project";
import { projects } from "@/Data/projects";
import AnimateStagger from "@/components/animations/animatestagger";
import ProjectCard from "@/components/ProjectCard";
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
            <ProjectCard project={project} />
          </AnimateStagger>
        ))}
      </div>
    </div>
  );
}

export default Projects;
