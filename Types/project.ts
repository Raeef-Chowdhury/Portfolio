import { TechStack } from "./techstack";
import { StaticImageData } from "next/image";
export interface Project {
  id: string;
  href: string;
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  techStack: TechStack[];
  accentColor: string;
}
