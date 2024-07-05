type useScrollBehaviorOptions = { behavior?: ScrollBehavior };

const useWindowScroll = (options: useScrollBehaviorOptions = {}) => {
  const scroll = (_direction: "left" | "top", value: number) => {
    window[_direction === "left" ? "scrollX" : "scrollY"] += value;
    window.scrollTo({ [_direction]: value, behavior: options.behavior });
  };

  return { setScrollX: (value: number) => scroll("left", value), setScrollY: (value: number) => scroll("top", value) };
};

export default useWindowScroll;
