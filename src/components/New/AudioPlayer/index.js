import React, { useState, useRef } from "react";
import aud from "../../../audioPlear/mp.mp3";
import { SlControlPause, SlPlaylist } from "react-icons/sl";
import "./index.scss";
const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="container">
      <div className="audio-player">
        <audio ref={audioRef} preload="auto">
          <source src={aud} type="audio/mpeg" />
        </audio>
        <button onClick={toggleAudio}>
          {isPlaying ? <SlControlPause /> : <SlPlaylist />}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
