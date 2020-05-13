
export interface Weather {
  time: number
  temperature: number
  rainfallQuantity: number
  windDirection: number
  windVelocity: number
  hPaPressure: number
  state: WeatherState
}

export type WeatherState = 'sunny' | 'rainy' | 'cloudy';
