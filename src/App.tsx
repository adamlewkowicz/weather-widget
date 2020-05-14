import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { WeatherWidget } from './components/WeatherWidget';
import { weatherData } from './common/data';

export const App = () => (
  <Container>
    <GlobalStyle />
    <WeatherWidget 
      data={weatherData}
    />
  </Container>
);

const Container = styled.main`
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