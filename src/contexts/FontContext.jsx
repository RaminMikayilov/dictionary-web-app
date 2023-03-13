import React, { createContext, useState } from "react";

export const FontContext = createContext();

const FontContextProvider = ({ children }) => {
  const [font, setFont] = useState("serif");

  const value = { font, setFont };

  return <FontContext.Provider value={value}>{children}</FontContext.Provider>;
};

export { FontContextProvider };
