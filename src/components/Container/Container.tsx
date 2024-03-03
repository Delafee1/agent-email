import * as React from 'react';
import cn from 'classnames';
import s from './Container.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<Props> = ({children, className}) => {
  return <div className={cn(s.wrapper, className)}>{children}</div>;
};

export default React.memo(Container);
