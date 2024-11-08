import { createRoot } from 'react-dom/client' 
import './index.css'
import App from './App.jsx'
import { DarkModeProvider } from './contexts/DarkModeContext.jsx'
import { TranslationProvider } from './contexts/TranslateContext.jsx'

createRoot(document.getElementById('root')).render(
  <TranslationProvider>
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
  </TranslationProvider>
)
