import React from 'react';
import style from './Atradicao.module.css';
import Fundador from '../Assets/valdir.png';

const ATradicao = () => {
  return (
    <div id="ATradicao" className={`${style.ATradicao} container`}>
      <h4>A Tradição</h4>
      <h5>Fundador</h5>
      <div className={style.fundador}>
        <img src={Fundador} alt="Fundador"/>
        <p>Valdir Callegari vive em São Paulo e fundou a Tradição de Bruxaria Green Faerie em meados de 2008, após uma longa trajetória nos mistérios da magia. Começou solitário em 1986, dedicou-se à Associação Mística Rosa Cruz, à Cabala e a Teologia, formando-se pela Faculdade de Teologia e Filosofia de São Paulo.
Estudou Radiestesia, metafísica e práticas oraculares como tarô, runas, baralho cigano e búzios. Em 1992, dedicou-se à Wicca Gardneriana e Diânica. Em 2004,  iniciou-se feiticeiro pela Casa de Buxaria Germânica. Dedicou mais de seis anos às práticas familiares da Stregheria e à Doutrina e Sacerdócio da Umbanda.
Membro Honorário do Coven Red River de Boham - Texas - Pela Reverenda Susan Willians e Membro da Federação Pagão Internacional</p>
      </div>

    </div>
  )
}

export default ATradicao