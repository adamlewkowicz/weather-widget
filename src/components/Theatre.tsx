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
      <Wrapper ref={containerRef}>
        <PrevButton onClick={scroll.back} />
        {props.children}
        <NextButton onClick={scroll.next} toLeft />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
`

const Wrapper = styled(ScrollContainer)`
  position: relative;

  &:before {
    content: "";
    position: fixed;
    width: 100%;
    height: 100%;
    background:
    linear-gradient(to right, rgba(1,1,1,.1), transparent 2.5%);
  }

  &:after {
    content: "";
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background:
    linear-gradient(to left, #fff, transparent 10%);
  }
`

const FloatingButton = styled(TriangleButton)`
  position: fixed;
  top: 50%;
  z-index: 10;
`

const PrevButton = styled(FloatingButton)`
  transform: translateX(-50%);
`

const NextButton = styled(FloatingButton)`
  right: 0;
  transform: translateX(50%);
`