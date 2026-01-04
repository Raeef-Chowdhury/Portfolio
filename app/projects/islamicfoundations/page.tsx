import AnimatedArticle from "@/components/animatedarticle";
import BackButton from "@/components/BackButton";
import BlogMain from "@/components/blogmain";
import IslamicData from "@/Data/islamic-blog";
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
          title={IslamicData.title}
          alt={IslamicData.images.heroAlt}
          src={IslamicData.images.hero}
          demo={IslamicData.links.live}
          github={IslamicData.links.github}
        />
        <BlogStats
          time={IslamicData.metadata.date}
          duration={IslamicData.metadata.duration}
          users={IslamicData.metadata.users}
        />
        <BlogDesp
          text={IslamicData.description[0]}
          text2={IslamicData.description[1]}
        />
        <BlogTech techstack={IslamicData.techStack} />
        <BlogFeatures features={IslamicData.features} />
        <BlogChallenges challenge={IslamicData.challenges} />
        <BlogPerformance
          performance={IslamicData.performance}
          performanceImg={IslamicData.images.performance}
          performanceAlt={IslamicData.images.performanceAlt}
        />
        <BlogLearning text={IslamicData.lessonsLearned} />
      </AnimatedArticle>
    </>
  );
}
export default IslamicFoundations;

export const metadata = {
  title: "Islamic Foundations | Projects",
  description:
    "Islamic Foundations is a comprehensive Islamic education platform with 50+ active users, built with React and Motion One.",
  openGraph: {
    title: "Islamic Foundations | Raeef Chowdhury",
    description:
      "A website for deepening Islamic understanding with 50+ active users.",
    url: "https://islamic-foundations.netlify.app/",
    images: [
      {
        url: "/portfolio/Images/Islamic-Foundations.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "article",
  },
};
