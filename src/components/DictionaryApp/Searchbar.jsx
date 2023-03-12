import React, { useState } from "react";

//search icon
import { BsSearch } from "react-icons/bs";

//context
import useDictionaryContext from "../../hooks/useDictionaryContext";

const Searchbar = () => {
  const { setWord } = useDictionaryContext();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() == "") return;
    setWord(inputValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between bg-slate-200 py-2 px-3 rounded-lg mx-2 my-3"
    >
      <input
        type="text"
        placeholder=""
        className="bg-transparent text-black text-sm font-medium focus:outline-none w-full"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="py-1 px-1">
        <BsSearch />
      </button>
    </form>
  );
};

export default Searchbar;
