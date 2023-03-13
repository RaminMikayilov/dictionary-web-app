import axios from "axios";
import React, { useEffect, useState } from "react";
import Word from "./Word";
import Meanings from "./Meanings";

// API
const API = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

//context
import useDictionaryContext from "../../hooks/useDictionaryContext";
import Source from "./Source";

const Definition = () => {
  const { word } = useDictionaryContext();
  const [data, setData] = useState([]);

  const getData = async (value) => {
    try {
      const response = await axios.get(`${API}${value}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (word.length) {
      getData(word);
    }
  }, [word]);

  return (
    <div className="dark:text-custom-white">
      <Word
        word={data.map((item) => item.word)[0]}
        phonetic={data.map((item) => item.phonetic)[0]}
        audio={
          data
            .filter((item) => item.phonetics.length)
            .map(
              (item) =>
                item.phonetics
                  .map((item) => item.audio)
                  .filter((item) => item !== "")[0]
            )[0]
        }
      />
      {data.map((item) =>
        item.meanings.map((item, index) => (
          <Meanings
            key={index}
            partOfSpeech={item.partOfSpeech}
            definitions={item.definitions}
            synonyms={item.synonyms}
            antonyms={item.antonyms}
          />
        ))
      )}

      <Source url={data.map((item) => item.sourceUrls)[0]} />
    </div>
  );
};

export default Definition;
