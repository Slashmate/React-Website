import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; 
import './index.css'
import CursorTracker from './components/CursorTracker';
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CursorTracker />
    <App />
    </BrowserRouter>
  </StrictMode>,
)
