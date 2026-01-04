import BlogHeading from "./blogheading";

function BlogLearning({ text }: { text: string }) {
  return (
    <div className="w-full flex flex-col items-center gap-[1.2rem] mt-[6rem]">
      <BlogHeading content="What I Learned" />{" "}
      <p className="text-text/80 text-[1.8rem] mb-8 max-w-[772px] self-start leading-loose">
        {text}
      </p>
    </div>
  );
}
export default BlogLearning;
