import ScrollContainer from 'react-indiana-drag-scroll';

export const useColumnScroll = (
  ref: React.RefObject<ScrollContainer>,
  options: { columnWidth: number }
) => {

  const handleScrollBack = () => {
    const element = ref.current?.getElement();
    const scrollLeft = element?.scrollLeft;

    if (scrollLeft == null) {
      return;
    }

    const nextScroll = scrollLeft - options.columnWidth;

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

    const position = Math.floor(scrollLeft / options.columnWidth);
    const nextScroll = position * options.columnWidth + options.columnWidth;

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