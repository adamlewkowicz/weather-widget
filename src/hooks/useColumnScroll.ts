import ScrollContainer from 'react-indiana-drag-scroll';

export const useColumnScroll = (
  ref: React.RefObject<ScrollContainer>,
  options: { columnWidth: number }
) => {

  const getScrollPosition = (): number | null => {
    const element = ref.current?.getElement();
    const scrollLeft = element?.scrollLeft;

    if (scrollLeft == null) {
      return null;
    }

    const position = Math.floor(scrollLeft / options.columnWidth);
    const nextScroll = position * options.columnWidth;

    return nextScroll;
  }

  const handleScrollBack = () => {
    const scrollPosition = getScrollPosition();

    if (!scrollPosition) {
      return;
    }
    
    const nextScroll = scrollPosition - options.columnWidth;

    ref.current?.getElement().scroll({
      left: nextScroll,
      behavior: 'smooth'
    });
  }

  const handleScrollNext = () => {
    const scrollPosition = getScrollPosition();

    if (!scrollPosition) {
      return;
    }

    const nextScroll = scrollPosition + options.columnWidth;

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