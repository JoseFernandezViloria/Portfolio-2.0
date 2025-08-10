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

// Error Boundary Component
class ErrorBoundaryClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-red-900 text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Error en la aplicación</h1>
            <p className="mb-4">
              Ha ocurrido un error al cargar la aplicación.
            </p>
            <pre className="text-sm bg-red-800 p-4 rounded overflow-auto max-w-md">
              {this.state.error?.toString()}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const openAboutSidebar = () => setIsAboutOpen(true);
  const closeAboutSidebar = () => setIsAboutOpen(false);

  return (
    <ErrorBoundaryClass>
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white font-sans min-h-screen antialiased relative">
        <Suspense fallback={<div className="text-white">Cargando...</div>}>
          <Header
            openAboutSidebar={openAboutSidebar}
            toggleLanguage={toggleLanguage}
            language={language}
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
    </ErrorBoundaryClass>
  );
}

export default App;
