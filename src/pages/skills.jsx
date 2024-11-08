import React, { useContext } from 'react';
import { useTranslation } from '../contexts/TranslateContext';
import skillsData from '../data/skills';
import { DarkModeContext } from '../contexts/DarkModeContext';

const Skills = () => {
  const {darkMode} = useContext(DarkModeContext);
  const { translate } = useTranslation();

  return (
    <section id='skills' className="px-6 sm:px-10 lg:px-44 flex flex-col w-full p-10 mt-8 sm:mt-12 lg:mt-16">
        <h2 className={`text-3xl font-medium text-left items-start px-6 mb-2 ${darkMode ? 'text-gray-400' : 'text-black'}`}>{translate('skills')}</h2>
      <div className="flex overflow-x-auto py-4 gap-10 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-purple-500">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex-none w-80 px-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-normal text-purple-500 mb-4 font-inter">{translate(skill.title)}</h3> 
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{translate(skill.description)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
