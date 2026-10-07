interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`scroll-mt-16 border-t border-ink/15 ${className}`}>
      <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-6 px-5 sm:px-8 lg:grid-cols-12">
        <h2 className="text-2xl font-extrabold font-stretch-expanded lg:sticky lg:top-24 lg:col-span-3 lg:self-start">
          {title}
        </h2>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </section>
  );
};

export default Section;
