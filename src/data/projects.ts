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

export type ProjectAsset =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string };

export type Project = {
  id: string;
  name: string;
  subHeading: string;
  role: string;
  description: string;
  technologies: string[];
  assets: ProjectAsset[];
  github_link: string;
};

export const projects: Project[] = [
  {
    id: "project1",
    name: "Fitness Assessment Reporting Tool",
    subHeading: "Dynamic fitness data collection and reporting",
    role: "Developer & UI Designer",
    description:
      "A web application built for the UWA School of Sport Science, Exercise and Health to streamline fitness data collection, storage and reporting. Generates class norms from student data as accurate benchmarks, with features spanning secure data entry, custom form generation, detailed reports and data visualisations.",
    technologies: ["React", "TypeScript", "Chart.js", "Tailwind", "FastAPI", "Python", "SQLite"],
    assets: [
      { type: "image", src: FitnessAssessmentDemoGIF, alt: "Fitness Assessment Reporting Tool Demo" },
      { type: "video", src: "https://www.youtube.com/embed/1Kzubo8AGFM?si=fBs5yVqPl62g3bS3" },
      { type: "image", src: LoginImage, alt: "Login Screen" },
      { type: "image", src: AdminFormManagerImage, alt: "Admin Form Manager" },
      { type: "image", src: CreateFormTemplateImage, alt: "Create Form Template" },
      { type: "image", src: CreateFormTemplateMobileImage, alt: "Create Form Template Mobile" },
      { type: "image", src: DataVisualisationImage, alt: "Data Visualisation" },
      { type: "image", src: DataVisualisation2Image, alt: "Data Visualisation 2" },
      { type: "image", src: FillingOutFormImage, alt: "Filling Out Form" },
    ],
    github_link: "https://github.com/LloydN01/FitnessAssessmentReportingTool",
  },
  {
    id: "project2",
    name: "GetHired.ai",
    subHeading: "GPT-powered interview practice simulator",
    role: "Co-Creator",
    description:
      "A GPT-powered interview practice application where users enter a job title and receive role-specific questions from an AI interviewer. Provides instant feedback on answers to help users sharpen their responses and track improvement over time.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "OpenAI GPT-3.5", "jQuery", "Bootstrap"],
    assets: [
      { type: "image", src: ChatBotGIF, alt: "Chat-Bot-GIF" },
      { type: "image", src: ChatDemoGIF, alt: "chat-demo" },
      { type: "video", src: "https://www.youtube.com/embed/NKSRK7ZsTR0" },
      { type: "video", src: "https://www.youtube.com/embed/ivmjqKBeae0" },
      { type: "video", src: "https://www.youtube.com/embed/F3HklcJXReY" },
      { type: "video", src: "https://www.youtube.com/embed/0351ANuEWKk" },
    ],
    github_link: "https://github.com/LloydN01/Job-Interview-Simulator",
  },
  {
    id: "project3",
    name: "Summarise AI",
    subHeading: "Browser extension for instant text summarisation",
    role: "Creator",
    description:
      "A browser extension that summarises user-selected text on any webpage using NLPCloud's API. Extracts selected content via DOM manipulation and returns a concise summary inline. Supports multiple NLP models, giving users control over the summarisation approach.",
    technologies: ["HTML", "CSS", "JavaScript", "NLPCloud API", "DOM Manipulation"],
    assets: [
      { type: "image", src: SummariseAIDemoGIF, alt: "SummariseAI-Demo-GIF" },
      { type: "video", src: "https://www.youtube.com/embed/CtGkt3FdrsQ?si=KH34eemRIXXA65Fi" },
    ],
    github_link: "https://github.com/LloydN01/SummariseAI",
  },
  {
    id: "project4",
    name: "Spotlight for Linux",
    subHeading: "A spotlight-like command-line search utility",
    role: "Co-Creator",
    description:
      "A command-line utility called trove that builds and searches a compressed index of files in a user-specified directory. Enables fast keyword search across file contents, pinpointing exact locations within matching files.",
    technologies: ["C", "Unix", "Makefile", "POSIX", "System Calls"],
    assets: [
      { type: "image", src: TroveDemoGIF, alt: "Trove-Demo-GIF" },
      { type: "video", src: "https://www.youtube.com/embed/vN1lATWz7d4" },
      { type: "video", src: "https://www.youtube.com/embed/kv_1715QZ2I" },
    ],
    github_link: "https://github.com/LloydN01/Spotlight-for-Linux",
  },
];
