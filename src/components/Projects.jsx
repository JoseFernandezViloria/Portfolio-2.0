import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = ({ projects, t }) => {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <section
      id="projects"
      className="pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24"
      aria-label="Sección de proyectos de José"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-green-400">{t.projectsTitle}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            {t.projectsDescription}
          </p>
        </header>

        {/* Layout interactivo: Lista lateral + Tarjeta principal (solo en desktop) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Lista de proyectos (lado izquierdo) */}
          <aside className="lg:col-span-1" aria-label="Lista de proyectos disponibles">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-6">
                Selecciona un proyecto
              </h3>
              {projects.map((project, index) => (
                <ProjectListItem
                  key={index}
                  project={project}
                  isSelected={selectedProject === index}
                  onClick={() => setSelectedProject(index)}
                  t={t}
                />
              ))}
            </div>
          </div>

          {/* Tarjeta principal del proyecto (lado derecho) */}
          <article className="lg:col-span-2" aria-label="Detalles del proyecto seleccionado">
            <ProjectCard
              project={projects[selectedProject]}
              t={t}
              isMainCard={true}
            />
          </article>
        </div>

        {/* Layout original para móviles y tablets */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8" role="list" aria-label="Lista de proyectos en vista móvil">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente para los elementos de la lista lateral
const ProjectListItem = ({ project, isSelected, onClick, t }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full h-32 p-4 text-left transition-all duration-300 border flex flex-col focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent ${
        isSelected
          ? "bg-gray-900 border-green-400/50 shadow-lg shadow-green-500/20"
          : "bg-gray-800 border-slate-600 hover:bg-gray-700 hover:border-slate-500"
      }`}
      role="menuitem"
      aria-pressed={isSelected}
      aria-label={`Seleccionar proyecto: ${project.title}`}
    >
      {/* Mitad superior - Título con bullet point y badge */}
      <div className="flex-1 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Bullet point */}
          <div
            className={`w-2 h-2 rounded-full ${
              isSelected ? "bg-green-400" : "bg-green-500"
            }`}
          ></div>

          {/* Título */}
          <h4
            className={`font-semibold text-lg ${
              isSelected ? "text-green-300" : "text-white"
            }`}
          >
            {project.title}
          </h4>
        </div>

        {/* Badge featured al lado del título */}
        {project.featured && (
          <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs border border-green-400/30">
            {t.featured}
          </span>
        )}
      </div>

      {/* Mitad inferior - Tecnologías */}
      <div className="flex-1 flex items-end">
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs border ${
                isSelected
                  ? "bg-green-500/30 text-green-200 border-green-400/40"
                  : "bg-slate-600 text-gray-300 border-slate-500"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
};

// Componente para la tarjeta principal del proyecto
const ProjectCard = ({ project, t, isMainCard = false }) => {
  return (
    <article
      className={`group bg-white/10 backdrop-blur-xl border border-green-400/30 transition-all duration-300 ${
        isMainCard ? "hover:scale-[1.02]" : "hover:scale-105"
      } relative shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 h-full flex flex-col focus-within:outline-none focus-within:ring-2 focus-within:ring-green-400 focus-within:ring-offset-2 focus-within:ring-offset-transparent`}
      role="article"
      aria-label={`Proyecto: ${project.title}`}
    >
      <div
        className={`relative overflow-hidden ${
          isMainCard ? "h-64 lg:h-80" : "h-48"
        }`}
      >
        <img
          src={project.image}
          alt={`Captura de pantalla del proyecto ${project.title} - ${t[project.descriptionKey] || project.title}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Badge destacado si es featured */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-green-500/90 backdrop-blur-xl text-white text-sm font-bold border border-green-400/30 shadow-lg shadow-green-500/25">
              {t.featured}
            </span>
          </div>
        )}

        {/* Overlay con información del proyecto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-200 line-clamp-2">
              {t[project.descriptionKey]}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col flex-grow ${
          isMainCard ? "p-6 lg:p-8" : "p-6"
        }`}
      >
        <h3
          className={`font-bold mb-4 text-white group-hover:text-green-300 transition-colors relative ${
            isMainCard ? "text-2xl lg:text-3xl" : "text-xl"
          }`}
        >
          {project.title}
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></div>
        </h3>

        <p
          className={`text-gray-300 mb-6 leading-relaxed flex-grow ${
            isMainCard ? "text-base lg:text-lg" : "text-sm"
          }`}
        >
          {t[project.descriptionKey]}
        </p>

        {/* Technologies con efectos */}
        <div
          className={`flex flex-wrap mb-6 ${isMainCard ? "gap-3" : "gap-2"}`}
          role="list"
          aria-label="Tecnologías utilizadas en el proyecto"
        >
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className={`bg-white/10 backdrop-blur-xl text-white border border-green-400/30 hover:border-green-400/60 transition-all duration-300 group/tech focus-within:outline-none focus-within:ring-2 focus-within:ring-green-400 focus-within:ring-offset-2 focus-within:ring-offset-transparent ${
                isMainCard ? "px-3 py-2 text-sm" : "px-2 py-1 text-xs"
              }`}
              role="listitem"
              tabIndex="0"
              aria-label={`Tecnología: ${tech}`}
            >
              <span className="relative z-10">{tech}</span>
              <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
            </span>
          ))}
        </div>

        {/* Links con efectos futuristas */}
        <div className={`flex mt-auto ${isMainCard ? "gap-4" : "gap-3"}`} role="group" aria-label="Enlaces del proyecto">
          <a
            href={project.github}
            className={`relative flex items-center bg-white/10 backdrop-blur-xl border border-green-400/30 text-white font-medium hover:bg-white/20 transition-all duration-300 group/link overflow-hidden flex-1 justify-center focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent ${
              isMainCard ? "gap-3 px-6 py-3" : "gap-2 px-3 py-2"
            }`}
            aria-label={`Ver código fuente del proyecto ${project.title} en GitHub`}
          >
            <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
            <Github size={isMainCard ? 20 : 16} className="relative z-10" aria-hidden="true" />
            <span className="relative z-10">{t.code}</span>
          </a>
          <a
            href={project.live}
            className={`relative flex items-center bg-green-600 hover:bg-green-700 text-white font-medium hover:shadow-green-500/25 transition-all duration-300 group/link overflow-hidden flex-1 justify-center focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent ${
              isMainCard ? "gap-3 px-6 py-3" : "gap-2 px-3 py-2"
            }`}
            aria-label={`Ver demo en vivo del proyecto ${project.title}`}
          >
            <ExternalLink
              size={isMainCard ? 20 : 16}
              className="relative z-10"
              aria-hidden="true"
            />
            <span className="relative z-10">{t.demo}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
