import React from 'react';

export const TempLabel = (props: any) => {
  return (
    <text
      x={props.x}
      y={props.y}
      dy={-16}
      dx={2}
      // fill={stroke}
      fontSize={24}
      fontWeight="bold"
      textAnchor="middle"
    >{props.value.toFixed(0)}&#176;</text>
  );
}