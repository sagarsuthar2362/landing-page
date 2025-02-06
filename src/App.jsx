import React from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from './components/Contact'
import Services from './components/Services'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/contact' element={ <Contact/>} />
          <Route path='/services' element={ <Services/>} />
        </Routes>
      <Footer/>
    </div>
  );
};

export default App;
