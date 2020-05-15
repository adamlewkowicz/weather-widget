import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { WeatherWidget } from './components/WeatherWidget';
import { weatherData } from './common/data';

export const App = () => (
  <Container>
    <GlobalStyle />
    <Repository
      title="Github repository"
      href="https://github.com/alk831/weather-widget"
    >
      Kod GitHub
    </Repository>
    <WeatherWidget 
      data={weatherData}
      width={1000}
    />
  </Container>
);

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`

const Repository = styled.a`

`

const GlobalStyle = createGlobalStyle`
  body { 
    margin: 0;
    font-family: 'Source Sans Pro';
    box-sizing: border-box;
  }
`