import * as React from 'react';
import { Container } from '../Container';
import cn from 'classnames';
import s from './Statistics.module.scss';
import { Information } from './Information';
import { countries, durations } from './config';
import { Graphic } from './Graphic';

type Props = {};

const Statistics: React.FC<Props> = ({}) => {
  return (
    <Container className={s.wrapper}>
      <Information />
      <div className={s['stats-wrapper']}>
        <div>
          <div className={s.title}>Daugiausiai parduodamos kryptys</div>
          <div className={s['list-wrapper']}>
            <div className={cn(s['list-image'], s['country-image'])} />
            <div className={s.list}>
              {countries.map((country, index) => (
                <div key={index} className={s.text}>
                  {country.title}: {country.count}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className={s.title}>Parduotu kelioniu trukme</div>
          <div className={s['list-wrapper']}>
            <div className={cn(s['list-image'], s['nights-image'])} />
            <div className={s.list}>
              {durations.map((nights, index) => (
                <div key={index} className={s.text}>
                  {nights.title}: {nights.count}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Graphic values={[33, 45, 12, 23, 17, 5, 1]}/>
    </Container>
  )
};

export default React.memo(Statistics);
