import React, { useEffect, useState } from "react";
import animatedCar from '../../assets/Video/car.mp4';
import share from '../../assets/Icons/share.png';
import like from '../../assets/Icons/like.png';
import dislike from '../../assets/Icons/dislike.png';
import download from '../../assets/Icons/download.png';
import profile_icon from '../../assets/Icons/profile.png';
import riolu from "../../assets/Images/riolu.png";
import './videoPlay.css';
import { API_KEY, value_converter } from "../../data";
import moment from "moment";
const VideoPlay=({videoId})=>{

  const [apiData,setApiData] = useState(null);

  const fetchVideoData = async()=>{
    const videoDtails_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDtails_url).then(res=>res.json()).then(data =>setApiData(data.items[0]));
  }

  useEffect(()=>{
    fetchVideoData()
  },[]);

  return(
    <div className="play-video">
       {/*<video src={animatedCar} controls autoPlay muted></video>*/}
       <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <h3>{apiData?apiData.snippet.title:"title here"}</h3>
       <div className="play-video-info">
          <p>
            {apiData?value_converter(apiData.statistics.viewCount):"16K"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}
          </p>
          <div>
            <span><img src={like} alt="Like" />{apiData?value_converter(apiData.statistics.likeCount):155}</span>
            <span><img src={dislike} alt="Dislike" /></span>
            <span><img src={download} alt="Download" />Save</span>
            <span><img src={share} alt="Share" />Share</span>
          </div>
       </div>
       <hr />
       <div className="publisher">
        <img src={riolu} alt="Riolu" />
        <div>
          <p>{apiData?apiData.snippet.channelTitle:""}</p>
          <span>85K Subscribers</span>
        </div>
        <button>Subscribe</button>
       </div>
       <div className="video-description">
          <p>{apiData?apiData.snippet.description.slice(0,600):"Description"}</p>
          <hr />
          <h4>{apiData?value_converter(apiData.statistics.commentCount):111} Comments</h4>
          <div className="comment">
            <img src={profile_icon} alt="Profile Icon" />
            <div>
              <h3>Heracross <span>1 day ago</span></h3>
              <p>It's a great animated video</p>
              <div className="comment-action">
                <img src={like} alt="Like" /><span>1212</span>
                <img src={dislike} alt="Dislike" /><span>12</span>
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={profile_icon} alt="Profile Icon" />
            <div>
              <h3>Heracross <span>1 day ago</span></h3>
              <p>It's a great animated video</p>
              <div className="comment-action">
                <img src={like} alt="Like" /><span>1212</span>
                <img src={dislike} alt="Dislike" /><span>12</span>
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={profile_icon} alt="Profile Icon" />
            <div>
              <h3>Heracross <span>1 day ago</span></h3>
              <p>It's a great animated video</p>
              <div className="comment-action">
                <img src={like} alt="Like" /><span>1212</span>
                <img src={dislike} alt="Dislike" /><span>12</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default VideoPlay;