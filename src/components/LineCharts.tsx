import React from 'react';
import {
  LineChart, Line
} from 'recharts';

interface LineChartsProps {
  width: number
  data: number[]
  renderLabel?: () => JSX.Element
}

export const LineCharts = (props: LineChartsProps) => {
  const DATA_KEY = 'pv';
  const normalizedData = props.data.map(record => ({
    [DATA_KEY]: record
  }));

  return (
    <LineChart
      width={500 ?? props.width}
      height={300}
      data={normalizedData}
    >
      <Line
        label={props.renderLabel}
        type="linear"
        dataKey={DATA_KEY}
        stroke="#FFE05E"
        activeDot={{ r: 8 }}
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