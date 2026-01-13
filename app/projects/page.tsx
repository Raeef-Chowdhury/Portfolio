import Heading from "@/components/ui/heading";
import { Project } from "@/Types/project";
import { projects } from "@/Data/projects";
import AnimateStagger from "@/components/animations/animatestagger";
import ProjectCard from "@/components/cards/ProjectCard";
import BackHomeBtn from "@/components/ui/BackHome";
import MobileBackHome from "@/components/ui/MobileBackHome";
function Projects() {
  return (
    <div className="flex pb-[20rem] relative max-w-[1920px] mt-[6rem] mx-auto flex-col items-center">
      <Heading content="Projects" />
      <BackHomeBtn />
      <div className="grid grid-cols-3 max-[944px]:grid-cols-2 max-[588px]:grid-cols-1 max-[588px]:mx-[6rem] max-[588px]:text-center gap-[6rem] mt-[6rem] mx-[3rem]">
        {projects.map((project: Project, index: number) => (
          <AnimateStagger key={index} index={index}>
            <ProjectCard project={project} />
          </AnimateStagger>
        ))}
      </div>
      <MobileBackHome />
    </div>
  );
}

export default Projects;
