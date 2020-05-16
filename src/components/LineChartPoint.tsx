import React from 'react';
import { theme } from '../common/theme';

interface LineChartPointProps {
  cx: number
  cy: number
}

export const LineChartPoint = (props: LineChartPointProps) => (
  <circle
    cx={props.cx}
    cy={props.cy}
    r={7}
    stroke="black"
    strokeWidth={2}
    fill={theme.colors.light}
  />
);