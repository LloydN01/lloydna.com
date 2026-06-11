import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contact } from "../data/contact";

const links = [
  {
    icon: faEnvelope,
    label: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: faLinkedin,
    label: contact.linkedin.label,
    href: contact.linkedin.url,
  },
  {
    icon: faGithub,
    label: contact.github.label,
    href: contact.github.url,
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-16 py-24 border-t border-[#44403C]/10 px-6 md:px-10"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-3">
          Get in touch.
        </h2>
        <p className="text-sm opacity-60 mb-10 max-w-xl">
          Whether you have an opportunity, a question, or just want to say hi, my
          inbox is always open.
        </p>
        <ul className="space-y-5">
          {links.map(({ icon, label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-sm md:text-base opacity-75 hover:opacity-100 hover:text-[#F97316] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={icon} className="h-4 w-4 shrink-0" />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
