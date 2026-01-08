import Heading from "./heading";
import { Zap, Layers, ShieldCheck, Target, LucideIcon } from "lucide-react";
interface Value {
  icon: LucideIcon;
  label: string;
  description: string;
}
export const values: Value[] = [
  {
    icon: Layers,
    label: "Systems Thinker",
    description: "Understands the whole problem, not just the code.",
  },
  {
    icon: Zap,
    label: "Relentless Learner",
    description: "Always improving and learning new things.",
  },
  {
    icon: Target,
    label: "Detail oriented",
    description: "Attention for the small stuff",
  },
  {
    icon: ShieldCheck,
    label: "Quality-Driven",
    description: "Quality > Quantity Mindset",
  },
];

export default function AboutPreview() {
  return (
    <section className="py-32 px-6 mt-[12rem]">
      <div className="mx-auto">
        <Heading content="About me" />

        {/* Journey Card - Improved */}
        <div className="mt-16 relative">
          {/* Glow effect behind card */}

          <div className="max-w-6xl mx-auto relative bg-slate-800/90  rounded-3xl p-16 border-2 border-slate-700/50 shadow-2xl">
            <p className="text-[1.8rem] text-slate-50 leading-[1.8] text-center max-w-4xl mx-auto font-light">
              I first started coding at{" "}
              <span className="text-emerald-400 font-semibold">14</span>{" "}
              building simple html and css sites for my family members. Now I
              focus on crafting{" "}
              <span className="text-emerald-400 font-semibold">
                interactive, useful and accessible
              </span>{" "}
              websites that solve real problems. What began as a experiment has
              now become a full fledged{" "}
              <span className="text-emerald-400 font-semibold">obsession</span>{" "}
              with web development.
            </p>
          </div>
        </div>

        <div className="grid max-w-[1028px] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all duration-300 group cursor-pointer"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-300" />

                <div className="relative">
                  <div className="mb-5 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-16 h-16 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-bold text-[1.7rem] mb-2">
                    {value.label}
                  </h3>
                  <p className="text-slate-400 text-[1.5rem]">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <a
            href="/about"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-full shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 font-bold text-[1.8rem] group"
          >
            Learn More About Me
            <svg
              className="w-12 h-12 group-hover:translate-x-2 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
