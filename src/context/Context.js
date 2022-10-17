import React, { useState } from 'react';

const GlobalContext = React.createContext();
const Context = ({ children }) => {
  const [active, setActive] = useState('home')

  return (
    <>
      <GlobalContext.Provider value={{ active, setActive }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export { Context, GlobalContext };
