import React, { useState } from "react";
import { Code, Globe } from "lucide-react";

const Header = ({ openAboutSidebar, toggleLanguage, language }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg">
            <Code size={20} className="text-white" />
          </div>
          <div className="text-xl font-bold tracking-widest bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            JOSE.DEV
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-6">
            <button
              onClick={openAboutSidebar}
              className="hover:text-blue-300 transition-colors cursor-pointer"
            >
              Sobre mí
            </button>

            <a
              href="#projects"
              className="hover:text-blue-300 transition-colors"
            >
              Proyectos
            </a>
          </div>

          {/* Language Switch */}
          <button
            onClick={toggleLanguage}
            className="relative flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-500/20 to-yellow-500/20 backdrop-blur-xl border border-blue-400/30 rounded-lg text-white text-sm font-medium hover:bg-white/20 transition-all duration-300 group"
          >
            <Globe
              size={16}
              className="group-hover:rotate-180 transition-transform duration-300"
            />
            <span className="font-mono">{language.toUpperCase()}</span>
          </button>

          <a
            href="#contact"
            className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 ease-in-out"
          >
            Contacto
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Language Switch for Mobile */}
          <button
            onClick={toggleLanguage}
            className="relative flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-500/20 to-yellow-500/20 backdrop-blur-xl border border-blue-400/30 rounded-lg text-white text-xs font-medium hover:bg-white/20 transition-all duration-300"
          >
            <Globe size={14} />
            <span className="font-mono">{language.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 transition-all duration-300 ${
          isMobileMenuOpen
            ? "max-h-64 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <button
            onClick={() => {
              openAboutSidebar();
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left hover:text-blue-300 transition-colors cursor-pointer py-2"
          >
            Sobre mí
          </button>

          <a
            href="#projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-left hover:text-blue-300 transition-colors py-2"
          >
            Proyectos
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-left hover:text-blue-300 transition-colors py-2"
          >
            Contacto
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
