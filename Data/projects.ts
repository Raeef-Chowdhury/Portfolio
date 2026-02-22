import { TechStack } from "@/Types/techstack";
import { Project } from "@/Types/project";
import {
  Star,
  Zap,
  Clock,
  Package,
  Users,
  Globe,
  Shield,
  FishingHook,
} from "lucide-react";

import StarVaultImg from "@/Images/Star-Vault.png";
import IslamicImg from "@/Images/Islamic-Foundations.png";
import PortfolioImg from "@/Images/Portfolio.png";
import FluxisImg from "@/Images/Fluxis.png";

const techStackStar: TechStack[] = [
  { skill: "React Three Spring", color: "text-blue-400" },
  { skill: "React JS", color: "text-cyan-400" },
  { skill: "React Three Fiber", color: "text-emerald-400" },
];
const techStackIslam: TechStack[] = [
  { skill: "Motion One", color: "text-amber-600" },
  { skill: "React JS", color: "text-cyan-400" },
  { skill: "React-Router", color: "text-red-400" },
];

const techStackPortfolio: TechStack[] = [
  { skill: "Motion One", color: "text-amber-600" },
  { skill: "NextJS", color: "text-slate-200" },
  { skill: "Typescript", color: "text-blue-400" },
];

const techStackFluxis: TechStack[] = [
  { skill: "React JS", color: "text-cyan-400" },
  { skill: "Typescript", color: "text-blue-400" },
  { skill: "Tailwind CSS", color: "text-teal-400" },
  { skill: "Custom Hooks", color: "text-orange-400" },
];

export const projects: Project[] = [
  {
    id: "star-vault",
    href: "/projects/star-vault",
    title: "Star Vault",
    description: "An immersive 3D interactive space",
    image: StarVaultImg,
    alt: "Star Vault 3D galaxy journaling interface",
    techStack: techStackStar,
    accentColor: "cyan-700",
    cta: "Check this 3D space out",
    stats: [
      { icon: Zap, value: "99+", label: "Lighthouse" },
      { icon: Star, value: "12", label: "Stars" },
      { icon: Clock, value: "2s", label: "Load" },
    ],
  },
  {
    id: "islamic-foundations",
    href: "/projects/islamic-foundations",
    title: "Islamic Foundations",
    description: "A real world islamic app used by over 50+ people",
    image: IslamicImg,
    alt: "Islamic Foundations hero page",
    techStack: techStackIslam,
    accentColor: "emerald-800",
    cta: "Look at what's used by 50+ people",
    stats: [
      { icon: Users, value: "50+", label: " Users" },
      { icon: Globe, value: "10+", label: "Countries" },
      { icon: Zap, value: "95+", label: "Lighthouse" },
    ],
  },
  {
    id: "raeefPortfolio",
    href: "/projects/portfolio",
    title: "Portfolio",
    description: "My portfolio used to showcase my projects and skills",
    image: PortfolioImg,
    alt: "Portfolio main page",
    techStack: techStackPortfolio,
    accentColor: "emerald-800",
    cta: "Learn more about this project",
    stats: [
      { icon: Zap, value: "90+", label: "Lighthouse" },
      { icon: Package, value: "25+", label: "Reuseable Components" },
      { icon: Shield, value: "100%", label: "Typesafety" },
    ],
  },
  {
    id: "fluxis",
    href: "/projects/fluxis",
    title: "FLUXIS",
    description:
      "A LifeOS-style dashboard to manage tasks, stats, and notifications",
    image: FluxisImg,
    alt: "FLUXIS productivity dashboard overview",
    techStack: techStackFluxis,
    accentColor: "violet-700",
    cta: "Explore the dashboard",
    stats: [
      { icon: FishingHook, value: "5+", label: "Hooks" },
      { icon: Package, value: "20+", label: "Components" },
      { icon: Shield, value: "100%", label: "Typesafe" },
    ],
  },
];
