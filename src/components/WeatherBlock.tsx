import React from 'react';
import styled from 'styled-components';
import { Weather } from '../types';
import { Rainfall } from './Rainfall';
import { WindDetails } from './WindDetails';

interface WeatherBlockProps {
  weather: Weather
}

export const WeatherBlock = (props: WeatherBlockProps) => {
  return (
    <Container>
      <Time>12:00</Time>
      <Temperature>
        {props.weather.temperature}&#176;
      </Temperature>
      <Rainfall value={props.weather.rainfallQuantity} />
      <WindDetails />
      <p>{props.weather.hPaPressure} hPa</p>
    </Container>
  );
}

const Container = styled.div`
  border-right: 1px solid #EEEEEE;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Temperature = styled.p`
  font-size: 20px;
  font-weight: bold;
`

const Time = styled.p`
  font-size: 20px;
  font-weight: bold;
`