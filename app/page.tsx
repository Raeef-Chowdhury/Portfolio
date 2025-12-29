import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
//TODO: BRIEF TOOLS LINE
//TODO: BACKGROUND SHAPES/SVGS?????
//TODO:Project Card Blog post detailed overview on click
//TODO: Branch Jason Cameron's Home section
//TODO: Change frontend developer in header
export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-[8rem]">
        <Hero />
        <Projects />
      </main>
    </>
  );
}
