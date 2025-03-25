import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.scss";
import App from "./App.jsx";
import HeaderPage from "./Pages/HeaderPages/HeadPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Orders } from "./components/Orders.jsx";
import Head from "./components/header/Ahead.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Head/>
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/HeaderPage" element={<HeaderPage />} />
        <Route path="/Menu" element={<App />} />
        <Route path="/Orders" element={<Orders />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
