import AnimatedArticle from "@/components/animatedarticle";
import BackButton from "@/components/BackButton";
import BlogMain from "@/components/blogmain";
import StarData from "@/Data/star-blog";
import BlogStats from "@/components/blogstats";
import BlogDesp from "@/components/blogdesp";
import BlogTech from "@/components/blogtech";
import BlogFeatures from "@/components/blogfeatures";
import BlogChallenges from "@/components/blogchallenges";
import BlogPerformance from "@/components/blogperformance";
import BlogLearning from "@/components/BlogLearning";
function IslamicFoundations() {
  return (
    <>
      <AnimatedArticle>
        <BackButton link="/projects" page="Projects" />
        <BlogMain
          title={StarData.title}
          alt={StarData.images.heroAlt}
          src={StarData.images.hero}
          demo={StarData.links.live}
          github={StarData.links.github}
        />
        <BlogStats
          time={StarData.metadata.date}
          duration={StarData.metadata.duration}
          users={StarData.metadata.highlight}
        />
        <BlogDesp
          text={StarData.description[0]}
          text2={StarData.description[1]}
        />
        <BlogTech techstack={StarData.techStack} />
        <BlogFeatures features={StarData.features} />
        <BlogChallenges challenge={StarData.challenges} />
        <BlogPerformance
          performance={StarData.performance}
          performanceImg={StarData.images.perforamnceImg}
          performanceAlt={StarData.images.performanceAlt}
        />
        <BlogLearning text={StarData.lessonsLearned} />
      </AnimatedArticle>
    </>
  );
}
export default IslamicFoundations;
export const metadata = {
  title: "Star Vault | Projects",
  description:
    "Star Vault is an immersive 3D journaling system that lets users store memories as stars in galaxies. Built with React Three Fiber, Motion One, and Vite.",
  openGraph: {
    title: "Star Vault | Raeef Chowdhury",
    description:
      "An immersive 3D journaling system where memories become stars in personalized galaxies.",
    url: "https://star-vault-journal.netlify.app/",
    images: [
      {
        url: "/portfolio/Images/Star-Vault.png",
        width: 1200,
        height: 630,
        alt: "Star Vault 3D galaxy journaling interface",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Star Vault | Projects",
    description:
      "An immersive 3D journaling system where memories become stars in personalized galaxies.",
    images: ["/portfolio/Images/Star-Vault.png"],
  },
};
