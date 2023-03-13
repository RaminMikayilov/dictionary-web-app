import React from "react";
import DictionaryApp from "./components/DictionaryApp";

import { FontContextProvider } from "./contexts/FontContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeContextProvider>
      <FontContextProvider>
        <DictionaryApp />
      </FontContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
