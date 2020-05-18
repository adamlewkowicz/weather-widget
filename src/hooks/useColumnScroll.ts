import ScrollContainer from 'react-indiana-drag-scroll';

export const useColumnScroll = (
  ref: React.RefObject<ScrollContainer>,
  options: { columnWidth: number }
) => {

  const getScrollPosition = (): number => {
    const scrollLeft = ref.current?.getElement().scrollLeft;

    if (scrollLeft == null) {
      return 0;
    }

    const indexPosition = Math.floor(scrollLeft / options.columnWidth);
    const scrollPosition = indexPosition * options.columnWidth;

    return scrollPosition;
  }

  const handleHorizontalScroll = (nextScroll: number): void => {
    ref.current?.getElement().scroll({
      left: nextScroll,
      behavior: 'smooth'
    });
  }

  const handleScrollBack = () => {
    const nextScroll = getScrollPosition() - options.columnWidth;

    handleHorizontalScroll(nextScroll);
  }

  const handleScrollNext = () => {
    const nextScroll = getScrollPosition() + options.columnWidth;

    handleHorizontalScroll(nextScroll);
  }

  return {
    back: handleScrollBack,
    next: handleScrollNext,
  }
}