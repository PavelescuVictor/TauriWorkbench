import { createContext } from 'react';
import WindowContextProvider from './WindowContext/WindowContext';
import FocusContextProvider from './FocusContext/FocusContext';

const contextTypes = {
  FOCUS: 'FOCUS',
  WINDOW: 'WINDOW',
};

const GlobalContextController = ({ children }: any) => {
  return (
    <WindowContextProvider>
      <FocusContextProvider>{children}</FocusContextProvider>
    </WindowContextProvider>
  );
};

export default GlobalContextController;
