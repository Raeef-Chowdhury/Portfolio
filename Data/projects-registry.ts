// Data/projects-registry.ts
import IslamicData from "./islamic-blog";
import StarData from "./star-blog";
import PortfolioData from "./portfolio";

export const projectsData = {
  "islamic-foundations": IslamicData,
  "star-vault": StarData,
  portfolio: PortfolioData,
  // Add more projects here as you create them
} as const;

export type ProjectSlug = keyof typeof projectsData;

export const projectMetadata = {
  "islamic-foundations": {
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
      type: "article" as const,
    },
  },
  "star-vault": {
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
      type: "article" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: "Star Vault | Projects",
      description:
        "An immersive 3D journaling system where memories become stars in personalized galaxies.",
      images: ["/portfolio/Images/Star-Vault.png"],
    },
  },
  portfolio: {
    title: "Portfolio | Projects",
    description:
      "My portfolio is a showcase of my projects and skills, built with NextJS, Typescript, and TailwindCSS.",
    openGraph: {
      title: "Portfolio | Raeef Chowdhury",
      description:
        "My portfolio is a showcase of my projects and skills, built with NextJS, Typescript, and TailwindCSS",
      url: "https://raeef-portfolio.vercel.app/",
      images: [
        {
          url: "/portfolio/Images/Portfolio.png",
          width: 1200,
          height: 630,
          alt: "Portfolio main hero page ",
        },
      ],
      type: "article" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: "Star Vault | Projects",
      description:
        "My portfolio is a showcase of my projects and skills, built with NextJS, Typescript, and TailwindCSS",
      images: ["/portfolio/Images/Portfolio.png"],
    },
  },
} as const;
