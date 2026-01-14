import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface AboutCtaBtnProps {
  href: string;
  icon: LucideIcon;
  text: string;
  label: string;
  color: string;
}

export function AboutCtaBtn({
  href,
  icon: Icon,
  text,
  label,
  color,
}: AboutCtaBtnProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${color} group px-12 py-4 rounded-lg border-2 border-text/50 text-slate-200 hover:translate-y-[-4px]  transition-all duration-300 flex items-center gap-6 text-base text-[1.8rem] font-medium`}
    >
      <Icon className="size-8" />
      {text}
    </Link>
  );
}
