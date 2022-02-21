import React from 'react';
import styles from './Secao1.module.css';


const Secao1 = () => {
  return (
    <div className={styles.inicio}>
      <div className={`${styles.textos} container`}>
        <h1 className={styles.up}>Tradição</h1>
        <h1>Green Faerie</h1>
        <p>A  Tradição de Bruxaria Green Faerie nasceu em 2008, fundada por Valdir Callegari, e é uma tradição feérica que busca resgatar o encantado dentro de cada um. Temos 3 Clãs pelo Brasil e, assim como outras Tradições de Fadas pelo mundo, prezamos pela oralidade e trabalhos mágicos dedicados aos elementais e outros seres da natureza que chamamos de epíteto geral de “Povo das Fadas”</p>
        </div>
    </div>
  )
}

export default Secao1