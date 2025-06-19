import { projects } from "../assets/project.js";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="lg:min-h-[90vh] sm:min-h-auto flex flex-col items-center py-7 sm:px-5 px-[180px] md:px-20 justify-center"
    >
      <h1 className="text-[orange] text-center mb-24 relative text-3xl font-bold after:absolute after:w-[62px] after:h-[5px] after:bg-[orange] after:-bottom-2 after:right-3 after:rounded-custom-tow after:transform after:rotate-[-3deg] tracking-wide">
        Projects
      </h1>
      <div className="sm:w-full lg:w-[1200px] w-[300px] grid sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 md:w-full gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
