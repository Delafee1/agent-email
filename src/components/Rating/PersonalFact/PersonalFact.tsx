import * as React from 'react';

import s from './PersonalFact.module.scss';

type Props = {
  firstTextPart?: React.ReactNode;
  secondTextPart?: React.ReactNode;
  accentText: React.ReactNode;
};

const PersonalFact: React.FC<Props> = ({ firstTextPart, secondTextPart, accentText }) => {
  return (
    <div className={s.text}>
      <img src="/check.png" alt="check" className={s.check} />
      <div>{firstTextPart}<span className={s.text_bold}>{' '}{accentText}{' '}</span>{secondTextPart}</div>
    </div>
  )
};

export default React.memo(PersonalFact);
