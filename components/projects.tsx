/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import StarVaultImg from "@/Images/Star-Vault.png";
import IslamicImg from "@/Images/Islamic-Foundations.png";
import { TechStack } from "@/Types/techstack";
const Heading = dynamic(() => import("@/components/heading"));
const techStackStar: TechStack[] = [
  { skill: "JSON", color: "text-amber-300" },
  { skill: "Motion One", color: "text-blue-400" },
  { skill: "Vite", color: "text-purple-300" },
  { skill: "React JS", color: "text-cyan-200" },
  { skill: "React Three Fiber", color: "text-green-300" },
];
const techStackIslam: TechStack[] = [
  { skill: "JSON", color: "text-amber-300" },
  { skill: "Motion One", color: "text-blue-400" },
  { skill: "Vite", color: "text-purple-300" },
  { skill: "React JS", color: "text-cyan-200" },
  { skill: "React-Router", color: "text-green-300" },
];

function Projects() {
  return (
    <div
      id="projects"
      className="max-w-[1440px] mx-auto mt-[24rem] min-w  flex flex-col items-center "
    >
      <div className="flex justify-center items-center w-full relative ">
        <Heading content="Featured Projects" />
        <Link href="/projects">
          <button className="decoration-dotted  max-[1544px]:hidden text-text text-[1.8rem] underline underline-offset-8 hover:text-primary transition-all hover:scale-105 hover:cursor-pointer px-[3rem]">
            View All →
          </button>
        </Link>
      </div>

      <div className="Project__board mt-[6.4rem] max-[1388px]:flex-col  min-[1388px]:flex gap-[6rem] justify-between  items-center ">
        <Link href="/projects/star-vault ">
          <div className="border-slate-700  hover:border-slate-500 max-[1388px]:mb-[6.4rem] overflow-hidden  hover:cursor-pointer hover:shadow-[0px_8px_20px_rgba(255,255,255,0.1)] hover:scale-[1.02] transition-all duration-300 border-4 mx-auto  max-[788px]:max-w-[388px]   max-w-[840px] rounded-2xl flex flex-col gap-[2.4rem]">
            <div className="w-full  rounded bg-emerald-900/40 p-6 flex items-center justify-center overflow-hidden">
              <Image
                src={StarVaultImg}
                className="w-full h-full object-cover rounded-xl "
                width={622}
                height={388}
                alt="Star Vault 3D galaxy journaling interface showing memories as stars in personalized galaxies"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 622px"
                quality={90}
              />
            </div>
            <div className="text-[1.2rem] p-[1rem] ">
              <h3 className="text-primary font-bold text-[4.8rem] mt-[-1.8rem] justify-self-center w-[fit-content] text-center mb-[1.2rem]">
                Star Vault
              </h3>
              <p className="text-center text-text  max-w-[588px] leading-relaxed mb-[4.2rem] mx-auto text-[1.8rem] tracking-wide ">
                Star Vault is an immersive 3D journalling system. It allows
                users to store their memories as stars inside a galaxy, where
                each galaxy represents an indiviudal category of personal
                expiriences.
              </p>
              <ul className="flex gap-[1.2rem] justify-center pb-[2.4rem]">
                {techStackStar.map((item: TechStack, index: number) => (
                  <li
                    key={index}
                    className={`text-[1.6rem] bg-slate-800 px-[1.2rem] py-[0.6rem]  flex gap-[0.4rem] rounded-md items-center  ${item.color}`}
                  >
                    {item.skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>{" "}
        </Link>
        <Link href="/projects/islamic-foundations">
          <div className="border-slate-700 hover:border-slate-500 overflow-hidden hover:cursor-pointer hover:shadow-[0px_8px_20px_rgba(255,255,255,0.1)] hover:scale-[1.02] transition-all duration-300 border-4 mx-auto  max-[788px]:max-w-[388px]   max-w-[840px max-w-[840px] rounded-2xl flex flex-col gap-[2.4rem]">
            <div className="w-full  rounded bg-emerald-900/40 p-6 flex items-center justify-center overflow-hidden">
              <Image
                src={IslamicImg}
                className="w-full h-full object-cover rounded-xl"
                width={622}
                height={388}
                alt="Islamic Foundations website interface for learning about Islam with over 50 active users"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 622px"
                quality={90}
              />
            </div>
            <div className="text-[1.2rem] p-[1rem] ">
              <h3 className="text-primary font-bold text-[4.8rem] mt-[-1.8rem] justify-self-center w-[fit-content] text-center mb-[1.2rem]">
                Islamic Foundations{" "}
              </h3>
              <p className="text-center text-text  max-w-[544px] leading-relaxed mb-[4.2rem] mx-auto text-[1.8rem] tracking-wide ">
                Islamic Foundations is a website made in mind for all religious
                people of Islam. It allows people to gain a deeper understanding
                of the religion, with over 50+ active users.
              </p>
              <ul className="flex gap-[1.2rem] justify-center pb-[2.4rem]">
                {techStackIslam.map((item, index) => (
                  <li
                    key={index}
                    className={`text-[1.6rem] bg-slate-800 px-[1.2rem] py-[0.6rem]  flex gap-[0.4rem] rounded-md items-center  ${item.color}`}
                  >
                    {item.skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Link>
      </div>
      <Link href="/projects">
        <button className=" mt-[6rem] decoration-dotted  min-[1544px]:hidden text-text text-[1.8rem] underline underline-offset-8 hover:text-primary transition-all hover:scale-105 hover:cursor-pointer">
          View All →
        </button>
      </Link>
    </div>
  );
}
export default Projects;
