import React from "react";
import Sound from "react-sound";

const SuccessSound = () => {
  return (
    <Sound
      url={process.env.PUBLIC_URL + "/success.mp3"}
      playStatus={Sound.status.PLAYING}
    />
  );
};

export default SuccessSound;
