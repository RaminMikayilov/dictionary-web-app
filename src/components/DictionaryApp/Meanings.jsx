import { spread } from "axios";
import React from "react";

const Meanings = ({ partOfSpeech, definitions, synonyms, antonyms }) => {
  return (
    <div className="py-5 space-y-3">
      <div className="flex items-center gap-3">
        <h1 className="font-bold">{partOfSpeech}</h1>
        {/* line */}
        <div className="w-full h-px bg-custom-blue"></div>
      </div>

      {/* defintions */}
      <div>
        <h2 className="py-2 text-custom-gray text-md">Meaning</h2>
        <ul className="list-disc px-4 space-y-2">
          {definitions.map((item, index) => (
            <div key={index} className="py-1">
              <li>{item.definition}</li>
              <p className="text-custom-gray">{item.example}</p>
            </div>
          ))}
        </ul>
      </div>

      {/* Synonyms */}
      {synonyms.length !== 0 && (
        <div className="flex flex-wrap items-center text-custom-gray">
          <h3>Synonyms : </h3>

          {synonyms.map((item, index) => (
            <span
              key={index}
              className="bg-custom-blue text-white text-xs font-medium px-3 py-1 rounded-full m-1"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {/* Antonyms */}
      {antonyms.length !== 0 && (
        <div className="flex flex-wrap items-center text-custom-gray">
          <h3>Antonyms : </h3>
          {antonyms.map((item, index) => (
            <span
              key={index}
              className="bg-custom-blue text-white text-xs font-medium px-3 py-1 rounded-full m-1"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Meanings;
