import axios from "axios";
import React, { useEffect, useState } from "react";

//play button
import { BsPlayCircleFill } from "react-icons/bs";

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
      console.log(response.data);
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
      <h1>{word}</h1>
      {data.map((item, index) => {
        const { phonetic, phonetics } = item;
        return (
          <div key={index}>
            <p>{phonetic}</p>
            <p>{phonetics.map((sound) => sound.audio !== "" && sound.audio)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Definition;
