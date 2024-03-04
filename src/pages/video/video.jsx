import React from "react";
import VideoPlay from "../../components/videoPlay/videoPlay";  
import './video.css';
import Recommended from "../../components/recommended/recommended";
const Video=()=>{
  return(
    <div className="play-container">
      <VideoPlay/>
      <Recommended/>
    </div>
  );
}

export default Video;