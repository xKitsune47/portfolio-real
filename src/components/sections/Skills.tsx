import React from "react";
import Section from "../Section";

interface SkillGroup {
  label: string;
  skills: string[];
}

const skillsData: SkillGroup[] = [
  {
    label: "Web",
    skills: [
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Redux",
    ],
  },
  { label: "Languages & engines", skills: ["Python", "C#", "Unity"] },
  { label: "Tools", skills: ["Git", "Figma", "Mendix"] },
  { label: "OSs", skills: ["Windows", "Linux"] },
];

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills" className="py-12 lg:py-16">
      <dl className="divide-y divide-ink/15">
        {skillsData.map((group) => (
          <div
            key={group.label}
            className="grid gap-x-8 gap-y-1 py-4 first:pt-0 last:pb-0 md:grid-cols-9">
            <dt className="text-muted md:col-span-3">{group.label}</dt>
            <dd className="text-lg font-medium md:col-span-6">
              {group.skills.join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};

export default Skills;
