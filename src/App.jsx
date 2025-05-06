import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import React from "react";
import DivisionContent from "./pages/DivisionContent";

function App() {
  return (
    <div className="min-h-screen font-poppins font-light not-italic bg-white ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/DivisionContent" element={<DivisionContent />} />
      </Routes>
    </div>
  );
}

export default App;
