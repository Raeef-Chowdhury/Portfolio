"use client";
import { motion } from "motion/react";

function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "10rem" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col mx-auto max-w-[1440px] items-center justify-center text-center mt-[4.8rem] px-6"
    >
      {children}
    </motion.div>
  );
}
export default AnimatedSection;
