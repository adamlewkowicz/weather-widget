import React from 'react';
import styled from 'styled-components';
import { Weather } from '../types';
import { WeatherBlock, Time } from './WeatherBlock';
import { LineChart } from './LineChart';
import { LineCharts } from './LineCharts';
import { WEATHER_BLOCK_WIDTH } from '../consts';
import { Theatre } from './Theatre';
import { WeatherRow } from './WeatherGrid';
import { Rainfall } from './Rainfall';
import { TempLabel } from './TempLabel';
import { HPaLabel } from './HpaLabel';
import { WindDetails } from './WindDetails';
import { formatTime } from '../utils';

interface WeatherWidgetProps {
  data: Weather[]
}

export const WeatherWidget = (props: WeatherWidgetProps) => {
  const chartWidth = props.data.length * WEATHER_BLOCK_WIDTH;
  const temperatures = props.data.map(weather => weather.temperature);
  const pressures = props.data.map(weather => weather.hPaPressure);
  
  return (
    <Container>
      <Titles>
        <Title>Dzień</Title>
        <Title>Godzina</Title>
        <Title>Temperatura</Title>
        <Title>Opady</Title>
      </Titles>
      <Theatre>
        <WeatherRow
          data={props.data}
          renderItem={weather => (
            <Time>{formatTime(weather.hour)}</Time>
          )}
        />
        <LineCharts
          width={chartWidth}
          data={temperatures}
          renderLabel={TempLabel}
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
          renderLabel={HPaLabel}
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

const Titles = styled.div`

`

const Title = styled.p`

`