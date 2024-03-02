import * as React from 'react';
import Image from 'next/image';
import s from './Header.module.scss';

type Props = {};

const Header: React.FC<Props> = ({}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <img src="/logo.png" alt="logo" className={s.image} />
        <div className={s.text}>Ваша персональная<br />статистика за февраль</div>
      </div>
      <div className={s.separator} />
    </div>
  )
};

export default Header;
