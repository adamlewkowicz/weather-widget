import React from 'react';
import { LineChart } from './LineChart';
import { PressureLabel } from './PressureLabel';
import { HPA_MIN_VALUE } from '../common/consts';

interface PressureChartProps {
  data: number[]
  width: number
}

export const PressureChart = (props: PressureChartProps) => {
  const normalizedPressureData = props.data.map(value => value - HPA_MIN_VALUE);

  return (
    <LineChart
      width={props.width}
      data={normalizedPressureData}
      renderLabel={PressureLabel}
      lineColor="#000"
      height={110}
    />
  );
}