import React from "react";
import Divider from "../Divider";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          About me
        </h2>
        <Divider />
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-amber-100 flex items-center justify-center text-6xl text-orange-500 shadow-lg border-4 border-orange-300">
            🦊
          </div>
          <div className="text-lg text-gray-700/90 space-y-4 text-center md:text-left">
            <p>
              I am an enthusiastic frontend developer with a passion for
              creating aesthetic and functional web applications. I enjoy
              exploring new technologies and constantly seek{" "}
              <span className="font-semibold text-orange-600">smart</span>{" "}
              solutions to complex problems.
            </p>
            <p>
              Inspired by elegance and adaptability, I focus on writing clean
              and efficient code
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
