import { createContext, useContext, useEffect, useState } from "react";
import en from "../components/translate/en.json";
import tr from "../components/translate/tr.json";

const translations = {
  en,
  tr,
};

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem("lang");
    return savedLang ? savedLang : "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const setLanguage = (language) => {
    setLang(language);
  };

  const translate = (key) => {
    return translations[lang][key] || key;
  };

  const value = { lang, setLanguage, translate };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  return useContext(TranslationContext);
};
