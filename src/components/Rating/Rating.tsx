import * as React from 'react';

import s from './Rating.module.scss';
import { CircularProgressBar } from './CircularProgressBar';

type Props = {};

const Rating: React.FC<Props> = ({}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.facts}>
        <div className={s.text}>
          Tu pardavei <span className={s.text_bold}>10% daugiau </span>negu praeita menesi
        </div>
        <div className={s.text}>
          Tavo menesio geriausiadiena - <span className={s.text_bold}>Pirmadienis</span>
        </div>
        <div className={s.text}>
          Tez taskai si menesi tu uzdirbai&nbsp;<span className={s.text_bold}>333€</span>
        </div>
        <div className={s.text}>
          Si menesi tu buvai <span className={s.text_bold}>top 1% </span> visu agentu!
        </div>
      </div>
      <CircularProgressBar
        size={250}
        strokeWidth={25}
        currentValue={12350}
        maxValue={15000}
        innerText={<div className={s.circle_inner}>12350</div>}
        withBg={false}
        strokeColor='#d87093'
        className={s.circle}
      />
    </div>
  )
};

export default React.memo(Rating);
