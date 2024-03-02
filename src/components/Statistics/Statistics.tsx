import * as React from 'react';

import s from './Statistics.module.scss';

type Props = {};

const Statistics: React.FC<Props> = ({}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>Išsami statistika</div>
      <div className={s.graphic}>

      </div>
      <div className={s['text-wrapper']}>
        <div className={s.countries}>
          <div className={s.title}>Daugiausiai parduodamos kryptys:</div>
          <div className={s.text}>
            Turkija: 86
          </div>
          <div className={s.text}>
            Graikija: 64
          </div>
          <div className={s.text}>
            Egiptas: 52
          </div>
        </div>
        <div className={s.countries}>
          <div className={s.title}>Parduotu kelioniu trukme:</div>
          <div className={s.text}>
            7 naktys: 112
          </div>
          <div className={s.text}>
            9 naktys: 96
          </div>
          <div className={s.text}>
            6 naktys: 86
          </div>
        </div>
      </div>
    </div>
  )
};

export default React.memo(Statistics);
