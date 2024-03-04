import React from "react";
import animatedCar from '../../assets/Video/car.mp4';
import share from '../../assets/Icons/share.png';
import like from '../../assets/Icons/like.png';
import dislike from '../../assets/Icons/dislike.png';
import download from '../../assets/Icons/download.png';
import profile_icon from '../../assets/Icons/profile.png';
import riolu from "../../assets/Images/riolu.png";
import './videoPlay.css';
const VideoPlay=()=>{
  return(
    <div className="play-video">
       <video src={animatedCar} controls autoPlay muted></video>
       <h3>Animated car</h3>
       <div className="play-video-info">
          <p>
            1456 views &bull; 2 days ago
          </p>
          <div>
            <span><img src={like} alt="Like" />1212</span>
            <span><img src={dislike} alt="Dislike" />12</span>
            <span><img src={download} alt="Download" />Save</span>
            <span><img src={share} alt="Share" />Share</span>
          </div>
       </div>
       <hr />
       <div className="publisher">
        <img src={riolu} alt="Riolu" />
        <div>
          <p>Riolu</p>
          <span>85K Subscribers</span>
        </div>
        <button>Subscribe</button>
       </div>
       <div className="video-description">
          <p>Animated car</p>
          <p>Subscribe Riolu to Watch More Animated Videos</p>
          <hr />
          <h4>130 Comments</h4>
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