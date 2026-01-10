import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/hero"));
const Projects = dynamic(() => import("@/components/projects"));
const Activity = dynamic(() => import("@/components/activity"));
const Skills = dynamic(() => import("@/components/skills"));
import About from "@/components/about";
import Contact from "@/components/contact";
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
