import React from 'react';
import styled from 'styled-components';
import { Weather } from '../types';
import { WeatherBlock } from './WeatherBlock';
import { LineChart } from './LineChart';

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
      <LineChart
        data={[7, 7, 7, 10, 11, 9, 5]}
        labels={[11, 12, 13, 14, 15, 16]}
        label="Temperatura"
      />
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