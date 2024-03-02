import * as React from 'react';
import cn from 'classnames';
import s from './Achievment.module.scss';

type Props = {
  title: string;
  description: string;
  image: string;
  percentage: number;
  className?: string;
};

const Achievment: React.FC<Props> = ({title, description, image, percentage, className}) => {
  return (
    <div className={cn(s.wrapper, className)}>
      <div className={s.image} style={{backgroundImage: `url(${image})`}} />
      <div className={s.text}>
        <div className={s.title}>{title}</div>
        <div className={s.description}>{description}</div>
        <div className={s.percentage}>{percentage}% of agents have this achievement</div>
      </div>
    </div>
  )
}

export default Achievment;
