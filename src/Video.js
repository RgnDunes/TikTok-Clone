import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";

function Video() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.playing();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        ref={videoRef}
        onClick={onVideoPress}
        loop
        className="video__player"
        src="https://www.youtube.com/embed/GePLvNgWROg"
      />
      <VideoFooter />
    </div>
  );
}

export default Video;
