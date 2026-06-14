import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useId, useRef, useState } from "react";
import { highlights, titles } from "../data/intro";

const IntroductionSection = () => {
  const [title, setTitle] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(false);
  const typingAnimationId = useId();

  const togglePause = () => {
    isPausedRef.current = !isPausedRef.current;
    setIsPaused((prev) => !prev);
  };

  useEffect(() => {
    let indx = 0;

    const typeTitle = (t: string) => {
      for (let i = 0; i < t.length; i++) {
        setTimeout(() => {
          setTitle(t.substring(0, i + 1));
        }, 150 * i);
      }
    };

    const displayNextItem = () => {
      if (isPausedRef.current) return;
      indx = (indx + 1) % titles.length;
      typeTitle(titles[indx]);
    };

    typeTitle(titles[indx]);

    const intervalId = setInterval(displayNextItem, 3500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center scroll-mt-16 px-6 md:px-10"
    >
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-sm md:text-base opacity-60 mb-4">Hello, World! I'm</p>
        <h1 className="font-display font-bold text-6xl md:text-8xl leading-none tracking-tight">
          LLOYD NA
        </h1>
        <div className="flex items-center justify-between gap-4 mt-6 max-w-xl h-[3rem]">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-[#F97316]">
            <span id={typingAnimationId}>{title}</span>|
          </h2>
          <button
            type="button"
            onClick={togglePause}
            title={isPaused ? "Resume" : "Pause"}
            className="opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-pointer shrink-0"
          >
            <FontAwesomeIcon
              icon={isPaused ? faPlay : faPause}
              className="h-4 w-4"
            />
          </button>
        </div>
        <p className="text-sm md:text-base mt-6 max-w-xl opacity-80">
          I build things, from{" "}
          <em className="font-bold not-italic text-[#F97316]">idea</em> to{" "}
          <em className="font-bold not-italic text-[#F97316]">production</em>.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className="px-3 py-1 rounded-full border border-[var(--color-border)]/25 text-xs md:text-sm font-medium transition-colors duration-200 cursor-default hover:bg-[#F97316] hover:text-white hover:border-[#F97316]"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
