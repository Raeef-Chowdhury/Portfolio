import Link from "next/link";

function MobilePageBackBtn({ link, page }: { link: string; page: string }) {
  return (
    <div className="relative min-xl:hidden mt-[12rem] ">
      <Link
        href={link}
        className={`group relative flex items-center gap-3 px-8 py-4 bg-emerald-900 text-text rounded-full text-[1.8rem] tracking-wide hover:cursor-pointer  transition-[transform,box-shadow,scale,top] duration-300 hover:scale-105 hover:shadow-lg hover:shadow-slate-800/50 z-50 `}
      >
        <span className="group-hover:-translate-x-4 transition-transform duration-300">
          ←
        </span>
        <span>Back to {page}</span>
      </Link>
    </div>
  );
}
export default MobilePageBackBtn;
