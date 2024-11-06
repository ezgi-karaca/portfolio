import React from 'react';
import { useTranslation } from '../contexts/TranslateContext';


const skillsData = [
  {
    title: 'Java Script', 
    description: 'javascript_description', 
  },
  {
    title: 'React.Js',
    description: 'react_description',
  },
  {
    title: 'Node.Js',
    description: 'nodejs_description',
  },
  {
    title: 'CSS',
    description: 'css_description',
  },
  {
    title: 'HTML',
    description: 'html_description',
  },
  {
    title: 'GitHub',
    description: 'github_description',
  },
  {
    title: 'Figma',
    description: 'figma_description',
  },
];

const Skills = ({ darkMode }) => {
  
  const { translate } = useTranslation();

  return (
    <section className="flex flex-col w-full p-10">
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
