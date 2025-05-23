import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      className="lg:min-h-[80vh] sm:min-h-auto flex flex-col items-center py-7 lg:py-0 sm:px-5 px-[180px] md:px-20 justify-center"
    >
      <h1 className="text-[orange] text-center mb-24 relative text-3xl font-bold after:absolute after:w-[62px] after:h-[5px] after:bg-[orange] after:-bottom-2 after:right-3 after:rounded-custom-tow after:transform after:rotate-[-3deg] tracking-wide">
        Projects
      </h1>
      <div className="sm:w-full lg:w-full w-[300px] grid sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 md:w-full gap-8">
        {/* E-commerce site */}
        <div className="border border-orange-400 p-6 rounded-lg shadow-md">
          <h1 className="text-xl text-[#333] font-semibold mb-2 tracking-wide">
            E-commerce Site
          </h1>
          <p className="mb-4 text-[#333] tracking-wide">
            A e-commerce site fully developed by react and tailwindcss.
          </p>
          <div className="flex justify-between">
            <a
              href="https://stylekart-site.vercel.app/"
              className="text-orange-400 hover:underline tracking-wide"
            >
              View Project
            </a>
            <a
              href="https://github.com/rdxnandi/ecommerce-website"
              className="text-orange-400 hover:underline tracking-wide"
            >
              View Code
            </a>
          </div>
        </div>

        {/* Responsive Travel Website */}
        <div className="border border-orange-400 p-6 rounded-lg shadow-md">
          <h1 className="text-xl text-[#333] font-semibold mb-2 tracking-wide">
            Responsive Travel
          </h1>
          <p className="mb-4 text-[#333] tracking-wide">
            It's a fully responsive build with HTML, CSS, and JavaScript.
          </p>
          <div className="flex justify-between">
            <a
              href="https://travel-site-chi-ashen.vercel.app/"
              className="text-orange-400 hover:underline tracking-wide"
            >
              View Project
            </a>
            <a
              href="https://github.com/rdxnandi/travel-website"
              className="text-orange-400 hover:underline tracking-wide"
            >
              View Code
            </a>
          </div>
        </div>

        {/* Task Manager Site */}
        <div className="border border-orange-400 p-6 rounded-lg shadow-md">
          <h1 className="text-xl text-[#333] font-semibold mb-2 tracking-wide">
            Task Management App
          </h1>
          <p className="mb-4 text-[#333] tracking-wide">
            A React-based task management website.
          </p>
          <div className="flex justify-between">
            <a
              href="https://tasksly-task-manager.vercel.app/"
              className="text-orange-400 hover:underline tracking-wide"
            >
              View Project
            </a>
            <a
              href="https://github.com/rdxnandi/task-manager"
              className="text-orange-400 hover:underline tracking-wide"
            >
              View Code
            </a>
          </div>
        </div>

        {/* Weather Forecast */}
        <div className="border border-orange-400 p-6 rounded-lg shadow-md">
          <h1 className="text-xl text-[#333] font-semibold mb-2 tracking-wide">
            Tea Shop Landing Page
          </h1>
          <p className="mb-4 text-[#333] tracking-wide">
            A Tea Shop Landing Page using React and Tailwind CSS.
          </p>
          <div className="flex justify-between">
            <a
              href="https://tea-landing-page-opal.vercel.app/"
              className="text-orange-400 hover:underline tracking-wide"
            >
              View Project
            </a>
            <a
              href="https://github.com/rdxnandi/tea-landing-page"
              className="text-orange-400 hover:underline tracking-wide"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
