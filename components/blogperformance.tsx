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
  return (
    <div className="w-full flex flex-col items-center gap-[1.2rem] mt-[6rem]">
      <BlogHeading content="Performance" />
      <table className="max-w-[772px] text-[1.8rem] mt-[2.4rem] mb-8 self-start">
        <thead>
          <tr className="border-b-2 border-text/10">
            <th className="text-left py-4 px-4  text-emerald-200">Scores</th>
            <th className="text-left py-4 px-4 text-slate-300">What I did</th>
          </tr>
        </thead>
        <tbody className="text-green-100 leading-loose">
          {performance.map((item, i) => (
            <tr className="border border-text/10" key={i}>
              <td className="py-4 border-r border-text/10 px-4">
                {item.metric}:{" "}
                <span className="text-green-200">{item.score}</span>
              </td>
              <td className="py-4 px-4">{item.implementation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Image src={performanceImg} alt={performanceAlt} />
    </div>
  );
}
export default BlogPerformance;
