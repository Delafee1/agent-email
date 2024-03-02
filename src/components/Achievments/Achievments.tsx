import * as React from 'react';

import s from './Achievments.module.scss';
import { Achievment } from './Achievment';
import { achievments } from './config';

type Props = {};

const Achievments: React.FC<Props> = ({}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.achievments}>
      <div className={s.header}>Achievements unlocked!</div>
        {achievments.map((achievment, index) => (
          <Achievment
            key={index}
            title={achievment.title}
            description={achievment.description}
            image={achievment.image}
            percentage={achievment.percentage}
            className={s.achievment}
          />
        ))}
      </div>
      
    </div>
  )
};

export default Achievments;
