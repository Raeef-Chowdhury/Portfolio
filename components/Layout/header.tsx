"use client";
import Link from "next/link";
import NavbarItem from "@/components/ui/navbaritem";
import StickyHeader from "@/components/Layout/StickyHeader";
import { useState } from "react";
import MobileNav from "@/components/Layout/MobileNav";
import { NAV_ITEMS } from "@/components/Layout/NavItemsData";

function Header() {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen((prev: boolean) => !prev);
  return (
    <StickyHeader>
      <nav aria-label="main navigation">
        <ul className="flex items-center justify-around">
          <li className="group flex items-center gap-3 hover:cursor-pointer hover:scale-110 text-slate-100 text-lg font-light transition-all duration-300 hover:translate-x-1">
            <Link
              href="https://github.com/raeef-chowdhury"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="tracking-wide text-text text-[2.4rem] hover:text-tertiary transition-all duration-300">
                <span className="text-primary">{"<"}</span> Raeef Chowdhury{" "}
                <span className="text-primary">{"/>"}</span>
              </span>
            </Link>
          </li>
          <li>
            <ul className="max-lg:hidden flex items-center capitalize gap-[8rem] list-none">
              {NAV_ITEMS.map(({ content, route }) => (
                <NavbarItem key={content} name={content} route={route} />
              ))}
            </ul>
          </li>{" "}
          <div className="min-lg:hidden  flex justify-between items-center">
            <div className="text-primary transition-all transition-300ms hover:scale-110 hover:cursor-pointer"></div>
            <button
              onClick={toggleSidebar}
              className="text-primary transition-all hover:cursor-pointer hover:scale-125 text-[4.8rem]"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>{" "}
        </ul>
      </nav>{" "}
      <MobileNav open={open} setOpen={setOpen} />
    </StickyHeader>
  );
}

export default Header;
