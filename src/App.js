import React from 'react';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import './App.css';
import Secao1 from './Components/Secao1';
import ATradicao from './Components/ATradicao';
import Covens from './Components/Covens';
import RingExterno from './Components/RingExterno';
import Eventos from './Components/Eventos';
import Consultas from './Components/Consultas';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Secao1 />
      <ATradicao id="Atradicao"/>
      <Covens id="Covens"/>
      <RingExterno id="RingExterno"/>
      <Eventos id="Eventos"/>
      <Consultas id="Consultas"/>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
