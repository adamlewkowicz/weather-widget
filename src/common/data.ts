import { Weather } from '../types';
import { randomBetweenRange, getRandomItem } from './utils';

export const weatherData = Array
  .from({ length: 32 })
  .map((_, index): Weather => ({
    time: index % 24 + 1,
    hPaPressure: randomBetweenRange(1108, 1120),
    rainfallQuantity: randomBetweenRange(0.1, 0.8),
    windDirection: randomBetweenRange(0, 340),
    windVelocity: randomBetweenRange(1, 29),
    temperature: randomBetweenRange(-4, 10),
    state: getRandomItem(['cloudy', 'rainy', 'sunny'])
  }));