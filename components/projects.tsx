/* eslint-disable @next/next/no-img-element */
import Heading from "@/components/heading";
import Image from "next/image";
import StarVaultImg from "../Images/ChatGPT Image Dec 29, 2025, 12_23_21 PM.png";
import IslamicImg from "../Images/ChatGPT Image Dec 29, 2025, 06_26_05 PM.png";
const techStack = [
  { skill: "JSON", color: "text-amber-300" },
  { skill: "Motion One", color: "text-blue-400" },
  { skill: "Vite", color: "text-purple-300" },
  { skill: "React JS", color: "text-cyan-200" },
  { skill: "React Three Fiber", color: "text-green-300" },
];
const techStack1 = [
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
      className="max-w-[1440px] mx-auto mt-[24rem]  flex flex-col items-center "
    >
      <div className="flex justify-center items-center w-full relative ">
        <Heading content="Featured Projects" />
        <button className="decoration-dotted absolute right-0 text-text text-[1.8rem] underline underline-offset-8 hover:text-primary transition-all hover:scale-105 hover:cursor-pointer">
          View All →
        </button>
      </div>

      <div className="Project__board mt-[6.4rem] flex justify-between gap-[12rem] items-center ">
        <div className="border-slate-700 hover:border-slate-500 overflow-hidden hover:cursor-pointer hover:shadow-[0px_8px_20px_rgba(255,255,255,0.1)] hover:scale-[1.02] transition-all duration-300 border-4 max-w-[840px] rounded-2xl flex flex-col gap-[2.4rem]">
          <div className="max-h-[388px] max-w-[622px] rounded w-full bg-emerald-900/40 p-6">
            <Image
              src={StarVaultImg}
              className="w-[110%]  object-cover rounded-xl"
              alt="Star Vault Project Image"
            />
          </div>
          <div className="text-[1.2rem] p-[1rem] ">
            <h3 className="text-primary font-bold text-[4.8rem] mt-[-1.8rem] justify-self-center w-[fit-content] text-center mb-[1.2rem]">
              Star Vault
            </h3>
            <p className="text-center text-text  max-w-[588px] leading-relaxed mb-[4.2rem] mx-auto text-[1.8rem] tracking-wide ">
              Star Vault is an immersive 3D journalling system. It allows users
              to store their memories as stars inside a galaxy, where each
              galaxy represents an indiviudal category of personal expiriences.
            </p>
            <ul className="flex gap-[1.2rem] justify-center pb-[2.4rem]">
              {techStack.map((item, index) => (
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
        <div className="border-slate-700 hover:border-slate-500 overflow-hidden hover:cursor-pointer hover:shadow-[0px_8px_20px_rgba(255,255,255,0.1)] hover:scale-[1.02] transition-all duration-300 border-4 max-w-[840px] rounded-2xl flex flex-col gap-[2.4rem]">
          <div className="max-h-[388px] max-w-[622px] rounded w-full bg-emerald-900/40 p-6">
            <Image
              src={IslamicImg}
              className="w-[110%]  object-cover rounded-xl"
              alt="Star Vault Project Image"
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
              {techStack1.map((item, index) => (
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
      </div>
    </div>
  );
}
export default Projects;
