import { createContext, ReactNode, useState } from 'react';

interface WindowContextProps {
  children: ReactNode | ReactNode[];
}

const inititialStateWindowContext = {
  openedWindowsCount: 0,
};

export const WindowContext = createContext(inititialStateWindowContext);

const WindowContextProvider = ({ children }: WindowContextProps) => {
  const [openedWindowsCount, setOpenedWindowsCount] = useState(0);

  return (
    <WindowContext.Provider value={{ openedWindowsCount }}>
      {children}
    </WindowContext.Provider>
  );
};

export default WindowContextProvider;
