import { useState } from "react";
import Lightswitch from "../components/Lightswitch";
import { useTranslation } from "../contexts/TranslateContext";
import { Link } from "react-scroll";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Header = () => {
  const { translate } = useTranslation();

  return (
    <header className="sm:top-0 sm:z-10 px-4 md:px-10 lg:px-44 h-[12vh] p-4 dark:bg-gray-900 lg:static">
      <div className="flex justify-end items-center gap-3">
        <div className="flex items-center gap-3">
          <Lightswitch />
          <LanguageSwitcher />
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="flex items-center justify-center w-10 h-10 bg-[#EEEBFF] text-[#7B61FF] font-bold rounded-full">
          <span className="transform rotate-12">E</span>
        </div>
        <div className="flex sm:flex-row gap-6 sm:ml-6 md:justify-end mt-4 sm:space-x-6">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-purple-500 dark:text-white cursor-pointer"
          >
            {translate("skills")}
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-purple-500 dark:text-white cursor-pointer"
          >
            {translate("projects")}
          </Link>
          <Link
            to="footer"
            smooth={true}
            duration={500}
            className="text-purple-500 dark:text-white cursor-pointer"
          >
            {translate("hireMe")}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
