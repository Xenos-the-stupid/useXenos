import useElementBounding from "./useElementBounding";

const useElementSize = (
  ref: React.RefObject<HTMLElement>
): {
  width: number;
  height: number;
} => {
  const { width, height } = useElementBounding(ref);

  return { width, height };
};

export default useElementSize;
