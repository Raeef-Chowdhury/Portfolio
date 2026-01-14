import { Milestone } from "@/Data/AboutPageMilestones";
export function MilestoneCard({ milestone }: { milestone: Milestone }) {
  return (
    <div className="p-6 rounded-2xl border bg-blue-950/20 border-slate-700/30 hover:bg-blue-900/30 hover:border-green-500 hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl font-bold text-cyan-400">
          {milestone.year}
        </span>
        <div className="flex-1 h-px bg-green-500/50" />
        <span className="text-xs uppercase tracking-wider text-slate-400">
          {milestone.emotion}
        </span>
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-white">
        {milestone.title}
      </h3>
      <p className="text-slate-300 leading-relaxed">{milestone.description}</p>
    </div>
  );
}
