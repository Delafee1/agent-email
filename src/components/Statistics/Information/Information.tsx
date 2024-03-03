import * as React from 'react';

import s from './Information.module.scss';
import { profileInfo } from './config';
import { personalInfo } from '@/mock/personalInfo';

type Props = {};

const Information: React.FC<Props> = ({}) => {
  return (
    <div className={s.wrapper}>
      <img src="/woman.png" alt="img" className={s.image} />
      <div className={s.list}>
        {profileInfo.map((item, index) => (
          <div className={s.item} key={index}>
            <div className={s['icon-wrapper']}>
              <div className={s.icon} style={{backgroundImage: `url(${item.icon}`}}/>
            </div>
            <div className={s.text}>
              <div className={s.header}>{item.title}</div>
              <div className={s.value}>{personalInfo[item.id]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default React.memo(Information);
