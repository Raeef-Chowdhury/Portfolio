import BlogHeading from "./blogheading";
function BlogDesp({ text, text2 }: { text: string; text2: string }) {
  return (
    <div className="w-full flex flex-col items-center gap-[1.2rem] mt-[3rem]">
      <BlogHeading content="Description" />

      <p className="text-text/80 text-[1.8rem] mb-8 max-w-[772px] self-start leading-loose">
        {text}
      </p>

      <p className="text-text/80 text-[1.8rem] max-w-[772px] self-start leading-loose">
        {text2}
      </p>
    </div>
  );
}
export default BlogDesp;
