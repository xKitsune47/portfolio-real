interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li>
      <button
        onClick={() => scrollToSection(href)}
        className="px-3 py-2 rounded-md text-sm font-medium text-gray-100 hover:bg-orange-600 hover:text-white transition-colors duration-300 cursor-pointer">
        {children}
      </button>
    </li>
  );
};

export default NavLink;
