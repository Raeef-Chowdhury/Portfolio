import BlogHeading from "./blogheading";
import { TechStack } from "@/Types/techstack";
function BlogTech({ techstack }: { techstack: TechStack[] }) {
  {
    return (
      <div className="w-full flex flex-col items-center gap-[1.2rem] mt-[6rem]">
        <BlogHeading content="Tech Stack" />

        <ul className="text-text/80 ml-[4.8rem] list-disc text-[1.8rem] mb-8 max-w-[772px] self-start leading-loose">
          {techstack.map((item, i) => (
            <li key={i}>
              <span className="text-text">{item.skill}:</span> {item.color}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default BlogTech;
