import { useState } from "react";
import Lightswitch from "../components/Lightswitch"
import { useTranslation } from "../contexts/TranslateContext";


const Header = () => {
  const {translate, setLanguage} =  useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setLanguage(language);
  }
  return (
    <header className="w-full h-[12vh] p-4 dark:bg-gray-900">
      <div className="flex justify-end space-around">
          <div className="flex top-4 right-4">
              <Lightswitch />
            </div>
            <div className="flex items-center">
              <ul>
                <li className={`${selectedLanguage=== 'en' ? 'selected' : ''}`} onClick={() => changeLanguage('en')}> EN</li>
                <li className={`${selectedLanguage=== 'tr' ? 'selected' : ''}`} onClick={() => changeLanguage('tr')}> TR</li>
              </ul>
            </div>
          </div>
      <div className="flex justify-between items-center mt-8">
        <div className="flex items-center justify-center w-10 h-10 bg-[#EEEBFF] text-[#7B61FF] font-bold rounded-full">
          <span className="transform rotate-12">E</span>
        </div>
        <div className="flex justify-end space-x-6">
          <a href="#home" className="text-purple-500 dark:text-white">
            {translate('skills')}
          </a>
          <a href="#about" className="text-purple-500 dark:text-white">
          {translate('projects')}
          </a>
          <a href="#contact" className="text-purple-500 dark:text-white">
          {translate('hireMe')}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
