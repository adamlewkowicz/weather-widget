import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { WeatherWidget } from './components/WeatherWidget';

export const App = () => (
  <Container>
    <WeatherWidget />
  </Container>
);

const Container = styled.div`

`