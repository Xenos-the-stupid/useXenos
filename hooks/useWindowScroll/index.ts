type useScrollBehaviorOptions = { behavior?: ScrollBehavior };

const useWindowScroll = (options: useScrollBehaviorOptions = {}) => {
  const setScrollX = (value: number) => {
    window.scrollX += value;
    window.scrollTo({ left: value, behavior: options.behavior });
  };
  const setScrollY = (value: number) => {
    window.scrollY += value;
    window.scrollTo({ top: value, behavior: options.behavior });
  };
  return { setScrollX, setScrollY };
};

export default useWindowScroll;
