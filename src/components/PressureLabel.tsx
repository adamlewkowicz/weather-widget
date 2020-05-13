import React from 'react';

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
    textAnchor="middle"
  >
    {props.value.toFixed(0)} hPa
  </text>
);