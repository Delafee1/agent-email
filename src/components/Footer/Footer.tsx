import * as React from 'react';

import s from './Footer.module.scss';

type Props = {};

const Footer: React.FC<Props> = ({}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.separator} />
      <div className={s.icons}>
        <div className={s.icon} />
        <div className={s.icon} />
        <div className={s.icon} />
        <div className={s.icon} />
      </div>
    </div>
  )
};

export default React.memo(Footer);
