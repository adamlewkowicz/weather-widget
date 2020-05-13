import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface TitleProps {
  children?: ReactNode
  height?: number
}

export const Title = (props: TitleProps) => {
  return (
    <Container height={props.height}>
      <Text>
        {props.children}
      </Text>
    </Container>
  );
}

const Container = styled.li<{
  height?: number
}>`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height}px;
  border-bottom: 1px solid #EEEEEE;
`

const Text = styled.span`
  color: #9C9C9C;
  font-size: 18px;
  text-align: center;
`