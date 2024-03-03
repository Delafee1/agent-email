import * as React from 'react';

import { CircularProgressBar } from './CircularProgressBar';
import { Container } from '../Container';

import s from './Rating.module.scss';
import { personalFacts } from '@/mock/personalFacts';
import { PersonalFact } from './PersonalFact';

const Rating: React.FC = () => {
  return (
    <Container className={s.wrapper}>
      <div className={s.facts}>
        {personalFacts.map((fact, index) => (
          <PersonalFact key={index} {...fact} />
        ))}
      </div>
      <CircularProgressBar
        size={250}
        strokeWidth={25}
        currentValue={12350}
        maxValue={15000}
        innerText={<div className={s.circle_inner}>2650 taškų<div className={s.bottom}>iki VIP lygio</div></div>}
        withBg={false}
        strokeColor='#11b811'
        className={s.circle}
      />
    </Container>
  )
};

export default React.memo(Rating);
