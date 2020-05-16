import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { WeatherWidget } from './components/WeatherWidget';
import { weatherData } from './common/data';
import { theme } from './common/theme';

export const App = () => (
  <Container>
    <GlobalStyle />
    <Repository
      title="Github repository"
      href="https://github.com/alk831/weather-widget"
    >
      Repozytorium GitHub
    </Repository>
    <WeatherWidget 
      data={weatherData}
      width={1000}
    />
  </Container>
);

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Repository = styled.a`
  margin: 15px 0;
  color: ${theme.colors.bluePrimary};
`

const GlobalStyle = createGlobalStyle`
  body { 
    margin: 0;
    font-family: ${theme.fontFamily};
    box-sizing: border-box;
  }
`