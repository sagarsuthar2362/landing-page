import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from './components/Contact'
import Services from './components/Services'
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/contact' element={ <Contact/>} />
          <Route path='/services' element={ <Services/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
