import * as React from 'react';

import s from './Greetings.module.scss';

type Props = {};

const Greetings: React.FC<Props> = ({}) => {
  return (
    <div className={s.wrapper}>
      Привет, агент!
      <br />
      Мы собрали твою статистику за прошедший месяц и готовы ею поделиться! Здесь ты можешь посмотреть свои достижения и узнать, как изменился твой рейтинг.
    </div>
  )
};

export default Greetings;
