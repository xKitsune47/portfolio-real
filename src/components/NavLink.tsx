import scrollToSection from "../helpers/scrollToSection";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  const handleClick = () => {
    scrollToSection(href.substring(1));
    onClick?.();
  };

  return (
    <li>
      <button
        onClick={handleClick}
        className="py-2 text-sm font-medium text-paper decoration-fox decoration-2 underline-offset-8 hover:underline cursor-pointer">
        {children}
      </button>
    </li>
  );
};

export default NavLink;
