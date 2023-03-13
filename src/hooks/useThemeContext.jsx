import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default useThemeContext;
