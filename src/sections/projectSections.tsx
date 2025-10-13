import { useEffect, useRef, useState } from "react";
// Import images
import ChatBotGIF from "../assets/Chat-Bot-GIF.gif";
import ChatDemoGIF from "../assets/chat-demo.gif";
import AdminFormManagerImage from "../assets/FitnessAssessmentReportingTool/admin-form-manager.png";
import CreateFormTemplateImage from "../assets/FitnessAssessmentReportingTool/create-form-template.png";
import CreateFormTemplateMobileImage from "../assets/FitnessAssessmentReportingTool/create-form-template-mobile.png";
import DataVisualisationImage from "../assets/FitnessAssessmentReportingTool/data-visualisation.png";
import DataVisualisation2Image from "../assets/FitnessAssessmentReportingTool/data-visualisation_2.png";
import FitnessAssessmentDemoGIF from "../assets/FitnessAssessmentReportingTool/Fitness-Assessment-Reporting-Tool-Demo-Short.gif";
import FillingOutFormImage from "../assets/FitnessAssessmentReportingTool/filling-out-form.png";
import LoginImage from "../assets/FitnessAssessmentReportingTool/Login.png";
import SummariseAIDemoGIF from "../assets/Summarise-AI-Demo.gif";
import TroveDemoGIF from "../assets/Trove-Demo-GIF.gif";
import Project from "../components/project";

const projectContent = [
  {
    id: "project1",
    name: "Fitness Assessment Reporting Tool",
    subHeading: "Dynamic fitness data collection and reporting",
    role: "Developer & UI Designer",
    description:
      "A web application developed for the UWA School of Sport Science, Exercise and Health to streamline the collection, storage, and reporting of fitness data. It generates class norms from student data, providing accurate benchmarks. Features include secure data entry and storage, custom form generation, detailed reports, visualizations, and analytics.",
    technologies:
      "React, TypeScript, Chart.js, Tailwind, FastAPI, Python, SQLite",
    assets: [
      {
        src: FitnessAssessmentDemoGIF,
        alt: "Fitness Assessment Reporting Tool Demo",
        type: "image",
      },
      {
        src: "https://www.youtube.com/embed/1Kzubo8AGFM?si=fBs5yVqPl62g3bS3",
        type: "video",
      },
      {
        src: LoginImage,
        alt: "Login Screen",
        type: "image",
      },
      {
        src: AdminFormManagerImage,
        alt: "Admin Form Manager",
        type: "image",
      },
      {
        src: CreateFormTemplateImage,
        alt: "Create Form Template",
        type: "image",
      },
      {
        src: CreateFormTemplateMobileImage,
        alt: "Create Form Template Mobile",
        type: "image",
      },
      {
        src: DataVisualisationImage,
        alt: "Data Visualisation",
        type: "image",
      },
      {
        src: DataVisualisation2Image,
        alt: "Data Visualisation 2",
        type: "image",
      },
      {
        src: FillingOutFormImage,
        alt: "Filling Out Form",
        type: "image",
      },
    ],
    github_link: "https://github.com/LloydN01/FitnessAssessmentReportingTool",
  },
  {
    id: "project2",
    name: "GetHired.ai",
    subHeading: "Interview Practice Chat-Bot",
    role: "Co-Creator",
    description:
      "GPT powered interview practice chat application that allows users to practice their interview skills with an AI bot. Users can enter their desired job title and the bot will generate and ask interview questions related to the job. Users will be able to get instant feedback on their answers and improve their interview skills.",
    technologies:
      "HTML, CSS, JavaScript, Python, Flask, OpenAI GPT-3.5, Jquery, Bootstrap",
    assets: [
      {
        src: ChatBotGIF,
        alt: "Chat-Bot-GIF",
        type: "image",
      },
      { src: ChatDemoGIF, alt: "chat-demo", type: "image" },
      { src: "https://www.youtube.com/embed/NKSRK7ZsTR0", type: "video" },
      { src: "https://www.youtube.com/embed/ivmjqKBeae0", type: "video" },
      { src: "https://www.youtube.com/embed/F3HklcJXReY", type: "video" },
      { src: "https://www.youtube.com/embed/0351ANuEWKk", type: "video" },
    ],
    github_link: "https://github.com/LloydN01/Job-Interview-Simulator",
  },
  {
    id: "project3",
    name: "Summarise AI",
    subHeading:
      "A browser extension that summarises user selected text on any webpage",
    role: "Creator",
    description:
      "A browser extension that leverages NLPCloud's API to summarise user selected text on any webpage. It applies DOM manipulation to extract the selected text and sends it to the API for summarisation. The summarised text is then displayed to the user. Enabled customization by integrating the functionality to choose from different NLP models for text summarization.",
    technologies:
      "HTML, CSS, JavaScript, API Integration, NLP, DOM Manipulation",
    assets: [
      {
        src: SummariseAIDemoGIF,
        alt: "SummariseAI-Demo-GIF",
        type: "image",
      },
      {
        src: "https://www.youtube.com/embed/CtGkt3FdrsQ?si=KH34eemRIXXA65Fi",
        type: "video",
      },
    ],
    github_link: "https://github.com/LloydN01/SummariseAI",
  },
  {
    id: "project4",
    name: "Spotlight for Linux",
    subHeading: "A spotlight-like command-line utility program",
    role: "Co-Creator",
    description:
      "A command-line utility program, named trove, that builds and searches a compressed index of the content of the files in a user specified directory. Allows the user to search for keywords and pinpoint the location of the files that contain them.",
    technologies: "C, Unix, Makefile, POSIX function calls, System Calls",
    assets: [
      {
        src: TroveDemoGIF,
        alt: "Trove-Demo-GIF",
        type: "image",
      },
      { src: "https://www.youtube.com/embed/vN1lATWz7d4", type: "video" },
      { src: "https://www.youtube.com/embed/kv_1715QZ2I", type: "video" },
    ],
    github_link: "https://github.com/LloydN01/Spotlight-for-Linux",
  },
];

const ProjectSections = () => {
  const colours: string[] = ["#7B2CBF", "#5A189A", "#3C096C ", "#280648"];
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStickyVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const currentHeaderRef = headerRef.current;
    if (currentHeaderRef) {
      observer.observe(currentHeaderRef);
    }

    return () => {
      if (currentHeaderRef) {
        observer.unobserve(currentHeaderRef);
      }
    };
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div
        ref={headerRef}
        className="bg-[#9D4EDD] h-screen flex md:justify-center items-center"
      >
        <div className="md:p-10 md:w-[40rem] m-5">
          <h1 className="font-bold text-xl md:text-3xl">Projects</h1>
          <p className="font-bold italic text-xs md:text-sm">
            A list of projects I have worked on, starting with this website!
          </p>
          <p className=" text-xs md:text-sm mt-10">
            This website was built using React + TypeScript + Tailwind.
          </p>
        </div>
      </div>
      {isStickyVisible && (
        <div className="sticky top-0 bg-[#9D4EDD] z-10 flex justify-center">
          <h1 className="font-bold text-base md:text-xl">Projects</h1>
        </div>
      )}
      {projectContent.map((project, index) => (
        <div
          key={project.id}
          style={{
            backgroundColor: colours[index],
            borderColor: colours[index],
          }}
        >
          <Project
            name={project.name}
            subHeading={project.subHeading}
            role={project.role}
            description={project.description}
            technologies={project.technologies}
            assets={project.assets}
            github_link={project.github_link}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectSections;
