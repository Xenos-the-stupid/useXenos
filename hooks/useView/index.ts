import useElementBounding from "../useElementBounding";

const useView = (ref: React.RefObject<HTMLElement>) => {
  const { top, left, bottom, right } = useElementBounding(ref);

  return (
    top >= 0 &&
    left >= 0 &&
    bottom <= (window.innerHeight! || document.documentElement.clientHeight) &&
    right <= (window.innerWidth! || document.documentElement.clientWidth)
  );
};

export default useView;
