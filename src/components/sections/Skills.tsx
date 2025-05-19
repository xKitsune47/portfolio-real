import React from "react";
import Divider from "../Divider.js";

interface Skill {
  name: string;
  image: string;
}

const skillsData: Skill[] = [
  { name: "HTML5", image: "/assets/skills/html.png" },
  { name: "CSS3", image: "/assets/skills/css.png" },
  {
    name: "TailwindCSS",
    image: "/assets/skills/tailwind.svg",
  },
  { name: "JavaScript", image: "/assets/skills/JavaScript-logo.png" },
  { name: "TypeScript", image: "/assets/skills/ts-logo-512.png" },
  {
    name: "React",
    image: "/assets/skills/react.png",
  },
  { name: "Git", image: "/assets/skills/github-mark.png" },
  {
    name: "Figma",
    image: "/assets/skills/figma.png",
  },
  {
    name: "Python",
    image: "/assets/skills/python.png",
  },
  {
    name: "Redux",
    image: "/assets/skills/redux.svg",
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-slate-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Skills
        </h2>
        <Divider />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-6">
          {skillsData.map((skill) => (
            <img src={skill.image} className="w-12 m-auto" alt={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
