import * as React from 'react';

import s from './InterestingFacts.module.scss';

type Props = {};

const InterestingFacts: React.FC<Props> = ({}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.text}>
        <div className={s.icon}/>
        <div className={s.background} />
        <div>Tu pardavei <span className={s.text_bold}>10% daugiau </span>negu praeita menesi</div>
      </div>
      <div className={s.text}>
        <div className={s.icon}/>
        <div className={s.background} />
        <div>Tavo menesio geriausiadiena - <span className={s.text_bold}>Pirmadienis</span></div>
      </div>
      <div className={s.text}>
        <div className={s.icon}/>
        <div className={s.background} />
        <div>Tez taskai si menesi tu uzdirbai&nbsp;<span className={s.text_bold}>333€</span></div>
      </div>
      <div className={s.text}>
        <div className={s.icon}/>
        <div className={s.background} />
        <div>Si menesi tu buvai <span className={s.text_bold}>top 1% </span> visu agentu!</div>
      </div>
    </div>
  )
};

export default React.memo(InterestingFacts);
