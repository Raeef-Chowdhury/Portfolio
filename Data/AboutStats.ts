import { Zap, Users, Rocket, LucideIcon } from "lucide-react";

export interface PortfolioStats {
  id: string;
  value: string;
  label: string;
  Icon: LucideIcon;
}

export const portfolioStats: PortfolioStats[] = [
  {
    id: "lighthouse",
    value: "95+",
    label: "Lighthouse Score",
    Icon: Zap,
  },
  {
    id: "users",
    value: "50+",
    label: "Users",
    Icon: Users,
  },
  {
    id: "projects",
    value: "3+",
    label: "Projects Shipped",
    Icon: Rocket,
  },
];
