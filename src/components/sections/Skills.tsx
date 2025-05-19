import React from "react";
import { skills } from "../../../public/skills-data.js";
import Divider from "../Divider.js";

interface Skill {
  name: string;
  image: string;
}

const skillsData: Skill[] = skills;

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
