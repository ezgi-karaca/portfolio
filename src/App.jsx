import { useContext } from 'react';
import { DarkModeContext } from './contexts/DarkModeContext';
import Header from './pages/Header';
import Intro from './pages/Intro'
import Skills from './pages/Skills';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Footer from './pages/Footer';
import './index.css';

function App() {
  const {darkMode} = useContext(DarkModeContext);

  
  return (
    <div className={`${
      darkMode ? "dark bg-[#252128] text-[#AEBCCF] " : "bg-white text-black"
    }  mx-auto min-h-screen`}>
      <Header/>
      <div className="mt-32 lg:mt-0">
      <Intro/>
      </div>
      <Skills />
      <hr className='border-t-[0.5px] w-9/12 mx-auto mb-2'/>
      <Profile />
      <hr className='border-t-[0.5px] w-9/12 mx-auto mb-2 mt-4'/>
      <Projects />
      <Footer />
    </div>
  )
}

export default App
