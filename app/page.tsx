import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/hero"));
const Projects = dynamic(() => import("@/components/projects"));
const Activity = dynamic(() => import("@/components/activity"));
const Skills = dynamic(() => import("@/components/skills"));
import About from "@/components/about";
//TODO: Branch Jason Cameron's Home section
//TODO: Techstack top of blogpost
//TODO: TODO IN BLOGPOST
//TODO: VIDEOS BLOGPOST & NAVIGATION
//TODO:FOOTER
//TODO: STaggered aniamtions projects/skills section
//TODO: About me simple page first viewport then timeline after that
//TODO: Either techstack section move to page then create coloumns for section, or techstack project used details or smth like that
//TODO: Parallax sparinghly maybe like hero or something very optional
export default function Home() {
  return (
    <>
      <main className="pb-[8rem]">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Activity />
      </main>
    </>
  );
}
