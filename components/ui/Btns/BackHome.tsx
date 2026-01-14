import Link from "next/link";
function BackHomeBtn() {
  return (
    <Link
      href="/"
      className="flex absolute max-lg:hidden left-20 top-10 hover:gap-6 transition-all items-center gap-3 px-12 py-4 bg-tertiary text-slate-900 rounded-full shadow-lg font-medium text-[1.4rem]"
    >
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back to Home
    </Link>
  );
}
export default BackHomeBtn;
