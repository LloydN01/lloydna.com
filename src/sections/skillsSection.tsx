const SkillsSection = () => {
  return (
    <div className="h-screen bg-[#C77DFF] w-full flex flex-row items-center md:justify-center">
      <div className="flex flex-col m-5 md:p-10 md:w-[40rem] text-black">
        <h1 className="font-bold text-xl md:text-3xl">
          Some skills of mine...
        </h1>
        <ul className="list-disc m-5 text-xs md:text-sm">
          <li>Python</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Angular</li>
          <li>FastAPI</li>
          <li>Flask</li>
          <li>SQL</li>
          <li>GIT</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;
