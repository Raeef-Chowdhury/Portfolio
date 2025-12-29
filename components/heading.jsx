function Heading({ content }) {
  return (
    <h1 className="drop-shadow-[0_0_20px_rgba(59,130,246,0.2)] align-self-center justify-self-center mx-auto  text-center text-[6.4rem] relative tracking-[0.3rem] text-primary before:transition-all before:duration-[600ms] before:content-[] before:absolute before:w-[0] before:h-[8rem] before:left-[-10px] before:bottom-[0px] hover:before:w-[110%] before:skew-x-12 before:opacity-[0.2] hover:cursor-pointer  before:bg-tertiary before:top-[10px] before:left-[-15px] transition-colors duration-300">
      {content}
    </h1>
  );
}
export default Heading;
