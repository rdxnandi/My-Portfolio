import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-[80vh] flex flex-col items-center py-7 lg:py-0 px-[180px] md:px-20 justify-center"
    >
      <h1 className="text-[orange] text-center mb-24 relative text-3xl font-bold after:absolute after:w-[62px] after:h-[5px] after:bg-[orange] after:-bottom-2 after:right-3 after:rounded-custom-tow after:transform after:rotate-[-3deg] tracking-wide">
        Projects
      </h1>
      <div className="lg:w-full w-[300px] grid lg:grid-cols-2 md:grid-cols-2 md:w-full gap-8">
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
              href="https://stylekart-store.vercel.app"
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
            It's a fully responsive build with React.
          </p>
          <div className="flex justify-between">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
              }}
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
            A React-based task management application with drag-and-drop
            functionality.
          </p>
          <div className="flex justify-between">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
              }}
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
            Weather Forecast
          </h1>
          <p className="mb-4 text-[#333] tracking-wide">
            A weather dashboard using OpenWeatherMap API and Chart.js for data.
          </p>
          <div className="flex justify-between">
            <a
              href="#"
              className="text-orange-400 hover:underline tracking-wide"
            >
              View Project
            </a>
            <a
              href="https://github.com/rdxnandi/weather-forecast"
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
