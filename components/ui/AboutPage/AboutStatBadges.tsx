import { PortfolioStats } from "@/Data/AboutStats";
export function AboutStatBadges({ id, value, label, Icon }: PortfolioStats) {
  return (
    <div key={id} className="text-center">
      <div className="flex justify-center mb-2">
        <Icon className="w-12 h-12 text-emerald-400" />
      </div>
      <div className="text-[3.2rem] font-bold text-emerald-400 mb-1">
        {value}
      </div>
      <div className="text-[1.2rem] text-slate-400">{label}</div>
    </div>
  );
}
