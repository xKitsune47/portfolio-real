import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-paper/20 bg-ink py-8 text-paper/70">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-sm">&copy; {currentYear} Franciszek Cybruch</p>
      </div>
    </footer>
  );
};

export default Footer;
