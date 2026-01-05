// app/projects/[slug]/page.jsx
import { notFound } from "next/navigation";
import AnimatedArticle from "@/components/animatedarticle";
import BackButton from "@/components/BackButton";
import BlogMain from "@/components/blogmain";
import BlogStats from "@/components/blogstats";
import BlogDesp from "@/components/blogdesp";
import BlogTech from "@/components/blogtech";
import BlogFeatures from "@/components/blogfeatures";
import BlogChallenges from "@/components/blogchallenges";
import BlogPerformance from "@/components/blogperformance";
import BlogLearning from "@/components/BlogLearning";
import {
  projectsData,
  projectMetadata,
  ProjectSlug,
} from "@/Data/projects-registry";

export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }));
}
interface PageProps {
  params: Promise<{ slug: string }>;
}
// Generate metadata for each project
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!(slug in projectMetadata)) {
    return {};
  }

  return projectMetadata[slug as ProjectSlug];
}

export default async function ProjectPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const projectData = projectsData[slug as ProjectSlug];

  if (!projectData) {
    notFound();
  }
  console.log(slug, projectData, resolvedParams);
  const statsValue = projectData.metadata.users;
  const performanceImage = projectData.images.performance;

  return (
    <AnimatedArticle>
      <BackButton link="/projects" page="Projects" />

      <BlogMain
        title={projectData.title}
        alt={projectData.images.heroAlt}
        src={projectData.images.hero}
        demo={projectData.links.live}
        github={projectData.links.github}
      />

      <BlogStats
        time={projectData.metadata.date}
        duration={projectData.metadata.duration}
        users={statsValue}
      />

      <BlogDesp
        text={projectData.description[0]}
        text2={projectData.description[1]}
      />

      <BlogTech techstack={projectData.techStack} />

      <BlogFeatures features={projectData.features} />

      <BlogChallenges challenge={projectData.challenges} />

      <BlogPerformance
        performance={projectData.performance}
        performanceImg={performanceImage}
        performanceAlt={projectData.images.performanceAlt}
      />

      <BlogLearning text={projectData.lessonsLearned} />
    </AnimatedArticle>
  );
}
