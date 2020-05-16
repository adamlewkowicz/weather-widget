import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import triangleIcon from '../assets/triangle.svg';

interface TriangleButtonProps extends ButtonHTMLAttributes<any>, DirectionProp {}

export const TriangleButton = (props: TriangleButtonProps) => (
  <Container {...props}>
    <Icon
      src={triangleIcon}
      direction={props.direction}
    />
  </Container>
);

const Container = styled.button`
  background-color: rgba(1,1,1,.15);
  border-radius: 50%;
  width: 95px;
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(1,1,1,.2);
  }
`

const Icon = styled.img<DirectionProp>`
  height: 20px;
  transform:
    rotate(${props => props.direction === 'right' ? '90' : '270'}deg)
    translateY(90%);
`

interface DirectionProp {
  direction: 'left' | 'right'
}