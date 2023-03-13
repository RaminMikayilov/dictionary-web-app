import axios from "axios";
import React, { useEffect, useState } from "react";
import Word from "./Word";
import Meanings from "./Meanings";

// API
const API = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

//context
import useDictionaryContext from "../../hooks/useDictionaryContext";

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
    <div>
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
      )}{" "}
    </div>
  );
};

export default Definition;
