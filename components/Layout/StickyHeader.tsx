"use client";

import { useEffect, useState } from "react";
function StickyHeader({ children }: { children: React.ReactNode }) {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleSticky = () => {
      if (window.scrollY > 520) {
        setSticky(true);
      } else if (window.scrollY < 480) {
        setSticky(false);
      }
    };

    handleSticky();

    window.addEventListener("scroll", handleSticky);

    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, []);
  return (
    <header
      className={`p-[3.6rem] ${
        sticky
          ? "sticky left-0 bg-background top-0 z-50 backdrop-filter "
          : "bg-secondary/10"
      } max-w-[5260px] mx-auto  shadow-2xl border-b border-slate-700/50`}
    >
      {children}
    </header>
  );
}
export default StickyHeader;
