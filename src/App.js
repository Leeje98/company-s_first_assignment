import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import JoinPage from "./components/JoinPage";
import LoginPage from "./components/LoginPage";
import MainPage from './components/MainPage';

import Test from './components/Test';

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
      {/* <Test /> */}
    </>
  );
}

export default App;


