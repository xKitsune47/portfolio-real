import React, { useEffect } from "react";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

const App: React.FC = () => {
  useEffect(() => {
    const emoji = "🦊"; // Tutaj wpisz swoje emoji
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    ctx!.font = "48px serif";
    ctx!.fillText(emoji, 0, 48);
    const faviconUrl = canvas.toDataURL();

    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link") as HTMLLinkElement;
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
