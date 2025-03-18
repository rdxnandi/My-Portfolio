import React, { useEffect, useState } from "react";
import { AlignJustify, X } from "lucide-react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section[id]");

    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 4) {
        current = section.getAttribute("id");
      }
    });

    setActiveSection(current);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full flex items-center justify-between">
      {/* Logo */}
      <div>
        <a
          href="/"
          className="text-[#333] text-2xl font-bold tracking-[2px] cursor-default"
        >
          <span className="text-[orange] text-3xl">R</span>iktam
          <span className="text-[orange]">.</span>
        </a>
      </div>

      {/* Menu Items */}
      <ul
        className={`lg:flex space-x-6 bg-[#f4f4f4] fixed lg:static w-full lg:w-auto left-0 lg:left-auto top-16 text-center transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <li className="block p-4 lg:p-0 ml-5">
          <a
            href="#home"
            className={`cursor-pointer text-[#333] text-xl relative tracking-wide after:absolute after:w-0 after:h-[4px] after:rounded-sm after:block after:mt-[5px] after:right-0 after:bg-[orange] after:transition-width-right after:duration-200 hover:after:w-full hover:after:right-0 ${
              activeSection === "home" ? "after:w-full" : ""
            }`}
          >
            Home
          </a>
        </li>
        <li className="block p-4 lg:p-0 ml-5">
          <a
            href="#about"
            className={`cursor-pointer text-[#333] text-xl relative tracking-wide after:absolute after:w-0 after:h-[4px] after:rounded-sm after:block after:mt-[5px] after:right-0 after:bg-[orange] after:transition-width-right after:duration-200 hover:after:w-full hover:after:right-0 ${
              activeSection === "about" ? "after:w-full" : ""
            }`}
          >
            About
          </a>
        </li>
        <li className="block p-4 lg:p-0 ml-5">
          <a
            href="#skills"
            className={`cursor-pointer text-[#333] text-xl relative tracking-wide after:absolute after:w-0 after:h-[4px] after:rounded-sm after:block after:mt-[5px] after:right-0 after:bg-[orange] after:transition-width-right after:duration-200 hover:after:w-full hover:after:right-0 ${
              activeSection === "skills" ? "after:w-full" : ""
            }`}
          >
            Skills
          </a>
        </li>
        <li className="block p-4 lg:p-0 ml-5">
          <a
            href="#projects"
            className={`cursor-pointer text-[#333] text-xl relative tracking-wide after:absolute after:w-0 after:h-[4px] after:rounded-sm after:block after:mt-[5px] after:right-0 after:bg-[orange] after:transition-width-right after:duration-200 hover:after:w-full hover:after:right-0 ${
              activeSection === "projects" ? "after:w-full" : ""
            }`}
          >
            Projects
          </a>
        </li>
        <li className="block p-4 lg:p-0 mx-5">
          <a
            href="#contact"
            className={`cursor-pointer text-[#333] text-xl relative tracking-wide after:absolute after:w-0 after:h-[4px] after:rounded-sm after:block after:mt-[5px] after:right-0 after:bg-[orange] after:transition-width-right after:duration-200 hover:after:w-full hover:after:right-0 ${
              activeSection === "contact" ? "after:w-full" : ""
            }`}
          >
            Contact
          </a>
        </li>
      </ul>

      <button
        className="lg:hidden cursor-pointer text-[#333]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <AlignJustify />}
      </button>
    </nav>
  );
}

export default Navbar;
