import React, { useContext } from "react";
import { FontContext } from "../contexts/FontContext";

const useFontContext = () => {
  return useContext(FontContext);
};

export default useFontContext;
