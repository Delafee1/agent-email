'use client';

import cn from 'classnames';
import * as React from 'react';

import s from './CircularProgressBar.module.scss';

import { getInitialValues, getSvgPath } from './utils';

type Props = {
  /** Высота и ширина компонента */
  size: number;

  /** Толщина оранжевой линии */
  strokeWidth: number;

  /** Текущее значение */
  currentValue: number;

  /** Максимальное значение */
  maxValue?: number;

  /** Отображать в обратном порядке (если значения передаются от большего к меньшему) */
  reversed?: boolean;

  /** Текст внутри круга */
  innerText?: React.ReactNode;

  /** Отображать белый фон */
  withBg?: boolean;
  borderColor?: string;
  strokeColor?: string;
  className?: string;
};

const CircularProgressBar: React.FC<Props> = ({
  size,
  strokeWidth,
  currentValue,
  maxValue = 100,
  reversed = false,
  innerText,
  withBg = true,
  borderColor = '#FFFFFF',
  strokeColor = '#FF8211',
  className,
}) => {
  // Градиент не может быть меньше 10%, иначе он не виден
  const [gradientPercentage, setGradientPercentage] = React.useState(10);

  // Получаем начальные значения, которые зависят только от размера и толщины линии,
  // чтобы не пересчитывать их каждый раз
  const initialValues = React.useMemo(
    () => getInitialValues(size, strokeWidth),
    [size, strokeWidth]
  );

  // Переводим текущее значение в проценты
  const percentage = reversed
    ? ((maxValue - currentValue) / maxValue) * (100 - initialValues.strokeLinecapPercent)
    : (currentValue / maxValue) * (100 - initialValues.strokeLinecapPercent);

  // Получаем путь для svg
  const path = React.useMemo(
    () => getSvgPath(initialValues, percentage),
    [initialValues, percentage]
  );

  React.useEffect(() => {
    if (percentage > 10) {
      setGradientPercentage(percentage);
    }
  }, [percentage]);

  return (
    <div className={cn(s.wrapper, withBg && s['wrapper_withBg'], className)}>
      {innerText && <div className={s.text}>{innerText}</div>}
      <div className={s.border} style={{border: `${strokeWidth}px solid ${currentValue === maxValue ? strokeColor : borderColor}`}} />
      <svg
        width={size}
        height={size}
        className={s.object}
        style={
          {
            ['--circular-progress-bar-percentage']: `${gradientPercentage}%`,
          } as React.CSSProperties
        }
      >
        {percentage && (
          <path
            d={path}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        )}
      </svg>
    </div>
  );
};

export default React.memo(CircularProgressBar);
