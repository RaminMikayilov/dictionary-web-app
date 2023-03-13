import axios from "axios";
import React, { useEffect, useState } from "react";
import Word from "./Word";
import Meanings from "./Meanings";
import Loading from "./Loading";
import Error from "./Error";

// API
const API = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

//context
import useDictionaryContext from "../../hooks/useDictionaryContext";
import Source from "./Source";

const Definition = () => {
  const { word } = useDictionaryContext();
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async (value) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}${value}`);
      setData(response.data);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (word.length) {
      getData(word);
    }
  }, [word]);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }

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
