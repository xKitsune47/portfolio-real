interface ContactLinkProps {
  href?: string;
  text: string;
  bgColorClass: string;
  hoverBgColorClass?: string;
  textColorClass?: string;
  image?: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({
  href,
  text,
  bgColorClass,
  image,
}) => {
  return (
    <a
      href={href}
      target={href?.startsWith("mailto:") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className={`flex items-center justify-center w-full md:w-auto text-white font-medium py-3 px-6 rounded-lg transition duration-300 ${bgColorClass}  shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}>
      {image && (
        <>
          <img
            src={image}
            alt={`${text}-logo`}
            className="w-6 mr-2"
            loading="lazy"
          />
        </>
      )}
      {text}
    </a>
  );
};

export default ContactLink;
