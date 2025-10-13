import React from "react";
import Divider from "../Divider";

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
    <section id="honors-awards" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Honors & Awards
        </h2>
        <Divider />
        <div className="space-y-6">
          {awardsData.map((award) => (
            <div
              key={award.id}
              className="bg-slate-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-orange-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {award.title}
                </h3>
                <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full w-fit">
                  {award.date}
                </span>
              </div>
              <p className="text-lg font-medium text-gray-600 mb-3">
                {award.issuer}
              </p>
              <p className="text-gray-700/90 leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HonorsAndAwards;
