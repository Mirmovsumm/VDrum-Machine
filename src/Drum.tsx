import React from "react";
import { AudioClip } from "./types";

interface DrumProps {
  audioClip: AudioClip;
}

const Drum: React.FC<DrumProps> = ({ audioClip }) => {
  const playSound = () => {
    (document.getElementById(audioClip.keyTrigger) as HTMLAudioElement)
      .play()
      .catch(console.error);
    document.getElementById("display")!.innerHTML = audioClip.description;
  };

  return (
    <button
      className="drum-pad"
      id={`drum-${audioClip.keyTrigger}`}
      onClick={playSound}
    >
      <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
      {audioClip.keyTrigger}
    </button>
  );
};

export default Drum;
