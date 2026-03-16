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
  siteUrl?: string;
  image?: string;
  role: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Packt",
    description:
      "Aggregator app with chat, calendar, expense tracking (with export to PDF functionality) and documents sharing for managing your trips. I was the frontend dev responsible for creating UI and lead developer for managing app's states and API connections",
    tags: ["React Native", "JavaScript", "Redux", "CSS"],
    codeUrl: "",
    image: "",
    role: "Frontend developer",
  },
  {
    id: 2,
    title: "Bachelor's thesis",
    description:
      "IoT application. It measures CO PPM via MQ-7, temperature and humidity via DHT22 and displays it on the screen. Can be connected to the internet to show current weather forecast for your city using openweathermap API",
    tags: ["Micropython", "HTML", "IoT", "ESP32-C3"],
    codeUrl: "https://github.com/xKitsune47/BEng-thesis",
    image: "",
    role: "Sole developer",
  },
  {
    id: 3,
    title: "Kitsune's Links",
    description:
      "Fullstack app made with Next.js, TailwindCSS, MongoDB and NextAuth. The app is a linktree clone, has Google and Github authentication provided by NextAuth. You can preview available fonts and color schemes for the links page before registering, add a profile picture and a description for your profile.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "MongoDB"],
    codeUrl: "https://github.com/xKitsune47/carrd-clone",
    siteUrl: "https://links.kitsune-dev.me",
    image: "",
    role: "Sole developer",
  },
  {
    id: 4,
    title: "Portfolio",
    description: "Portfolio site you're currently browsing through",
    tags: ["React", "TypeScript", "TailwindCSS"],
    codeUrl: "https://github.com/xKitsune47/portfolio-real",
    image: "",
    role: "Sole developer",
  },
  {
    id: 5,
    title: "IoT Temperature and humidity sensor",
    description:
      "IoT Temperature and humidity sensor created with Raspberry Pi 4B and DHT11. Raspberry Pi was responsible for reading data and sending it to local server. Local server has backend created with Flask that sends data to frontend via websockets to be displayed in real time",
    tags: [
      "Raspberry Pi",
      "Linux",
      "Flask",
      "Python",
      "JavaScript",
      "HTML5",
      "CSS",
    ],
    codeUrl: "https://github.com/xKitsune47/iot-project",
    image: "",
    role: "Sole developer",
  },
  {
    id: 6,
    title: "Project site with a menu for the restaurant",
    description:
      "Independently developed a React.js application during an online course, using Redux for state management, React Router for navigation, and TailwindCSS for styling",
    tags: ["React", "JavaScript", "TailwindCSS", "Redux", "React Router"],
    codeUrl: "https://github.com/xKitsune47/react-learning-22",
    image: "",
    role: "Sole developer",
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
