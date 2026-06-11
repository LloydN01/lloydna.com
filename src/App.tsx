import Navbar from "./components/navbar";
import ContactSection from "./sections/contactSection";
import ExperienceSection from "./sections/experienceSection";
import IntroductionSection from "./sections/introductionSection";
import ProjectSections from "./sections/projectSections";
import SkillsSection from "./sections/skillsSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <IntroductionSection />
        <SkillsSection />
        <ProjectSections />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
