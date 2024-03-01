import * as React from 'react';
import Image from 'next/image';
import s from './Header.module.scss';

type Props = {};

const Header: React.FC<Props> = ({}) => {
  return (
    <div className={s.wrapper}>
      <img src="/logo.png" alt="logo" className={s.image} />
      <div className={s.text}>Ваша персональная<br />статистика за февраль</div>
    </div>
  )
};

export default Header;
