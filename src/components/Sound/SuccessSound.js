import React from "react";
import Sound from "react-sound";

export default class SuccessSound extends React.Component {
  render() {
    return (
      <Sound
        url={process.env.PUBLIC_URL + "/success.mp3"}
        playStatus={Sound.status.PLAYING}
      />
    );
  }
}
