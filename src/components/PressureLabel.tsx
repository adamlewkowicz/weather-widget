import React from 'react';
import { getPressureText } from '../common/utils';

interface PressureLabelProps {
  x: number
  y: number
  value: number
}

export const PressureLabel = (props: PressureLabelProps) => (
  <text
    x={props.x}
    y={props.y}
    dy={-16}
    fontSize={16}
    fontWeight="SemiBold"
    textAnchor="middle"
  >
    {getPressureText(props.value)}
  </text>
);