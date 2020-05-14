import React from 'react';
import styled from 'styled-components';
import { Weather } from '../types';
import { Time } from './WeatherBlock';
import { WEATHER_COLUMN_WIDTH } from '../common/consts';
import { Theatre } from './Theatre';
import { WeatherRow } from './WeatherRow';
import { Rainfall } from './Rainfall';
import { formatTime } from '../common/utils';
import { Title } from './Title';
import { WeatherPrognosis } from './WeatherState';
import { TemperatureChart } from './TemperatureChart';
import { PressureChart } from './PressureChart';
import { WindDetails } from './WindDetails';

interface WeatherWidgetProps {
  data: Weather[]
}

export const WeatherWidget = React.memo((props: WeatherWidgetProps) => {
  const chartWidth = props.data.length * (WEATHER_COLUMN_WIDTH + 1);
  const temperatures = props.data.map(weather => weather.temperature);
  const pressures = props.data.map(weather => weather.hPaPressure);
  
  return (
    <Container>
      <Titles>
        <Title height={65}>Godzina</Title>
        <Title height={50}>Prognoza</Title>
        <Title height={210}>Temperatura</Title>
        <Title height={100}>Opady</Title>
        <Title height={80}>Kierunek wiatru</Title>
        <Title height={80}>Prędkość wiatru</Title>
        <Title height={130}>Ciśnienie</Title>
      </Titles>
      <Theatre>
        <WeatherRow
          data={props.data}
          renderItem={weather => (
            <Time>{formatTime(weather.time)}</Time>
          )}
        />
        <WeatherRow
          data={props.data}
          renderItem={weather => (
            <WeatherPrognosis state={weather.state} />
          )}
        />
        <TemperatureChart
          data={temperatures}
          width={chartWidth}
        />
        <WeatherRow
          data={props.data}
          renderItem={weather => (
            <Rainfall value={weather.rainfallQuantity} />
          )}
        />
        <WeatherRow
          data={props.data}
          borderColor="#fff"
          renderItem={weather => (
            <WindDetails
              velocity={weather.windVelocity}
              direction={weather.windDirection}  
            />
          )}
        />
        <PressureChart
          data={pressures}
          width={chartWidth}
        />
      </Theatre>
    </Container>
  );
});

const Container= styled.div`
  font-family: 'Source Sans Pro';
  display: flex;
  width: 1000px;
`

const Titles = styled.ul`
  padding: 0;
  margin: 0;
`