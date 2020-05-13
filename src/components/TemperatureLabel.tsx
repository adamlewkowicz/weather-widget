import React from 'react';

interface TemperatureLabelProps {
  x: number
  y: number
  value: number
}

export const TemperatureLabel = (props: TemperatureLabelProps) => (
  <text
    x={props.x}
    y={props.y}
    dy={-16}
    dx={2}
    fontSize={24}
    fontWeight="bold"
    textAnchor="middle"
  >
    {props.value.toFixed(0)}&#176;
  </text>
);