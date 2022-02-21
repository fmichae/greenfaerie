import React from 'react';
import styles from './Header.module.css';
import { ReactComponent as MTGF } from '../Assets/Frame.svg';

const Header = () => {
  const {menu, setMenu} = React.useState("");

  function mudaBg() {
     setMenu("active");
  }
  return (
    <header onScroll={mudaBg} className={`${styles.header} ${menu}`}>
      <nav className={`${styles.nav} container`}>
      <a className={styles.logo} href="/" aria-label='Green - Faerie - Logo'>
            <MTGF />
        </a>

        <a href="#Secao1">INÍCIO</a>
        <a href="#ATradicao">A TRADIÇÃO</a>
        <a href="#RingExterno">COVENS</a>
        <a href="#Eventos">EVENTOS</a>
        <a href="#Consultas">CONSULTAS</a>

      </nav>
    </header>
  )
}

export default Header