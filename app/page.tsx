import Hero from "@/components/hero";
import Projects from "@/components/projects";
//TODO: Branch Jason Cameron's Home section
//TODO: BAck to projects btn on specific project blogpost
//TODO: MetaData Every Page
//TODO: Techstack top of blogpost
export default function Home() {
  return (
    <>
      <main className="pb-[8rem]">
        <Hero />
        <Projects />
      </main>
    </>
  );
}
