import BlogHeading from "./blogheading";
interface Feature {
  name: string;
  description: string;
}
function BlogFeatures({ features }: { features: Feature[] }) {
  return (
    <div className="w-full flex flex-col items-center gap-[1.2rem] mt-[3rem] mb-[4rem] ">
      <BlogHeading content="Features" />

      <ul className="text-text/80 ml-[4.8rem] list-disc text-[1.8rem] mb-8 max-w-[772px] self-start leading-loose ">
        {features.map((item, i) => (
          <li key={i}>
            <span className="text-text">{item.name}</span> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default BlogFeatures;
