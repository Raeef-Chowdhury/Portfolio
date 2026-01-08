import Heading from "@/components/heading";
import SkillCard from "@/components/skillcard";
import { Skill } from "@/Types/skill";

// Category Icons
const categoryIcons = {
  Frontend: "⚡",
  Tools: "🛠️",
  Backend: "⚙️",
};

function Skills() {
  const skills: Skill[] = [
    // Frontend
    {
      name: "HTML",
      icon: "SiHtml5",
      colorGradient: "from-red-500 to-red-600",
      color: "red-500",
      yearsExp: 3,
      projectsBuilt: 25,
      category: "Frontend",
    },
    {
      name: "CSS",
      icon: "SiCss3",
      colorGradient: "from-blue-700 to-blue-800",
      color: "blue-700",
      yearsExp: 3,
      projectsBuilt: 25,
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: "SiJavascript",
      colorGradient: "from-yellow-400 to-yellow-600",
      color: "yellow-400",
      yearsExp: 3,
      projectsBuilt: 20,
      category: "Frontend",
    },
    {
      name: "React",
      icon: "SiReact",
      colorGradient: "from-cyan-400 to-blue-500",
      color: "cyan-400",
      yearsExp: 2,
      projectsBuilt: 11,
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: "SiNextdotjs",
      colorGradient: "from-slate-200 to to-slate-300",
      color: "slate-300",
      yearsExp: 1,
      projectsBuilt: 3,
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: "SiTypescript",
      colorGradient: "from-blue-500 to-blue-700",
      color: "blue-500",
      yearsExp: 1,
      projectsBuilt: 3,
      category: "Frontend",
    },
    {
      name: "Tailwind",
      icon: "SiTailwindcss",
      colorGradient: "from-teal-400 to-cyan-500",
      color: "teal-500",
      yearsExp: 2,
      projectsBuilt: 9,
      category: "Frontend",
    },
    {
      name: "SASS",
      icon: "SiSass",
      colorGradient: "from-pink-500 to-purple-600",
      color: "pink-500",
      yearsExp: 1,
      projectsBuilt: 4,
      category: "Frontend",
    },

    // Tools
    {
      name: "Git",
      icon: "SiGit",
      colorGradient: "from-orange-500 to-red-600",
      color: "orange-500",
      yearsExp: 2,
      projectsBuilt: 16,
      category: "Tools",
    },

    {
      name: "npm",
      icon: "SiNpm",
      colorGradient: "from-red-500 to-red-700",
      color: "red-800",
      yearsExp: 2,
      projectsBuilt: 10,
      category: "Tools",
    },
    {
      name: "Chrome DevTools",
      icon: "SiGooglechrome",
      colorGradient: "from-green-400 to-blue-500",
      color: "emerald-700",
      yearsExp: 3,
      projectsBuilt: 20,
      category: "Tools",
    },
  ];

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <div className="min-h-screen mt-[12rem] py-24 px-6 lg:px-12 2xl:px-20">
      <div className="w-full max-w-[1800px] mx-auto">
        <div className="mb-20">
          <Heading content="Tech Stack" />
        </div>

        <div className="space-y-24">
          {categories.map((category) => (
            <div key={category}>
              <div className="flex items-center gap-4 mb-12">
                <div className="text-5xl">
                  {categoryIcons[category as keyof typeof categoryIcons]}
                </div>
                <h2 className="text-5xl font-bold text-white uppercase tracking-tight">
                  {category}
                </h2>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-gray-700 via-gray-600 to-transparent ml-4"></div>
                <div className="text-gray-200 text-[1rem] font-medium">
                  {skills.filter((s) => s.category === category).length} skills
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
