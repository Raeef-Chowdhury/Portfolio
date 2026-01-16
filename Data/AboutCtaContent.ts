import { GithubIcon, MailIcon, CodeIcon, LucideIcon } from "lucide-react";

export interface Action {
  href: string;
  label: string;
  icon: LucideIcon;
  text: string;
  color: string;
}

export const AboutCtaContent: Action[] = [
  {
    href: "https://github.com/Raeef-Chowdhury",
    label: "GitHub",
    icon: GithubIcon,
    text: "Github",
    color: "hover:border-amber-400 hover:text-amber-500 ",
  },
  {
    href: "mailto:raeefchowdhury23@gmail.com",
    label: "Contact",
    icon: MailIcon,
    text: "Contact",
    color: "hover:border-cyan-400 hover:text-cyan-500 ",
  },
  {
    href: "/projects",
    label: "Projects",
    icon: CodeIcon,
    text: "Projects",
    color: "hover:border-emerald-400 hover:text-emerald-500",
  },
];
