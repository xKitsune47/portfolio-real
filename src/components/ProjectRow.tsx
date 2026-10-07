import React from "react";
import type { Project } from "./sections/Projects";

const linkClass =
  "inline-block py-1 font-semibold text-fox-deep underline decoration-2 underline-offset-4 hover:text-ink";

const ProjectRow: React.FC<Project> = ({
  title,
  description,
  image,
  tags,
  codeUrl,
  role,
  siteUrl,
  featured,
}) => {
  const Title = featured ? "h3" : "h4";

  return (
    <article
      className={`grid gap-x-8 gap-y-3 border-t border-ink/15 md:grid-cols-9 ${
        featured ? "py-8 first:border-t-0 first:pt-0" : "py-5"
      }`}>
      <div className="md:col-span-3">
        <Title
          className={
            featured ? "text-2xl leading-tight font-bold" : "font-semibold"
          }>
          {title}
        </Title>
        <p className={`mt-1 text-muted ${featured ? "" : "text-sm"}`}>{role}</p>
      </div>
      <div className={`md:col-span-6 ${featured ? "" : "text-sm"}`}>
        {image && (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="mb-5 w-full rounded-xs"
          />
        )}
        <p className="leading-relaxed">{description}</p>
        <p className="mt-3 text-sm text-muted">{tags.join(" · ")}</p>
        {(codeUrl || siteUrl) && (
          <p className="mt-3 flex gap-6">
            {codeUrl && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}>
                Repository
              </a>
            )}
            {siteUrl && (
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}>
                Live preview
              </a>
            )}
          </p>
        )}
      </div>
    </article>
  );
};

export default ProjectRow;
