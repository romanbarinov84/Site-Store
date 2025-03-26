import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.scss";
import App from "./App.jsx";
import HeaderPage from "./Pages/HeaderPages/HeadPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Orders } from "./components/Orders.jsx";
import Head from "./components/header/Ahead.jsx";
import { AbtUs } from "./Pages/About us/AbtUs.jsx";
import { Delivery } from "./Pages/delivery/Delivery.jsx";
import { Contacts } from "./Pages/Contacts/Contacts.jsx";
import { MapStore } from "./Pages/MapStore/Map.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Head/>
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/HeaderPage" element={<HeaderPage />} />
        <Route path="/Menu" element={<App />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/AbtUs"  element={<AbtUs/>}/>
        <Route path="/Delivery"  element={<Delivery/>}/>
        <Route path="/Contacts"  element={<Contacts/>}/>
        <Route path="/Map"  element={<MapStore/>}/>

      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
