import React, { ReactNode } from 'react';
import {
  LineChart as NativeLineChart,
  Line,
  XAxis,
} from 'recharts';
import { LineChartPoint } from './LineChartPoint';
import styled from 'styled-components';
import { WEATHER_COLUMN_WIDTH } from '../common/consts';

interface LineChartProps {
  width: number
  height?: number
  data: number[]
  renderLabel?: (props: any) => ReactNode
  lineColor?: string
}

export const LineChart = (props: LineChartProps) => {
  const normalizedData = props.data.map(value => ({ value }));

  return (
    <StyledLineChart
      width={props.width}
      height={props.height ?? 150}
      data={normalizedData}
    >
      <Line
        label={props.renderLabel}
        type="linear"
        dataKey="value"
        stroke={props.lineColor}
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
  background: repeating-linear-gradient( 
    90deg,
    transparent 0,
    transparent ${WEATHER_COLUMN_WIDTH - 1}px,
    #EEEEEE ${WEATHER_COLUMN_WIDTH - 1}px,
    #EEEEEE ${WEATHER_COLUMN_WIDTH}px
  );
`