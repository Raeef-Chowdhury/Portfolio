"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarItem({ name, route }: { name: string; route: string }) {
  const currentPath = usePathname();

  return (
    <li
      className={`text-[1.6rem] transition-all hover:scale-110 hover:cursor-pointer tracking-[0.2rem] ${
        currentPath === route
          ? "text-emerald-900 font-bold bg-primary px-12 py-3 rounded-full shadow-lg shadow-primary/30"
          : "text-text hover:text-primary underline underline-offset-12 decoration-wavy"
      }`}
    >
      <Link href={route}>{name}</Link>
    </li>
  );
}
export default NavbarItem;
