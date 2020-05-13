
export const getDirectionTitle = (degrees: number): string => {
  const NORTH = 0;
  const SOUTH = 180;
  const EAST = 90;
  const WEAST = 270;

  const directionTitle =
    degrees === NORTH ? 'Północny' :
    degrees === EAST ? 'Północny' :
    degrees === SOUTH ? 'Południowy' :
    degrees === WEAST ? 'Zachodni' :
    degrees > NORTH && degrees < EAST ? 'Pn.-Wsch.' :
    degrees > EAST && degrees < SOUTH ? 'Pd.-Wsch.' :
    degrees > SOUTH && degrees < WEAST ? 'Pd.-Zach.' :
    degrees > WEAST && degrees <= 360 ? 'Pn.-Zach.' :
    'Nieznany kierunek';

  return directionTitle;
}

export const getWindVelocityTitle = (velocity: number): string => {
  const title =
    velocity < 18 ? 'Słaby' :
    velocity < 27 ? 'Umiarkowany' :
    'Silny';

  return title;
}

export const formatTime = (time: number): string => `${String(time).padStart(2, '0')}:00`;

export const randomBetweenRange = (min: number, max: number) => Math.random() * (max - min) + min;