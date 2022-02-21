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


export default class Nav extends React.Component {
  render(){
      return(
    <>
      <Header />
      <Secao1 />
      <ATradicao />
      <Covens/>
     <RingExterno/>
     <Eventos/>
     <Consultas/>
      <Footer/>
      </>
      );
    }
}
