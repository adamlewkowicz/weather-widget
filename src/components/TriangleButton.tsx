import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import triangleIcon from '../assets/triangle.svg';

interface TriangleButtonProps extends ButtonHTMLAttributes<any> {
  toLeft?: boolean
}

export const TriangleButton = (props: TriangleButtonProps) => {
  return (
    <Container {...props} left={props.toLeft}>
      <Icon src={triangleIcon} left={props.toLeft} />
    </Container>
  );
}

const Container = styled.button<{ left?: boolean }>`
  background-color: rgba(1,1,1,.15);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: none;
  outline: none;
  cursor: pointer;
  transform: translateX(-50%);
  &:hover {
    background-color: rgba(1,1,1,.2);
  }
`

const Icon = styled.img<{ left?: boolean }>`
  height: 24px;
  transform: ${props => props.left ?
    'rotate(270deg) translateY(-50%)' :
    'rotate(90deg) translateY(-50%)'
  };
`