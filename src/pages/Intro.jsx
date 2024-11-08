import React, { useContext } from 'react'
import ezgi from '../assets/ezgi.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from '../contexts/TranslateContext';
import { ToastContainer, toast } from 'react-toastify'; // react-toastify import'ları
import 'react-toastify/dist/ReactToastify.css';
import { DarkModeContext, useDarkMode } from '../contexts/DarkModeContext';

const Main = () => {
  const {darkMode} = useContext(DarkModeContext);
  const{translate} = useTranslation();

  const handleGithubClick = () => {
    toast.success("Redirecting to GitHub...");
  };

  const handleLinkedinClick = () => {
    toast.success("Redirecting to LinkedIn...");
  };

  return (
    <div className='px-4 md:px-10 lg:px-48 flex items-center justify-between h-auto lg:h-[80vh] flex-col lg:flex-row space-y-6 lg:space-y-08'> 
      <div className='flex flex-col space-y-6 text-center lg:text-left'>
        <div className='flex items-center justify-center lg:justify-start space-x-2'>
          <div className="w-20 h-px bg-purple-500"></div>
          <h6 className='text-purple-500'>Ezgi Karaca</h6>
        </div>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold flex flex-col space-y-2'>
          <span>{translate('headFirst')}</span>
          <span>{translate('headSecond')}</span>
        </h1>
        <p className='text-base md:text-lg max-w-lg mx-auto lg:mx-0'>{translate('hero')}</p>
        <div className='flex justify-center lg:justify-start space-x-4'>
          <a href="mailto:w.ezgikaraca@gmail.com" className={`px-6 py-2 ${darkMode ? "bg-[#383838] text-purple-500 border-2 border-purple-500 hover:bg-purple-500 hover:text-white" : "bg-white border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"} rounded-lg transition`}>{translate('hireMe')}</a>
          <a onClick={handleGithubClick} href="https://github.com/ezgi-karaca"
              target="_blank" className={`px-6 py-2 ${darkMode ? "bg-[#383838] text-purple-500 border-2 border-purple-500 hover:bg-purple-500 hover:text-white" : "bg-white border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"} rounded-lg transition `}><FontAwesomeIcon icon={faGithub} className="mr-2" />Github</a>
          <a onClick={handleLinkedinClick} href="https://www.linkedin.com/in/ezgi-karaca"
              target="_blank" className={`px-6 py-2 ${darkMode ? "bg-[#383838] text-purple-500 border-2 border-purple-500 hover:bg-purple-500 hover:text-white" : "bg-white border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"} rounded-lg transition`}><FontAwesomeIcon icon={faLinkedin} className="mr-2" />LinkedIn</a>
        </div>
      </div>
      <img className="w-1/3 lg:w-1/3 rounded-lg mt-10 lg:mt-0 mx-auto lg:mx-0 bg-opacity-100 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300" src={ezgi}/>
      <ToastContainer />
    </div>
  )
}

export default Main;