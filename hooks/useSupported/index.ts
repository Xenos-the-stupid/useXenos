const useSupported = (callback: () => unknown) => {
  const isSupported = Boolean(callback());
  return isSupported;
};

export default useSupported;
