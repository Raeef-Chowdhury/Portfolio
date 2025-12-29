"use client";
import { useState, useEffect } from "react";

function Hero() {
  const [hovered, setHovered] = useState<boolean>(false);
  const getCurrentTime = (): string => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    const hoursStr = hours.toString().padStart(2, "0");

    return `${hoursStr}:${minutes}:${seconds} ${ampm}`;
  };
  const [time, setTime] = useState<string>(getCurrentTime());

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col mx-auto max-w-[1440px] items-center justify-center text-center mt-[4.8rem] px-6">
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
        <div className="flex justify-center mb-[3.6rem] mt-[2.4rem] items-center gap-3 text-tertiary transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>

          <span className="text-[1.6rem] tracking-wide">Albury, Australia</span>

          <span className="text-[1.6rem] tracking-wide opacity-80">
            · {time}
          </span>
        </div>
        <p className="text-text text-[2.4rem] mb-8 max-w-[844px] leading-loose">
          A young developer with a love of the game having over{" "}
          <span className="underline underline-offset-2 hover:bg-primary hover:text-background transition-colors hover:cursor-pointer mr-[0.6rem] decoration-primary">
            2+
          </span>
          years of active coding expirience. So far, I have individually
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
        <div className="flex gap-[3.6rem] max-w-[644px] justify-self-center mt-[4.8rem]">
          <a
            href="https://github.com/raeef-chowdhury"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <svg
              className={`transition-all duration-500 rotate-[7.5deg] absolute top-[45%] -translate-y-1/2 left-1/2 -translate-x-[48%] w-full h-full  ${
                hovered
                  ? "opacity-100 transform translate-y-[-7.2rem]"
                  : "opacity-0 translate-y-[0rem]"
              } pointer-events-none`}
              viewBox="0 0 200 200"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -80, 0 a 80,50 0 1,1 160,0 a 80,50 0 1,1 -160,0"
                />
              </defs>
              <text
                className="fill-tertiary text-[2.8rem] tracking-[0.6em]"
                fill="currentColor"
              >
                <textPath href="#circlePath" startOffset="0%">
                  GITHUB
                </textPath>
              </text>
            </svg>
            <button className="rounded-full p-[2rem] bg-slate-800 hover:bg-slate-700 transition-all hover:scale-105 hover:cursor-pointer relative z-10">
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
          </a>
          <a
            href="https://github.com/raeef-chowdhury"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block group"
          >
            <svg
              className={`transition-all duration-500 rotate-[7.5deg] absolute top-[45%] -translate-y-1/2 left-1/2 -translate-x-[50%]  w-full h-full group-hover:opacity-100 opacity-0 group-hover:translate-y-[-7rem] translate-y-[0rem]  
                pointer-events-none`}
              viewBox="0 0 200 200"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -100, 0 a 100,35 0 1,1 200,0 a 100,35 0 1,1 -200,0"
                />
              </defs>
              <text
                className="fill-tertiary text-[3.2rem] tracking-[0.6em]"
                fill="currentColor"
              >
                <textPath href="#circlePath" startOffset="0%">
                  EMAIL
                </textPath>
              </text>
            </svg>
            <button className="rounded-full p-[2rem] bg-slate-800 hover:bg-slate-700 transition-all hover:scale-105 hover:cursor-pointer relative z-10">
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
        <a href="#projects">
          <button className="group relative px-8 py-4 bg-secondary text-text rounded-full text-[1.8rem] tracking-wide hover:cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-slate-800/50 mt-[6.4rem]">
            CHECK OUT MY PROJECTS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-1/2 -translate-x-1/2 -bottom-24 animate-bounce text-tertiary"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
