import React, { useState } from "react";

const AboutModal = ({ isOpen, onClose, t }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      title: t.aboutMe,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">{t.aboutMeDesc}</p>
          <p className="text-gray-300 leading-relaxed">{t.aboutMeDesc2}</p>
        </div>
      ),
    },
    {
      title: t.experience,
      content: (
        <div className="space-y-6">
          <div className="border-l-2 border-green-400 pl-4">
            <h4 className="text-green-300 font-semibold">{t.seniorFrontend}</h4>
            <p className="text-gray-400 text-sm">{t.techCorp}</p>
            <p className="text-gray-300 text-sm mt-2">{t.seniorDesc}</p>
          </div>
          <div className="border-l-2 border-green-400 pl-4">
            <h4 className="text-green-300 font-semibold">{t.frontendDev}</h4>
            <p className="text-gray-400 text-sm">{t.webStudio}</p>
            <p className="text-gray-300 text-sm mt-2">{t.frontendDesc}</p>
          </div>
        </div>
      ),
    },
    {
      title: t.education,
      content: (
        <div className="space-y-6">
          <div className="border-l-2 border-green-400 pl-4">
            <h4 className="text-green-300 font-semibold">
              {t.systemsEngineering}
            </h4>
            <p className="text-gray-400 text-sm">{t.university}</p>
            <p className="text-gray-300 text-sm mt-2">{t.engineeringDesc}</p>
          </div>
          <div className="border-l-2 border-green-400 pl-4">
            <h4 className="text-green-300 font-semibold">{t.reactCert}</h4>
            <p className="text-gray-400 text-sm">{t.meta}</p>
            <p className="text-gray-300 text-sm mt-2">{t.reactCertDesc}</p>
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
      {/* Overlay de fondo difuminado */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`bg-slate-800/95 backdrop-blur-xl border border-green-500/30 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden transition-all duration-300 ${
            isOpen ? "scale-100" : "scale-95"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header del modal */}
          <div className="flex items-center justify-between p-6 border-b border-green-500/30">
            <h2 className="text-2xl font-bold text-green-400">Acerca de mí</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 transition-colors duration-200 text-white hover:text-green-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Contenido del modal */}
          <div className="p-6">
            {/* Tarjeta actual */}
            <div className="bg-slate-700/50 backdrop-blur-sm border border-green-400/30 p-6 min-h-[300px]">
              <h3 className="text-white font-bold text-xl mb-6">
                {cards[currentCard].title}
              </h3>
              {cards[currentCard].content}
            </div>

            {/* Navegación */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevCard}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-300"
              >
                {t.previous}
              </button>

              {/* Indicadores */}
              <div className="flex gap-2">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCard(index)}
                    className={`w-3 h-3 transition-all duration-300 ${
                      index === currentCard
                        ? "bg-green-400 scale-125"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextCard}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-300"
              >
                {t.next}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutModal;
