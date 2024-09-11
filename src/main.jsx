import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //Removed strict mode to rid of rendering issues in developer mode.
    <App />
)
