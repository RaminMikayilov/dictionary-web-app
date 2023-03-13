import React from "react";

//components
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Definition from "./Definition";

import { DictionaryContextProvider } from "../../contexts/DictionaryContext";

import useFontContext from "../../hooks/useFontContext";

const DictionaryApp = () => {
  const { font } = useFontContext();

  return (
    <DictionaryContextProvider>
      <div className={`font-${font}`}>
        <div className="w-3/5 mx-auto">
          <Navbar />
          <Searchbar />
          <Definition />
        </div>
      </div>
    </DictionaryContextProvider>
  );
};

export default DictionaryApp;
