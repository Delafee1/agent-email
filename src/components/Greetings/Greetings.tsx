import * as React from 'react';
import { Container } from '../Container';

import s from './Greetings.module.scss';

const Greetings: React.FC = () => {
  return (
    <Container className={s.wrapper}>
      <div className={s['image-wrapper']}>
        <img src="/firstblockimg.jpg" className={s.image} />
      </div>
      <div className={s.text}>
        Labas, agente!
        <br />
        Surinkome tavo praėjusio mėnesio pardavimų statistiką! Čia gali pamatyti savo pasiekimus, dažniausiai parduodamas kryptys, Tez taškų kiekį eurais, geriausias savaitės dienas ir sužinoti, kaip pasikeitė tavo reitingas. Mes tikimės, kad ši informacija suteiks tau vertingų įžvalgų!
      </div>
    </Container>
  )
};

export default Greetings;
