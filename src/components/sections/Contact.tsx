import React from "react";
import ContactLink from "../ContactLink";
import Divider from "../Divider";

interface Contact {
  href?: string;
  text: string;
  background: string;
  image?: string;
}

const contacts: Contact[] = [
  {
    href: "mailto:franek.cy@wp.pl",
    text: "📧 Email",
    background: "bg-orange-500",
  },
  {
    href: "https://www.linkedin.com/in/franciszek-cybruch-86266329a/",
    text: "LinkedIn",
    background: "bg-sky-600",
    image: "/assets/InBug-White.png",
  },
  {
    href: "https://github.com/xKitsune47",
    text: "GitHub",
    background: "bg-slate-700",
    image: "/assets/github-mark-white.png",
  },
  {
    text: "xkitsune",
    background: "bg-indigo-700",
    image: "/assets/Discord-Symbol-White.png",
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-orange-500">Contact me</h2>

        <Divider color="orange-300" />

        <p className="text-lg text-gray-300 mb-10">
          I'll gladly answer all of your questions. <br />
          Find me here:
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-12">
          {contacts.map((contact) => (
            <ContactLink
              href={contact.href}
              text={contact.text}
              bgColorClass={contact.background}
              image={contact.image}
            />
          ))}
        </div>
        <p className="text-xl italic text-orange-300">
          I'm waiting for your message!
        </p>
      </div>
    </section>
  );
};

export default Contact;
