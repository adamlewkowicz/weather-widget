import ScrollContainer from 'react-indiana-drag-scroll';
import { WEATHER_COLUMN_WIDTH } from '../common/consts';

export const useScroll = (ref: React.RefObject<ScrollContainer>) => {

  const handleScrollBack = () => {
    const element = ref.current?.getElement()
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
    const element = ref.current?.getElement();
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

  return {
    back: handleScrollBack,
    next: handleScrollNext,
  }
}