import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faChevronRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import type { Project as ProjectType } from "../data/projects";

const ProjectModal = ({
  project,
  onClose,
}: {
  project: ProjectType;
  onClose: () => void;
}) => {
  const [index, setIndex] = useState(0);
  const assets = project.assets;
  const asset = assets[index];

  const next = () => setIndex((index + 1) % assets.length);
  const prev = () => setIndex((index - 1 + assets.length) % assets.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-xl border border-[#44403C]/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
        </button>

        <div className="rounded-xl overflow-hidden bg-stone-100 aspect-video flex items-center justify-center my-4">
          {asset.type === "image" ? (
            <img
              src={asset.src}
              alt={asset.alt}
              className="w-full h-full object-contain"
            />
          ) : (
            <iframe
              src={asset.src}
              className="w-full h-full"
              title="Video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>

        {assets.length > 1 && (
          <div className="flex items-center justify-between mb-5">
            <button
              type="button"
              onClick={prev}
              className="opacity-60 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
              title="Previous"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
            </button>
            <span className="text-xs opacity-50">
              {index + 1} / {assets.length}
            </span>
            <button
              type="button"
              onClick={next}
              className="opacity-60 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
              title="Next"
            >
              <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
            </button>
          </div>
        )}

        <h3 className="font-display text-2xl md:text-3xl font-bold">
          {project.name}
        </h3>
        <p className="italic text-sm opacity-60 mt-1">{project.subHeading}</p>
        <p className="text-xs opacity-50 mb-4">{project.role}</p>
        <p className="text-sm leading-relaxed mb-5 opacity-90">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-full border border-[#44403C]/25 transition-colors duration-200 cursor-default hover:bg-[#F97316] hover:text-white hover:border-[#F97316]"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.github_link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#F97316] hover:underline"
        >
          View on GitHub
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
};

export default ProjectModal;
