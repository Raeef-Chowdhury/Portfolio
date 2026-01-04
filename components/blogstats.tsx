import { Calendar, Clock, Star } from "lucide-react";
function BlogStats({
  time,
  duration,
  users,
}: {
  time: string;
  duration: string;
  users: string;
}) {
  return (
    <div className="items-center flex w-full justify-between mt-[-1.8rem] border-b-2 border-slate-700 pb-[6rem] ">
      <div className="flex justify-center mt-6 items-center">
        <div className="inline-flex items-center gap-[1.2rem] px-[2.4rem] py-[1.2rem]  bg-slate-800/50 rounded-full border border-slate-700/50">
          <Calendar size={30} className="text-emerald-400" strokeWidth={2} />
          <span className="text-[1.8rem] text-text">{time}</span>
        </div>
      </div>
      <div className="flex justify-center mt-6 items-center">
        <div className="inline-flex items-center gap-[1.2rem] px-[2.4rem] py-[1.2rem]  bg-slate-800/50 rounded-full border border-slate-700/50">
          <Clock size={30} className="text-emerald-400" strokeWidth={2} />
          <span className="text-[1.8rem] text-text">{duration} </span>
        </div>
      </div>
      <div className="flex justify-center mt-6 items-center">
        <div className="inline-flex items-center gap-[1.2rem] px-[2.4rem] py-[1.2rem]  bg-slate-800/50 rounded-full border border-slate-700/50">
          <Star size={30} className="text-emerald-400" strokeWidth={2} />
          <span className="text-[1.8rem] text-text"> {users} </span>
        </div>
      </div>
    </div>
  );
}
export default BlogStats;
