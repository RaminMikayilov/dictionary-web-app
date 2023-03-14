import React, { useEffect, useState } from "react";

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
      <div className="class_dark_mode">
        <div
          className={`bg-slate-100 min-h-screen dark:bg-gray-800 font-${font}`}
        >
          <div className="w-full md:w-2/3 xl:w-1/2 mx-auto px-5">
            <Navbar />
            <Searchbar />
            <Definition />
          </div>
        </div>
      </div>
    </DictionaryContextProvider>
  );
};

export default DictionaryApp;
