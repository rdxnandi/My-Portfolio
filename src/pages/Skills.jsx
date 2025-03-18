import React from "react";

function Skills() {
  return (
    <section
      id="skills"
      className="lg:min-h-[80vh] sm:min-h-auto px-44 py-12 flex flex-col items-center justify-center"
    >
      <h1 className="text-[orange] text-center mb-24 relative text-3xl font-bold after:absolute after:w-[62px] after:h-[5px] after:bg-[orange] after:-bottom-[6px] lg:after:right-3 after:right-28 after:rounded-custom-tow after:transform after:rotate-[-3deg] tracking-wide w-[300px] lg:w-fit">
        My Skills
      </h1>
      <div className="lg:w-full flex lg:flex-row sm:flex-row lg:flex-wrap sm:flex-wrap sm:justify-center flex-col gap-6 lg:justify-evenly md:mb-5">
        <div className="p-6 w-[300px] lg:w-[350px] rounded-[10px] text-center relative bg-[#eadcc2] touch-manipulation after:bg-[#333] after:rounded-[10px] after:block after:-right-[7px] after:h-full after:w-full after:absolute after:-bottom-[7px] after:transform after:translate-x-[7px] after:translate-y-[7px] after:-z-1">
          <h1 className="text-[#414141] text-[21px] mb-4 font-bold tracking-wide">
            Language
          </h1>
          <ul>
            <li className="p-1 text-[#414141] text-[18px] tracking-wider">
              HTML
            </li>
            <li className="p-1 text-[#414141] text-[18px] tracking-wider">
              CSS
            </li>
            <li className="p-1 text-[#414141] text-[18px] tracking-wider">
              JavaScript
            </li>
          </ul>
        </div>
        <div className="p-6 w-[300px] lg:w-[350px] rounded-[10px] text-center relative bg-[#eadcc2] touch-manipulation after:bg-[#333] after:rounded-[10px] after:block after:-right-[7px] after:h-full after:w-full after:absolute after:-bottom-[7px] after:transform after:translate-x-[7px] after:translate-y-[7px] after:-z-1">
          <h1 className="text-[#414141] text-[21px] mb-4 font-bold tracking-wide">
            Frameworks and Libraries
          </h1>
          <ul>
            <li className="p-1 text-[#414141] text-[18px] tracking-wider">
              React.js & Redux.js
            </li>
            <li className="p-1 text-[#414141] text-[18px] tracking-wider">
              Tailwind CSS
            </li>
            <li className="p-1 text-[#414141] text-[18px] tracking-wider">
              Bootstrap & jQuery
            </li>
          </ul>
        </div>
        <div className="p-6 w-[300px] lg:w-[350px] rounded-[10px] text-center relative bg-[#eadcc2] touch-manipulation after:bg-[#333] after:rounded-[10px] after:block after:-right-[7px] after:h-full after:w-full after:absolute after:-bottom-[7px] after:transform after:translate-x-[7px] after:translate-y-[7px] after:-z-1">
          <h1 className="text-[#414141] text-[21px] mb-4 font-bold tracking-wide">
            Tools
          </h1>
          <ul>
            <li className="p-1 text-[#414141] text-xl tracking-wider">
              Git, GitHub and GitLab
            </li>
            <li className="p-1 text-[#414141] text-xl tracking-wider">Saas</li>
            <li className="p-1 text-[#414141] text-xl tracking-wider">
              Appwrite
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
