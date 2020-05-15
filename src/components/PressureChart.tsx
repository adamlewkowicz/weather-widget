import React from 'react';
import { LineChart } from './LineChart';
import { PressureLabel } from './PressureLabel';

interface PressureChartProps {
  data: number[]
  width: number
}

export const PressureChart = (props: PressureChartProps) =>  (
  <LineChart
    width={props.width}
    data={props.data}
    renderLabel={PressureLabel}
    lineColor="#000"
    height={70}
  />
);