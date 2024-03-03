import * as React from 'react';
import cn from 'classnames';

import s from './Footer.module.scss';

const Footer: React.FC = ({}) => {
  return (
    <div className={s.wrapper}>
      Dėkojame, kad dirbate su Tez Tour!
      <div className={s.socials}>
        <img src="/facebook.png" alt="facebook" className={cn(s.icon, s.fb)} />
        <img src="/instagram.png" alt="instagram" className={cn(s.icon, s.inst)} />
        <img src="/linkedin.png" alt="linkedin" className={cn(s.icon, s.in)} />
        <img src="/youtube.png" alt="youtube" className={cn(s.icon, s.yt)} />
      </div>
    </div>
  )
};

export default React.memo(Footer);
