import IslamicImg from "@/Images/Islamic-Foundations.png";
import Image from "next/image";
import Link from "next/link";
import AnimatedArticle from "@/components/animatedarticle";
import BackButton from "@/components/BackButton";
import { Github, ExternalLink, Calendar, Clock, Star } from "lucide-react";

function IslamicFoundations() {
  return (
    <>
      <AnimatedArticle>
        <BackButton link="/projects" page="Projects" />
        <div className="w-[722px] h-[390px]  rounded-4xl bg-emerald-900/40 p-6 flex items-center justify-center overflow-hidden">
          <Image
            src={IslamicImg}
            className="   shadow-2xl object-cover rounded-2xl"
            width={588}
            height={344}
            alt="Star Vault 3D galaxy journaling interface showing memories as stars in personalized galaxies"
            priority
            sizes="288px"
            quality={90}
          />
        </div>
        <div className="flex justify-between items-center w-full  ">
          <h1 className="self-start text-left text-[4.8rem] text-text capitalize">
            Islamic Foundations{" "}
          </h1>
          <div className="flex items-center gap-[4.5rem] mr-[2rem]">
            <Link
              href="https://github.com/raeef-chowdhury/Al-Quran"
              target="_blank"
              className="bg-emerald-900/70 hover:transition-all duration-200 hover:scale-110 hover:cursor-pointer p-[1rem] rounded-full"
            >
              <Github size={30} className="text-amber-600" strokeWidth={2} />
            </Link>
            <Link
              href="https://islamic-foundations.netlify.app/"
              target="_blank"
              className="bg-emerald-900/70 hover:transition-all duration-200 hover:scale-110 hover:cursor-pointer p-[1rem] rounded-full"
            >
              <ExternalLink
                size={30}
                className="text-amber-600"
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>
        <div className="items-center flex w-full justify-between mt-[-1.8rem] border-b-2 border-slate-700 pb-[6rem] ">
          <div className="flex justify-center mt-6 items-center">
            <div className="inline-flex items-center gap-[1.2rem] px-[2.4rem] py-[1.2rem]  bg-slate-800/50 rounded-full border border-slate-700/50">
              <Calendar
                size={30}
                className="text-emerald-400"
                strokeWidth={2}
              />
              <span className="text-[1.8rem] text-text">October 2025</span>
            </div>
          </div>
          <div className="flex justify-center mt-6 items-center">
            <div className="inline-flex items-center gap-[1.2rem] px-[2.4rem] py-[1.2rem]  bg-slate-800/50 rounded-full border border-slate-700/50">
              <Clock size={30} className="text-emerald-400" strokeWidth={2} />
              <span className="text-[1.8rem] text-text">2 Months</span>
            </div>
          </div>
          <div className="flex justify-center mt-6 items-center">
            <div className="inline-flex items-center gap-[1.2rem] px-[2.4rem] py-[1.2rem]  bg-slate-800/50 rounded-full border border-slate-700/50">
              <Star size={30} className="text-emerald-400" strokeWidth={2} />
              <span className="text-[1.8rem] text-text">50+ Users</span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-[1.2rem] mt-[3rem]">
          <h3 className="text-[4.8rem] text-text self-start tracking-[-0.1rem]">
            Description
          </h3>
          <p className="text-text/80 text-[2rem] mb-8 max-w-[772px] self-start leading-loose">
            Islamic Foundations is a real world website made for Muslims to
            deepen their faith. It is a platform that allows muslims to complete
            prayer streaks, read the Quran (Holy Book), among other daily
            essentials for all muslims.
          </p>

          <p className="text-text/80 text-[2rem] max-w-[772px] self-start leading-loose">
            This is my most impressive project yet because it caters to an
            actual target market of people who will benefit from what I have
            made.
          </p>
        </div>{" "}
        <div className="w-full flex flex-col items-center gap-[1.2rem] mt-[6rem]">
          <h3 className="text-[4.8rem] text-text self-start tracking-[-0.1rem]">
            Tech Stack
          </h3>
          <ul className="text-text/80 ml-[4.8rem] list-disc text-[2rem] mb-8 max-w-[772px] self-start leading-loose">
            <li>
              <span className="text-text">React JS:</span> Core library used to
              build the structure and logic of the website
            </li>

            <li>
              <span className="text-text">React Router:</span> Handles
              navigation and page routing without refreshing
            </li>

            <li>
              <span className="text-text">Tailwind CSS:</span> Utility-first
              styling framework for fast and responsive UI design
            </li>

            <li>
              <span className="text-text">Motion One:</span> Lightweight
              animation library used for smooth transitions & interactions
            </li>

            <li>
              <span className="text-text">External APIs:</span> Used to fetch
              and display dynamic content throughout the site
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col items-center gap-[1.2rem] mt-[6rem]">
          <h3 className="text-[4.8rem] text-text self-start tracking-[-0.1rem]">
            Features
          </h3>
          <ul className="text-text/80 ml-[4.8rem] list-disc text-[2rem] mb-8 max-w-[772px] self-start leading-loose">
            <li>
              <span className="text-text">Filtering:</span> Create filtering by
              name or category for both surahs (chapters) and duas (prayers).
            </li>
            <li>
              <span className="text-text">Responsiveness:</span> Fully
              responsive in all screen sizes
            </li>
            <li>
              <span className="text-text">Routing:</span> React router for
              smooth app navigation and transitions
            </li>
            <li>
              <span className="text-text">APIs:</span> Many external apis were
              used to fetch all the necesscary data for the site.
            </li>{" "}
            <li>
              <span className="text-text">Dark Mode:</span> Because why not?
              Definitely not worth it though.
            </li>
          </ul>{" "}
        </div>
      </AnimatedArticle>
    </>
  );
}
export default IslamicFoundations;

export const metadata = {
  title: "Islamic Foundations | Projects",
  description:
    "Islamic Foundations is a comprehensive Islamic education platform with 50+ active users, built with React and Motion One.",
  openGraph: {
    title: "Islamic Foundations | Raeef Chowdhury",
    description:
      "A website for deepening Islamic understanding with 50+ active users.",
    url: "https://islamic-foundations.netlify.app/",
    images: [
      {
        url: "/portfolio/Images/Islamic-Foundations.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "article",
  },
};
