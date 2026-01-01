"use client";
import { motion } from "framer-motion";

function AnimatedArticle({ children }: { children: React.ReactNode }) {
  console.log(children);
  return (
    <motion.article
      initial={{ opacity: 0, y: "-20rem" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-[722px] article mx-auto mt-[6rem] pb-[6rem]  flex flex-col items-center gap-[3rem]"
    >
      {children}
    </motion.article>
  );
}
export default AnimatedArticle;
