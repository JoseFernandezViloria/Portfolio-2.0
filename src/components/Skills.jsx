import React from "react";

const Skills = ({ skills }) => (
  <section id="skills" className="py-8 sm:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Grilla 3x3 para móvil y diseño horizontal para desktop */}
      <div className="grid grid-cols-3 gap-3 sm:hidden">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm border border-green-400/30 p-3 flex flex-col items-center justify-center text-center hover:bg-white/20 transition-all duration-150 hover:scale-105 shadow-lg shadow-green-500/20 hover:shadow-green-500/40"
          >
            {/* Icono */}
            <div className="text-2xl mb-2 text-white">{skill.icon}</div>

            {/* Nombre de la habilidad */}
            <span className="text-xs font-medium text-white text-center leading-tight">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* Diseño horizontal para desktop */}
      <div className="hidden sm:block bg-white/5 backdrop-blur-sm border border-green-400/20 p-6 sm:p-8 shadow-xl shadow-green-500/10">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm border border-green-400/30 px-4 py-3 hover:bg-white/20 transition-all duration-150 hover:scale-105 flex items-center gap-3 shadow-lg shadow-green-500/20 hover:shadow-green-500/40"
            >
              {/* Icono pequeño */}
              <div className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-150 text-white">
                {skill.icon}
              </div>

              {/* Nombre de la habilidad */}
              <span className="text-sm sm:text-base font-medium text-white group-hover:text-green-300 transition-colors duration-150">
                {skill.name}
              </span>

              {/* Línea decorativa en hover */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-150"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
