import ScrollContainer from 'react-indiana-drag-scroll';

export const useColumnScroll = (
  ref: React.RefObject<ScrollContainer>,
  options: { columnWidth: number }
) => {

  const getScrollPosition = (): number => {
    const element = ref.current?.getElement();
    const scrollLeft = element?.scrollLeft;

    if (scrollLeft == null) {
      return 0;
    }

    const position = Math.floor(scrollLeft / options.columnWidth);
    const nextScroll = position * options.columnWidth;

    return nextScroll;
  }

  const handleScrollBack = () => {
    const nextScroll = getScrollPosition() - options.columnWidth;

    ref.current?.getElement().scroll({
      left: nextScroll,
      behavior: 'smooth'
    });
  }

  const handleScrollNext = () => {
    const nextScroll = getScrollPosition() + options.columnWidth;

    ref.current?.getElement().scroll({
      left: nextScroll,
      behavior: 'smooth'
    });
  }

  return {
    back: handleScrollBack,
    next: handleScrollNext,
  }
}