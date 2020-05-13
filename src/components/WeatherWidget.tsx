import React from 'react';
import styled from 'styled-components';
import { Weather } from '../types';
import { WeatherBlock, Time } from './WeatherBlock';
import { LineCharts } from './LineCharts';
import { WEATHER_COLUMN_WIDTH } from '../common/consts';
import { Theatre } from './Theatre';
import { WeatherRow } from './WeatherRow';
import { Rainfall } from './Rainfall';
import { TemperatureLabel } from './TemperatureLabel';
import { PressureLabel } from './PressureLabel';
import { WindDetails } from './WindDetails';
import { formatTime } from '../common/utils';
import { Title } from './Title';
import { WeatherPrognosis } from './WeatherState';

interface WeatherWidgetProps {
  data: Weather[]
}

export const WeatherWidget = (props: WeatherWidgetProps) => {
  const chartWidth = props.data.length * WEATHER_COLUMN_WIDTH;
  const temperatures = props.data.map(weather => weather.temperature);
  const pressures = props.data.map(weather => weather.hPaPressure);
  
  return (
    <Container>
      <Titles>
        <Title height={65}>Godzina</Title>
        <Title height={49}>Prognoza</Title>
        <Title height={210}>Temperatura</Title>
        <Title height={100}>Opady</Title>
        <Title height={80}>Kierunek wiatru</Title>
        <Title height={80}>Prędkość wiatru</Title>
        <Title height={120}>Ciśnienie</Title>
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
        <LineCharts
          width={chartWidth}
          data={temperatures}
          renderLabel={TemperatureLabel}
          color="#FFE05E"
        />
        <WeatherRow
          data={props.data}
          renderItem={weather => (
            <Rainfall value={weather.rainfallQuantity} />
          )}
        />
        <WeatherRow
          data={props.data}
          renderItem={weather => (
            <WindDetails
              velocity={weather.windVelocity}
              direction={weather.windDirection}  
            />
          )}
        />
        <LineCharts
          width={chartWidth}
          data={pressures}
          renderLabel={PressureLabel}
          color="#000"
        />
        {/* <BlocksContainer>
          {props.data.map(weather => (
            <WeatherBlock
              weather={weather}
            />
          ))}
        </BlocksContainer> */}
      </Theatre>
    </Container>
  );
}

const Container= styled.div`
  font-family: 'Source Sans Pro';
  display: flex;
`

const BlocksContainer = styled.ul`
  display: flex;
  flex-direction: row;
`

const Titles = styled.ul`
  padding: 0;
  margin: 0;
`