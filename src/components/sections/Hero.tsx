import React from "react";
import me from "/assets/fcybruch.png";
import Activity from "../Activity";
import scrollToSection from "../../helpers/scrollToSection";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="scroll-mt-16 bg-fox">
      <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-12 px-5 pt-14 pb-12 sm:px-8 lg:grid-cols-12 lg:items-end lg:pt-12 lg:pb-10">
        <div className="lg:col-span-7">
          <h1 className="text-[clamp(2.75rem,15vw,6.5rem)] leading-[0.95] font-extrabold font-stretch-expanded tracking-tight">
            Franek
            <br />
            Cybruch
          </h1>
          <p className="mt-8 max-w-[36ch] text-xl sm:text-2xl">
            Frontend developer. I build interfaces in React and TypeScript, and
            on the side, some IoT devices and homelabbing
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="rounded-xs bg-ink px-7 py-3 text-lg font-semibold text-paper transition-colors hover:bg-paper hover:text-ink focus-visible:outline-ink cursor-pointer">
              See projects
            </button>
            <a
              href="#contact"
              className="text-lg font-semibold underline decoration-2 underline-offset-4 hover:decoration-paper">
              Contact
            </a>
          </div>
        </div>
        <figure className="max-w-md lg:col-span-5 lg:max-w-none">
          <img
            src={me}
            alt="Holding a third place winner board at HackYeah 2025"
            width={1200}
            height={1600}
            className="aspect-[4/5] w-full object-cover"
          />
        </figure>
      </div>
      <div className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
          <Activity />
        </div>
      </div>
    </section>
  );
};

export default Hero;
