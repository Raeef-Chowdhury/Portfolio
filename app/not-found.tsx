import Link from "next/link";
import WindowBackBtn from "@/components/windowback";
export default function NotFound() {
  return (
    <div className="min-h-screen flex mt-[6rem] justify p-4">
      <div className="text-center max-w-[844px] mx-auto">
        {/* 404 */}
        <h1 className="text-[18rem] font-bold text-primary ">404</h1>

        {/* Message */}
        <h2 className="text-[2.8rem] font-semibold text-gray-800 dark:text-gray-200 mb-3">
          Oops! Page Not Found
        </h2>
        <p className="text-base text-[2.4rem] text-gray-600 dark:text-gray-400 mb-10">
          The page you{"'"}re looking for doesn{"'"}t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-24 py-4 text-[2.4rem]  bg-emerald-900 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all"
          >
            Go Home
          </Link>
          <WindowBackBtn />
        </div>
      </div>
    </div>
  );
}
