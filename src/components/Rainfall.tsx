import React from 'react';
import styled from 'styled-components';

interface RainfallProps {
  value: number
}

export const Rainfall = (props: RainfallProps) => {
  const chartHeight = props.value * 25;

  return (
    <Container>
      <Quantity>{props.value.toLocaleString()} mm</Quantity>
      <Chart
        style={{ height: chartHeight }}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

const Quantity = styled.p`
  text-align: center;
  margin-bottom: 2px;
`

const Chart = styled.div`
  background-color: #33CCFF;
  width: 100%;
`