import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/hero"));
const Projects = dynamic(() => import("@/components/projects"));
const Activity = dynamic(() => import("@/components/activity"));
const Skills = dynamic(() => import("@/components/skills"));
//TODO: Branch Jason Cameron's Home section
//TODO: Techstack top of blogpost
//TODO: TODO IN BLOGPOST
//TODO: VIDEOS BLOGPOST & NAVIGATION
//TODO: Techstack Section Hero
//TODO:FOOTER
///TODO: ABout preview in homepage
export default function Home() {
  return (
    <>
      <main className="pb-[8rem]">
        <Hero />
        <Projects />
        <Activity />
        <Skills />
      </main>
    </>
  );
}
