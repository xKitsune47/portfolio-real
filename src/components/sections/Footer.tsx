import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm mb-2">
          &copy; {currentYear} Franciszek Cybruch 🦊
        </p>
      </div>
    </footer>
  );
};

export default Footer;
