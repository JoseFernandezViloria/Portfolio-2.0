import React, { useState } from "react";
import {
  User,
  Briefcase,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const AboutModal = ({ isOpen, onClose, t }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      title: t.aboutMe,
      icon: User,
      content: (
        <div className="space-y-8">
          <div className="relative group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-emerald-400"></div>
            <div className="pl-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-400"></div>
                <h4 className="text-green-300 font-bold text-lg">
                  Desarrollador Frontend
                </h4>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {t.aboutMeDesc}
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-green-400"></div>
            <div className="pl-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-emerald-400"></div>
                <h4 className="text-emerald-300 font-bold text-lg">
                  Enfoque Profesional
                </h4>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {t.aboutMeDesc2}
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: t.experience,
      icon: Briefcase,
      content: (
        <div className="space-y-8">
          <div className="relative group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full"></div>
            <div className="pl-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-400"></div>
                <h4 className="text-green-300 font-bold text-lg">
                  {t.seniorFrontend}
                </h4>
              </div>
              <p className="text-green-400 font-medium text-sm mb-3">
                {t.techCorp}
              </p>
              <p className="text-gray-300 leading-relaxed">{t.seniorDesc}</p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-green-400 rounded-full"></div>
            <div className="pl-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-emerald-400"></div>
                <h4 className="text-emerald-300 font-bold text-lg">
                  {t.frontendDev}
                </h4>
              </div>
              <p className="text-emerald-400 font-medium text-sm mb-3">
                {t.webStudio}
              </p>
              <p className="text-gray-300 leading-relaxed">{t.frontendDesc}</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: t.education,
      icon: GraduationCap,
      content: (
        <div className="space-y-8">
          <div className="relative group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full"></div>
            <div className="pl-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-400"></div>
                <h4 className="text-green-300 font-bold text-lg">
                  {t.systemsEngineering}
                </h4>
              </div>
              <p className="text-green-400 font-medium text-sm mb-3">
                {t.university}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t.engineeringDesc}
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-green-400 rounded-full"></div>
            <div className="pl-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-emerald-400"></div>
                <h4 className="text-emerald-300 font-bold text-lg">
                  {t.reactCert}
                </h4>
              </div>
              <p className="text-emerald-400 font-medium text-sm mb-3">
                {t.meta}
              </p>
              <p className="text-gray-300 leading-relaxed">{t.reactCertDesc}</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <>
      {/* Overlay de fondo difuminado con efecto de partículas */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-md z-40 transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      >
        {/* Efecto de partículas de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-green-300/20 rounded-full animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-2xl border border-green-400/30 shadow-2xl shadow-green-500/20 max-w-4xl w-full max-h-[95vh] flex flex-col transition-all duration-500 ${
            isOpen ? "scale-100 rotate-0" : "scale-95 rotate-1"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header del modal con gradiente */}
          <div className="relative bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 border-b border-green-400/30 p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-emerald-400/5"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-400 shadow-lg">
                  {React.createElement(cards[currentCard].icon, {
                    size: 24,
                    className: "text-white",
                  })}
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    {cards[currentCard].title}
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300 text-sm font-medium">
                      Información personal
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-3 hover:bg-white/10 transition-all duration-300 text-white hover:text-green-300 group"
              >
                <X
                  size={24}
                  className="group-hover:rotate-90 transition-transform duration-300"
                />
              </button>
            </div>
          </div>

          {/* Contenido del modal con scroll */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 sm:p-8">
              {/* Tarjeta actual con diseño mejorado */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-green-400/20 p-4 sm:p-8 min-h-[300px] sm:min-h-[400px] shadow-xl">
                {/* Efectos de fondo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/5 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-400/5 to-transparent rounded-full blur-xl"></div>

                <div className="relative z-10">{cards[currentCard].content}</div>
              </div>

              {/* Navegación mejorada */}
              <div className="flex items-center justify-center mt-6 sm:mt-8">
                {/* Indicadores mejorados */}
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {cards.map((card, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCard(index)}
                      className={`group flex items-center gap-2 px-3 sm:px-4 py-2 transition-all duration-300 ${
                        index === currentCard
                          ? "bg-gradient-to-r from-green-400 to-emerald-400 text-white shadow-lg scale-105"
                          : "bg-slate-700/50 text-gray-400 hover:bg-slate-600/50 hover:text-white"
                      }`}
                    >
                      {React.createElement(card.icon, {
                        size: 16,
                        className: `transition-all duration-300 ${
                          index === currentCard ? "text-white" : "text-current"
                        }`,
                      })}
                      <span className="text-xs sm:text-sm font-medium">{card.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutModal;
