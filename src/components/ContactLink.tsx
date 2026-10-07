import { useState } from "react";

interface ContactLinkProps {
  href?: string;
  label: string;
  text: string;
}

const valueClass =
  "inline-block py-1 text-xl font-semibold decoration-foxfire decoration-2 underline-offset-4 hover:text-foxfire hover:underline sm:text-2xl";

const ContactLink: React.FC<ContactLinkProps> = ({ href, label, text }) => {
  const [copied, setCopied] = useState(false);

  // contacts without a link (Discord) copy the handle instead
  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <li className="grid gap-x-8 py-3 md:grid-cols-9 md:items-baseline">
      <span className="text-paper/70 md:col-span-3">{label}</span>
      <span className="md:col-span-6">
        {href ? (
          <a
            href={href}
            target={href.startsWith("mailto:") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className={valueClass}>
            {text}
          </a>
        ) : (
          <button onClick={copyText} className={`${valueClass} cursor-pointer`}>
            {text}
            <span
              aria-live="polite"
              className="ml-3 text-sm font-medium text-paper/70">
              {copied ? "Copied" : "Copy"}
            </span>
          </button>
        )}
      </span>
    </li>
  );
};

export default ContactLink;
