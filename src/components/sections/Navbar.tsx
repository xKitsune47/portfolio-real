import React, { useEffect } from "react";
import NavLink from "../NavLink";
import domain from "../../helpers/domainUrl";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navRef = React.useRef<HTMLElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeMobileMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav
      ref={navRef}
      className="bg-ink sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="#hero"
              className="flex-shrink-0 text-fox font-extrabold font-stretch-expanded text-lg flex items-center">
              {" "}
              <span className="mr-2">🦊</span>
              {domain}
            </a>
          </div>
          <button
            type="button"
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
            className="lg:hidden inline-flex items-center justify-center rounded-xs p-2 text-paper hover:text-fox transition-colors cursor-pointer">
            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-6 bg-current transition-transform duration-300 ease-in-out ${
                  isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 block h-0.5 w-6 bg-current transition-opacity duration-200 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-4 block h-0.5 w-6 bg-current transition-transform duration-300 ease-in-out ${
                  isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
          <div className="hidden lg:block">
            <ul className="ml-10 flex items-baseline space-x-7">
              <NavLink href="#hero">Home</NavLink>
              <NavLink href="#about">About me</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#honors-awards">Awards</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </ul>
          </div>
        </div>
        <div
          className={`lg:hidden absolute left-0 right-0 top-16 bg-ink overflow-hidden transition-[max-height,opacity,padding,visibility] duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-80 opacity-100 py-4" : "invisible max-h-0 opacity-0"
          }`}>
          <ul className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col items-start space-y-2">
            <NavLink href="#hero" onClick={closeMobileMenu}>
              Home
            </NavLink>
            <NavLink href="#about" onClick={closeMobileMenu}>
              About me
            </NavLink>
            <NavLink href="#skills" onClick={closeMobileMenu}>
              Skills
            </NavLink>
            <NavLink href="#projects" onClick={closeMobileMenu}>
              Projects
            </NavLink>
            <NavLink href="#honors-awards" onClick={closeMobileMenu}>
              Awards
            </NavLink>
            <NavLink href="#contact" onClick={closeMobileMenu}>
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
