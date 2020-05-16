import React from 'react';
import styled from 'styled-components';
import { theme } from '../common/theme';

interface DayTitleProps {
  hour: number
}

export const DayTitle = (props: DayTitleProps) => {
  const isNextDay = props.hour === 0;
  
  if (isNextDay) {
    return (
      <Day>Jutro</Day>
    );
  }

  return null;
}

const Day = styled.span`
  text-transform: uppercase;
  font-weight: 500;
  color: ${theme.colors.graySecondary};
  margin-bottom: 5px;
`