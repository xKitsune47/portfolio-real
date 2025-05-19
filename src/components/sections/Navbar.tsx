import React from "react";
import NavLink from "../NavLink";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="#hero"
              className="flex-shrink-0 text-orange-500 font-bold text-xl flex items-center">
              {" "}
              <span className="mr-2">🦊</span>
              kitsune-dev.me
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#hero">Home</NavLink>
              <NavLink href="#about">About me</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
