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
    }  mx-auto px-32 py-8`}>
      <Header/>
      <Main darkMode={darkMode}/>
      <Skills/>
      <Profile/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
