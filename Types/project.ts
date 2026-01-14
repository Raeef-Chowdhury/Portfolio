import { TechStack } from "./techstack";
import { StaticImageData } from "next/image";
import { LucideIcon } from "lucide-react";
export interface Project {
  id: string;
  href: string;
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  techStack: TechStack[];
  accentColor: string;
  cta: string;
  stats: {
    icon: LucideIcon;
    value: string;
    label: string;
  }[];
}
