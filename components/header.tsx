import Link from "next/link";
function Header() {
  return (
    <header className="p-[3.6rem] max-w-[1920px] mx-auto  bg-background shadow-2xl border-b border-slate-700/50">
      <nav className="">
        <ul className="flex items-center justify-around">
          <div>
            <li className="group flex items-center gap-3 hover:cursor-pointer hover:scale-125 text-slate-100 text-lg font-light transition-all duration-300 hover:translate-x-1">
              <span className="flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:scale-150 transition-transform duration-300 shadow-lg shadow-cyan-500/50" />
              <span className=" tracking-wide text-text text-[2.4rem]">
                Frontend Developer
              </span>
            </li>
          </div>
          <div className="flex items-center capitalize gap-[8rem]">
            <NavbarItem name="Home" route="/" />{" "}
            <NavbarItem name="About" route="/about" />{" "}
            <NavbarItem name="Projects" route="/projects" />{" "}
            <NavbarItem name="Skills" route="/skills" />{" "}
            <NavbarItem name="Contact" route="/contact" />
          </div>
        </ul>
      </nav>
    </header>
  );
}
function NavbarItem({ name, route }: { name: string; route: string }) {
  return (
    <Link href={route}>
      <li className="text-text text-[1.6rem] underline underline-offset-12 hover:text-primary transition-all hover:scale-125 hover:cursor-pointer tracking-[0.2rem] decoration-wavy">
        {name}
      </li>
    </Link>
  );
}
export default Header;
