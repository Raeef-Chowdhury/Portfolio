"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function BackButton({ link, page }: { link: string; page: string }) {
  const [scrollY, setScrollY] = useState(() => {
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

  return (
    <motion.div
      initial={{ opacity: 0, top: "-43.1px", left: "-100rem" }}
      animate={{ opacity: 1, top: "-43.1px", left: "-93.4rem" }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <Link
        href={link}
        className={`group flex ${
          isFixed ? "fixed top-[20px]" : "block transform translate-x-[50%]"
        } transform items-center gap-3 px-8 py-4 bg-emerald-900 text-text rounded-full text-[1.8rem] tracking-wide hover:cursor-pointer transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-slate-800/50 z-50`}
      >
        <span className="group-hover:-translate-x-4  duration-300">←</span>
        <span>Back to {page}</span>
      </Link>
    </motion.div>
  );
}
export default BackButton;
