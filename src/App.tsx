import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { WeatherWidget } from './components/WeatherWidget';
import { randomBetweenRange, getRandomItem } from './common/utils';
import { Weather } from './types';

const weatherData = Array
  .from({ length: 32 })
  .map((_, index): Weather => ({
    time: index % 24 + 1,
    hPaPressure: randomBetweenRange(1108, 1120),
    rainfallQuantity: randomBetweenRange(0.1, 0.8),
    windDirection: randomBetweenRange(0, 340),
    windVelocity: randomBetweenRange(1, 29),
    temperature: randomBetweenRange(-4, 10),
    state: getRandomItem(['cloudy', 'rainy', 'sunny'])
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const GlobalStyle = createGlobalStyle`
  font-family: 'Source Sans Pro';
  box-sizing: border-box;

  body { 
    margin: 0;
  }
`