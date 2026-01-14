import ProfilePng from "@/Images/Profile.png";
import Image from "next/image";
import { AboutMeContent } from "@/Data/AboutPageContent";
import { AboutCtaContent } from "@/Data/AboutCtaContent";
import { AboutCtaBtn } from "@/components/ui/AboutPageCta";
import AnimateStagger from "@/components/animations/animatestagger";
import { milestones } from "@/Data/AboutPageMilestones";
import { MilestoneCard } from "@/components/cards/AboutMilestoneCard";
import { Zap, Users, Rocket } from "lucide-react";
export default function AboutPage() {
  return (
    <div className=" bg-background text-white overflow-hidden">
      <h1 className="text-text text-[3.2rem] mx-auto  w-full text-center leading-relaxed tracking-widest mt-[6rem]">
        ABOUT ME
      </h1>
      {/* Section 1: Identity Introduction */}
      <section className="relative mb-[18rem] flex items-start mt-[9rem] mx-128 justify-between max-[1880px]:mx-64 max-[1440px]:mx-48 max-[1188px]:mx-32 max-[944px]:flex-col max-[944px]:items-center">
        {/* Image */}
        <div className="flex-shrink-0  ">
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-8 my-12">
            <h3 className="text-center text-emerald-400 text-sm font-semibold mb-6 tracking-wider uppercase">
              Portfolio Highlights
            </h3>
            <div className="flex flex-col gap-8">
              {/* Stat 1 */}
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Zap className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-4xl font-bold text-emerald-400 mb-1">
                  95+
                </div>
                <div className="text-sm text-slate-400">Lighthouse Score</div>
              </div>

              {/* Stat 2 */}
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-4xl font-bold text-emerald-400 mb-1">
                  50+
                </div>
                <div className="text-sm text-slate-400">Users</div>
              </div>

              {/* Stat 3 */}
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Rocket className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-4xl font-bold text-emerald-400 mb-1">
                  3
                </div>
                <div className="text-sm text-slate-400">Projects Shipped</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 text-left max-[944px]:text-center text-text ml-24 max-[944px]:ml-0">
          {AboutMeContent.map((text, index) => {
            return (
              <p
                key={index}
                className="text-[2rem]   text-text/80 mb-8 leading-relaxed"
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

      {/* Section 2: Journey */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-12 items-center">
            {/* Identity */}
            <div className="space-y-6 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
                The Journey
              </h2>

              <div className="w-20 h-1 bg-green-500 rounded-full mx-auto" />
            </div>

            {/* Milestones */}
            <div className="w-full space-y-8">
              {milestones.map((milestone, index) => (
                <AnimateStagger key={index} index={index}>
                  <MilestoneCard milestone={milestone} />
                </AnimateStagger>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
