import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Body from "./Components/resume/Body";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cv" element={<Body />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
