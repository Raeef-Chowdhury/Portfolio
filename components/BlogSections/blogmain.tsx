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
      <div className="min-[844px]:w-[722px] min-[844px]:h-[390px] max-[844px]:bg-none max-[844px]:border-4 max-[844px]:border-emerald-900/40 min-[844px]:bg-emerald-900/40  rounded-4xl  min-[844px]:p-6 flex items-center justify-center overflow-hidden">
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
      <div className="flex max-[412px]:flex-col  max-[412px]:gap-[2.4rem] justify-between max-[512px]:my-[1.2rem] items-center w-full  ">
        <h1 className="self-start text-left max-[412px]:self-center text-[4.8rem] text-text capitalize">
          {title}
        </h1>
        <div className="flex items-center gap-[4.5rem] mr-[2rem] max-[412px]:mr-0">
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
