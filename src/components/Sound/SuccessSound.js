import React from "react";
import Sound from "react-sound";

export default class SuccessSound extends React.Component {
  render() {
    return (
      <Sound
        url="https://docs.google.com/uc?export=download&id=1D5pZJvEsMifDGfT8B5cbxrRAhzGIizA3"
        playStatus={Sound.status.PLAYING}
      />
    );
  }
}
