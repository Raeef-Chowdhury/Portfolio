import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/hero"));
const Projects = dynamic(() => import("@/components/projects"));
const Activity = dynamic(() => import("@/components/activity"));
//TODO: Branch Jason Cameron's Home section
//TODO: Techstack top of blogpost
export default function Home() {
  return (
    <>
      <main className="pb-[8rem]">
        <Hero />
        <Projects />
        <Activity />
      </main>
    </>
  );
}
