import * as React from 'react';

import s from './FirstBanner.module.scss';

type Props = {};

const FirstBanner: React.FC<Props> = ({}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.image} />
      <div className={s.text}>Tu pardavei <span className={s.text_bold}>10% daugiau</span><br />negu praeita menesi</div>
      <div className={s.text}>Tavo menesio geriausia<br />diena - <span className={s.text_bold}>Pirmadienis</span></div>
      <div className={s.text}>Tez taskai si menesi tu uzdirbai <span className={s.text_bold}>333€</span></div>
      <div className={s.text}>Si menesi tu buvai<br /><span className={s.text_bold}>top 1%</span> visu agentu!</div>
    </div>
  )
};

export default FirstBanner;
