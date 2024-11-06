import { createContext, useContext, useState } from "react";
import en from "../components/translate/en.json";
import tr from "../components/translate/tr.json";

const translations = {
  en,
  tr,
};

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

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
