import React from "react";
import { Github, Linkedin } from "lucide-react";
import { ProfileImg } from "../assets/images";

const Hero = ({ openAboutSidebar, t, language, skills }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Lado izquierdo - Contenido */}
          <div className="text-center lg:text-left space-y-8">
            {/* Título principal */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white">
                  {t.greeting.split(",")[0]}, soy{" "}
                </span>
                <span className="text-green-400">Jose</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green-300">
                {t.role}
              </h2>
            </div>

            {/* Descripción */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {language === "es" ? (
                <>
                  Creo experiencias web{" "}
                  <span className="text-green-300 font-semibold">
                    {t.interactive}
                  </span>{" "}
                  y{" "}
                  <span className="text-green-400 font-semibold">
                    {t.modern}
                  </span>{" "}
                  que combinan{" "}
                  <span className="text-emerald-300 font-semibold">
                    {t.design}
                  </span>{" "}
                  y{" "}
                  <span className="text-green-300 font-semibold">
                    {t.functionality}
                  </span>
                </>
              ) : (
                <>
                  I create{" "}
                  <span className="text-green-300 font-semibold">
                    {t.interactive}
                  </span>{" "}
                  and{" "}
                  <span className="text-green-400 font-semibold">
                    {t.modern}
                  </span>{" "}
                  web experiences that combine{" "}
                  <span className="text-emerald-300 font-semibold">
                    {t.design}
                  </span>{" "}
                  and{" "}
                  <span className="text-green-300 font-semibold">
                    {t.functionality}
                  </span>
                </>
              )}
            </p>

            {/* Redes sociales */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:text-green-300 hover:bg-white/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Github size={20} className="relative z-10" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:text-green-300 hover:bg-white/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Linkedin size={20} className="relative z-10" />
              </a>
            </div>

            {/* Botón de descargar CV */}
            <div className="flex justify-center lg:justify-start">
              <button className="group relative px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold hover:shadow-green-500/25 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">{t.downloadCV}</span>
              </button>
            </div>
          </div>

          {/* Lado derecho - Foto circular con efectos dinámicos */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Marco circular con efectos dinámicos */}
            <div className="relative group">
              {/* Contenedor de la foto clickeable */}
              <button
                onClick={openAboutSidebar}
                className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-white/10 backdrop-blur-xl border-4 border-white/20 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group flex items-center justify-center"
              >
                {/* Foto centrada */}
                <img
                  src={ProfileImg}
                  alt="Jose - Desarrollador React.js"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ objectPosition: "center 20%" }}
                />

                {/* Overlay con texto indicativo */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <div className="text-xl sm:text-2xl mb-2">👋</div>
                    <div className="text-xs sm:text-sm font-medium">
                      Haz clic para saber más de mí
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Skills integradas en el Hero */}
        <div className="mt-16 sm:mt-20">
          <div className="bg-white/5 backdrop-blur-xl border border-green-400/20 p-6 sm:p-8 shadow-xl shadow-green-500/10">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/10 border border-green-400/30 px-6 py-4 flex items-center gap-3 w-16 h-16 lg:w-32 lg:h-16 justify-center shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105"
                >
                  {/* Icono pequeño */}
                  <div className="text-xl sm:text-2xl text-white">
                    <skill.icon />
                  </div>

                  {/* Nombre de la habilidad - solo visible en pantallas grandes */}
                  <span className="hidden lg:block text-sm font-medium text-white">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
