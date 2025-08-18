import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import RecipeContext from './context/RecipesContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
    <RecipeContext>
    <App />
    <ToastContainer autoClose='1000'/>
    </RecipeContext>
    </BrowserRouter>
  // </StrictMode>,
)
