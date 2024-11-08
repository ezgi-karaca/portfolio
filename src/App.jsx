import { useContext } from 'react';
import './index.css';
import Footer from './pages/Footer.jsx';
import Header from './pages/Header';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import { DarkModeContext } from './contexts/DarkModeContext.jsx';



function App() {
  const {darkMode} = useContext(DarkModeContext);

  
  return (
    <div className={`${
      darkMode ? "dark bg-[#252128] text-[#AEBCCF] " : "bg-white text-black"
    }  mx-auto min-h-screen`}>
      <Header/>
      <div className="mt-32 lg:mt-0">
      <Main darkMode={darkMode}/>
      </div>
      <Skills darkMode={darkMode}/>
      <hr className='border-t-[0.5px] w-9/12 mx-auto mb-2'/>
      <Profile/>
      <hr className='border-t-[0.5px] w-9/12 mx-auto mb-2 mt-4'/>
      <Projects darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  )
}

export default App
