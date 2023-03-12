import React, { createContext, useContext, useState } from "react";

export const DictionaryContext = createContext();

const DictionaryContextProvider = ({ children }) => {
  const [word, setWord] = useState("");

  const value = { word, setWord };

  return (
    <DictionaryContext.Provider value={value}>
      {children}
    </DictionaryContext.Provider>
  );
};

export { DictionaryContextProvider };
