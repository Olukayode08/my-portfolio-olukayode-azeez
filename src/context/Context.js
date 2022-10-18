import React from 'react';

const GlobalContext = React.createContext();
const Context = ({ children }) => {

  return (
    <>
      <GlobalContext.Provider value={{}}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export { Context, GlobalContext };
