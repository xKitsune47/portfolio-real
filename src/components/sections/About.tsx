import React from "react";
import Divider from "../Divider";
import me from "../../../public/assets/fcybruch.png";
import Activity from "../Activity";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          About me
        </h2>
        <Divider />
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <img
            src={me}
            alt="that's me!"
            className="rounded-3xl bg-amber-100 flex items-center justify-center text-6xl text-orange-500 shadow-lg border-4 border-orange-300 object-cover w-1/2"
          />
          <div className="text-lg text-gray-700/90 space-y-8 text-center md:text-left">
            <div className="space-y-4">
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

            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                What I'm listening to right now:
              </h3>
              <Activity />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
