import React from "react";
import ContactLink from "../ContactLink";
import Section from "../Section";

interface Contact {
  label: string;
  text: string;
  href?: string;
}

const contacts: Contact[] = [
  {
    label: "Email",
    text: "franek.cy@wp.pl",
    href: "mailto:franek.cy@wp.pl",
  },
  {
    label: "LinkedIn",
    text: "Franciszek Cybruch",
    href: "https://www.linkedin.com/in/franciszek-cybruch-86266329a/",
  },
  {
    label: "GitHub",
    text: "xKitsune47",
    href: "https://github.com/xKitsune47",
  },
  {
    label: "Discord",
    text: "xkitsune",
  },
];

const Contact: React.FC = () => {
  return (
    <Section
      id="contact"
      title="Contact me"
      className="bg-ink py-16 text-paper lg:py-28">
      <p className="text-lg text-paper/70">
        I'll gladly answer all of your questions. Find me here:
      </p>
      <ul className="mt-8 divide-y divide-paper/20 border-y border-paper/20">
        {contacts.map((contact) => (
          <ContactLink
            href={contact.href}
            label={contact.label}
            text={contact.text}
            key={contact.label}
          />
        ))}
      </ul>
      <p className="mt-10 text-lg">I'm waiting for your message!</p>
    </Section>
  );
};

export default Contact;
