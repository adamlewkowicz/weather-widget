import React, { ReactNode } from 'react';
import {
  LineChart, Line, YAxis, CartesianAxis
} from 'recharts';
import { WEATHER_BLOCK_WIDTH } from '../consts';

interface LineChartsProps {
  width: number
  data: number[]
  renderLabel?: (props: any) => ReactNode
  color?: string
}

export const LineCharts = (props: LineChartsProps) => {
  const DATA_KEY = 'pv';
  const normalizedData = props.data.map(record => ({
    [DATA_KEY]: record
  }));
  const margin = WEATHER_BLOCK_WIDTH / 2 - 30;

  return (
    <LineChart
      width={props.width}
      height={150}
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
        dot={CustomDot}
      />
    </LineChart>
  );
}

const CustomDot = (props: any) => {
  return (
    <circle
      cx={props.cx}
      cy={props.cy}
      r={7}
      stroke="black"
      strokeWidth={2}
      fill="#fff"
    />
  );
}