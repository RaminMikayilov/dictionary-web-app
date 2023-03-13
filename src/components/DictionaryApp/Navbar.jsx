import React from "react";

// icons
import { BiBook } from "react-icons/bi";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

//context
import useFontContext from "../../hooks/useFontContext";

const Navbar = () => {
  const { setFont } = useFontContext();

  return (
    <div className="flex items-center justify-between py-5">
      <BiBook className="w-8 h-8" color="gray" />

      <div className="flex space-x-4">
        <select
          className="border-2 outline-none"
          onChange={(e) => setFont(e.target.value)}
        >
          <option value="serif">Serif</option>
          <option value="sans">Sans</option>
          <option value="mono">Mono</option>
        </select>
        {/* line */}
        <div className="h-6 w-0.5 bg-custom-gray"></div>
        <MdOutlineDarkMode className="w-6 h-6" color="gray" />
      </div>
    </div>
  );
};

export default Navbar;
