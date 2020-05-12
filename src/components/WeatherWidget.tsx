import React from 'react';
import styled from 'styled-components';
import { Weather } from '../types';
import { WeatherBlock } from './WeatherBlock';

interface WeatherWidgetProps {
  data: Weather[]
}

export const WeatherWidget = (props: WeatherWidgetProps) => {
  return (
    <Container>
      <BlocksContainer>
        {props.data.map(weather => (
          <WeatherBlock
            weather={weather}
          />
        ))}
      </BlocksContainer>
    </Container>
  );
}

const Container= styled.div`
  font-family: 'Source Sans Pro';
`

const BlocksContainer = styled.ul`
  display: flex;
  flex-direction: row;
`