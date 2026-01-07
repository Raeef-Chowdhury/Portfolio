import { TechStack } from "@/Types/techstack";
import { Project } from "@/Types/project";

import StarVaultImg from "@/Images/Star-Vault.png";
import IslamicImg from "@/Images/Islamic-Foundations.png";

const techStackStar: TechStack[] = [
  { skill: "JSON", color: "text-yellow-400" },
  { skill: "Motion One", color: "text-blue-400" },
  { skill: "Vite", color: "text-purple-400" },
  { skill: "React JS", color: "text-cyan-400" },
  { skill: "React Three Fiber", color: "text-emerald-400" },
];
const techStackIslam: TechStack[] = [
  { skill: "JSON", color: "text-yellow-400" },
  { skill: "Motion One", color: "text-blue-400" },
  { skill: "Vite", color: "text-purple-400" },
  { skill: "React JS", color: "text-cyan-400" },
  { skill: "React Three Fiber", color: "text-emerald-400" },
];
export const projects: Project[] = [
  {
    id: "star-vault",
    href: "/projects/star-vault",
    title: "Star Vault",
    description:
      "Star Vault is an immersive 3D journalling system. It allows users to store their memories in an interactive 3D space.",
    image: StarVaultImg,
    alt: "Star Vault 3D galaxy journaling interface",
    techStack: techStackStar,
    accentColor: "cyan-700",
  },
  {
    id: "islamic-foundations",
    href: "/projects/islamic-foundations",
    title: "Islamic Foundations",
    description:
      "A real world app meant for muslims to practice their daily obligations, currently used by over 50 people.",
    image: IslamicImg,
    alt: "Islamic Foundations hero page",
    techStack: techStackIslam,
    accentColor: "emerald-800",
  },
];
