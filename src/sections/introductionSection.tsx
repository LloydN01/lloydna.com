import { useEffect, useId, useState } from "react";

const titleArray = [
  "Software Developer",
  "Full-Stack Developer",
  "Data Analyst",
  "Data Engineer",
];

const IntroductionSection = () => {
  const [title, setTitle] = useState("");
  const typingAnimationId = useId();

  useEffect(() => {
    let indx = 0;

    const typeTitle = (title: string) => {
      for (let i = 0; i < title.length; i++) {
        setTimeout(() => {
          setTitle(title.substring(0, i + 1));
        }, 150 * i);
      }
    };

    const displayNextItem = () => {
      indx = (indx + 1) % titleArray.length;
      typeTitle(titleArray[indx]);
    };

    typeTitle(titleArray[indx]);

    const intervalId = setInterval(displayNextItem, 3500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-screen bg-[#E0AAFF] w-full flex flex-row items-center justify-center">
      <div className="flex flex-col m-5 md:p-10 md:w-[40rem] text-black">
        <div>
          <h1 className="text-xl md:text-3xl">
            Hello, World! <br /> My name is{" "}
            <span className="font-bold">Lloyd</span>, I'm a...
          </h1>
          <h1 className="w-full text-xl md:text-3xl font-bold h-[10rem]">
            <span id={typingAnimationId}>{title}|</span>
          </h1>
        </div>
        <p className="text-xs md:text-sm">
          A Software Developer studying Computer Science and Data Science at the
          University of Western Australia.
          <br /> <br /> Currently in my last year of studies and looking for
          opportunities to gain experience in the industry. I am interested in
          software development & data analysis.
        </p>
      </div>
    </div>
  );
};

export default IntroductionSection;
