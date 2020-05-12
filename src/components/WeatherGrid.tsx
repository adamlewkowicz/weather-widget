import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { WEATHER_BLOCK_WIDTH } from '../consts';

interface WeatherGridProps<T> {
  data: T[]
  title?: string
  renderItem: (item: T) => ReactNode
}

export const WeatherRow = <T extends object>(props: WeatherGridProps<T>) => {
  return (
    <Container>
      {props.title}
      {props.data.map(record => (
        <Item>
          {props.renderItem(record)}
        </Item>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  
`

const Item = styled.div`
  min-width: ${WEATHER_BLOCK_WIDTH}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #EEEEEE;
`