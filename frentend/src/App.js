import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Signin from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import List from "./components/MainContent/List.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <NavBar />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<List />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
