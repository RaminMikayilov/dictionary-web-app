import { spread } from "axios";
import React from "react";

const Meanings = ({ partOfSpeech, definitions, synonyms, antonyms }) => {
  return (
    <div className="py-5 space-y-3">
      <div className="flex items-center gap-3">
        <h1 className="font-bold">{partOfSpeech}</h1>
        {/* line */}
        <div className="w-full h-px bg-blue-400"></div>
      </div>

      {/* defintions */}
      <div>
        <h2 className="py-2 text-slate-500 text-md">Meaning</h2>
        <ul className="list-disc px-4 space-y-2">
          {definitions.map((item, index) => (
            <div key={index} className="py-1">
              <li>{item.definition}</li>
              <p className="text-slate-500">{item.example}</p>
            </div>
          ))}
        </ul>
      </div>

      {/* Synonyms */}
      {synonyms.length !== 0 && (
        <div className="flex flex-wrap space-y-3 items-center">
          <h3>Synonyms : </h3>

          {synonyms.map((item,index) => (
            <span key={index} className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full mx-1">
              {item}
            </span>
          ))}
        </div>
      )}

      {/* Antonyms */}
      {antonyms.length !== 0 && (
        <div className="flex flex-wrap space-y-3 items-center">
          <h3>Antonyms : </h3>
          {antonyms.map((item,index) => (
            <span key={index} className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full mx-1">
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Meanings;
