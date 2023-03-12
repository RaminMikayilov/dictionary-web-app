import React, { useContext } from "react";

//components
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Definition from "./Definition";

import { DictionaryContextProvider } from "../../contexts/DictionaryContext";
const DictionaryApp = () => {
  return (
    <DictionaryContextProvider>
      <div className="w-3/5 mx-auto">
        <Navbar />
        <Searchbar />
        <Definition />
      </div>
    </DictionaryContextProvider>
  );
};

export default DictionaryApp;
