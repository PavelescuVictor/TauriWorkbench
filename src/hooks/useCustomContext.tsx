import { useContext } from 'react';

const useCustomContextState = (contextState: any) => {
  const context = useContext(contextState);

  if (context === undefined) {
    throw new Error('useWindowContextState was used outside of its Provider');
  }

  return context;
};

export default useCustomContextState;
