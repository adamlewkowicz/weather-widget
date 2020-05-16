import React from 'react';
import styled from 'styled-components';
import sunIcon from '../assets/sun.svg';
import rainIcon from '../assets/rain.svg';
import cloudIcon from '../assets/cloud.svg';
import { WeatherState } from '../types';

interface WeatherStateProps {
  weatherState: WeatherState
}

export const WeatherPrognosis = (props: WeatherStateProps) => (
  <Icon src={iconMap[props.weatherState]} />
);

const iconMap = {
  sunny: sunIcon,
  rainy: rainIcon,
  cloudy: cloudIcon
}

const Icon = styled.img`
  width: 45px;
  height: 45px;
`