import useElementSize from "./useElementSize";
import useView from "./useView";

const useElementBounding = (ref: React.RefObject<HTMLElement>) => {
  const { top, left, bottom, height, right, x, y, width } = ref.current?.getBoundingClientRect() || { top: 0, left: 0 };
  return { height, bottom, right, x, y, top, left, width };
};

export default useElementBounding;
