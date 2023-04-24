import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import BannersContainer from "./components/BannersContainer";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comprar from "./components/Pages/Comprar/Comprar";
import Casa from "./components/Pages/Casa/Casa";
import Roupas from "./components/Pages/Roupas/Roupas";
import Acessorios from "./components/Pages/Acessorios/Acessorios";






const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<BannersContainer />} />
        <Route path="/roupas" element={<Roupas />} />
        <Route path="/acessorios" element={<Acessorios />} />
        <Route path="/casa" element={<Casa />} />
        <Route path="/comprar" element={<Comprar />}/>
        <Route />
      </Routes>
      <ScrollToTop />
      <Footer />
    </BrowserRouter>
      
    
    
  );
};

export default App;
