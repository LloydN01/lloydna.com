import { useState } from "react";
import Project from "../components/project";
import ProjectModal from "../components/projectModal";
import { projects, type Project as ProjectType } from "../data/projects";

const ProjectSections = () => {
  const [active, setActive] = useState<ProjectType | null>(null);

  return (
    <section
      id="projects"
      className="scroll-mt-16 py-24 border-t border-[#44403C]/10 px-6 md:px-10"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display font-bold text-3xl md:text-5xl">Projects</h2>
        <p className="text-sm opacity-60 mt-2">
          A selection of things I have built. Click a card to see more.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {projects.map((project) => (
            <Project
              key={project.id}
              project={project}
              onOpen={() => setActive(project)}
            />
          ))}
        </div>
      </div>
      {active && (
        <ProjectModal
          key={active.id}
          project={active}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
};

export default ProjectSections;
