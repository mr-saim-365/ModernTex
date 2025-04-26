import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";

function App() {
  return (
    <div className="min-h-screen font-poppins font-light not-italic bg-white ">
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
