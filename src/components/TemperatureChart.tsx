import React from 'react';
import { LineCharts } from './LineCharts';
import { TemperatureLabel } from './TemperatureLabel';

interface TemperatureChartProps {
  data: number[]
  width: number
}

export const TemperatureChart = (props: TemperatureChartProps) =>  (
  <LineCharts
    width={props.width}
    data={props.data}
    renderLabel={TemperatureLabel}
    lineColor="#FFE05E"
  />
);