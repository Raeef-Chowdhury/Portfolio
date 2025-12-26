function Hero() {
  return (
    <div className="flex flex-col mx-auto max-w-[1440px] items-center justify-center text-center mt-[12rem] px-6">
      <div className="">
        <p className="text-text text-[1.8rem] mb-[1.8rem]">
          Hey There!{" "}
          <span className="inline-block text-[2.4rem] hover:animate-[wave_0.5s_ease-in-out_infinite] cursor-pointer">
            👋
          </span>
        </p>

        <h1 className="text-[6.4rem]  font-bold text-slate-100 mb-6">
          I&apos;m{" "}
          <span className="text-primary  text-[6.4rem] tracking-[0.4rem]">
            Raeef Chowdhury
          </span>
        </h1>

        <p className="text-text text-[2.4rem] mb-8 max-w-[844px] leading-loose">
          A young developer with a love of the game having over{" "}
          <span className="underline underline-offset-2 hover:bg-primary hover:text-background transition-colors hover:cursor-pointer mr-[0.6rem] decoration-primary">
            1,000+
          </span>
          hours of active coding expirience. So far, I have individually
          published{" "}
          <span className="underline underline-offset-2 hover:bg-primary hover:text-background transition-colors hover:cursor-pointer mr-[0.6rem] decoration-primary">
            5+
          </span>{" "}
          real world projects, and have{" "}
          <span className="underline underline-offset-2 hover:bg-primary hover:text-background transition-colors hover:cursor-pointer mr-[0.6rem] decoration-primary">
            50+
          </span>{" "}
          active users on one of them, Islamic Foundations.
        </p>

        <div className="flex gap-[3.2rem] max-w-[644px] justify-self-center mt-[6.4rem]">
          <a
            href="https://github.com/raeef-chowdhury"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-full p-[2rem] bg-slate-800 hover:bg-slate-700 transition-all hover:scale-105 hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github-icon lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </button>
          </a>{" "}
          <a href="mailto:raeef.chowdhury23@gmail.com">
            <button className="rounded-full p-[2rem] bg-slate-800 hover:bg-slate-700 transition-all hover:scale-105 hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
