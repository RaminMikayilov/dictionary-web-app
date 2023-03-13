import React from "react";
import DictionaryApp from "./components/DictionaryApp";

import { FontContextProvider } from "./contexts/FontContext";

const App = () => {
  return (
    <FontContextProvider>
      <DictionaryApp />
    </FontContextProvider>
  );
};

export default App;
