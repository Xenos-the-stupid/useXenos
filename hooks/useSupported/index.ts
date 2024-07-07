const useSupported = (callback: () => unknown) => {
  return Boolean(callback());
};

export default useSupported;
