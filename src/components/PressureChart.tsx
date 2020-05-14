import React from 'react';
import { LineCharts } from './LineCharts';
import { PressureLabel } from './PressureLabel';

interface PressureChartProps {
  data: number[]
  width: number
}

export const PressureChart = (props: PressureChartProps) =>  (
  <LineCharts
    width={props.width}
    data={props.data}
    renderLabel={PressureLabel}
    lineColor="#000"
    height={70}
  />
);