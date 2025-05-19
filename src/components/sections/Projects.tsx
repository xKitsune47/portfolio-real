import React from "react";
import ProjectCard from "../ProjectCard";
import Divider from "../Divider.js";

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  image?: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Portfolio",
    description: "Portfolio site you're currently browsing through. FOX!",
    tags: ["React", "TypeScript", "TailwindCSS", "HTML5"],
    codeUrl: "https://kitsune-dev.me",
    image: "",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Projects
        </h2>
        <Divider />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
