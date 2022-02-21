import React from 'react';
import styles from './Header.module.css';
import { HashLink as Link } from 'react-router-hash-link'; 
import { ReactComponent as MTGF } from '../Assets/Frame.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
      <Link className={styles.logo} to="/" aria-label='Green - Faerie - Logo'>
            <MTGF />
        </Link>

        <Link to="#Secao1">INÍCIO</Link>
        <Link to="#ATradicao">A TRADIÇÃO</Link>
        <Link to="#RingExterno">COVENS</Link>
        <Link to="#Eventos">EVENTOS</Link>
        <Link to="#Consultas">CONSULTAS</Link>

      </nav>
    </header>
  )
}

export default Header