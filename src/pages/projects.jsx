import React from "react";
import { useTranslation } from "../contexts/TranslateContext";
import pizza from '../assets/pizza.jpg'
import portfolio from '../assets/portfolio.jpg'


const projects = [
  {
    id: 1,
    name: 'first_project_name',
    description: "project_description_one",
    image: `${pizza}`, 
    technologies: ["React", "Node.js", "CSS", "Figma"],
    github: "https://github.com/ezgi-karaca/pizza-react",
    vercel: "https://ecommerce-app.vercel.app"
  },
  {
    id: 2,
    name: "second_project_name",
    description: "project_description_two",
    image: `${portfolio}`, 
    technologies: ["React", "Node.js", "Tailwind CSS", "Figma"],
    github: "https://github.com/ezgi-karaca/portfolio",
    vercel: "https://portfolio-website.vercel.app"
  }
];


const ProjectCard = ({ project, darkMode }) => {
  const { translate } = useTranslation();
  return (
    <div id='projects' className="w-full sm:w-80 md:w-96 flex flex-col mx-2">
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
      <div className="p-6 sm:p-6 flex flex-col">
        <div>
          <h3 className="text-xl font-medium text-purple-500 mb-4">{translate(project.name)}</h3>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-400'}`}>{translate(project.description)}</p>
          
          <div className="flex flex-wrap mt-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className= {`text-xs rounded-full px-3 py-1 mr-2 mt-2 ${darkMode ? "bg-gray-200 text-gray-200" : "bg-gray-400 text-black"}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={`px-4 py-1 ${darkMode ? "bg-[#383838] text-purple-500 border-2 border-purple-500 hover:bg-purple-500 hover:text-white" : " border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"} rounded-lg transition`}>
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
      <h2 className={`text-4xl font-medium text-center items-start mb-8  ${darkMode ? 'text-purple-500' : 'text-black'}`}>{translate('projects')}</h2>
      <div className="flex justify-around overflow-x-auto py-4 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-purple-500 flex-wrap sm:flex-nowrap gap-4 sm:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
