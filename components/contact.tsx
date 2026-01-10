import Link from "next/link";
function Contact() {
  return (
    <section className="py-32 px-8 mt-[15rem]">
      <div className="max-w-7xl mx-auto  text-center">
        <p className="text-text text-[4rem]   font-medium mb-12 leading-relaxed">
          Interested in collaborating, learning together, or giving feedback?
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-16 py-4 rounded-full text-[2.4rem] font-medium transition-all duration-300 hover:gap-4 shadow-lg hover:shadow-emerald-500/30"
        >
          Get in touch
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default Contact;
