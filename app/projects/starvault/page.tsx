import StarVaultImg from "@/Images/Star-Vault.png";
import Image from "next/image";
import Link from "next/link";
import AnimatedArticle from "@/components/animatedarticle";
function StarVault() {
  return (
    <>
      <AnimatedArticle>
        <Link
          href="/projects"
          className="group flex absolute top-40 left-10 items-center gap-3 px-8 py-4 bg-emerald-900 text-text rounded-full text-[1.8rem] tracking-wide hover:cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-slate-800/50 mt-[6.4rem]"
        >
          <span className="group-hover:-translate-x-4 transition-transform duration-300">
            ←
          </span>
          <span>Back to Projects</span>
        </Link>{" "}
        <div className="w-[722px] h-[390px]  rounded-4xl bg-emerald-900/40 p-6 flex items-center justify-center overflow-hidden">
          <Image
            src={StarVaultImg}
            className="w-[588px] h-[344px]  shadow-2xl object-cover rounded-2xl"
            width={544}
            height={320}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github-icon lucide-github text-amber-600 "
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </Link>
            <Link
              href="https://star-vault-journal.netlify.app/"
              target="_blank"
              className="bg-emerald-900/70 hover:transition-all duration-200 hover:scale-110 hover:cursor-pointer p-[1rem] rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link-icon lucide-external-link text-amber-600"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="items-center flex w-full justify-between mt-[-1.8rem] border-b-2 border-slate-700 pb-[6rem] ">
          <div className="flex justify-center mt-6 items-center">
            <div className="inline-flex items-center gap-[1.2rem] px-[2.4rem] py-[1.2rem]  bg-slate-800/50 rounded-full border border-slate-700/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald-400"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
              <span className="text-[1.8rem] text-text">December 2025</span>
            </div>
          </div>
          <div className="flex justify-center mt-6 items-center">
            <div className="inline-flex items-center gap-[1.2rem] px-[2.4rem] py-[1.2rem]  bg-slate-800/50 rounded-full border border-slate-700/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald-400"
              >
                <line x1="10" x2="14" y1="2" y2="2" />
                <line x1="12" x2="15" y1="14" y2="11" />
                <circle cx="12" cy="14" r="8" />
              </svg>
              <span className="text-[1.8rem] text-text">3 Weeks</span>
            </div>
          </div>
          <div className="flex justify-center mt-6 items-center">
            <div className="inline-flex items-center gap-[1.2rem] px-[2.4rem] py-[1.2rem]  bg-slate-800/50 rounded-full border border-slate-700/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald-400"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
              </svg>
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
