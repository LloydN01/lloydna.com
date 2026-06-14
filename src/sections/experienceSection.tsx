import { experiences } from "../data/experiences";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-16 py-24 border-t border-[var(--color-border)]/10 px-6 md:px-10"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-10">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((experience) => (
            <div
              key={experience.company}
              className="md:grid md:grid-cols-[180px_1fr] md:gap-8"
            >
              <div className="text-xs md:text-sm opacity-60 mb-2 md:mb-0">
                <p>{experience.period}</p>
                <p>{experience.location}</p>
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl font-bold">
                  {experience.position}
                </h3>
                <p className="text-[#F97316] text-sm md:text-base mb-3">
                  {experience.company}
                </p>
                <ul className="list-disc ml-5 text-xs md:text-sm space-y-2 opacity-80">
                  {experience.description.map((desc) => (
                    <li key={desc}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
