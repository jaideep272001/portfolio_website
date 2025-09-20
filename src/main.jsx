import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UnderDevelopment from './Components/UnderDevelopment.jsx'
import App from './App.jsx'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

createRoot(document.getElementById('root')).render(
   <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<App />}
                    />
                    <Route
                        path="/under-development"
                        element={<UnderDevelopment />}
                    />
                </Routes>
            </BrowserRouter>
        </>
)
