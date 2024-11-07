import { useState } from "react";
import Lightswitch from "../components/Lightswitch"
import { useTranslation } from "../contexts/TranslateContext";
import { Link } from "react-scroll";


const Header = () => {
  const {translate, setLanguage} =  useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setLanguage(language);
  }
  return (
    <header className="px-44 h-[12vh] p-4 dark:bg-gray-900">
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
          
          <Link
            to="skills" // Burada hedef olarak "skills" id'sini kullanıyoruz
            smooth={true} // Kaydırma animasyonunu etkinleştiriyoruz
            duration={500} // Kaydırma süresi (milisaniye)
            className="text-purple-500 dark:text-white cursor-pointer"
          >{translate('skills')}
          </Link>
          <Link
            to="projects" // Burada hedef olarak "skills" id'sini kullanıyoruz
            smooth={true} // Kaydırma animasyonunu etkinleştiriyoruz
            duration={500} // Kaydırma süresi (milisaniye)
            className="text-purple-500 dark:text-white cursor-pointer"
          >{translate('projects')}
          </Link>
          <Link
            to="footer" // Burada hedef olarak "skills" id'sini kullanıyoruz
            smooth={true} // Kaydırma animasyonunu etkinleştiriyoruz
            duration={500} // Kaydırma süresi (milisaniye)
            className="text-purple-500 dark:text-white cursor-pointer"
          >{translate('hireMe')}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
