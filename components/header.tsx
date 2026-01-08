import Link from "next/link";
import NavbarItem from "./navbaritem";
interface NavbarItemProps {
  content: string;
  route: string;
}
const navbarItems: NavbarItemProps[] = [
  { content: "Home", route: "/" },
  { content: "About", route: "/about" },
  { content: "Projects", route: "/projects" },
  { content: "Blog", route: "/blog" },
  { content: "Contact", route: "/contact" },
];
function Header() {
  return (
    <header className="p-[3.6rem] max-w-[1920px] mx-auto bg-background shadow-2xl border-b border-slate-700/50">
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
            <ul className="flex items-center capitalize gap-[8rem] list-none">
              {navbarItems.map(({ content, route }) => (
                <NavbarItem key={content} name={content} route={route} />
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
