import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#FAFAF9]/80 backdrop-blur border-b border-[#44403C]/10">
      <nav className="max-w-5xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#about"
          className="font-display font-bold tracking-widest text-sm md:text-base"
        >
          LLOYD NA
        </a>
        <ul className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} className="h-5 w-5" />
        </button>
      </nav>
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-5 pt-4 text-sm border-t border-[#44403C]/10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
