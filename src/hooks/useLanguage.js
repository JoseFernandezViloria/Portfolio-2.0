import { useState } from "react";
import { translations } from "../data/translations.js";

export const useLanguage = () => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const t = translations[language];

  return {
    language,
    toggleLanguage,
    t,
  };
};
