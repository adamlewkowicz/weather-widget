import React, { ReactNode, useRef } from 'react';
import styled from 'styled-components';
import { TriangleButton } from './TriangleButton';
import { WEATHER_COLUMN_WIDTH } from '../common/consts';
import ScrollContainer from 'react-indiana-drag-scroll';
interface TheatreProps {
  children?: ReactNode
}

export const Theatre = (props: TheatreProps) => {
  const containerRef = useRef<ScrollContainer>(null);

  const handleScrollBack = () => {
    const element = containerRef.current?.getElement()
    const scrollLeft = element?.scrollLeft;

    if (scrollLeft == null) {
      return;
    }

    const nextScroll = scrollLeft - WEATHER_COLUMN_WIDTH;

    element?.scroll({
      left: nextScroll,
      behavior: 'smooth'
    });
  }

  const handleScrollNext = () => {
    const element = containerRef.current?.getElement()
    const scrollLeft = element?.scrollLeft;

    if (scrollLeft == null) {
      return;
    }

    const position = Math.floor(scrollLeft / WEATHER_COLUMN_WIDTH);
    const nextScroll = position * WEATHER_COLUMN_WIDTH + WEATHER_COLUMN_WIDTH;

    element?.scroll({
      left: nextScroll,
      behavior: 'smooth'
    });
  }

  return (
    <ScrollContainer ref={containerRef}>
      <PrevButton onClick={handleScrollBack} />
      {props.children}
      <NextButton onClick={handleScrollNext} toLeft />
    </ScrollContainer>
  );
}

const Container = styled.div`
  overflow-x: scroll;
  /* box-shadow:
    inset 20px -20px 30px #adadad,
    inset -20px -20px 30px #fff; */
  overflow: hidden;
  position: relative;
  resize: both;

  [draggable=true] {
    cursor: move;
  }
`

const FloatingButton = styled(TriangleButton)`
  position: fixed;
  top: 50%;
  /* transform: translateY(-50%); */
`

const PrevButton = styled(FloatingButton)``

const NextButton = styled(FloatingButton)`
  right: 0;
`