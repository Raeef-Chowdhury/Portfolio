// app/projects/[slug]/page.jsx
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
const AnimatedArticle = dynamic(() => import("@/components/animatedarticle"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded"></div>,
});

const BackButton = dynamic(() => import("@/components/BackButton"), {
  loading: () => (
    <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
  ),
});

const BlogMain = dynamic(() => import("@/components/blogmain"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded"></div>,
});

const BlogStats = dynamic(() => import("@/components/blogstats"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded"></div>,
});

const BlogDesp = dynamic(() => import("@/components/blogdesp"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-48 rounded"></div>,
});

const BlogTech = dynamic(() => import("@/components/blogtech"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-40 rounded"></div>,
});

const BlogFeatures = dynamic(() => import("@/components/blogfeatures"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded"></div>,
});

const BlogChallenges = dynamic(() => import("@/components/blogchallenges"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-56 rounded"></div>,
});

const BlogPerformance = dynamic(() => import("@/components/blogperformance"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-48 rounded"></div>,
});

const BlogLearning = dynamic(() => import("@/components/BlogLearning"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-52 rounded"></div>,
});

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
