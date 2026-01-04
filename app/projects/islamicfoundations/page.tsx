import IslamicImg from "@/Images/Islamic-Foundations.png";
import Image from "next/image";
import Link from "next/link";
import AnimatedArticle from "@/components/animatedarticle";
import BackButton from "@/components/BackButton";
import IslamicPerformance from "@/Images/Screenshot 2026-01-04 143043.png";
import {
  Github,
  ExternalLink,
  Calendar,
  Clock,
  Star,
  NotebookText,
  Layers,
  Zap,
  Target,
  Box,
  NotebookPen,
  Notebook,
} from "lucide-react";

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
          <BlogHeading content="Description" />

          <p className="text-text/80 text-[1.8rem] mb-8 max-w-[772px] self-start leading-loose">
            Islamic Foundations is a real world website made for Muslims to
            deepen their faith. It is a platform that allows muslims to complete
            prayer streaks, read the Quran (Holy Book), among other daily
            essentials for all muslims.
          </p>

          <p className="text-text/80 text-[1.8rem] max-w-[772px] self-start leading-loose">
            This is my most impressive project yet because it caters to an
            actual target market of people who will benefit from what I have
            made.
          </p>
        </div>{" "}
        <div className="w-full flex flex-col items-center gap-[1.2rem] mt-[6rem]">
          <BlogHeading content="Tech Stack" />

          <ul className="text-text/80 ml-[4.8rem] list-disc text-[1.8rem] mb-8 max-w-[772px] self-start leading-loose">
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
          <BlogHeading content="Features" />

          <ul className="text-text/80 ml-[4.8rem] list-disc text-[1.8rem] mb-8 max-w-[772px] self-start leading-loose">
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
          </ul>
        </div>
        <div className="w-full flex flex-col items-center gap-[1.2rem]  mt-[6rem]">
          <BlogHeading content="Challenges & Solutions" />

          <table className="max-w-[772px] text-[1.8rem] mt-[2.4rem] mb-8 self-start">
            <thead>
              <tr className="border-b-2 border-text/10">
                <th className="text-left py-4 px-4  text-red-400">
                  Challenges
                </th>
                <th className="text-left py-4 px-4 text-emerald-400">
                  Solutions
                </th>
              </tr>
            </thead>
            <tbody className="text-green-100 leading-loose">
              <tr className="border border-text/10">
                <td className="py-4 border-r border-text/10 px-4 text-red-50">
                  Render thousands of lines of Arabic{" "}
                </td>
                <td className="py-4 px-4">
                  Used APIs to fetch all the data needed for the Quran,Prayers,
                  and Duas dynamically
                </td>
              </tr>
              <tr className="border border-text/10">
                <td className="py-4 border-r border-text/10 px-4 text-red-50">
                  Geolocation-Based Prayer Times
                </td>
                <td className="py-4 px-4">
                  Calculating accurate Salah times across different time zones
                  and locations using geolocation API and a function to
                  determine time difference
                </td>
              </tr>
              <tr className="border border-text/10">
                <td className="py-4 border-r border-text/10 px-4 text-red-50">
                  Responsive Design{" "}
                </td>
                <td className="py-4 px-4">
                  Optimize the UI and UX expirience across multiple screen
                  sizes.
                </td>
              </tr>
              <tr className="border border-text/10">
                <td className="py-4 border-r border-text/10 px-4 text-red-50">
                  Audio Player for each verse
                </td>
                <td className="py-4 px-4">
                  Synchronizing Quran recitation audio with highlighted Arabic
                  text and using audio methods
                </td>
              </tr>
            </tbody>
          </table>
        </div>{" "}
        <div className="w-full flex flex-col items-center gap-[1.2rem] mt-[6rem]">
          <BlogHeading content="Performance" />
          <table className="max-w-[772px] text-[1.8rem] mt-[2.4rem] mb-8 self-start">
            <thead>
              <tr className="border-b-2 border-text/10">
                <th className="text-left py-4 px-4  text-emerald-200">
                  Scores
                </th>
                <th className="text-left py-4 px-4 text-slate-300">
                  What I did
                </th>
              </tr>
            </thead>
            <tbody className="text-green-100 leading-loose">
              <tr className="border border-text/10">
                <td className="py-4 border-r border-text/10 px-4 text-text">
                  Performance: <span className="text-green-200">100</span>
                </td>
                <td className="py-4 px-4">
                  Split code into multiple components, use lazy loading and
                  react hooks.
                </td>
              </tr>
              <tr className="border border-text/10">
                <td className="py-4 border-r border-text/10 px-4 text-text">
                  Accessibility: <span className="text-green-200">98</span>
                </td>
                <td className="py-4 px-4">
                  Include semantic HTML elements properly and give aria labels
                  to important elements
                </td>
              </tr>
              <tr className="border border-text/10">
                <td className="py-4 border-r border-text/10 px-4 text-text">
                  Best Practices: <span className="text-green-200">100</span>
                </td>
                <td className="py-4 px-4">
                  Use the correct HTML tags for each element, optimize images,
                  and made website responsive
                </td>
              </tr>
              <tr className="border border-text/10">
                <td className="py-4 border-r border-text/10 px-4 text-text">
                  SEO: <span className="text-text/80">91</span>
                </td>
                <td className="py-4 px-4">
                  Use proper HTML elements and include alt labels for images
                </td>
              </tr>
            </tbody>
          </table>
          <Image src={IslamicPerformance} alt="Islamic Foundations" />
        </div>
        <div className="w-full flex flex-col items-center gap-[1.2rem] mt-[6rem]">
          <BlogHeading content="What I Learned" />{" "}
          <p className="text-text/80 text-[1.8rem] mb-8 max-w-[772px] self-start leading-loose">
            By creating this site, I learned the proper workflow of developing a
            useable app, and in the process learnt about React Hooks, API
            handling in ReactJS, performance and accesbility optimizations, and
            core problem solving to debug issues.
          </p>
        </div>
      </AnimatedArticle>
    </>
  );
}
export default IslamicFoundations;

function BlogHeading({ content }: { content: string }) {
  return (
    <>
      <div className="flex gap-[0.8rem] items-center text-left   self-start justify-start ">
        {content === "Description" ? (
          <NotebookText size={36} className="text-emerald-800" />
        ) : content === "Tech Stack" ? (
          <Layers size={36} className="text-emerald-800" />
        ) : content === "Performance" ? (
          <Zap size={36} className="text-emerald-800" />
        ) : content === "Challenges & Solutions" ? (
          <Target size={36} className="text-emerald-800" />
        ) : content === "Features" ? (
          <Box size={36} className="text-emerald-800" />
        ) : content === "What I Learned" ? (
          <NotebookPen size={36} className="text-emerald-800" />
        ) : (
          <Layers size={36} className="text-emerald-800" />
        )}
        <h3 className="text-[4.8rem] text-text self-start tracking-[-0.1rem]">
          {content}
        </h3>
      </div>
    </>
  );
}

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
