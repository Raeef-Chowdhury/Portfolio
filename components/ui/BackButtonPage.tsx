"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function BackButton({ link, page }: { link: string; page: string }) {
  const [scrollY, setScrollY] = useState<number>(() => {
    if (typeof window !== "undefined") {
      return window.scrollY;
    }
    return 0;
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isFixed = scrollY > 100;
  const isStickyHeader = scrollY > 520;

  return (
    <motion.div
      initial={{ opacity: 0, top: "-43.1px", left: "-100rem" }}
      animate={{ opacity: 1, top: "-43.1px", left: "-93.4rem" }}
      transition={{ duration: 0.6 }}
      className="relative max-xl:hidden"
    >
      <Link
        href={link}
        className={`group flex items-center gap-3 px-8 py-4 bg-emerald-900 text-text rounded-full text-[1.8rem] tracking-wide hover:cursor-pointer  transition-[transform,box-shadow,scale,top] duration-300 hover:scale-105 hover:shadow-lg hover:shadow-slate-800/50 z-50 ${
          isStickyHeader ? "top-[140px] " : "top-[20px]"
        } ${
          isFixed
            ? "fixed left-[20px] max-[640px]:left-[15px] max-[480px]:left-[10px] max-[844px]:relative "
            : "transform translate-x-[80%] max-[1920px]:translate-x-[120%]  max-[1720px]:translate-x-[140%] max-[1536px]:translate-x-[160%] max-[1280px]:translate-x-[180%] "
        }`}
      >
        <span className="group-hover:-translate-x-4 transition-transform duration-300">
          ←
        </span>
        <span>Back to {page}</span>
      </Link>
    </motion.div>
  );
}
export default BackButton;
