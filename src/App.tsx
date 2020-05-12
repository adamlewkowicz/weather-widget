// @ts-ignore
import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import { WeatherWidget } from './components/WeatherWidget';

const GlobalStyle = createGlobalStyle`
  font-family: 'Source Sans Pro';
  box-sizing: border-box;
`

const randomBetweenRange = (min: number, max: number) => Math.random() * (max - min);

const mockData = Array
  .from({ length: 24 })
  .map((_, index) => ({
    hour: index,
    hPaPressure: 1012,
    rainfallQuantity: randomBetweenRange(0.1, 0.8),
    windDirection: 4,
    windVelocity: randomBetweenRange(12, 27),
    temperature: randomBetweenRange(-4, 10)
  }))

export const App = () => (
  <Container>
    <GlobalStyle />
    <WeatherWidget 
      data={mockData}
    />
  </Container>
);

const Container = styled.div`

`