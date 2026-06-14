import { faBars, faMoon, faSun, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[var(--color-bg)]/80 backdrop-blur border-b border-[var(--color-border)]/10">
      <nav className="max-w-5xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#about"
          className="font-display font-bold tracking-widest text-sm md:text-base"
        >
          LLOYD NA
        </a>
        <div className="flex items-center gap-6">
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
            className="opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
            onClick={() => setIsDark((prev) => !prev)}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <FontAwesomeIcon
              icon={isDark ? faSun : faMoon}
              className="h-4 w-4"
            />
          </button>
          <button
            type="button"
            className="md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} className="h-5 w-5" />
          </button>
        </div>
      </nav>
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-5 pt-4 text-sm border-t border-[var(--color-border)]/10">
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
