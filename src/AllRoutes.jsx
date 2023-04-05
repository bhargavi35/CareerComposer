import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Resume from "./Components/Resume";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cv" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
