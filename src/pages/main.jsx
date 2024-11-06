import React from 'react'
import ezgi from '../assets/ezgi.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from '../contexts/TranslateContext';

const Main = ({ darkMode }) => {
  const{translate} = useTranslation();
  return (
    <div className='flex items-center justify-around h-[80vh] space-x-8'> 
      <div className='flex flex-col space-y-6'>
        <div className='flex items-center space-x-2'>
          <div className="w-20 h-px bg-purple-500"></div>
          <h6 className='text-purple-500'>Ezgi Karaca</h6>
        </div>
        <h1 className='text-6xl font-semibold flex flex-col space-y-2'>
          <span>{translate('headFirst')}</span>
          <span>{translate('headSecond')}</span>
        </h1>
        <p className='text-lg max-w-lg'>{translate('hero')}</p>
        <div className='flex space-x-4'>
          <button className={`px-6 py-2 ${darkMode ? "bg-[#383838] text-purple-500 border-2 border-purple-500 hover:bg-purple-500 hover:text-white" : "bg-white border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"} rounded-lg transition`}>{translate('hireMe')}</button>
          <button className={`px-6 py-2 ${darkMode ? "bg-[#383838] text-purple-500 border-2 border-purple-500 hover:bg-purple-500 hover:text-white" : "bg-white border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"} rounded-lg transition `}><FontAwesomeIcon icon={faGithub} className="mr-2" />Github</button>
          <button className={`px-6 py-2 ${darkMode ? "bg-[#383838] text-purple-500 border-2 border-purple-500 hover:bg-purple-500 hover:text-white" : "bg-white border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"} rounded-lg transition`}><FontAwesomeIcon icon={faLinkedin} className="mr-2" />LinkedIn</button>
        </div>
      </div>
      <img className="w-1/3 rounded-lg mt-10" src={ezgi}/>
    </div>
  )
}

export default Main;