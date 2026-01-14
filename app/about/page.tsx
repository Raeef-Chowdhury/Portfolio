import { AboutMeContent } from "@/Data/AboutPageCopy";
import { AboutCtaContent } from "@/Data/AboutCtaContent";
import { AboutCtaBtn } from "@/components/ui/AboutPage/AboutPageCta";
import { portfolioStats } from "@/Data/AboutStats";
import { AboutStatBadges } from "@/components/ui/AboutPage/AboutStatBadges";
export default function AboutPage() {
  return (
    <div className=" bg-background text-white overflow-hidden">
      <h1 className="text-text text-[3.2rem] mx-auto  w-full text-center leading-relaxed tracking-widest mt-[6rem]">
        ABOUT ME
      </h1>
      <section className="relative mb-[18rem] flex items-center mt-[9rem] mx-128 justify-between max-[1880px]:mx-64 max-[1440px]:mx-48 max-[1188px]:mx-32 max-[944px]:flex-col max-[944px]:items-center">
        <div className="flex-shrink-0  ">
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-8 my-12">
            <h3 className="text-center max-[944px]:mb-[3.6rem] text-cyan-400 text-[2.4rem] mb-[2.4rem] font-semibold mb-6 tracking-wider uppercase">
              Portfolio Highlights
            </h3>
            <div className="flex flex-col min-[944px]:min-h-[440px]  max-[944px]:justify-around max-[944px]:flex-row gap-24">
              {portfolioStats.map((stat) => {
                return (
                  <AboutStatBadges
                    key={stat.id}
                    id={stat.id}
                    value={stat.value}
                    Icon={stat.Icon}
                    label={stat.label}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex-1 text-left max-[944px]:text-center text-text ml-24 max-[944px]:ml-0">
          {AboutMeContent.map((text, index) => {
            return (
              <p
                key={index}
                className="text-[2rem]   text-text/80 mb-8 leading-loose"
              >
                {text}
              </p>
            );
          })}
          <div className="flex flex-wrap max-[944px]:justify-center gap-[3.6rem]  mt-12">
            {AboutCtaContent.map((btn, index) => {
              return (
                <AboutCtaBtn
                  key={index}
                  href={btn.href}
                  text={btn.text}
                  icon={btn.icon}
                  label={btn.label}
                  color={btn.color}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
