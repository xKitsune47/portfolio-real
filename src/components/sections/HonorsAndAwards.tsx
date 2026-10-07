import React from "react";
import Section from "../Section";

interface Award {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

const awardsData: Award[] = [
  {
    id: 1,
    title: `ZUS "Bieg przez życie" - 3rd place`,
    issuer: "HackYeah",
    date: "October 2025",
    description: `As a team (exportDefaultLet) we've placed third in HackYeah's hackathon partner task "Bieg przez życie" created by ZUS.`,
  },
];

const HonorsAndAwards: React.FC = () => {
  return (
    <Section
      id="honors-awards"
      title="Honors & Awards"
      className="py-12 lg:py-16">
      <div className="divide-y divide-ink/15">
        {awardsData.map((award) => (
          <article
            key={award.id}
            className="grid gap-x-8 gap-y-2 py-6 first:pt-0 last:pb-0 md:grid-cols-9">
            <p className="text-muted md:col-span-3">{award.date}</p>
            <div className="md:col-span-6">
              <h3 className="text-xl leading-tight font-bold">{award.title}</h3>
              <p className="mt-1 text-muted">{award.issuer}</p>
              <p className="mt-3 leading-relaxed">{award.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default HonorsAndAwards;
