import React from "react";
import type { Project } from "./sections/Projects";

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  imageUrl,
  tags,
  codeUrl,
  role,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl transform hover:scale-[1.02]">
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
      ) : (
        <div className="w-full h-56 bg-amber-100 flex items-center justify-center text-5xl text-orange-500">
          🦊
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-orange-600 mb-3">{title}</h3>
        <h4 className="font-semibold text-orange-800 mb-3">{role}</h4>
        <p className="text-gray-700/80 text-sm mb-4 flex-grow">{description}</p>
        <div className="mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-amber-100 text-orange-700 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex space-x-3">
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center border-2 border-orange-500 text-orange-500 py-2 px-4 rounded-lg hover:bg-orange-500 hover:text-white transition-colors duration-300 font-medium">
              Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
