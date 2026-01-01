import StarVaultImg from "@/Images/Star-Vault.png";
import Image from "next/image";
import Link from "next/link";
import AnimatedArticle from "@/components/animatedarticle";
import BackButton from "@/components/BackButton";
import { Github, ExternalLink, Calendar, Clock, Star } from "lucide-react";

function StarVault() {
  return (
    <>
      <AnimatedArticle>
        <BackButton link="/projects" page="Projects" />
        <div className="w-[722px] h-[390px]  rounded-4xl bg-emerald-900/40 p-6 flex items-center justify-center overflow-hidden">
          <Image
            src={StarVaultImg}
            className="  shadow-2xl object-cover rounded-2xl"
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
            Star Vault
          </h1>
          <div className="flex items-center gap-[4.5rem] mr-[2rem]">
            <Link
              href="https://github.com/raeef-chowdhury/star-vault"
              target="_blank"
              className="bg-emerald-900/70 hover:transition-all duration-200 hover:scale-110 hover:cursor-pointer p-[1rem] rounded-full"
            >
              <Github size={30} className="text-amber-600" strokeWidth={2} />
            </Link>
            <Link
              href="https://star-vault-journal.netlify.app/"
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
              <span className="text-[1.8rem] text-text">December 2025</span>
            </div>
          </div>
          <div className="flex justify-center mt-6 items-center">
            <div className="inline-flex items-center gap-[1.2rem] px-[2.4rem] py-[1.2rem]  bg-slate-800/50 rounded-full border border-slate-700/50">
              <Clock size={30} className="text-emerald-400" strokeWidth={2} />
              <span className="text-[1.8rem] text-text">3 Weeks</span>
            </div>
          </div>
          <div className="flex justify-center mt-6 items-center">
            <div className="inline-flex items-center gap-[1.2rem] px-[2.4rem] py-[1.2rem]  bg-slate-800/50 rounded-full border border-slate-700/50">
              <Star size={30} className="text-emerald-400" strokeWidth={2} />
              <span className="text-[1.8rem] text-text">3D Interactivity</span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-[1.2rem] mt-[3rem]">
          <h3 className="text-[4.8rem] text-text self-start tracking-[-0.1rem]">
            Description
          </h3>
          <p className="text-text/80 text-[2rem] mb-8 max-w-[772px] self-start leading-loose">
            Star Vault is a immersive 3D interactive space built using React
            Three Fiber and an unhealthy amount of maths. It renders multiple
            galaxies, each of which you can upload a memory to using a form,
            after which you can view as a memory inside a galaxy.
          </p>

          <p className="text-text/80 text-[2rem] max-w-[772px] self-start leading-loose">
            This is built with a Crud design system, allowing users to
            edit,delete,create and view each of their memories. The codebase
            along with the final project is something that I am really proud of,
            especially considering it is something that expanded my toolkit
            apart from 2D web development.
          </p>
        </div>{" "}
        <div className="w-full flex flex-col items-center gap-[1.2rem] mt-[6rem]">
          <h3 className="text-[4.8rem] text-text self-start tracking-[-0.1rem]">
            Tech Stack
          </h3>
          <ul className="text-text/80 ml-[4.8rem] list-disc text-[2rem] mb-8 max-w-[772px] self-start leading-loose">
            <li>
              <span className="text-text">React Three Fiber:</span> Used to
              render the 3D system
            </li>
            <li>
              <span className="text-text">React Three Spring:</span> Handling
              animations in the 3D space
            </li>
            <li>
              <span className="text-text">Math (Way too much of it):</span> To
              properly configure universe UI
            </li>
            <li>
              <span className="text-text">CRUD operations:</span> Overall design
              approach of the app
            </li>
            <li>
              <span className="text-text">React JS & Tailwind:</span> To build
              the simple 2D parts of the UI
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col items-center gap-[1.2rem] mt-[6rem]">
          <h3 className="text-[4.8rem] text-text self-start tracking-[-0.1rem]">
            Features
          </h3>
          <ul className="text-text/80 ml-[4.8rem] list-disc text-[2rem] mb-8 max-w-[772px] self-start leading-loose">
            <li>
              <span className="text-text">Movement:</span> Smooth camera and
              navigation movement within the 3D room
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
              <span className="text-text">Memory Storage:</span> Local Storage
              used to persist memories in user{"'"}s browser permanently.
            </li>{" "}
            <li>
              <span className="text-text">3D Objects:</span> Interactive 3D
              objects to interact memories with.
            </li>
          </ul>{" "}
          <div className="w-full flex flex-col items-center gap-[1.2rem] mt-[3rem]">
            <h3 className="text-[4.8rem] text-text self-start tracking-[-0.1rem]">
              Honest Self Review
            </h3>
            <p className="text-text/80 text-[2rem] mb-8 max-w-[772px] self-start leading-loose">
              While I am really proud of the site itself and how it turned out
              in the end, there were definitely some improvements I could make
              and still can make. some of these include:
            </p>{" "}
            <ul className="text-text/80 ml-[4.8rem] list-disc text-[2rem] mb-12 max-w-[772px] self-start gap-[2rem] flex flex-col leading-loose">
              <li>
                <span className="text-text">First Time User Expirience:</span>{" "}
                Admittedly, the app isnt all that self explanatory, and for
                first time users it might take some time to understand whats
                really going on
              </li>{" "}
              <li>
                <span className="text-text">Search/Filter:</span> Currently,
                while there is a vague tooltip to search through the memories in
                a galaxy, there is no definite way to find a definite memory
                with one search term.
              </li>
            </ul>{" "}
          </div>{" "}
        </div>
      </AnimatedArticle>
    </>
  );
}
export default StarVault;
export const metadata = {
  title: "Star Vault | Projects",
  description:
    "Star Vault is an immersive 3D journaling system that lets users store memories as stars in galaxies. Built with React Three Fiber, Motion One, and Vite.",
  openGraph: {
    title: "Star Vault | Raeef Chowdhury",
    description:
      "An immersive 3D journaling system where memories become stars in personalized galaxies.",
    url: "https://star-vault-journal.netlify.app/",
    images: [
      {
        url: "/portfolio/Images/Star-Vault.png",
        width: 1200,
        height: 630,
        alt: "Star Vault 3D galaxy journaling interface",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Star Vault | Projects",
    description:
      "An immersive 3D journaling system where memories become stars in personalized galaxies.",
    images: ["/portfolio/Images/Star-Vault.png"],
  },
};
