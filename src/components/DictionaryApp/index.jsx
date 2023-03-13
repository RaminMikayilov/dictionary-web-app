import React, { useEffect } from "react";

//components
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Definition from "./Definition";

import { DictionaryContextProvider } from "../../contexts/DictionaryContext";

import useFontContext from "../../hooks/useFontContext";
import useThemeContext from "../../hooks/useThemeContext";

const DictionaryApp = () => {
  const { font } = useFontContext();

  return (
    <DictionaryContextProvider>
      <div className={`font-${font} bg-slate-100 h-min-screen dark:bg-gray-800`}>
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
