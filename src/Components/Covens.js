import React from 'react';
import './Covens.css';
import { ReactComponent as Covensimg } from '../Assets/Vector.svg';

const Covens = () => {
  return (
    <div id="Covens" className={`covens container`}>
      <h4>Covens</h4>
      <div className='covensimg'>
        <div>
          <Covensimg />
          <p>
            <h5>Fadas de Avalon</h5>
            <span>Cidade: Cidade: Natal - RN</span>
            <span>Fundação: 2013</span>
            <span>Contato: cris-nobrega@gmail.com</span>
          </p>
        </div>
        <div>
          <Covensimg />
          <p>
            <h5>Crisálida</h5>
            <span>Cidade: Curitiba - PR</span>
            <span>Fundação: 2016</span>
            <span>Contato: página</span>
          </p>
        </div>
        <div>
          <Covensimg />
          <p>
            <h5>Círculo de Álfheim</h5>
            <span>Cidade: São Paulo - SP</span>
            <span>Fundação: 2018</span>
            <span>Contato: cla_alfheim@hotmail.com</span>
          </p>
        </div>
      </div>
      

    </div>
  )
}

export default Covens