import React, { ReactNode } from 'react';
import {
  LineChart as NativeLineChart,
  Line,
  CartesianAxis,
} from 'recharts';
import { LineChartPoint } from './LineChartPoint';
import styled from 'styled-components';

interface LineChartsProps {
  width: number
  height?: number
  data: number[]
  renderLabel?: (props: any) => ReactNode
  color?: string
}

export const LineCharts = (props: LineChartsProps) => {
  const normalizedData = props.data.map(record => ({
    [DATA_KEY]: record
  }));

  return (
    <StyledLineChart
      width={props.width}
      height={props.height ?? 150}
      data={normalizedData}
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
    </StyledLineChart>
  );
}

const StyledLineChart = styled(NativeLineChart).attrs(() => ({
  margin: {
    top: 30,
    bottom: 30,
    left: 50,
    right: 50,
  }
}))`
  padding: 30px 0;
`

const DATA_KEY = 'pv';