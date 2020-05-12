import React from 'react';
import styled from 'styled-components';
import arrowIcon from '../assets/arrow.svg';

interface WindDetailsProps {
  velocity: number
}

export const WindDetails = (props: WindDetailsProps) => {
  return (
    <Container>
      <Arrow src={arrowIcon} />
      <Direction>Południowy</Direction>
      <VelocityTitle>Słaby</VelocityTitle>
      <Velocity>{props.velocity.toFixed(0)} km/h</Velocity>
    </Container>
  );
}

const Container = styled.div`
  background-color: #F0F1F1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`

const Arrow = styled.img`
  height: 35px;
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