import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { TriangleButton } from './TriangleButton';

interface TheatreProps {
  children?: ReactNode
}

export const Theatre = (props: TheatreProps) => {
  return (
    <Container>
      <TriangleButton />
      {props.children}
    </Container>
  );
}

const Container = styled.div`
  box-shadow:
    inset 20px -20px 30px #adadad,
    inset -20px -20px 30px #fff;
`