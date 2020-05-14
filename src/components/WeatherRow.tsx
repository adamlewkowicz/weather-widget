import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { WEATHER_COLUMN_WIDTH } from '../common/consts';

interface WeatherRowProps<T> extends BorderColorProp {
  data: T[]
  renderItem: (item: T) => ReactNode
}

export const WeatherRow = <T extends object>(props: WeatherRowProps<T>) => (
  <Container>
    {props.data.map(record => (
      <Item borderColor={props.borderColor}>
        {props.renderItem(record)}
      </Item>
    ))}
  </Container>
);

const Container = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const Item = styled.li<BorderColorProp>`
  min-width: ${WEATHER_COLUMN_WIDTH}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${props => props.borderColor ?? '#EEEEEE'};
  list-style-type: none;
`

interface BorderColorProp {
  borderColor?: string
}