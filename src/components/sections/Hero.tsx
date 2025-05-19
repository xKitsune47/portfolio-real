import React from "react";

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-br from-amber-100 via-orange-200 to-amber-200 animate-fade-in-down">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">
          Hi, I'm <span className="text-orange-600">Franek</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-10">
          Frontend Developer and IoT enthusiast with a passion for creating{" "}
          <span className="font-semibold text-orange-600">responsive</span> and{" "}
          <span className="font-semibold text-orange-600">dynamic</span> user
          interfaces.
        </p>
        <button
          onClick={scrollToProjects}
          className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-300 cursor-pointer">
          See what I'm doing
        </button>
      </div>
    </section>
  );
};

export default Hero;
