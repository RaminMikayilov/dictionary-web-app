import React from "react";

//play button
import playIcon from "../../assets/circle-play-solid.svg";

const Word = ({ word, phonetic, audio }) => {
  const playAudio = (e) => {
    const audio = new Audio();
    audio.src = e.target.getAttribute(`url`);
    audio.play();
  };

  return (
    <div className="flex justify-between items-center p-2">
      <div>
        <h1 className="text-3xl font-bold">{word}</h1>
        <p className="text-blue-600 text-md">{phonetic}</p>
      </div>

      <div>
        {audio && (
          <img
            src={playIcon}
            alt="play-icon"
            url={audio}
            onClick={playAudio}
            className="h-10 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Word;
