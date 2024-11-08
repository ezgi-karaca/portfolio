import React, {createContext, useContext, useEffect, useState} from "react";

const DarkModeContext = createContext();

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

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
export {DarkModeContext, DarkModeProvider, useDarkMode};