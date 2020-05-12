import React from 'react';
import styled from 'styled-components';
import triangleIcon from '../assets/triangle.svg';

interface TriangleButtonProps {
  onClick?: () => void
}

export const TriangleButton = (props: TriangleButtonProps) => {
  return (
    <Container onClick={props.onClick}>
      <Icon src={triangleIcon} />
    </Container>
  );
}

const Container = styled.div`
  background-color: rgba(1,1,1,.15);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Icon = styled.img`
  height: 24px;
  transform: rotate(90deg);
`