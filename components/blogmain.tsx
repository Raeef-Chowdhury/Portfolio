import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Github, ExternalLink } from "lucide-react";
function BlogMain({
  title,
  alt,
  src,
  demo,
  github,
}: {
  title: string;
  alt: string;
  src: StaticImageData | string;
  demo: string;
  github: string;
}) {
  return (
    <>
      <div className="w-[722px] h-[390px]  rounded-4xl bg-emerald-900/40 p-6 flex items-center justify-center overflow-hidden">
        <Image
          src={src}
          className="   shadow-2xl object-cover rounded-2xl"
          width={588}
          height={344}
          alt={alt}
          priority
          sizes="288px"
          quality={90}
        />
      </div>
      <div className="flex justify-between items-center w-full  ">
        <h1 className="self-start text-left text-[4.8rem] text-text capitalize">
          {title}
        </h1>
        <div className="flex items-center gap-[4.5rem] mr-[2rem]">
          <Link
            aria-label="github link"
            href={github}
            target="_blank"
            className="bg-emerald-900/70 hover:transition-all duration-200 hover:scale-110 hover:cursor-pointer p-[1rem] rounded-full"
          >
            <Github size={30} className="text-amber-600" strokeWidth={2} />
          </Link>
          <Link
            aria-label="open project demo linkP"
            href={demo}
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
      </div>{" "}
    </>
  );
}
export default BlogMain;
