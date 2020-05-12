import React from 'react';

export const HPaLabel = (props: any) => {
  return (
    <text
      x={props.x}
      y={props.y}
      dy={-16}
      fontSize={16}
      textAnchor="middle"
    >{props.value.toFixed(0)} hPa</text>
  );
}