import { createContext, memo, useContext } from 'react';
import { isDeepStrictEqual } from 'util';

export const LocalMultiContext = createContext({});
LocalMultiContext.displayName = 'LocalMultiContext';

const LocalContextController = memo(
  ({ children, localContexts }: any) => {
    let contextsMap = {};
    localContexts.reduce(
      (localContext: any, index: number) =>
        (contextsMap = { ...contextsMap, ...useContext(localContext) }),
      {}
    );
    return (
      <LocalMultiContext.Provider value={contextsMap}>
        {children}
      </LocalMultiContext.Provider>
    );
  },
  (prevProps: any, nextProps: any) =>
    isDeepStrictEqual(prevProps.children, nextProps.children)
);

LocalContextController.displayName = 'MultiContextController';

export default LocalContextController;
