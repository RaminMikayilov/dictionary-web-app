import React from "react";

// icons
import { BiBook } from "react-icons/bi";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5">
      <BiBook className="w-8 h-8" color="gray" />

      <div className="flex space-x-3">
        <select name="" id="" className="border-2 outline-none">
          <option value="">Serif</option>
          <option value="">Sans Serif</option>
          <option value="">Monospace</option>
        </select>
        <MdOutlineDarkMode className="w-6 h-6" color="gray" />
      </div>
    </div>
  );
};

export default Navbar;
