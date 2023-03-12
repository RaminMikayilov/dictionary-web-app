import React, { useContext } from "react";
import { DictionaryContext } from "../contexts/DictionaryContext";

const useDictionaryContext = () => {
  return useContext(DictionaryContext);
};

export default useDictionaryContext;
