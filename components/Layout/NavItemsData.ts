interface NavbarItemProps {
  content: string;
  route: string;
}
export const NAV_ITEMS: NavbarItemProps[] = [
  { content: "Home", route: "/" },
  { content: "About", route: "/about" },
  { content: "Projects", route: "/projects" },
  { content: "Skills", route: "/skills" },
  { content: "Contact", route: "/contact" },
] as const;
