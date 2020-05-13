import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { WeatherWidget } from './components/WeatherWidget';
import { randomBetweenRange } from './utils';
import { Weather } from './types';

const GlobalStyle = createGlobalStyle`
  font-family: 'Source Sans Pro';
  box-sizing: border-box;
`

const weatherData = Array
  .from({ length: 32 })
  .map((_, index): Weather => ({
    hour: index % 24 + 1,
    hPaPressure: randomBetweenRange(1108, 1120),
    rainfallQuantity: randomBetweenRange(0.1, 0.8),
    windDirection: randomBetweenRange(0, 340),
    windVelocity: randomBetweenRange(1, 29),
    temperature: randomBetweenRange(-4, 10)
  }));

export const App = () => (
  <Container>
    <GlobalStyle />
    <WeatherWidget 
      data={weatherData}
    />
  </Container>
);

const Container = styled.div`

`