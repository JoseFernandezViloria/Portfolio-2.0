import "./App.css";
import React, { useState, Suspense } from "react";

// Hooks
import { useLanguage } from "./hooks/useLanguage";

// Data
import { skills } from "./data/skills";
import { projects } from "./data/projects";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AboutModal from "./components/AboutModal";

function App() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const openAboutSidebar = () => setIsAboutOpen(true);
  const closeAboutSidebar = () => setIsAboutOpen(false);

  return (
    <div className="textured-gradient-bg text-white font-space-grotesk min-h-screen antialiased relative">
      {/* Enlaces de salto para accesibilidad */}
      <div className="sr-only focus-within:not-sr-only">
        <a
          href="#hero"
          className="absolute top-4 left-4 z-50 bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Saltar al contenido principal
        </a>
        <a
          href="#projects"
          className="absolute top-16 left-4 z-50 bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Saltar a proyectos
        </a>
        <a
          href="#contact"
          className="absolute top-28 left-4 z-50 bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Saltar a contacto
        </a>
      </div>

      <Suspense fallback={<div className="text-white">Cargando...</div>}>
        <Header
          openAboutSidebar={openAboutSidebar}
          toggleLanguage={toggleLanguage}
          language={language}
          t={t}
        />
        <main className="relative z-10 py-2">
          <Hero
            openAboutSidebar={openAboutSidebar}
            t={t}
            language={language}
            skills={skills}
          />
          <Projects projects={projects} t={t} />
        </main>
        <Footer t={t} />
        <AboutModal isOpen={isAboutOpen} onClose={closeAboutSidebar} t={t} />
      </Suspense>
    </div>
  );
}

export default App;
