import SkillCard from "@/components/skillcard";
import AnimateStagger from "@/components/animatestagger";
import Heading from "@/components/heading";
import { skills } from "@/Data/skillspagedata";
import { capabilities } from "@/Data/skillspagedata";
import { colorMap } from "@/Data/skillspagedata";
import { improving } from "@/Data/skillspagedata";
const categories = Array.from(new Set(skills.map((s) => s.category)));
export default function SkillsPage() {
  return (
    <div className="w-full px-12 py-32">
      {/* Header */}
      <header className="text-center mb-48 max-w-5xl mx-auto">
        <Heading content="Skills" />
        <p className="text-3xl text-text/50">
          What I bring to the table, and what Im learning next
        </p>
      </header>

      <section className="mb-[24rem] max-w-[1440px] mx-auto">
        <h2 className="text-center text-[3.2rem] uppercase tracking-[0.4em] text-emerald-700 mb-24 font-medium">
          What I Can Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            const colors = colorMap[capability.color as keyof typeof colorMap];

            return (
              <AnimateStagger key={index} index={index}>
                <div className="group relative ">
                  <div
                    className={`relative min-h-[280px] flex flex-col gap-[1.6rem] p-12 border-2 ${colors.border} transition-all duration-300 rounded-xl bg-slate-900/50 backdrop-blur-sm group-hover:scale-[1.02] shadow-2xs ${colors.shadow}`}
                  >
                    <Icon
                      className={`w-14 h-14  ${colors.icon} group-hover:scale-110 transition-transform duration-300`}
                      strokeWidth={1.5}
                    />
                    <h3
                      className={`text-[3.2rem] mb-[1.2rem] font-bold  tracking-tight ${colors.title}`}
                    >
                      {capability.title}
                    </h3>
                    <p className="text-[1.4rem] text-text  leading-relaxed group-hover:text-text/90 transition-colors">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </AnimateStagger>
            );
          })}
        </div>
      </section>

      <section className="mb-[24rem]  max-w-[1444px] mx-auto">
        <h2 className="text-center text-[3.2rem] uppercase tracking-[0.4em] text-emerald-700 mb-24 font-medium">
          Tech Skills
        </h2>
        <div className="flex  flex-col gap-[6rem]">
          {categories.map((category) => (
            <div key={category}>
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-5xl font-bold text-white uppercase tracking-tight">
                  {category}
                </h2>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-gray-700 via-gray-600 to-transparent ml-4"></div>
                <div className="text-gray-200 text-[1rem] font-medium">
                  {skills.filter((s) => s.category === category).length} skills
                </div>
              </div>

              <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <AnimateStagger
                      key={skill.name}
                      index={skills.indexOf(skill)}
                    >
                      <SkillCard key={skill.name} skill={skill} />
                    </AnimateStagger>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Currently Improving - Horizontal Cards */}
      <section className="max-w-[1440px] mx-auto">
        <div className="flex justify-center items-center mb-12">
          <h2 className="text-center text-[3.2rem] uppercase tracking-[0.4em] text-emerald-700 mb-24 font-medium">
            Currently Working On
          </h2>
        </div>

        <div className="flex gap-[4.8rem] justify-center items-center">
          {improving.map((item, index) => (
            <AnimateStagger key={index} index={index}>
              <div className="bg-slate-900/40 border max-w-[388px] border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 backdrop-blur-sm group">
                {/* Icon */}
                <div
                  className={`text-4xl  flex items-center justify-start rounded-lg ${item.color} mb-6`}
                >
                  <item.icon className="w-18 h-18" />
                </div>

                {/* Title */}
                <h3
                  className={`text-[2.4rem] mt-[2.4rem] font-bold mb-12 ${item.color}`}
                >
                  {item.text}
                </h3>

                {/* Description */}
                <p className="text-[1.4rem] text-text/50 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </AnimateStagger>
          ))}
        </div>
      </section>
    </div>
  );
}
export const metadata = {
  title: "Skills | Raeef Chowdhury",
  description:
    "What I bring to the table, and what I'm learning next. Frontend engineering, UI thinking, performance optimization, and the technologies I work with daily.",
  keywords: [
    "frontend developer",
    "React",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "web development skills",
    "UI engineering",
    "web performance",
    "Tailwind CSS",
    "Framer Motion",
    "developer portfolio",
  ],
  openGraph: {
    title: "Skills | Raeef Chowdhury",
    description:
      "Frontend engineering expertise and current learning focus. Specializing in React, TypeScript, and building scalable web applications.",
    type: "website",
    url: "https://yourwebsite.com/skills",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills | Raeef Chowdhury",
    description: "Frontend engineering expertise and technologies I work with.",
  },
};
