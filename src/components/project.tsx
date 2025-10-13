import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Project = ({
  name,
  subHeading,
  role,
  description,
  technologies,
  assets,
  github_link,
}: {
  name: string;
  subHeading: string;
  role: string;
  description: string;
  technologies: string;
  assets: { src: string; alt?: string; type: string }[];
  github_link: string;
}) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextSlide = () => {
    setCarouselIndex((carouselIndex + 1) % assets.length);
  };

  const prevSlide = () => {
    setCarouselIndex((carouselIndex - 1 + assets.length) % assets.length);
  };

  return (
    <div className="flex flex-col h-screen mx-auto md:p-10 md:w-[40rem]">
      <div className="m-5 md:m-0">
        <h3 className="font-bold text-xl md:text-3xl">{name}</h3>
        <h5 className="font-bold italic text-xs md:text-xl">{subHeading}</h5>
        <h6 className="font-bold text-xs md:text-sm">{role}</h6>
        <p className="project-description text-xs md:text-sm">{description}</p>
        <p className="project-tech text-xs md:text-sm">
          <b>Technologies:</b> {technologies}
        </p>
        <p className="project-github text-xs md:text-sm mt-5">
          <a
            href={github_link}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            View on GitHub
          </a>
        </p>
      </div>
      <div className="flex flex-col flex-grow text-center p-3 md:p-0">
        <div className="project-carousel flex justify-center flex-grow">
          {assets.map((asset, index) => (
            <div
              key={asset.src}
              className={`w-full h-full flex items-center justify-center ${
                index === carouselIndex ? "block" : "hidden"
              }`}
            >
              {asset.type === "image" ? (
                <img
                  src={asset.src}
                  alt={asset.alt}
                  className="rounded-xl max-h-[10rem]"
                />
              ) : (
                <iframe
                  src={asset.src}
                  className="rounded-xl max-w-[13rem] md:max-w-none md:h-[10rem]"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          ))}
        </div>
        <div className="carousel-buttons space-x-10">
          <button
            type="button"
            onClick={prevSlide}
            className="highlight"
            title="Previous Slide"
          >
            <FontAwesomeIcon icon={faCaretLeft} className="h-[3rem]" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="highlight"
            title="Next Slide"
          >
            <FontAwesomeIcon icon={faCaretRight} className="h-[3rem]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
