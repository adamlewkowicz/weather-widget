import React from 'react';
import styled from 'styled-components';
import sunIcon from '../assets/sun.svg';
import rainIcon from '../assets/rain.svg';
import cloudIcon from '../assets/cloud.svg';
import { WeatherState } from '../types';

interface WeatherStateProps {
  state: WeatherState
}

export const WeatherPrognosis = (props: WeatherStateProps) => {
  const icon = iconMap[props.state];

  return (
    <Container>
      <Icon src={icon} />
    </Container>
  );
}

const iconMap = {
  sunny: sunIcon,
  rainy: rainIcon,
  cloudy: cloudIcon
}

const Container = styled.div`

`

const Icon = styled.img`
  width: 45px;
  height: 45px;
`