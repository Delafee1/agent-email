import * as React from 'react';

import s from './Header.module.scss';

const Header: React.FC = ({}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <img src="/logo.png" alt="logo" className={s.image} />
        <div className={s.text}>Ваша персональная<br />статистика за февраль</div>
      </div>
    </div>
  )
};

export default Header;
