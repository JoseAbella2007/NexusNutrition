import "../css/variables.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '../css/index.css'
import App from './App.jsx'
import ScrollAlInicio from './ScrollAlInicio.jsx'
import { ProveedorAutenticacion } from './ContextoAutenticacion.jsx'
import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollAlInicio />
      <ProveedorAutenticacion>
        <App />
      </ProveedorAutenticacion>
    </BrowserRouter>
  </StrictMode>,
)