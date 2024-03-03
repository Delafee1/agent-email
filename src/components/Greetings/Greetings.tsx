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
        Привет, агент!
        <br />
        Мы собрали твою статистику за прошедший месяц и готовы ею поделиться! Здесь ты можешь посмотреть свои достижения и узнать, как изменился твой рейтинг.
      </div>
    </Container>
  )
};

export default Greetings;
