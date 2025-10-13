import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactSection = () => {
  return (
    <div className="h-screen bg-[#10002B] w-full text-white flex flex-row items-center md:justify-center">
      <div className="flex flex-col m-5 md:p-10 md:w-[40rem]">
        <h1 className="font-bold text-xl md:text-3xl">Contact Me</h1>
        <ul className="list-none my-5 text-xs md:text-sm space-y-3">
          <li className="space-x-1">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>lloydna0527@gmail.com</span>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/lloyd-na/"
              className="space-x-1"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span>linkedin.com/in/lloyd-na/</span>
            </a>
          </li>
          <li className="space-x-1">
            <a href="https://github.com/LloydN01" className="space-x-1">
              <FontAwesomeIcon icon={faGithub} />
              <span>github.com/LloydN01</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactSection;
