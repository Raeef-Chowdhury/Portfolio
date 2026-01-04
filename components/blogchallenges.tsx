import BlogHeading from "./blogheading";
interface Challenge {
  challenge: string;
  solution: string;
}
function BlogChallenges({ challenge }: { challenge: Challenge[] }) {
  return (
    <div className="w-full flex flex-col items-center gap-[1.2rem]  ">
      <BlogHeading content="Challenges & Solutions" />

      <table className="max-w-[772px] text-[1.8rem] mt-[2.4rem] mb-8 self-start">
        <thead>
          <tr className="border-b-2 border-text/10">
            <th className="text-left py-4 px-4  text-red-400">Challenges</th>
            <th className="text-left py-4 px-4 text-emerald-400">Solutions</th>
          </tr>
        </thead>
        <tbody className="text-green-100 leading-loose">
          {challenge.map((item, i) => (
            <tr className="border border-text/10" key={i}>
              <td className="py-4 border-r border-text/10 px-4">
                {item.challenge}
              </td>
              <td className="py-4 px-4">{item.solution}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default BlogChallenges;
