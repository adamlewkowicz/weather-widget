import React, { ReactNode } from 'react';
import {
  LineChart,
  Line,
  CartesianAxis,
} from 'recharts';
import { WEATHER_COLUMN_WIDTH } from '../common/consts';
import { LineChartPoint } from './LineChartPoint';

interface LineChartsProps {
  width: number
  height?: number
  data: number[]
  renderLabel?: (props: any) => ReactNode
  color?: string
}

export const LineCharts = (props: LineChartsProps) => {
  const DATA_KEY = 'pv';
  const normalizedData = props.data.map(record => ({
    [DATA_KEY]: record
  }));
  const margin = WEATHER_COLUMN_WIDTH / 2 - 30;

  return (
    <LineChart
      width={props.width}
      height={props.height ?? 150}
      data={normalizedData}
      margin={{ top: 30, left: 25, right: 60, bottom: 30 }}
      style={{ padding: 30 }}
      barSize={20}
    >
      <CartesianAxis x={40} y={50} width={5} height={100} fill="red" />
      <Line
        label={props.renderLabel}
        type="linear"
        dataKey={DATA_KEY}
        stroke={props.color}
        points={[{ x: 1, y: 12, value: 140 }]}
        // activeDot={{ r: 8 }}
        strokeWidth={2}
        dot={LineChartPoint}
      />
    </LineChart>
  );
}