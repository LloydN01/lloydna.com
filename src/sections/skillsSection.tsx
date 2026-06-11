import { skillCategories } from "../data/skills";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-16 py-24 border-t border-[#44403C]/10 px-6 md:px-10"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-10">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {skillCategories.map(({ category, skills }) => (
            <div key={category}>
              <h3 className="text-xs uppercase tracking-widest opacity-50 mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full border border-[#44403C]/25 text-xs md:text-sm transition-colors duration-200 cursor-default hover:bg-[#F97316] hover:text-white hover:border-[#F97316]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
