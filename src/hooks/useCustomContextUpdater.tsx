import { useContext } from 'react';

const useCustomContextUpdater = (contextState: any) => {
  const context = useContext(contextState);

  if (context === undefined) {
    throw new Error('useWindowContextUpdater was used outside of its Provider');
  }

  return context;
};

export default useCustomContextUpdater;
