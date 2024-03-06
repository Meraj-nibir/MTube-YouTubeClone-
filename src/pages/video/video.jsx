import React from "react";
import VideoPlay from "../../components/videoPlay/videoPlay";  
import './video.css';
import Recommended from "../../components/recommended/recommended";
import { useParams } from "react-router-dom";


const Video=()=>{

  const{videoId,categoryId} = useParams();

  return(
    <div className="play-container">
      <VideoPlay videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  );
}

export default Video;