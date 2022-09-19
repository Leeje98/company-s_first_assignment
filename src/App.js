import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import MainPage from './pages/MainPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/join' element={<JoinPage />} />
          <Route path='/main' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;


