import React, { ReactNode, useRef } from 'react';
import styled from 'styled-components';
import { TriangleButton } from './TriangleButton';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useColumnScroll } from '../hooks/useColumnScroll';
import { WEATHER_COLUMN_WIDTH } from '../common/consts';
interface TheatreProps {
  children?: ReactNode
}

export const Theatre = (props: TheatreProps) => {
  const containerRef = useRef<ScrollContainer>(null);
  const scroll = useColumnScroll(containerRef, { columnWidth: WEATHER_COLUMN_WIDTH });

  return (
    <Container>
      <PrevButton
        onClick={scroll.back}
        direction="left"
      />
      <Content ref={containerRef}>
        {props.children}
      </Content>
      <NextButton
        onClick={scroll.next}
        direction="right" 
      />
    </Container>
  );
}

const Content = styled(ScrollContainer)``

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-bottom: 1px solid #EEEEEE;

  &:before {
    content: "";
    position: absolute;
    background: linear-gradient(to right, rgba(1,1,1,.08), transparent 50%);
    width: 100px;
    height: 100%;
  }

  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(to left, #fff, transparent 100%);
  }
  
`

const FloatingButton = styled(TriangleButton)`
  position: absolute;
  top: 50%;
  z-index: 10;
`

const PrevButton = styled(FloatingButton)`
  transform: translateX(-50%) translateY(-50%);
`

const NextButton = styled(FloatingButton)`
  right: 0;
  transform: translateX(50%) translateY(-50%);
`