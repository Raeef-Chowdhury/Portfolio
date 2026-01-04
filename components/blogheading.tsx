import {
  NotebookPen,
  NotebookText,
  Layers,
  Zap,
  Target,
  Box,
} from "lucide-react";
function BlogHeading({ content }: { content: string }) {
  return (
    <>
      <div className="flex gap-[0.8rem] items-center text-left   self-start justify-start ">
        {content === "Description" ? (
          <NotebookText size={36} className="text-emerald-800" />
        ) : content === "Tech Stack" ? (
          <Layers size={36} className="text-emerald-800" />
        ) : content === "Performance" ? (
          <Zap size={36} className="text-emerald-800" />
        ) : content === "Challenges & Solutions" ? (
          <Target size={36} className="text-emerald-800" />
        ) : content === "Features" ? (
          <Box size={36} className="text-emerald-800" />
        ) : content === "What I Learned" ? (
          <NotebookPen size={36} className="text-emerald-800" />
        ) : (
          ""
        )}
        <h3 className="text-[4.8rem] text-text self-start tracking-[-0.1rem]">
          {content}
        </h3>
      </div>
    </>
  );
}
export default BlogHeading;
