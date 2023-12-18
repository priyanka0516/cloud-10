import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Resource from "./pages/Resource";
import Contact from "./pages/Contact";
import { motion, AnimatePresence } from "framer-motion";
import Cloud10Loyalty from "./components/Cloud10loyalty";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/resource" element={<Resource />} /> */}
        <Route path="/contact" element={<Contact />} />
         <Route path="/cloud10loyalty" element={<Cloud10Loyalty />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
