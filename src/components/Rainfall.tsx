import React from 'react';
import styled from 'styled-components';
import { getFixedLocale } from '../common/utils';
import { theme } from '../common/theme';

interface RainfallProps {
  value: number
}

export const Rainfall = (props: RainfallProps) => {
  const chartHeight = props.value * 25;
  const value = getFixedLocale(props.value, 1);

  return (
    <Container>
      <Quantity>{value} mm</Quantity>
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
  background-color: ${theme.colors.blueSecondary};
  width: 100%;
`