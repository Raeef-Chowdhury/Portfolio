import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/sections/hero"));
const Projects = dynamic(() => import("@/components/sections/projects"));
const Activity = dynamic(() => import("@/components/sections/activity"));
const Skills = dynamic(() => import("@/components/sections/skills"));
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
//TODO: Branch Jason Cameron's Home section
//TODO: Techstack top of blogpost

//TODO: VIDEOS BLOGPOST & NAVIGATION
//TODO:FOOTER
//TODO: About me simple page first viewport then timeline after that

//TODO: Parallax sparinghly maybe like hero or something very optional
export default function Home() {
  return (
    <>
      <main className="pb-[8rem]">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Activity />
        <Contact />
      </main>
    </>
  );
}
