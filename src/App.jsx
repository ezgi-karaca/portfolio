import { useContext } from 'react';
import './index.css';
import Footer from './pages/Footer.jsx';
import Header from './pages/Header';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import { DarkModeContext } from './contexts/DarkModeContext.jsx';
import { TranslationProvider } from './contexts/TranslateContext.jsx';



function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <TranslationProvider>
    <div className={`${
      darkMode ? "dark bg-[#252128] text-[#AEBCCF] " : "bg-white text-black"
    }  mx-auto px-32 py-8 transition`}>
      <Header/>
      <Main darkMode={darkMode}/>
      <Skills darkMode={darkMode}/>
      <hr className='border-t-[0.5px] w-11/12 mx-auto'/>
      <Profile/>
      <hr className='border-t-[0.5px] w-11/12 mx-auto'/>
      <Projects darkMode={darkMode}/>
      <Footer/>
    </div>
    </TranslationProvider>
  )
}

export default App
