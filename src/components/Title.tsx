import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../common/theme';

interface TitleProps {
  children?: ReactNode
  height?: number
}

export const Title = (props: TitleProps) => (
  <Container height={props.height}>
    <Text>
      {props.children}
    </Text>
  </Container>
);

const Container = styled.li<{
  height?: number
}>`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height ? `${props.height - 1}px` : 'auto'};
  border-bottom: 1px solid ${theme.colors.grayTertiary};
  padding: 0 15px;
  &:last-child {
    border-bottom: none;
  }
`

const Text = styled.span`
  color: ${theme.colors.grayPrimary};
  font-size: 17px;
  text-align: center;
`