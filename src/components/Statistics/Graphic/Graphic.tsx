import * as React from 'react';
import cn from 'classnames';

import s from './Graphic.module.scss';

type Props = {
  values: number[];
};

const Graphic: React.FC<Props> = ({ values }) => {
  const maxValue = Math.max(...values);
  
  const stripesCount = Math.ceil(maxValue / 10);
  const stripes = new Array(stripesCount).fill(0);
  const stripesHeight = 100 / stripesCount;

  return (
    <>
      <div className={s.header}>График продаж путевок по дням</div>
      <div className={s['graphic-wrapper']}>
        <div className={s.graphic}>
          <div className={s.stripes}>
            {stripes.map((_, index) => (
              <div key={index} className={s.stripe} style={{bottom: `${stripesHeight + index * stripesHeight}%`}}>
                <div className={s.text}>{10 * (index + 1)}</div>
              </div>
            ))}
          </div>
          <div className={s.columns}>
            {values.map((value, index) => (
              <div key={index} className={cn(s.item, value === maxValue && s.item_max)} style={{height: `${value * 100 / (stripesCount * 10)}%`}}>
                <div className={s.value}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
};

export default React.memo(Graphic);
