import * as React from 'react';

import s from './Achievments.module.scss';

type Props = {};

const Achievments: React.FC<Props> = ({}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>nauji pasiekimai</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin arcu mauris, faucibus vitae suscipit sed, facilisis volutpat massa. Duis posuere nunc ut mi suscipit bibendum.</div>
    </div>
  )
};

export default Achievments;
