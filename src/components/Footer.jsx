import React, { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = ({ t }) => {
  const [copied, setCopied] = useState(false);
  const email = "jose@example.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar: ", err);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const SocialIcon = ({ Icon, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:text-red-300 hover:bg-white/20 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <Icon size={20} className="relative z-10" />
    </a>
  );

  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center space-y-8">
          {/* Email input con funcionalidad de copiar */}
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              <span className="text-red-400">
                ¿Tienes un proyecto en mente?
              </span>
            </h3>
            <p className="text-gray-300 mb-8">
              ¡Hablemos! Estoy disponible para colaborar en proyectos
              emocionantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                readOnly
                className="flex-1 bg-white text-gray-800 placeholder-gray-500 px-4 py-3 focus:outline-none text-sm sm:text-base border-2 border-transparent focus:border-red-400 transition-colors min-w-0"
                placeholder="Tu email aquí..."
              />
              <button
                onClick={copyToClipboard}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold hover:shadow-red-500/25 transition-all duration-300 flex-shrink-0 w-32 self-center sm:self-auto"
              >
                {copied ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">¡Copiado!</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm">Copiar</span>
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center items-center gap-4">
            <SocialIcon Icon={Github} href="https://github.com" />
            <SocialIcon Icon={Linkedin} href="https://linkedin.com" />
            <SocialIcon Icon={Twitter} href="https://twitter.com" />
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            <p>&copy; 2024 Jose. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
