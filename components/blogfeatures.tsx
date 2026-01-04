import BlogHeading from "./blogheading";
interface Feature {
  name: string;
  description: string;
}
function BlogFeatures({ features }: { features: Feature[] }) {
  return (
    <div className="w-full flex flex-col items-center gap-[1.2rem] mt-[3rem] marker:text-emerald-400 mb-[4rem] ">
      <BlogHeading content="Features" />

      <ul className="text-text/80 ml-[4.8rem]  text-[1.8rem] border-l-2 border-emerald-900/40 mb-8 max-w-[772px] self-start leading-loose ">
        {features.map((item, i) => (
          <li
            className="text-[2rem] mb-[1.2rem] leading-loose  pl-[2rem]"
            key={i}
          >
            <span className="text-emerald-400 text-[2rem] ">{item.name} —</span>{" "}
            {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default BlogFeatures;
