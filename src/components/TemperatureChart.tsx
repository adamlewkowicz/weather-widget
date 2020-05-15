import React from 'react';
import { LineChart } from './LineChart';
import { TemperatureLabel } from './TemperatureLabel';

interface TemperatureChartProps {
  data: number[]
  width: number
}

export const TemperatureChart = (props: TemperatureChartProps) =>  (
  <LineChart
    width={props.width}
    data={props.data}
    renderLabel={TemperatureLabel}
    lineColor="#FFE05E"
  />
);