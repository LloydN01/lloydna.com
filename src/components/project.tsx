import type { Project as ProjectType, ProjectAsset } from "../data/projects";

const Project = ({
  project,
  onOpen,
}: {
  project: ProjectType;
  onOpen: () => void;
}) => {
  const thumb = project.assets.find(
    (a): a is Extract<ProjectAsset, { type: "image" }> => a.type === "image"
  );

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group text-left cursor-pointer"
    >
      <div className="rounded-xl overflow-hidden aspect-video bg-stone-100 mb-4">
        {thumb && (
          <img
            src={thumb.src}
            alt={thumb.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <h3 className="font-display text-xl md:text-2xl font-bold group-hover:text-[#F97316] transition-colors duration-200">
        {project.name}
      </h3>
      <p className="italic text-xs md:text-sm opacity-60 mt-1">
        {project.subHeading}
      </p>
      <div className="flex flex-wrap gap-2 mt-3">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs rounded-full border border-[#44403C]/25 transition-colors duration-200 hover:bg-[#F97316] hover:text-white hover:border-[#F97316]"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="px-2 py-1 text-xs opacity-50">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>
    </button>
  );
};

export default Project;
