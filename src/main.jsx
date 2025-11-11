import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import '@fontsource/poppins/400.css'; // regular
import '@fontsource/poppins/700.css'; // bold
import '@fontsource/montserrat/400.css'; // regular
import '@fontsource/montserrat/500.css'; // medium (optional)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
