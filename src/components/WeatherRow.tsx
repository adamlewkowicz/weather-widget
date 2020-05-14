import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { WEATHER_COLUMN_WIDTH } from '../common/consts';

interface WeatherRowProps<T> {
  data: T[]
  title?: string
  renderItem: (item: T) => ReactNode
  borderColor?: string
}

export const WeatherRow = <T extends object>(props: WeatherRowProps<T>) => {
  return (
    <Container>
      {props.title}
      {props.data.map(record => (
        <Item borderColor={props.borderColor}>
          {props.renderItem(record)}
        </Item>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`

const Item = styled.div<{ borderColor?: string }>`
  min-width: ${WEATHER_COLUMN_WIDTH}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${props => props.borderColor ?? '#EEEEEE'};
`