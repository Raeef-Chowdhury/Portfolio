/* eslint-disable @next/next/no-img-element */
import Heading from "@/components/heading";
import Image from "next/image";
import StarVaultImg from "../Images/ChatGPT Image Dec 29, 2025, 12_23_21 PM.png";
const techStack = [
  { skill: "JSON", color: "text-amber-300" },
  { skill: "Motion One", color: "text-blue-400" },
  { skill: "Vite", color: "text-purple-300" },
  { skill: "React JS", color: "text-cyan-200" },
  { skill: "React Three Fiber", color: "text-green-300" },
];
function Projects() {
  return (
    <div
      id="projects"
      className="max-w-[1440px] mx-auto mt-[24rem]  flex flex-col items-center "
    >
      <Heading content="Projects" />
      <div className="Project__board mt-[8.4rem]">
        <div className="border-slate-700 overflow-hidden hover:cursor-pointer hover:shadow-[0px_8px_20px_rgba(255,255,255,0.1)] hover:scale-[1.02] transition-all duration-300 border-4 max-w-[840px] rounded-2xl flex flex-col gap-[2.4rem]">
          <div className="max-h-[388px] max-w-[622px] rounded w-full bg-emerald-900/40 p-6">
            <Image
              src={StarVaultImg}
              className="w-[110%]  object-cover rounded-xl"
              alt="Star Vault Project Image"
            />
          </div>
          <div className="text-[1.2rem] p-[1rem] ">
            <h3 className="text-primary font-bold text-[4.8rem] underline  decoration-secondary underline-offset-2 justify-self-center w-[fit-content] text-center mb-[1.2rem]">
              Star Vault
            </h3>
            <p className="text-center text-text  max-w-[588px] leading-relaxed mb-[3rem] mx-auto text-[1.8rem] tracking-wide ">
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
        </div>
      </div>
    </div>
  );
}
export default Projects;
