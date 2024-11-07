import React, {createContext, useEffect, useState} from "react";

const DarkModeContext = createContext();

function DarkModeProvider ({children}) {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div>
      <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
        {children}
      </DarkModeContext.Provider>
    </div>
  )
}
export {DarkModeContext, DarkModeProvider};