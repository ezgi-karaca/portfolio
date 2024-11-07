import React from 'react';
import { useTranslation } from '../contexts/TranslateContext';

const LanguageSwitcher = () => {
  const { lang, setLanguage } = useTranslation();
  const changeLanguage = () => {
    const newLanguage = lang === 'en' ? 'tr' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={changeLanguage}
        className="bg-gray-200 border-2 border-gray-300 px-3 py-2 rounded-full flex justify-center items-center transition-colors duration-300 hover:bg-gray-300 text-xs" 
      >
        {lang === 'en' ? '🇹🇷' : '🇬🇧'}
      </button>
      <span className="text-gray-800 text-xs font-medium">
      {lang === 'en' ? (
          <span className="text-purple-300">
            <span className="text-purple-600">TÜRKÇE</span>’YE GEÇ
          </span>
        ) : (
          <span className="text-purple-400">
            <span className="text-purple-600">SWITCH TO</span> ENGLISH
          </span>
        )}
      </span>
    </div>
  );
};

export default LanguageSwitcher;
