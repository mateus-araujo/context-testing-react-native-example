import React from "react";

const NameContext = React.createContext({
  name: null,
  saveName: (name: string) => {},
});

export const useName = () => React.useContext(NameContext);

export const NameProvider = ({ children }) => {
  const [name, saveName] = React.useState(null);

  return (
    <NameContext.Provider value={{ name, saveName }}>
      {children}
    </NameContext.Provider>
  );
};
