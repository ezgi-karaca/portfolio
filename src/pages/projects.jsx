import React from "react";
import { useTranslation } from "../contexts/TranslateContext";
import projects from "../data/projects"; 


const ProjectCard = ({ project, darkMode }) => {
  const { translate } = useTranslation();
  return (
    <div id="projects" className="w-full sm:w-80 md:w-96 flex flex-col mx-2 bg-opacity-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
      <div className="p-6 sm:p-6 flex flex-col">
        <div>
          <h3 className="text-xl font-medium text-purple-500 mb-4">{translate(project.name)}</h3>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-400'}`}>{translate(project.description)}</p>

          <div className="flex flex-wrap mt-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className={`text-xs rounded-full px-3 py-1 mr-2 mt-2 ${darkMode ? "bg-gray-200 text-gray-500" : "bg-gray-400 text-gray-700"}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={`px-4 py-1 ${darkMode ? "bg-[#383838] text-purple-500 border-2 border-purple-500 hover:bg-purple-500 hover:text-white" : "border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"} rounded-lg transition`}>
            GitHub
          </a>
          <a href={project.vercel} target="_blank" rel="noopener noreferrer" className={`px-4 py-1 ${darkMode ? "bg-[#383838] text-purple-500 border-2 border-purple-500 hover:bg-purple-500 hover:text-white" : "border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"} rounded-lg transition`}>
            Vercel
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ darkMode }) => {
  const { translate } = useTranslation();

  return (
    <section id="projects" className="py-8 sm:py-16 px-4 sm:px-8 md:px-32">
      <h2 className={`text-4xl font-medium text-center items-start mb-8 ${darkMode ? 'text-purple-500' : 'text-black'}`}>{translate('projects')}</h2>
      <div className="flex justify-around overflow-x-auto py-4 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-purple-500 flex-wrap sm:flex-nowrap gap-4 sm:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} darkMode={darkMode} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
