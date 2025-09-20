import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProductPage from "./pages/ProductPage";
import Items from "./pages/Items";
import Certificates from "./pages/OurCertificates";
import React from "react";
import DivisionsContent from "./pages/DivisionsContent";

import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="min-h-screen font-poppins font-light not-italic bg-white ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/OurCertificates" element={<Certificates />} />
        <Route path="/Items" element={<Items />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/DivisionsContent" element={<DivisionsContent />} />
      </Routes>
    </div>
  );
}

export default App;
