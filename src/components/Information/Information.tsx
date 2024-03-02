import * as React from 'react';

import s from './Information.module.scss';

type Props = {};

const Information: React.FC<Props> = ({}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.item}>
        <div className={s.icon} />
        <div className={s.text}>
          <div className={s.header}>VIP lygis</div>
          <div className={s.value}>Auksinis</div>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.icon} />
        <div className={s.text}>
          <div className={s.header}>Panaudoti TEZ taskai</div>
          <div className={s.value}>2750</div>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.icon} />
        <div className={s.text}>
          <div className={s.header}>Aktualus TEZ taskai</div>
          <div className={s.value}>12350</div>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.icon} />
        <div className={s.text}>
          <div className={s.header}>Aktualus TEZ taskai eurais</div>
          <div className={s.value}>600€</div>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.icon} />
        <div className={s.text}>
          <div className={s.header}>Vieta reitingu lenteleje</div>
          <div className={s.value}>top 0.5%</div>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.icon} />
        <div className={s.text}>
          <div className={s.header}>Is viso parduota kelioniu</div>
          <div className={s.value}>353</div>
        </div>
      </div>
    </div>
  )
};

export default React.memo(Information);
