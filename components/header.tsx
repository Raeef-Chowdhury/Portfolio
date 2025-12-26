function Header() {
  return (
    <header className="p-[2rem] max-w-[1920px] mx-[6rem] bg-background">
      <nav className="">
        <ul className="flex items-center justify-between">
          <div>
            <li className="flex items-center text-[1.8rem] gap-[0.8rem] text-text">
              <span className="text-primary text-[2.4rem]  inline-block leading-none">
                ⋅
              </span>
              Web Developer
            </li>
          </div>
          <div className="flex items-center capitalize gap-[4.8rem]">
            <li className="text-text text-[1.4rem] underline underline-offset-12 hover:text-primary transition-all hover:scale-125 hover:cursor-pointer tracking-[0.2rem]  decoration-wavy">
              <span>Home</span>
            </li>
            <li className="text-text text-[1.4rem] underline underline-offset-12 hover:text-primary transition-all hover:scale-125 hover:cursor-pointer tracking-[0.2rem] decoration-wavy">
              About
            </li>
            <li className="text-text text-[1.4rem] underline underline-offset-12 hover:text-primary transition-all hover:scale-125 hover:cursor-pointer tracking-[0.2rem] decoration-wavy">
              Projects
            </li>
            <li className="text-text text-[1.4rem] underline underline-offset-12 hover:text-primary transition-all hover:scale-125 hover:cursor-pointer tracking-[0.2rem] decoration-wavy">
              Skills
            </li>
            <li className="text-text text-[1.4rem] underline underline-offset-12 hover:text-primary transition-all hover:scale-125 hover:cursor-pointer tracking-[0.2rem] decoration-wavy">
              Contact
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
