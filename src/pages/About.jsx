import React from "react";
import MainImage from "../assets/images/avatar2.png";

function About() {
  return (
    <section
      id="about"
      className="flex lg:flex-row flex-col items-center justify-evenly px-44 lg:min-h-[75vh] bg-orange-200 py-7"
    >
      <div className="w-[250px] mb-5 lg:mb-0 sm:mb-0">
        <img src={MainImage} alt={MainImage} className="w-full rounded-lg" />
      </div>
      <div className="sm:w-[500px] lg:w-[650px] md:w-[500px] w-[300px] md:mb-5 mb-5 lg:mb-0">
        <h4 className="mb-4 lg:mb-5 text-center lg:text-left text-[#333] font-extrabold relative lg:text-3xl text-2xl lg:w-fit tracking-wider after:absolute lg:after:w-1/2 after:h-[6px] after:bg-orange-500 after:-bottom-2 after:left-0 after:rounded-md">
          About Me
        </h4>
        <h1 className="mb-4 text-white font-bold text-3xl text-center lg:text-left lg:text-5xl tracking-wide">
          I’m a Web Developer
        </h1>
        <p className="leading-[1.5] text-center tracking-wide lg:text-justify text-[#414141] text-[18px]">
          I’m a{" "}
          <span className="lg:font-semibold font-bold text-[#303030]">
            self-taught
          </span>{" "}
          web developer passionate about building clean, efficient, and
          user-friendly web applications. My journey into web development
          started with curiosity and a drive to create, leading me to master{" "}
          <span className="lg:font-semibold font-bold text-[#303030]">
            HTML
          </span>
          ,{" "}
          <span className="lg:font-semibold font-bold text-[#303030]">CSS</span>
          ,{" "}
          <span className="lg:font-semibold font-bold text-[#303030]">
            JavaScript
          </span>
          ,{" "}
          <span className="lg:font-semibold font-bold text-[#303030]">
            React
          </span>{" "}
          and{" "}
          <span className="lg:font-semibold font-bold text-[#303030]">
            Tailwind CSS
          </span>{" "}
          through hands-on projects and continuous learning. <br /> I love
          solving problems through code and constantly learning new skills to
          improve my craft.
        </p>
      </div>
    </section>
  );
}

export default About;
