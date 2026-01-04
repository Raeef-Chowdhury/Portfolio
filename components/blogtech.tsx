import BlogHeading from "./blogheading";
interface TechStack {
  name: string;
  description: string;
}
function BlogTech({ techstack }: { techstack: TechStack[] }) {
  {
    return (
      <div className="w-full flex flex-col items-center gap-[1.2rem] mt-[6rem]">
        <BlogHeading content="Tech Stack" />

        <ul className="text-text/80 ml-[4.8rem] list-disc text-[1.8rem] mb-8 max-w-[772px] self-start leading-loose">
          {techstack.map((item, i) => (
            <li key={i}>
              <span className="text-text">{item.name}:</span> {item.description}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default BlogTech;
