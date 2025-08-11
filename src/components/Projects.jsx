import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = ({ projects, t }) => {
  return (
    <section
      id="projects"
      className="pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-red-400">{t.projectsTitle}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            {t.projectsDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, t }) => {
  return (
    <div className="group bg-white/10 backdrop-blur-xl border border-blue-400/30 transition-all duration-300 hover:scale-105 relative shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Badge destacado si es featured */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-xl text-white text-xs font-bold border border-blue-400/30 shadow-lg shadow-red-500/25">
              {t.featured}
            </span>
          </div>
        )}

        {/* Efecto de partículas en hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
          <div
            className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-red-400 rounded-full animate-pulse shadow-lg shadow-red-400/50"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-300 transition-colors relative">
          {project.title}
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300"></div>
        </h3>
        <p className="text-sm text-gray-300 mb-4 leading-relaxed flex-grow">
          {t[project.descriptionKey]}
        </p>

        {/* Technologies con efectos */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white/10 backdrop-blur-xl text-white text-xs border border-blue-400/30 hover:border-red-400/60 transition-all duration-300 group/tech"
            >
              <span className="relative z-10">{tech}</span>
              <div className="absolute inset-0 bg-red-500/20 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
            </span>
          ))}
        </div>

        {/* Links con efectos futuristas */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.github}
            className="relative flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-xl border border-blue-400/30 text-white text-sm font-medium hover:bg-white/20 transition-all duration-300 group/link overflow-hidden flex-1 justify-center"
          >
            <div className="absolute inset-0 bg-red-500/20 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
            <Github size={16} className="relative z-10" />
            <span className="relative z-10">{t.code}</span>
          </a>
          <a
            href={project.live}
            className="relative flex items-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium hover:shadow-red-500/25 transition-all duration-300 group/link overflow-hidden flex-1 justify-center"
          >
            <ExternalLink size={16} className="relative z-10" />
            <span className="relative z-10">{t.demo}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
