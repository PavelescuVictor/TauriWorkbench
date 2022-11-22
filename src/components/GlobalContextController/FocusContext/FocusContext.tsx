import React, { createContext, ReactNode, useState } from 'react';

interface FocusContextProps {
  children: ReactNode | ReactNode[];
}

const initialStateFocusContext = {
  focusedWindowId: null,
};

export const FocusContext = createContext(initialStateFocusContext);

const FocusContextProvider = ({ children }: FocusContextProps) => {
  const [focusedWindowId, setFocusedWindowId] = useState(null);

  return (
    <FocusContext.Provider value={{ focusedWindowId }}>
      {children}
    </FocusContext.Provider>
  );
};

export default FocusContextProvider;
