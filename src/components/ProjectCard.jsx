const ProjectCard = ({ title, description, image, liveLink, repoLink }) => {
  return (
    <div className="border border-orange-400 rounded-lg shadow-md">
      <div>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </a>
      </div>

      <div className="p-5">
        <h1 className="text-xl text-[#333] font-semibold mb-2 tracking-wide">
          {title}
        </h1>
        <p className="mb-4 text-[#333] tracking-wide">{description}</p>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 hover:underline tracking-wide"
        >
          View Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
