import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.scss";
import App from "./App.jsx";
import HeaderPage from "./components/HeaderPages/HeadPage.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
    <Routes>
         <Route path="/" element={<App />} />
         <Route path="/HeaderPage" element={<HeaderPage />} />
        
      </Routes>
       
    </Router>
   
  </StrictMode>
);
