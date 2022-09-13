import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import LandingPage from "./pages/LandingPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/join' element={<JoinPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
