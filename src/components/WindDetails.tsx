import React from 'react';
import styled from 'styled-components';
import arrowIcon from '../assets/arrow.svg';
import { getDirectionTitle, getWindVelocityTitle } from '../common/utils';
import { theme } from '../common/theme';

interface WindDetailsProps {
  velocity: number
  direction: number
}

export const WindDetails = (props: WindDetailsProps) => {
  const { direction, velocity } = props;
  const directionTitle = getDirectionTitle(direction);
  const velocityTitle = getWindVelocityTitle(velocity);

  return (
    <Container>
      <Arrow
        src={arrowIcon}
        direction={direction}
      />
      <Direction>{directionTitle}</Direction>
      <VelocityTitle>{velocityTitle}</VelocityTitle>
      <Velocity>{velocity.toFixed(0)} km/h</Velocity>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${theme.colors.lightSecondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  width: 100%;
`

const Arrow = styled.img<{ direction: number }>`
  height: 35px;
  transform: rotate(${props => props.direction}deg);
`

const Direction = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`

const Velocity = styled.span`
  font-size: 18px;
`

const VelocityTitle = styled.span`
  margin-bottom: 2px;
  font-size: 14px;
`