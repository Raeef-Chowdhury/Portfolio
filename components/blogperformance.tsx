import { StaticImageData } from "next/image";
import BlogHeading from "./blogheading";
import Image from "next/image";

interface Performance {
  metric: string;
  score: number;
  implementation: string;
}

function BlogPerformance({
  performance,
  performanceImg,
  performanceAlt,
}: {
  performance: Performance[];
  performanceImg: StaticImageData | string;
  performanceAlt: string;
}) {
  // Function to get color based on score
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-emerald-400";
    if (score >= 70) return "text-yellow-400";
    return "text-orange-400";
  };

  const getStrokeColor = (score: number) => {
    if (score >= 90) return "#34d399"; // emerald-400
    if (score >= 70) return "#fbbf24"; // yellow-400
    return "#fb923c"; // orange-400
  };

  return (
    <div className="w-full flex flex-col items-center gap-[1.2rem] mt-[6rem]">
      <BlogHeading content="Performance" />

      {/* Grid of Performance Cards */}
      <div className="grid grid-cols-2 gap-[3rem] max-w-[772px] w-full mt-[2.4rem] mb-8 self-start">
        {performance.map((item, i) => {
          const radius = 50;
          const circumference = 2 * Math.PI * radius;
          const progress = (item.score / 100) * circumference;
          const strokeColor = getStrokeColor(item.score);

          return (
            <div
              key={i}
              className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-[2.4rem] hover:bg-slate-800/40 transition-all duration-300"
            >
              {/* Circular Progress Indicator */}
              <div className="flex items-center gap-[2rem] mb-[1.6rem]">
                <div className="relative w-[120px] h-[120px] flex-shrink-0">
                  <svg className="transform -rotate-90 w-full h-full">
                    {/* Background circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      stroke="rgba(148, 163, 184, 0.2)"
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      stroke={strokeColor}
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference - progress}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  {/* Score in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className={`text-[2.8rem] font-bold ${getScoreColor(
                        item.score
                      )}`}
                    >
                      {item.score}
                    </span>
                  </div>
                </div>

                {/* Metric name */}
                <h4 className="text-text text-[2.2rem] font-semibold">
                  {item.metric}
                </h4>
              </div>

              {/* Implementation description */}
              <p className="text-text/70 text-[1.6rem] leading-relaxed">
                {item.implementation}
              </p>
            </div>
          );
        })}
      </div>

      {/* Performance Image */}
      <Image
        src={performanceImg}
        alt={performanceAlt}
        className="mt-[2rem] rounded-xl"
      />
    </div>
  );
}

export default BlogPerformance;
