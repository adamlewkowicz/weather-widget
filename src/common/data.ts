import { Weather } from '../types';
import { randomBetweenRange, getRandomItem } from './utils';
import { HPA_MIN_VALUE } from './consts';

export const weatherData = Array
  .from({ length: 32 })
  .map((_, index): Weather => ({
    id: index,
    hour: (index + 7) % 24,
    rainfallQuantity: randomBetweenRange(0.1, 0.8),
    windDirection: randomBetweenRange(0, 340),
    windVelocity: randomBetweenRange(1, 29),
    temperature: randomBetweenRange(-4, 10),
    hPaPressure: randomBetweenRange(HPA_MIN_VALUE, 1120),
    state: getRandomItem(['cloudy', 'rainy', 'sunny'])
  }));