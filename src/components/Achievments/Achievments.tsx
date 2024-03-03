import * as React from 'react';

import { Achievment } from './Achievment';
import { achievments } from '@/mock/achievments';
import { Container } from '../Container';

import s from './Achievments.module.scss';

const Achievments: React.FC = () => {
  return (
    <Container className={s.wrapper}>
      <div className={s.header}>TAVO PASIEKIMAI!</div>
      <div className={s.achievments}>
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
    </Container>
  )
};

export default Achievments;
