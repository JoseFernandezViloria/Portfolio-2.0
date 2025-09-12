import { useState } from "react";
import { Code, Globe } from "lucide-react";

const Header = ({ openAboutSidebar, toggleLanguage, language }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20" role="banner">
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-8 py-4" role="navigation" aria-label="Navegación principal">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 flex items-center justify-center shadow-lg" role="img" aria-label="Logo de José - Desarrollador">
            <Code size={20} className="text-white" aria-hidden="true" />
          </div>
          <div className="text-xl font-bold tracking-widest text-white">
            JOSE.DEV
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex items-center gap-6" role="menubar">
            <li role="none">
              <button
                onClick={openAboutSidebar}
                className="hover:text-green-300 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1"
                role="menuitem"
                aria-label="Abrir información sobre José"
              >
                Sobre mí
              </button>
            </li>

            <li role="none">
              <a
                href="#projects"
                className="hover:text-green-300 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1"
                role="menuitem"
                aria-label="Ir a la sección de proyectos"
              >
                Proyectos
              </a>
            </li>
          </ul>

          {/* Language Switch */}
          <button
            onClick={toggleLanguage}
            className="relative flex items-center gap-2 px-3 py-1 bg-green-500/20 backdrop-blur-xl border border-green-400/30 text-white text-sm font-medium hover:bg-white/20 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent rounded"
            aria-label={`Cambiar idioma. Idioma actual: ${language === 'es' ? 'Español' : 'English'}`}
            aria-pressed={false}
          >
            <Globe
              size={16}
              className="group-hover:rotate-180 transition-transform duration-300"
              aria-hidden="true"
            />
            <span className="font-mono" aria-hidden="true">{language.toUpperCase()}</span>
          </button>

          <a
            href="#contact"
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent rounded"
            aria-label="Ir a la sección de contacto"
          >
            Contacto
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Language Switch for Mobile */}
          <button
            onClick={toggleLanguage}
            className="relative flex items-center gap-1 px-2 py-1 bg-green-500/20 backdrop-blur-xl border border-green-400/30 text-white text-xs font-medium hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent rounded"
            aria-label={`Cambiar idioma. Idioma actual: ${language === 'es' ? 'Español' : 'English'}`}
          >
            <Globe size={14} aria-hidden="true" />
            <span className="font-mono" aria-hidden="true">{language.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent rounded"
            aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20"
          role="menu"
          aria-label="Menú de navegación móvil"
        >
          <div className="px-4 py-4 space-y-4">
            <button
              onClick={openAboutSidebar}
              className="block w-full text-left hover:text-green-300 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1"
              role="menuitem"
              aria-label="Abrir información sobre José"
            >
              Sobre mí
            </button>
            <a
              href="#projects"
              className="block w-full text-left hover:text-green-300 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1"
              role="menuitem"
              aria-label="Ir a la sección de proyectos"
            >
              Proyectos
            </a>
            <a
              href="#contact"
              className="block w-full text-left hover:text-green-300 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1"
              role="menuitem"
              aria-label="Ir a la sección de contacto"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
