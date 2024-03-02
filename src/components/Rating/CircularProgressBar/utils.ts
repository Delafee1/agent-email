import { CircularProgressBarInitValuesType } from './types';

export const getInitialValues = (
  size: number,
  strokeWidth: number
): CircularProgressBarInitValuesType => {
  // Радиус окружности
  const radius = size / 2 - strokeWidth / 2;

  // Длина окружности
  const circumference = 2 * Math.PI * radius;

  // Процент, который занимают закругления
  const strokeLinecapPercent = (strokeWidth * 100) / circumference;

  // Начальный угол дуги в радианах
  const startAngle = -Math.PI / 2;

  // Расчет угла смещения для учета закругления,
  // так как strokeLinecap="round" добавляет к дуге закругление,
  // равное половине толщины линии
  const angleOffset = -(strokeWidth / 2 / (2 * Math.PI * radius)) * 360;

  // Начальный угол с учетом угла смещения
  const offsetStartAngle = startAngle - (angleOffset * Math.PI) / 180;

  // Координаты центра круга
  const center = radius + strokeWidth / 2;

  return {
    startAngle,
    angleOffset,
    offsetStartAngle,
    center,
    radius,
    circumference,
    strokeLinecapPercent,
  };
};

export const getSvgPath = (
  initialValues: CircularProgressBarInitValuesType,
  percentage: number
): string => {
  const { startAngle, angleOffset, offsetStartAngle, center, radius, circumference } =
    initialValues;

  // Длина дуги, соответствующая проценту
  const arcLength = (percentage / 100) * circumference;

  // Угол дуги в градусах
  const arcAngle = (arcLength / circumference) * 360;

  // Конечный угол дуги
  const endAngle = startAngle + (arcAngle * Math.PI) / 180;

  // Корректировка конечного угла с учетом угла смещения
  const offsetEndAngle = endAngle - (angleOffset * Math.PI) / 180;

  // Флаг для SVG path, определяющий, должна ли дуга быть больше 180 градусов
  const largeArcFlag = arcAngle <= 180 ? '0' : '1';

  // Корректировка координат начальной и конечной точек
  const startX = center + radius * Math.cos(offsetStartAngle);
  const startY = center + radius * Math.sin(offsetStartAngle);
  const endX = center + radius * Math.cos(offsetEndAngle);
  const endY = center + radius * Math.sin(offsetEndAngle);

  // Путь SVG для рисования дуги
  const path = `M ${startX},${startY} A ${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY}`;

  return path;
};
