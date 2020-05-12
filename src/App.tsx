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

export const App = () => (
  <Container>
    <GlobalStyle />
    <WeatherWidget 
      data={[
        {
          hour: 6,
          hPaPressure: 1042,
          rainfallQuantity: 0.4,
          windDirection: 4,
          windVelocity: 49,
          temperature: 10
        },
        {
          hour: 7,
          hPaPressure: 742,
          rainfallQuantity: 0.1,
          windDirection: 7,
          windVelocity: 12,
          temperature: 7
        },
      ]}
    />
  </Container>
);

const Container = styled.div`

`