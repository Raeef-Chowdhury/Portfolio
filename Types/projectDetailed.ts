import { StaticImageData } from "next/image";
export interface ProjectData {
  id: string;
  title: string;
  category: string;
  links: {
    github: string;
    live: string;
  };
  metadata: {
    date: string;
    duration: string;
    users: string;
  };
  images: {
    hero: StaticImageData;
    performance: StaticImageData;
    performanceAlt: string;
    heroAlt: string;
  };
  description: string[];
  techStack: Array<{
    name: string;
    description: string;
  }>;
  features: Array<{
    name: string;
    description: string;
  }>;
  challenges: Array<{
    challenge: string;
    solution: string;
  }>;
  performance: Array<{
    metric: string;
    score: number;
    implementation: string;
  }>;
  lessonsLearned: string;
}
