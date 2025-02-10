import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";

function SocialMediaIcon() {
  return (
    <div className="lg:flex hidden flex-col bg-white shadow-xs px-2 py-3 rounded-sm gap-2 mt-20 fixed left-4 top-56 z-1000">
      <a
        href="https://www.linkedin.com/in/riktam-nandi-1a0449319/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center border-2 border-orange-300 rounded-full w-[35px] h-[35px]"
      >
        <FaLinkedin className="text-orange-300 text-xl" />
      </a>
      <a
        href="https://github.com/rdxnandi"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center border-2 border-orange-300 rounded-full w-[35px] h-[35px]"
      >
        <FaGithub className="text-orange-300 text-xl" />
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
        }}
        className="flex items-center justify-center border-2 border-orange-300 rounded-full w-[35px] h-[35px]"
      >
        <FaSquareXTwitter className="text-orange-300 text-xl" />
      </a>
      <a
        href="https://www.frontendmentor.io/profile/rdxnandi"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center border-2 border-orange-300 rounded-full w-[35px] h-[35px]"
      >
        <SiFrontendmentor className="text-orange-300 text-xl" />
      </a>
    </div>
  );
}

export default SocialMediaIcon;
